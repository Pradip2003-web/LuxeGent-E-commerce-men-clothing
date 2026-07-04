import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    {
      title: 'Dashboard',
      icon: 'bi-speedometer2',
      path: '/admin',
    },
    {
      title: 'Orders',
      icon: 'bi-bag-check',
      path: '/admin/orders',
    },
    {
      title: 'Products',
      icon: 'bi-box-seam',
      path: '/admin/products',
    },
    {
      title: 'Customers',
      icon: 'bi-people',
      path: '/admin/customers',
    },
    {
      title: 'Inventory',
      icon: 'bi-stack',
      path: '/admin/inventory',
    },
    {
      title: 'Analytics',
      icon: 'bi-graph-up',
      path: '/admin/analytics',
    },
  ];

  return (
    <div
      className="bg-dark text-white p-3 shadow"
      style={{
        width: '260px',
        minHeight: '100vh',
      }}
    >
      <div className="text-center mb-4">
        <h4 className="fw-bold text-white">
          <i className="bi bi-shop me-2"></i>
          Admin Panel
        </h4>
      </div>

      <Nav className="flex-column gap-2">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.path}
            as={NavLink}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              `rounded-3 px-3 py-2 d-flex align-items-center ${
                isActive ? 'bg-primary text-white' : 'text-light'
              }`
            }
          >
            <i className={`${item.icon} me-3`}></i>
            {item.title}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
