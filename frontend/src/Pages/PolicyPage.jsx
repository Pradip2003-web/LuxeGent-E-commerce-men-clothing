import Navbar from '../components/Home/Navbar';
import HowWeUseData from '../components/policy/HowUseData';
import InformationCollect from '../components/policy/InformationCollect';
import PaymentSecurity from '../components/policy/PaymentSecurity';
import Privacy from '../components/policy/Privacy';
import PrivacyFaq from '../components/policy/PrivacyFaq';
import PrivacyNavigation from '../components/policy/PrivacyNavigation';
import ThirdPartyServices from '../components/policy/ThirdPartyService';
import UserRights from '../components/policy/UserRights';
import Footer from '../components/Home/Footer';

function PolicyPage() {
  return (
    <>
      <Navbar />
      <Privacy />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-4">
              <PrivacyNavigation />
            </div>

            <div className="col-lg-9">
              <InformationCollect />
            </div>

            <div className="col-lg-9">
              <HowWeUseData />
            </div>
            <div className="col-lg-9">
              <PaymentSecurity />
            </div>
            <div className="col-lg-9">
              <ThirdPartyServices />
            </div>
            <div className="col-lg-9">
              <UserRights />
            </div>
            <div className="col-lg-9">
              <PrivacyFaq />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PolicyPage;
