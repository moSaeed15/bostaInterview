import PropTypes from 'prop-types';

import { useState } from 'react';

const LangSwitch = ({ trackPage, setLanguage, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        setIsClicked(prev => !prev);
      }}
      className={` ${(isHovered || isClicked) && 'text-brand-red'} ${
        !trackPage ? 'hidden' : 'flex'
      }  xl:flex gap-2 items-center`}
    >
      {language === 'en' ? 'En' : 'Ar'}
      <img
        src={isHovered || isClicked ? '/arrow-down-r.svg' : '/arrow-down.svg'}
        alt="arrow-down"
        className={` xl:w-5 xl:h-3 ${
          isHovered || (isClicked && 'rtl:-rotate-270 ltr:rotate-270')
        }`}
      />
      <ul
        className={` ${isClicked ? 'block' : 'hidden'}
        rtl:left-4 absolute shadow-dropdown z-20 bg-white  top-[73px] p-2  font-medium text-sm rounded-md mt-2`}
      >
        <li
          className="dropdown-text"
          onClick={() => {
            localStorage.setItem('lang', 'en');
            setLanguage('en');
          }}
        >
          English
        </li>
        <li
          className="dropdown-text"
          onClick={() => {
            localStorage.setItem('lang', 'ar');

            setLanguage('ar');
          }}
        >
          Arabic
        </li>
      </ul>
    </span>
  );
};
LangSwitch.propTypes = {
  trackPage: PropTypes.bool,
};

export default LangSwitch;
