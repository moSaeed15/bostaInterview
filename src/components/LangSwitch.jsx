import { useState } from 'react';

const LangSwitch = () => {
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
      className={` ${
        (isHovered || isClicked) && 'text-brand-red'
      } hidden xl:flex gap-2 items-center`}
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
        <li
          className="py-1 px-3 text-dropdown-color transition-all duration-300 
         hover:text-dropdown-color  hover:bg-dropdown-hover cursor-pointer"
        >
          English
        </li>
        <li
          className="py-1 px-3 text-dropdown-color transition-all duration-300 
         hover:text-dropdown-color  hover:bg-dropdown-hover cursor-pointer"
        >
          Arabic
        </li>
      </ul>
    </span>
  );
};

export default LangSwitch;
