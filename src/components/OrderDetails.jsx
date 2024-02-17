import DeliveryBar from './DeliveryBar';

const OrderDetails = () => {
  return (
    <div className=" mb-10 mt-20 py-5 mx-5 border border-track-border font-Lato">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-y-5 border-b py-5 border-track-border md:gap-x-20 md:px-20">
        <div className="flex flex-col gap-1">
          <span className="opacity-70"> Order Number 1321331</span>
          <span className="text-yellow font-semibold">
            Didnt Receive the package
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="opacity-70">Last Updated</span>
          <span className="font-semibold">Monday</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="opacity-70">Merchant name</span>
          <span className="font-semibold">souq</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="opacity-70">Delivery Date</span>
          <span className="font-semibold">3 January</span>
        </div>
      </div>
      <DeliveryBar />
    </div>
  );
};

export default OrderDetails;
