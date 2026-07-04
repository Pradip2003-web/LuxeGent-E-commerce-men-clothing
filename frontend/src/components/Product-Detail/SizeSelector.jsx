import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedSize } from '../../features/ProductDetailSlice';

import { Button, Modal, Card, Stack, Table } from 'react-bootstrap';

function SizeSelector() {
  const dispatch = useDispatch();
  const [showGuide, setShowGuide] = useState(false);

  const sizes = [
    { id: 1, label: 'XS', available: true },
    { id: 2, label: 'S', available: true },
    { id: 3, label: 'M', available: true },
    { id: 4, label: 'L', available: true },
    { id: 5, label: 'XL', available: false },
    { id: 6, label: 'XXL', available: true },
  ];

  const selectedSize = useSelector((state) => state.productdetail.selectedSize);

  useEffect(() => {
    dispatch(setSelectedSize('L'));
  }, [dispatch]);

  const handleSelectSize = (size) => {
    if (!size.available) return;

    dispatch(setSelectedSize(size.label));
  };

  return (
    <>
      <Card className="border-0 shadow-sm rounded-4 mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="fw-bold mb-0">Select Size</h6>

            <Button
              variant="link"
              className="p-0 text-decoration-none fw-semibold"
              onClick={() => setShowGuide(true)}
            >
              Size Guide
            </Button>
          </div>

          <small className="text-muted d-block mb-3">
            Selected Size: <strong>{selectedSize || 'None'}</strong>
          </small>

          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {sizes.map((size) => (
              <Button
                key={size.id}
                variant={
                  selectedSize === size.label ? 'dark' : 'outline-secondary'
                }
                disabled={!size.available}
                className="rounded-4 px-4 py-3 fw-semibold"
                style={{
                  minWidth: '70px',
                }}
                onClick={() => handleSelectSize(size)}
              >
                {size.label}
              </Button>
            ))}
          </Stack>

          <Card className="mt-4 border-0 bg-light rounded-4">
            <Card.Body className="py-3">
              <small className="text-success fw-medium">
                ✓ Most customers buy their regular size.
              </small>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      <Modal
        show={showGuide}
        onHide={() => setShowGuide(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Size Guide</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table responsive bordered hover className="text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Shoulder</th>
                <th>Length</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>S</td>
                <td>38"</td>
                <td>17"</td>
                <td>27"</td>
              </tr>

              <tr>
                <td>M</td>
                <td>40"</td>
                <td>18"</td>
                <td>28"</td>
              </tr>

              <tr>
                <td>L</td>
                <td>42"</td>
                <td>19"</td>
                <td>29"</td>
              </tr>

              <tr>
                <td>XL</td>
                <td>44"</td>
                <td>20"</td>
                <td>30"</td>
              </tr>

              <tr>
                <td>XXL</td>
                <td>46"</td>
                <td>21"</td>
                <td>31"</td>
              </tr>
            </tbody>
          </Table>

          <Card className="border-0 bg-light rounded-4 mt-4">
            <Card.Body>
              <h6 className="fw-bold">Fit Recommendation</h6>

              <p className="text-muted mb-0">
                This overshirt features a regular fit with enough room for
                layering. If you prefer a slimmer silhouette, consider sizing
                down.
              </p>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SizeSelector;
