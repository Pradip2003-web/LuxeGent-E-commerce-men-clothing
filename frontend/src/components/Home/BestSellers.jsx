import { Container, Card, Button, Badge } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import tshirtsImg from '../../assets/images/tshirt-1.jpg';
import shirtsImg from '../../assets/images/shirt-1.webp';
import jeansImg from '../../assets/images/jeans-1.webp';
import shirtImg from '../../assets/images/shirt.jpg';
import jacketsImg from '../../assets/images/jacket-1.webp';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      title: 'Denim Jeans',
      category: 'Jeans',
      price: '₹1000.00',
      image: jeansImg,
    },
    {
      id: 2,
      title: 'Classic T-shirt',
      category: 'T-Shirt',
      price: '₹500.00',
      image: tshirtsImg,
    },
    {
      id: 3,
      title: 'Premium Shirt',
      category: 'Shirt',
      price: '₹750.00',
      image: shirtsImg,
    },
    {
      id: 4,
      title: 'Classic Jacket',
      category: 'Jacket',
      price: '₹1500.00',
      image: jacketsImg,
    },
    {
      id: 5,
      title: 'Premium Shirt',
      category: 'Shirt',
      price: '₹600.00',
      image: shirtImg,
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
      
        <div className="text-center mb-5">
          <span className="text-uppercase text-secondary fw-semibold">
            Trending Products
          </span>

          <h2 className="display-5 fw-bold mt-2">Best Sellers</h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card className="border-0 shadow-sm h-100 overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{
                      height: '350px',
                      objectFit: 'cover',
                    }}
                  />

                  <Badge
                    bg="dark"
                    className="position-absolute top-0 start-0 m-3"
                  >
                    {product.category}
                  </Badge>
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold text-truncate">
                    {product.title}
                  </Card.Title>

                  <Card.Text className="text-muted fs-5 fw-semibold">
                    {product.price}
                  </Card.Text>

                    <Link to='/cart'>
                  <Button variant="dark" className="w-100 rounded-pill">
                    <i className="bi bi-cart-plus me-2"></i>
                    Add To Cart
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default BestSellers;
