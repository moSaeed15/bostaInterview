import PropTypes from 'prop-types';

import { useState } from 'react';
import Dropdown from './Dropdown';

const MenuItem = ({ title, hasArrow, isUnderlined, items, mobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer flex gap-2 items-center justify-between py-6 border-dashed border-grey-border  
      ${title === 'العربية' ? 'font-Cairo' : 'font-Lato'}
      ${(title !== 'العربية' || title !== 'English') && 'hover:text-brand-red'}
      ${isUnderlined && 'hover:underline'}  
      ${mobile ? 'lg:text-grey font-bold hover:underline' : 'border-b'}
      `}
    >
      {title}
      {hasArrow && (
        <img
          src={isHovered ? '/arrow-down-r.svg' : '/arrow-down.svg'}
          alt="arrow-down"
          className={`w-[10px] h-[6px] ${isHovered && 'rotate-270'}`}
        />
      )}
      {items && isHovered && <Dropdown items={items} mobile={true} />}
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  hasArrow: PropTypes.bool,
  isUnderlined: PropTypes.bool,
  hasDropdown: PropTypes.bool,
  mobile: PropTypes.bool,
  items: PropTypes.array,
};

export default MenuItem;
