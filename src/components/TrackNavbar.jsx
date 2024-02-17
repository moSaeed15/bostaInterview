import PropTypes from 'prop-types';
import LangSwitch from './LangSwitch';

export const TrackNavbar = ({ trackPage }) => {
  return (
    <nav className="bg-light-blue">
      <div className=" bg-light-blue z-50 flex items-center p-5 px-8 lg:px-14  justify-between w-full fixed  font-Lato lg:h-24">
        <img src="bosta-en-logo.svg" alt="bosta logo" />
        <div className="mr-10">
          <LangSwitch trackPage={trackPage} />
        </div>
      </div>
    </nav>
  );
};
TrackNavbar.propTypes = {
  trackPage: PropTypes.bool,
};
