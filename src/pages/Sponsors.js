import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import IfSponsors from '../components/Sponsors/IfSponsors.js'

const Home = () => {
   

  
    return (
      <div>
        <Header />
        <IfSponsors name="pepe" urlImage1="www.google.es" correu="lleidahack.dev" ind="goo" description="Aixo es una des ben bonica" activityRoute="Lorem"/>
        <Footer />
      </div>
    );
  };

export default Home;