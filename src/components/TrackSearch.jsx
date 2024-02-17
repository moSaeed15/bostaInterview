import OrderDetails from './OrderDetails';
import OrderTable from './OrderTable';

const TrackSearch = () => {
  return (
    <div className="bg-white pt-10 ">
      <div className="bg-white w-full h-10 pt-24"></div>
      <div className="bg-light-blue mx-5 rounded-lg flex flex-col px-0 items-center">
        <img
          src="https://bosta.co/ac8dbe8ae2210d1a650279fb14d01f7e.png"
          alt="map-pin"
        />
        <h1 className="font-Poppins text-dropdown-color text-2xl xl:text-4xl font-semibold mb-4">
          Track Your Order
        </h1>
        <p className="font-Lato">
          All order updates will be available through this link.
        </p>
      </div>
      <div className="relative bg-light-blue px-20 mt-5">
        <input
          type="text"
          className="relative top-10 border placeholder:text-sm placeholder:opacity-80 outline-none
            rounded-md p-5 transition-all duration-300
            w-full focus:outline-[#1dabb3] h-14"
          placeholder="Tracking No."
        />
        <img
          onClick={() => {}}
          className="absolute bg-brand-red right-20 top-10  rounded-md p-2 h-14 cursor-pointer"
          src="./search.svg"
          alt="search"
        />
      </div>
      <OrderDetails />
      <OrderTable />
    </div>
  );
};

export default TrackSearch;
