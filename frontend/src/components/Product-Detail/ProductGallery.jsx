import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentImage } from '../../features/ProductDetailSlice';

import {
  Row,
  Col,
  Modal,
  Card,
  Image,
  Button,
  Stack,
  Carousel,
} from 'react-bootstrap';

import { ArrowsFullscreen, ZoomIn } from 'react-bootstrap-icons';

function ProductGallery() {
  const dispatch = useDispatch();

  const images = useMemo(
    () => [
      {
        id: 1,
        label: 'Front View',
        src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      },
      {
        id: 2,
        label: 'Back View',
        src: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
      },
      {
        id: 3,
        label: 'Side View',
        src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800',
      },
      {
        id: 4,
        label: 'Fabric Detail',
        src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800',
      },
      {
        id: 5,
        label: 'Lifestyle',
        src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
      },
    ],
    [],
  );

  const activeImage =
    useSelector((state) => state.productdetail.currentImage) || 0;

  const [showModal, setShowModal] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState('center');

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleSelect = (selectedIndex) => {
    dispatch(setCurrentImage(selectedIndex));
  };

  return (
    <>
      <Row className="g-4">
        <Col xs={2}>
          <Stack gap={3}>
            {images.map((image, index) => (
              <Card
                key={image.id}
                className={`overflow-hidden border ${
                  activeImage === index
                    ? 'border-dark border-2'
                    : 'border-light'
                } shadow-sm`}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                onClick={() => dispatch(setCurrentImage(index))}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fluid
                  style={{
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            ))}
          </Stack>
        </Col>

        <Col xs={10}>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <Carousel
              activeIndex={activeImage}
              onSelect={handleSelect}
              interval={null}
              variant="dark"
              indicators={false}
            >
              {images.map((image) => (
                <Carousel.Item key={image.id}>
                  <div
                    className="position-relative bg-light overflow-hidden"
                    style={{
                      height: '650px',
                      cursor: zoom ? 'zoom-out' : 'zoom-in',
                    }}
                    onMouseEnter={() => setZoom(true)}
                    onMouseLeave={() => {
                      setZoom(false);
                      setBackgroundPosition('center');
                    }}
                    onMouseMove={handleMouseMove}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${image.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition,
                        backgroundSize: zoom ? '220%' : 'contain',
                        transition: zoom
                          ? 'none'
                          : 'background-position 0.3s ease, background-size 0.3s ease',
                      }}
                    />

                    <Stack
                      direction="horizontal"
                      gap={2}
                      className="position-absolute top-0 end-0 p-3"
                      style={{ zIndex: 10 }}
                    >
                      <Button
                        variant="white"
                        className="rounded-circle shadow-sm d-flex align-items-center justify-content-center p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoom(!zoom);
                        }}
                      >
                        <ZoomIn size={18} />
                      </Button>

                      <Button
                        variant="white"
                        className="rounded-circle shadow-sm d-flex align-items-center justify-content-center p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowModal(true);
                        }}
                      >
                        <ArrowsFullscreen size={16} />
                      </Button>
                    </Stack>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
      >
        <Modal.Body className="p-0 bg-black d-flex justify-content-center align-items-center">
          <Image
            src={images[activeImage]?.src}
            alt={images[activeImage]?.label}
            fluid
            className="mh-100"
            style={{ maxHeight: '85vh', objectFit: 'contain' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductGallery;
