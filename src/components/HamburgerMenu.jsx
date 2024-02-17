import { useState } from 'react';
import MenuItem from './MenuItem';

import { useTranslation } from 'react-i18next';

const HamburgerMenu = ({ setLanguage }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="visible xl:invisible  ">
      {/* Menu lines */}
      <div
        className={`menu ${isClicked && 'menu-clicked'}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Menu items */}
      <div
        className={` h-screen absolute top-20 z-10 right-0 left-0 bg-white flex-col px-8 
        text-base font-bold text-grey justify-between 
        ${!isClicked && 'hidden'}`}
      >
        <ul>
          <MenuItem
            title={t('nav.li1')}
            hasArrow={true}
            items={t('nav.items1', { returnObjects: true })}
          />
          <MenuItem
            title={t('nav.li2')}
            hasArrow={true}
            items={t('nav.items2', { returnObjects: true })}
          />
          <MenuItem
            title={t('nav.li3')}
            hasArrow={true}
            items={t('nav.items3', { returnObjects: true })}
          />
          <MenuItem title={t('nav.li4')} isUnderlined={true} />
          <MenuItem title={t('nav.li5')} isUnderlined={true} />
          <MenuItem title={t('nav.li6')} setLanguage={setLanguage} />
        </ul>
        <div className=" mb-56">
          <button className="menu-button block"> {t('nav.signIn')}</button>
          <button className="menu-button-red block"> {t('nav.signUp')}</button>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
