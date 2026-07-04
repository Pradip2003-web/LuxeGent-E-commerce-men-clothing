import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Product-Detail/Navbar';
import ProductGallery from '../components/Product-Detail/ProductGallery';
import ProductInfo from '../components/product-Detail/ProductInfo';
import DeliveryInfo from '../components/product-Detail/DeliveryInfo';
import SizeGuide from '../components/product-Detail/SizeGuide';
import RelatedProduct from '../components/product-Detail/RelatedProduct';
import RecentlyViewed from '../components/product-Detail/RecentlyViewed';
import MobileSticky from '../components/product-Detail/MobileSticky';
import Footer from '../components/Home/Footer';

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <div className="sticky-top" style={{ top: '90px' }}>
                <ProductGallery />
              </div>
            </Col>

            <Col lg={6}>
              <ProductInfo />

              <div className="mt-4">
                <DeliveryInfo />
              </div>
            </Col>
          </Row>

          <div className="mt-5">
            <SizeGuide />
          </div>

          <div className="mt-5">
            <RelatedProduct />
          </div>

          <div className="mt-5 mb-5">
            <RecentlyViewed />
          </div>
        </Container>
      </section>

      <MobileSticky />
      <Footer />
    </>
  );
};

export default ProductDetail;
