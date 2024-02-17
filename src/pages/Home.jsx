import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = ({ setLanguage, language }) => {
  return (
    <div>
      <Navbar setLanguage={setLanguage} language={language} />
      <Hero language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Home;
