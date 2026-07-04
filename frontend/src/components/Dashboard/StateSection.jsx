import StatsCard from './StatsCard';

function StatsSection() {
  return (
    <div className="row g-4">
      <div className="col-xl-3 col-md-6">
        <StatsCard
          title="Total Sales"
          value="₹2.45L"
          icon="bi bi-cart-check"
          color="bg-primary"
          growth="+15% this month"
          growthColor="text-success"
        />
      </div>

      <div className="col-xl-3 col-md-6">
        <StatsCard
          title="Revenue"
          value="₹12.8L"
          icon="bi bi-currency-rupee"
          color="bg-success"
          growth="+8% this month"
          growthColor="text-success"
        />
      </div>

      <div className="col-xl-3 col-md-6">
        <StatsCard
          title="Orders"
          value="1,580"
          icon="bi bi-bag-check"
          color="bg-warning"
          growth="+42 today"
          growthColor="text-success"
        />
      </div>

      <div className="col-xl-3 col-md-6">
        <StatsCard
          title="Customers"
          value="4,920"
          icon="bi bi-people"
          color="bg-danger"
          growth="+325 new"
          growthColor="text-success"
        />
      </div>
    </div>
  );
}

export default StatsSection;
