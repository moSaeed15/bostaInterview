import HamburgerMenu from './HamburgerMenu';
import LangSwitch from './LangSwitch';
import MenuItem from './MenuItem';
import TrackShipment from './TrackShipment';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setLanguage, language }) => {
  const { t } = useTranslation();
  return (
    <div className="">
      <nav className="">
        <div
          className={` bg-white z-50 flex items-center p-5  h-28 lg:px-14 justify-between w-full fixed ${
            language === 'en' ? 'font-Lato' : 'font-Cairo'
          } `}
        >
          <img src={t('nav.img')} alt="bosta logo" />
          <ul className="hidden xl:flex gap-10">
            <MenuItem
              mobile={true}
              title={t('nav.li1')}
              hasArrow={true}
              items={t('nav.items1', { returnObjects: true })}
            />
            <MenuItem
              mobile={true}
              title={t('nav.li2')}
              hasArrow={true}
              items={t('nav.items2', { returnObjects: true })}
            />
            <MenuItem
              mobile={true}
              title={t('nav.li3')}
              hasArrow={true}
              items={t('nav.items3', { returnObjects: true })}
            />
            <MenuItem title={t('nav.li4')} isUnderlined={true} mobile={true} />
            <MenuItem title={t('nav.li5')} isUnderlined={true} mobile={true} />
          </ul>
          <div className="flex items-center">
            <TrackShipment />
            <HamburgerMenu setLanguage={setLanguage} />
            <LangSwitch setLanguage={setLanguage} language={language} />

            <span className="hidden whitespace-nowrap xl:block mx-10 transition-colors duration-300 hover:text-brand-red hover:underline">
              {t('nav.signIn')}
            </span>
            <button className="hidden xl:block menu-button-red">
              {t('nav.signUp')}
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
