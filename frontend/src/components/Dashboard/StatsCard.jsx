import { Card } from 'react-bootstrap';

function StatsCard({ title, value, icon, color, growth, growthColor }) {
  return (
    <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <p className="text-muted mb-2">{title}</p>

            <h2 className="fw-bold mb-2">{value}</h2>

            <div className={`${growthColor} fw-medium`}>
              <i className="bi bi-graph-up-arrow me-1"></i>
              {growth}
            </div>
          </div>

          <div
            className={`${color} bg-opacity-50 rounded-4 d-flex align-items-center justify-content-center`}
            style={{
              width: '64px',
              height: '64px',
            }}
          >
            <i className={`${icon} text-white fs-3`}></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StatsCard;
