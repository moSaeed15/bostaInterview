import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
  );

  return (
    <div dir="ltr">
      <Routes>
        <Route
          element={<Navbar language={language} setLanguage={setLanguage} />}
        >
          <Route path="/" element={<Hero />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
