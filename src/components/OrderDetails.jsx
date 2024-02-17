import PropTypes from 'prop-types';

import DeliveryBar from './DeliveryBar';
import DetailsText from './DetailsText';
import { dateFormat } from '../utils/DateUtils';

const OrderDetails = ({ orderData, language }) => {
  const getColor = (status, isText = false, isBefore = false) => {
    if (isText) {
      if (status === 'DELIVERED') return 'text-green';
      else if (status === 'CANCELLED') return 'text-brand-red';
      else return 'text-yellow';
    } else if (isBefore) {
      if (status === 'DELIVERED') return 'before:bg-green';
      else if (status === 'CANCELLED') return 'before:bg-brand-red';
      else return 'before:bg-yellow';
    } else {
      if (status === 'DELIVERED') return 'bg-green';
      else if (status === 'CANCELLED') return 'bg-brand-red';
      else return 'bg-yellow';
    }
  };
  return (
    <div
      className={` mb-10 mt-20 py-5 border border-track-border ${
        language === 'en' ? 'font-Lato' : 'font-Cairo'
      }`}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-y-5 border-b py-5 border-track-border md:gap-x-20 xl:grid-cols-4 md:px-20">
        <div className="flex flex-col gap-1">
          <span className="opacity-70">
            Order Number {orderData.TrackingNumber}
          </span>
          <span
            className={`${getColor(
              orderData.CurrentStatus.state,
              true
            )} font-semibold`}
          >
            {orderData.CurrentStatus.state === 'DELIVERED_TO_SENDER' &&
              'Order is returned back to the shipper'}
            {orderData.CurrentStatus.state === 'DELIVERED' &&
              'Order has been delivered'}
            {orderData.CurrentStatus.state === 'CANCELLED' &&
              'Order has been cancelled'}
          </span>
        </div>
        <DetailsText
          title={'Last Updated'}
          text={dateFormat(orderData.CurrentStatus.timestamp)}
        />
        <DetailsText title={'Merchant name'} text={orderData.provider} />
        <DetailsText
          title={'Delivery Date'}
          text={dateFormat(orderData.PromisedDate)}
        />
      </div>
      <DeliveryBar getColor={getColor} orderData={orderData} />
    </div>
  );
};

OrderDetails.propTypes = {
  orderData: PropTypes.object,
};

export default OrderDetails;
