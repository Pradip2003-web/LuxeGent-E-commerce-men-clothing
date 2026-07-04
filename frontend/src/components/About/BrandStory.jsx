import { Container, Row, Col, Image, Stack } from 'react-bootstrap';

import storyImg from '../../assets/images/story.jpg';
import story1Img from '../../assets/images/story1.jpg';

const timeline = [
  {
    year: '2018',
    icon: 'bi-calendar-check',
    title: 'Founded',
    description:
      'Started with a vision to redefine modern menswear through timeless design and uncompromising quality.',
  },
  {
    year: '2020',
    icon: 'bi-bag-check',
    title: 'First Collection',
    description:
      'Launched our debut collection featuring premium wardrobe essentials crafted for everyday sophistication.',
  },
  {
    year: '2022',
    icon: 'bi-tree',
    title: 'Sustainability Initiative',
    description:
      'Introduced responsibly sourced fabrics, eco-friendly packaging, and ethical production partnerships.',
  },
  {
    year: '2025',
    icon: 'bi-globe',
    title: 'Global Expansion',
    description:
      'Expanded internationally, bringing luxury menswear to customers across multiple countries.',
  },
];

export default function BrandStory() {
  return (
    <section className="py-5 bg-light" id="brand-story">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="d-flex flex-column gap-5">
              <Image
                src={storyImg}
                alt="Luxury menswear lifestyle"
                fluid
                rounded
                className="shadow w-75"
                style={{
                  height: '350px',
                  objectFit: 'cover',
                }}
              />

              <Image
                src={story1Img}
                alt="Craftsmanship workshop"
                fluid
                rounded
                className="shadow ms-auto w-75"
                style={{
                  
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Col>

          <Col lg={6}>
            <span className="text-uppercase fw-semibold text-secondary small">
              Our Heritage
            </span>

            <h2 className="display-5 fw-bold mt-2 mb-4">Our Story</h2>

            <p className="lead text-muted">
              What began as a passion for exceptional tailoring has evolved into
              a premium menswear brand dedicated to confidence, craftsmanship,
              and timeless style.
            </p>

            <p className="text-muted">
              Every garment is thoughtfully designed using carefully selected
              materials and refined construction techniques to create wardrobe
              essentials that transcend trends. We believe true luxury lies in
              simplicity, lasting quality, and pieces that become more valuable
              with every wear.
            </p>

            <p className="text-muted">
              From our first sketches to the final stitch, our philosophy
              remains the same: create clothing that helps modern gentlemen look
              confident while investing in fewer, better-made pieces.
            </p>

            <Stack gap={4} className="mt-5">
              {timeline.map((item, index) => (
                <div key={index} className="d-flex gap-3">
                  <div
                    className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '55px',
                      height: '55px',
                    }}
                  >
                    <i className={`${item.icon} fs-4`}></i>
                  </div>

                  <div>
                    <span className="badge bg-secondary-subtle text-dark mb-2">
                      {item.year}
                    </span>

                    <h5 className="fw-semibold mb-2">{item.title}</h5>

                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
