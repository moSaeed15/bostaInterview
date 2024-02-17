import PropTypes from 'prop-types';

import { useState } from 'react';

const LangSwitch = ({ trackPage }) => {
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
      En
      <img
        src={isHovered || isClicked ? '/arrow-down-r.svg' : '/arrow-down.svg'}
        alt="arrow-down"
        className={` xl:w-5 xl:h-3 ${isHovered || (isClicked && 'rotate-270')}`}
      />
      <ul
        className={` ${isClicked ? 'block' : 'hidden'}
  absolute shadow-dropdown z-20 bg-white  top-[73px] p-2  font-medium text-sm rounded-md mt-2`}
      >
        <li className="dropdown-text">English</li>
        <li className="dropdown-text">Arabic</li>
      </ul>
    </span>
  );
};
LangSwitch.propTypes = {
  trackPage: PropTypes.bool,
};

export default LangSwitch;
