import { useState, useEffect } from 'react';
import OrderDetails from './OrderDetails';
import OrderTable from './OrderTable';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TrackSearch = ({ language }) => {
  const [orderData, setOrderData] = useState();
  const [trackingIDInput, setTrackingIDInput] = useState('');

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 320);

    return () => clearTimeout(timeout);
  }, []);

  let { trackingID } = useParams();
  const getOrderData = async ID => {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${ID}`
    );
    const data = await response.json();
    if (response.ok) setOrderData(data);
  };
  const { t } = useTranslation();
  useEffect(() => {
    try {
      getOrderData(trackingID);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-white pt-10  mx-5 lg:mx-10 xl:mx-40 ">
      <div className="bg-white w-full h-10 pt-24"></div>
      <div className="bg-light-blue rounded-lg flex flex-col px-0 items-center">
        <img
          src="https://bosta.co/ac8dbe8ae2210d1a650279fb14d01f7e.png"
          alt="map-pin"
        />
        <h1
          className={`${
            language === 'en' ? 'font-Poppins' : 'font-Cairo'
          }  text-dropdown-color text-2xl xl:text-4xl font-semibold mb-4`}
        >
          {t('trackSearch.trackYourOrder')}
        </h1>
        <p className={`${language === 'en' ? 'font-Lato' : 'font-Cairo'} `}>
          {t('trackSearch.orderUpdates')}{' '}
        </p>
      </div>
      <form
        onSubmit={() => {
          if (trackingIDInput !== '') {
            navigate(`/tracking/${trackingIDInput}`);
            getOrderData(trackingIDInput);
          }
        }}
        className="relative bg-light-blue px-20 lg:px-40 xl:px-96 mt-5"
      >
        <input
          type="text"
          className="relative top-10 border placeholder:text-sm placeholder:opacity-80 outline-none
            rounded-md p-5 transition-all duration-300
            w-full focus:outline-[#1dabb3] h-14"
          placeholder={t('nav.trackingNo')}
          onChange={e => {
            setTrackingIDInput(e.target.value);
          }}
        />
        <img
          onClick={() => {
            if (trackingIDInput !== '') {
              navigate(`/tracking/${trackingIDInput}`);
              getOrderData(trackingIDInput);
            }
          }}
          className="absolute bg-brand-red ltr:right-20 ltr:lg:right-40  ltr:xl:right-96   rtl:left-20 rtl:lg:left-40  rtl:xl:left-96 top-10  rounded-md p-2 h-14 cursor-pointer"
          src="/search.svg"
          alt="search"
        />
      </form>
      {orderData ? (
        <>
          <OrderDetails orderData={orderData} language={language} />
          <OrderTable orderData={orderData} language={language} />
        </>
      ) : (
        showMessage && (
          <div className="mt-20 text-center flex flex-col items-center gap-5">
            <h2 className="font-bold opacity-50">
              {t('trackSearch.orderID', { trackingID })}
            </h2>
            <p className="border border-[#fecdca] rounded-md bg-[#fef3f2] p-3 font-normal flex gap-1 text-sm  text-center max-w-[80ch]">
              <img src="/error.svg" alt="error" className="self-start" />{' '}
              {t('trackSearch.noRecord')}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default TrackSearch;
