import HamburgerMenu from './HamburgerMenu';
import LangSwitch from './LangSwitch';
import MenuItem from './MenuItem';
import TrackShipment from './TrackShipment';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <nav className="">
        <div className=" bg-white z-50 flex items-center p-5 justify-between w-full fixed  font-Lato h-28">
          <img src="bosta-en-logo.svg" alt="bosta logo" />
          <ul className="hidden xl:flex gap-10">
            <MenuItem
              mobile={true}
              title="Products"
              hasArrow={true}
              items={['Solutions', 'Dashboard', 'Mobile App']}
            />
            <MenuItem
              mobile={true}
              title="Integrations"
              hasArrow={true}
              items={['Shopify', 'WooCommerce', 'Custom APIs']}
            />
            <MenuItem
              mobile={true}
              title="Use Cases"
              hasArrow={true}
              items={['Businesses', 'SMEs']}
            />
            <MenuItem title="Pricing" isUnderlined={true} mobile={true} />
            <MenuItem title="Blog" isUnderlined={true} mobile={true} />
          </ul>
          <div className="flex items-center">
            <TrackShipment />
            <HamburgerMenu />
            <LangSwitch />

            <span className="hidden  whitespace-nowrap  xl:block mx-10 transition-colors duration-300 hover:text-brand-red hover:underline ">
              Sign In
            </span>
            <button className="hidden xl:block  menu-button-red ">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
