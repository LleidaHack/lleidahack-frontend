import Navbar from "src/components/landing/Navbar/Navbar";
import Footer from "src/components/landing/Footer/Footer";
import ContactForm from "src/components/landing/ContactSections/ContactForm";
import GeneralHeader from "src/components/landing/GeneralHeader/GeneralHeader";

const ContactLanding = () => {
  return (
    <div>
      <Navbar />
      <GeneralHeader sectionName="Contacte" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactLanding;
