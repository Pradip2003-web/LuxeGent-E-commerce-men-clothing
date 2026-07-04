import { Card } from 'react-bootstrap';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 50000 },
  { month: 'Feb', revenue: 70000 },
  { month: 'Mar', revenue: 60000 },
  { month: 'Apr', revenue: 90000 },
  { month: 'May', revenue: 85000 },
  { month: 'Jun', revenue: 110000 },
];

function RevenueChart() {
  return (
    <Card className="border-0 shadow-sm rounded-4 h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">Revenue Overview</h5>

          <span className="badge bg-success-subtle text-success">+12.5%</span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e9ecef"
            />

            <XAxis dataKey="month" tickLine={false} axisLine={false} />

            <YAxis
              tickFormatter={(value) => `₹${value / 1000}k`}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
            />

            <Bar
              dataKey="revenue"
              fill="#198754"
              radius={[8, 8, 0, 0]}
              barSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}

export default RevenueChart;
