import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TrackShipment = () => {
  const [isClicked, setIsClicked] = useState(false);
  const trackShipmentRef = useRef(null);
  const [trackingID, setTrackingID] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        trackShipmentRef.current &&
        !trackShipmentRef.current.contains(event.target)
      ) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <span
      ref={trackShipmentRef}
      className={`flex items-center text-brand-red font-bold text-[16.5px] p-2  whitespace-nowrap ${
        isClicked && 'shadow-track border border-[#e4e7ec] rounded-lg p-4'
      }`}
      onClick={() => {
        setIsClicked(prev => !prev);
      }}
    >
      {t('nav.trackShipment')}
      <img
        src="/arrow-down-r.svg"
        alt="arrow-down"
        className={`${
          isClicked && 'rtl:-rotate-270 ltr:rotate-270'
        } mx-2 mt-[2px] w-[11px] h-[7px] lg:w-5 lg:h-[12px]`}
      />
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={`${
          isClicked ? '' : 'hidden'
        } absolute -bottom-[140px] rounded-lg rtl:left-10 ltr:right-10 shadow-track bg-white p-6 lg:p-10 lg:-bottom-44 ltr:xl:right-52  xl:rtl:left-52`}
      >
        <h3 className="text-menu-color font-normal text-base mb-3 lg:text-lg">
          {t('nav.trackYourShipment')}
        </h3>
        <div className="relative">
          <form
            onSubmit={() => {
              navigate(`/tracking/${trackingID}`);
            }}
          >
            <input
              onChange={e => {
                setTrackingID(e.target.value);
              }}
              type="text"
              className="border placeholder:text-sm placeholder:opacity-80 border-gray-300 rounded-md p-3  w-full focus:outline-[#1dabb3] h-10 lg:h-12"
              placeholder={t('nav.trackingNo')}
            />
            <img
              onClick={() => {
                navigate(`/tracking/${trackingID}`);
              }}
              className="absolute bg-brand-red ltr:right-0 rtl:left-0 bottom-0 rounded-md p-2 h-10 lg:h-12 cursor-pointer"
              src="./search.svg"
              alt="search"
            />
          </form>
        </div>
      </div>
    </span>
  );
};

export default TrackShipment;
