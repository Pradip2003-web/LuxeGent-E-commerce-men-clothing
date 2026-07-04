import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Stack,
  Button,
  Card,
  OverlayTrigger,
  Tooltip,
  Badge,
} from 'react-bootstrap';

import { setSelectedColor } from '../../features/ProductDetailSlice';

function ColorSelector() {
  const dispatch = useDispatch();

  const colors = [
    { id: 1, name: 'Navy', code: '#1B2A49' },
    { id: 2, name: 'White', code: '#F8F9FA' },
    { id: 3, name: 'Black', code: '#1C1C1C' },
    { id: 4, name: 'Olive', code: '#556B2F' },
    { id: 5, name: 'Beige', code: '#D8C3A5' },
    { id: 6, name: 'Brown', code: '#6F4E37' },
  ];

  const selectedColorName = useSelector((state) => state.productdetail.selectedColor);

  useEffect(() => {
    if (!selectedColorName) {
      dispatch(setSelectedColor('Olive'));
    }
  }, [dispatch, selectedColorName]);

  const selectedColor =
    colors.find((c) => c.name === selectedColorName) || colors[0];

  return (
    <Card className="border-0 shadow-sm rounded-4 mb-4">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Choose Color</h5>

          <Badge bg="dark" pill className="px-3 py-2">
            {selectedColor.name}
          </Badge>
        </div>

        <Stack direction="horizontal" gap={3} className="flex-wrap mb-4">
          {colors.map((color) => (
            <OverlayTrigger
              key={color.id}
              placement="top"
              overlay={<Tooltip>{color.name}</Tooltip>}
            >
              <Button
                variant="light"
                className="rounded-circle p-0 border-0"
                onClick={() => dispatch(setSelectedColor(color.name))}
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: color.code,
                  border:
                    selectedColor.id === color.id
                      ? '3px solid #000'
                      : '2px solid #e9ecef',
                  transform:
                    selectedColor.id === color.id ? 'scale(1.12)' : 'scale(1)',
                  transition: 'all .25s ease',
                  boxShadow:
                    selectedColor.id === color.id
                      ? '0 0 0 4px rgba(0,0,0,.12)'
                      : '0 2px 8px rgba(0,0,0,.08)',
                }}
              />
            </OverlayTrigger>
          ))}
        </Stack>

        <Card className="bg-light border-0 rounded-4">
          <Card.Body className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle border shadow-sm"
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: selectedColor.code,
              }}
            />

            <div>
              <h6 className="fw-semibold mb-1">{selectedColor.name}</h6>

              <small className="text-muted">Selected color option</small>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default ColorSelector;
