import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import Categories from '../components/Home/Categories';
import NewArrivals from '../components/Home/NewArrivals';
import SeasonalBanner from '../components/Home/SeasonalBanner';
import BestSellers from '../components/Home/BestSellers';
import Testimonials from '../components/Home/Testimonials';
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer';

const Home = () => {
  return (
    <>
      <div className="announcement-bar">
        Free Shipping on Orders Above ₹1000 • Easy Returns • Seasonal Sale 30%
        OFF
      </div>

      <Navbar />
      <Hero />
      <Categories />
      <NewArrivals />
      <SeasonalBanner />
      <BestSellers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
