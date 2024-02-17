import { useState, useEffect } from 'react';
import OrderDetails from './OrderDetails';
import OrderTable from './OrderTable';
import { useNavigate, useParams } from 'react-router-dom';

const TrackSearch = ({ language }) => {
  const [orderData, setOrderData] = useState();
  const [trackingIDInput, setTrackingIDInput] = useState('');
  let { trackingID } = useParams();

  useEffect(() => {
    const getOrderData = async () => {
      const response = await fetch(
        `https://tracking.bosta.co/shipments/track/${trackingID}`
      );
      console.log(response);
      const data = await response.json();
      if (response.ok) setOrderData(data);
    };
    try {
      getOrderData();
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
          Track Your Order
        </h1>
        <p className={`${language === 'en' ? 'font-Lato' : 'font-Cairo'} `}>
          All order updates will be available through this link.
        </p>
      </div>
      <form
        onSubmit={() => {
          navigate(`/tracking/${trackingIDInput}`);
          window.location.reload();
        }}
        className="relative bg-light-blue px-20 lg:px-40 xl:px-96 mt-5"
      >
        <input
          type="text"
          className="relative top-10 border placeholder:text-sm placeholder:opacity-80 outline-none
            rounded-md p-5 transition-all duration-300
            w-full focus:outline-[#1dabb3] h-14"
          placeholder="Tracking No."
          onChange={e => {
            setTrackingIDInput(e.target.value);
          }}
        />
        <img
          onClick={() => {
            navigate(`/tracking/${trackingIDInput}`);
            window.location.reload();
          }}
          className="absolute bg-brand-red right-20 lg:right-40  xl:right-96  top-10  rounded-md p-2 h-14 cursor-pointer"
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
        <div className="mt-20 text-center flex flex-col items-center gap-5">
          <h2 className="font-bold opacity-50">ORDER #{trackingID}</h2>
          <p className="border border-[#fecdca] rounded-md bg-[#fef3f2] p-3 font-normal flex gap-1 text-sm  text-center max-w-[80ch]">
            <img src="/error.svg" alt="error" className="self-start" /> No
            record of this tracking number can be found at this time, please
            check the number and try again later. For further assistance, please
            contact Customer Service.
          </p>
        </div>
      )}
    </div>
  );
};

export default TrackSearch;
