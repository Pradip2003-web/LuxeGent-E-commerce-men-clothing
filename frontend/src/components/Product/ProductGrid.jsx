/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

const ITEMS_PER_PAGE = 2;
function ProductGrid() {
  const products = useSelector((state) => state.shops.products);
  const filters = useSelector((state) => state.filters);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // if (filters.search) {
    //   result = result.filter((product) =>
    //     product.name.toLowerCase().includes(filters.search.toLowerCase()),
    //   );
    // }
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase().trim();

      result = result.filter((product) => {
        const categoryMatch =
          product &&
          product.category &&
          product.category.toLowerCase().includes(query);
        const nameMatch =
          product && product.name && product.name.toLowerCase().includes(query);

        return categoryMatch || nameMatch;
      });
    }
    if (filters.category.length > 0) {
      result = result.filter((product) =>
        filters.category.includes(product.category),
      );
    }

    if (filters.size.length > 0) {
      result = result.filter((product) =>
        product.sizes?.some((size) => filters.size.includes(size)),
      );
    }

    if (filters.color.length > 0) {
      result = result.filter((product) =>
        filters.color.includes(product.color),
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((product) =>
        filters.brand.includes(product.brand),
      );
    }

    result = result.filter((product) => product.price <= filters.maxPrice);

    switch (filters.sort) {
      case "Price Low-High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price High-Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Popular":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [products, filters]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;

  const currentProducts = useMemo(() => {
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [filteredProducts, indexOfFirstProduct, indexOfLastProduct]);

  return (
    <Container className="py-2 px-0">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold m-0">{filteredProducts.length} Products</h5>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-5 my-5">
          <i className="bi bi-search text-muted fs-1 mb-3 d-block"></i>
          <h3 className="fw-semibold">No Products Found</h3>
          <p className="text-muted">
            Try changing your filters or search terms.
          </p>
        </div>
      ) : (
        <>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {currentProducts.map((product) => (
              <Col key={product.id} className="d-flex justify-content-center">
                <ProductCard
                  product={product}
                  onQuickView={setSelectedProduct}
                />
              </Col>
            ))}
          </Row>
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination>
                <Pagination.Prev
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                />
              </Pagination>
            </div>
          )}
        </>
      )}

      <QuickViewModal
        key={selectedProduct?.id ?? "none"}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Container>
  );
}

export default ProductGrid;
