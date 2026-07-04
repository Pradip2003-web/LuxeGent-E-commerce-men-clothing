import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";

import LuxeGent from "../../assets/icons/LuxeGent.png";

const Header = () => {
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <Navbar
      expand="lg"
      bg="white"
      className="shadow-sm sticky-top py-2"
      style={{ zIndex: "100" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={LuxeGent}
            alt="LuxeGent"
            height="75"
            width="180"
            className="img-fluid"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto  ms-5 gap-lg-3">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/product">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/newarrivals" className="text-nowrap">
              New Arrivals
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="text-nowrap">
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="w-100 w-lg-auto d-flex flex-row justify-content-center justify-content-lg-end align-items-center gap-1 mt-3 mt-lg-0">
            <NavDropdown
              title={<i className="bi bi-person fs-5"></i>}
              id="user-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/login">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/register">
                <i className="bi bi-person-plus me-2"></i>
                Register
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/wishlist"
              className="position-relative  fs-5"
            >
              <i
                className={`bi bi-heart${
                  wishlistCount > 0 ? "-fill text-danger" : ""
                }`}
              ></i>

              {wishlistCount > 0 && (
                <Badge
                  pill
                  bg="danger"
                  className="position-absolute top-10 start-75 translate-middle"
                >
                  {wishlistCount}
                </Badge>
              )}
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="fs-5">
              <i className="bi bi-bag"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
