import { Card, Nav, Accordion, ListGroup } from "react-bootstrap";
import { ShieldLock, ChevronRight, List } from "react-bootstrap-icons";

const sections = [
  {
    id: "information-collect",
    title: "Information We Collect",
  },
  {
    id: "how-we-use",
    title: "How We Use Data",
  },
  {
    id: "payment-security",
    title: "Payment Security",
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
  },
  {
    id: "user-rights",
    title: "User Rights",
  },
  {
    id: "contact",
    title: "Contact Information",
  },
];

function PrivacyNavigation() {
  return (
    <>
      <aside
        className="d-none d-lg-block position-sticky"
        style={{ top: "100px" }}
      >
        <Card className="border-0 shadow-sm rounded-4">
          <Card.Body className="p-4">
            <div className="d-flex align-items-center gap-2 mb-4">
              <ShieldLock size={22} />
              <h5 className="fw-bold mb-0">Privacy Policy</h5>
            </div>

            <Nav className="flex-column">
              {sections.map((section) => (
                <Nav.Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-dark px-0 py-2 d-flex align-items-center gap-2"
                >
                  <ChevronRight size={14} />
                  {section.title}
                </Nav.Link>
              ))}
            </Nav>
          </Card.Body>
        </Card>
      </aside>
    </>
  );
}

export default PrivacyNavigation;
