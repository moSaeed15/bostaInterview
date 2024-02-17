import Tracking from './pages/Tracking';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
  );

  useEffect(() => {
    const handleChangeLang = language => {
      i18n.changeLanguage(language);
    };
    handleChangeLang(language);
  }, [language]);

  return (
    <div dir={language === 'en' ? 'ltr' : 'rtl'}>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/tracking/:trackingID"
          element={<Tracking setLanguage={setLanguage} language={language} />}
        />
      </Routes>
    </div>
  );
}

export default App;
