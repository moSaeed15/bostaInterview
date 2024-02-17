import PropTypes from 'prop-types';
import LangSwitch from './LangSwitch';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const TrackNavbar = ({ trackPage, setLanguage, language }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <nav className="bg-light-blue">
      <div
        className={` bg-light-blue z-50 flex items-center p-5 px-8 lg:px-14 xl:px-40  justify-between w-full fixed ${
          language === 'en' ? 'font-Lato' : 'font-Cairo'
        }  lg:h-20`}
      >
        <img
          src={t('nav.img')}
          alt="bosta logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <div className="mr-10">
          <LangSwitch
            trackPage={trackPage}
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </div>
    </nav>
  );
};
TrackNavbar.propTypes = {
  trackPage: PropTypes.bool,
};
