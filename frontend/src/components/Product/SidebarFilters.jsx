import { useDispatch, useSelector } from "react-redux";
import { Card, Accordion, Form, Button, Offcanvas } from "react-bootstrap";

import {
  setCategory,
  setBrand,
  setColor,
  setSize,
  setMaxPrice,
  clearFilters,
} from "../../features/FilterSlice";
import { useState } from "react";

const categories = ["Shirts", "T-Shirts", "Jeans", "Jackets"];
const brands = ["Nike", "Adidas", "Zara", "Levi's", "H&M", "Calvin Klein"];
const colors = ["Black", "White", "Navy", "Olive", "Brown", "Beige"];
const sizes = ["S", "M", "L", "XL", "XXL"];

const toggleArrayValue = (array, value) =>
  array.includes(value)
    ? array.filter((item) => item !== value)
    : [...array, value];

function FilterContent({ filters, dispatch }) {
  const {
    category = [],
    maxPrice = 10000,
    size = [],
    color = [],
    brand = [],
  } = filters;

  return (
    <Accordion defaultActiveKey={["0", "1", "2", "3", "4"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
          {categories.map((item) => (
            <Form.Check
              key={item}
              type="checkbox"
              label={item}
              checked={category.includes(item)}
              onChange={() =>
                dispatch(setCategory(toggleArrayValue(category, item)))
              }
              className="mb-2"
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          <Form.Range
            min={0}
            max={10000}
            value={maxPrice}
            onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
          />
          <div className="fw-semibold">Maximum: ₹{maxPrice}</div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-wrap gap-2">
            {sizes.map((s) => (
              <Button
                key={s}
                size="sm"
                variant={size.includes(s) ? "dark" : "outline-dark"}
                onClick={() => dispatch(setSize(toggleArrayValue(size, s)))}
              >
                {s}
              </Button>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-wrap gap-2">
            {colors.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={color.includes(c) ? "dark" : "outline-secondary"}
                onClick={() => dispatch(setColor(toggleArrayValue(color, c)))}
              >
                {c}
              </Button>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Brand</Accordion.Header>
        <Accordion.Body>
          {brands.map((b) => (
            <Form.Check
              key={b}
              type="checkbox"
              label={b}
              checked={brand.includes(b)}
              onChange={() => dispatch(setBrand(toggleArrayValue(brand, b)))}
              className="mb-2"
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function SidebarFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-lg-none mb-3">
        <Button variant="dark" className="w-100" onClick={handleShow}>
          <i className="bi bi-funnel me-2"></i>
          Filters
        </Button>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <FilterContent filters={filters} dispatch={dispatch} />

          <Button
            variant="outline-danger"
            className="w-100 mt-4"
            onClick={() => {
              dispatch(clearFilters());
              handleClose();
            }}
          >
            Reset Filters
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Card
        className="d-none d-lg-block border-0 shadow-sm rounded-4 sticky-top"
        style={{ top: "20px", zIndex: "1" }}
      >
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Filters</h4>

            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => dispatch(clearFilters())}
            >
              Reset
            </Button>
          </div>

          <FilterContent filters={filters} dispatch={dispatch} />
        </Card.Body>
      </Card>
    </>
  );
}

export default SidebarFilters;
