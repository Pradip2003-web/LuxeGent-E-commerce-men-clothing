import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 12000 },
  { month: 'Feb', sales: 18000 },
  { month: 'Mar', sales: 15000 },
  { month: 'Apr', sales: 24000 },
  { month: 'May', sales: 21000 },
  { month: 'Jun', sales: 30000 },
];

function SalesAnalytics() {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body">
        <h5 className="fw-bold mb-4">Sales Analytics</h5>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#0d6efd"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesAnalytics;
