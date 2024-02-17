import Tracking from './pages/Tracking';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
  );

  return (
    <div dir="ltr">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking:trackingID" element={<Tracking />} />
      </Routes>
    </div>
  );
}

export default App;
