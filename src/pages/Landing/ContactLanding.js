import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import HeaderContact from "src/components/landing/HeaderContact/HeaderContact";
import ContactForm from "src/components/landing/ContactSections/ContactForm";


const ContactLanding = () => {
  return (
    <div>
      <Navbar />
      <HeaderContact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactLanding;
