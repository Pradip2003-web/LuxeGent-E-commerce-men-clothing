import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Home/Navbar';
import SidebarFilters from '../components/Product/SidebarFilters';
import SearchBar from '../components/Product/SearchBar';
import SortDropdown from '../components/Product/SortDropdown';
import ProductGrid from '../components/Product/ProductGrid';
import Footer from '../components/Home/Footer';

const Product = () => {
  const products = useSelector((state) => state.shops.products);
  const filters = useSelector((state) => state.filters);

  const { filteredProducts, currentProducts } = useMemo(() => {
    if (!products)
      return { filteredProducts: [], currentProducts: [], totalPages: 0 };

    let result = [...products];

    if (filters.search && filters.search.trim() !== '') {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    if (filters.category.length > 0) {
      result = result.filter((product) =>
        filters.category.includes(product.category),
      );
    }
    if (filters.size.length > 0) {
      result = result.filter((product) =>
        product.sizes.some((size) => filters.size.includes(size)),
      );
    }
    if (filters.color.length > 0) {
      result = result.filter((product) =>
        product.color.some((color) => filters.color.includes(color)),
      );
    }

    if (filters.size.length > 0) {
      result = result.filter((product) =>
        product.sizes.includes((size) => filters.size.includes(size)),
      );
    }

    const min = filters.minPrice !== undefined ? filters.minPrice : 0;
    const max = filters.maxPrice !== undefined ? filters.maxPrice : 5000;
    result = result.filter(
      (product) => product.price >= min && product.price <= max,
    );

    switch (filters.sort) {
      case 'Price Low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price High':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Highest Rated':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'Newest':
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }
    const perPage = 8;
    const currentPage = filters.currentPage || 1;
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    return {
      filteredProducts: result,
      currentProducts: result.slice(start, end),
      totalPages: Math.ceil(result.length / perPage),
    };
  }, [products, filters]);

  return (
    <>
      <Navbar />

      <section className="py-5 bg-light min-vh-100">
        <div className="container">
          <div className="mb-4">
            <SearchBar />
          </div>

          <div className="row">
            <div className="col-lg-3 mb-4">
              <SidebarFilters />
            </div>

            <div className="col-lg-9">
              <SortDropdown totalProducts={filteredProducts.length} />

              <ProductGrid
                products={currentProducts}
                totalCount={filteredProducts.length}
              />

           
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;
