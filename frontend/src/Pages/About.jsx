import HeroSection from '../components/About/Herosection';
import BrandSection from '../components/About/BrandStory';
import FounderSection from '../components/About/FounderSection';
import MissionSection from '../components/About/MissionSection';
import TeamSection from '../components/About/TeamSection';
import StatsSection from '../components/About/StatsSection';
import WhyChooseUs from '../components/About/WhyChooseUs';
import Testimonials from '../components/Home/Testimonials';
import Footer from '../components/Home/Footer';
import Navbar from '../components/Home/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandSection />
      <FounderSection />
      <MissionSection />
      <TeamSection />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default About;
