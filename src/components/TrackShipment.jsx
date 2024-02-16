import { useState, useEffect, useRef } from 'react';

const TrackShipment = () => {
  const [isClicked, setIsClicked] = useState(false);
  const trackShipmentRef = useRef(null);

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
      Track Shipment
      <img
        src="/arrow-down-r.svg"
        alt="arrow-down"
        className={`${
          isClicked && 'rotate-270'
        } ml-2 mt-[2px] w-[11px] h-[7px] lg:w-5 lg:h-[12px]`}
      />
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={`${
          isClicked ? '' : 'hidden'
        } absolute -bottom-[140px] rounded-lg right-10 shadow-track bg-white p-6 lg:p-10 lg:-bottom-44 xl:right-52`}
      >
        <h3 className="text-menu-color font-normal text-base mb-3 lg:text-lg">
          Track your shipment
        </h3>
        <div className="relative">
          <input
            type="text"
            className="border placeholder:text-sm placeholder:opacity-80 border-gray-300 rounded-md p-3  w-full focus:outline-[#1dabb3] h-10 lg:h-12"
            placeholder="Tracking No."
          />
          <img
            onClick={() => {}}
            className="absolute bg-brand-red right-0 bottom-0 rounded-md p-2 h-10 lg:h-12 cursor-pointer"
            src="./search.svg"
            alt="search"
          />
        </div>
      </div>
    </span>
  );
};

export default TrackShipment;
