import { useState } from 'react';
import MenuItem from './MenuItem';

const HamburgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
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
            title="Products"
            hasArrow={true}
            items={['Solutions', 'Dashboard', 'Mobile App']}
          />
          <MenuItem
            title="Integrations"
            hasArrow={true}
            items={['Shopify', 'WooCommerce', 'Custom APIs']}
          />
          <MenuItem
            title="Use Cases"
            hasArrow={true}
            items={['Businesses', 'SMEs']}
          />
          <MenuItem title="Pricing" isUnderlined={true} />
          <MenuItem title="Blog" isUnderlined={true} />
          <MenuItem title="العربية" />
        </ul>
        <div className=" mb-56">
          <button className="menu-button block">Sign In</button>
          <button className="menu-button-red block">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
