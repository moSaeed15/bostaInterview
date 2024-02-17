import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuPackageCheck } from 'react-icons/lu';

const DeliveryBar = () => {
  const steps = [
    'Order Created',
    'Order Recived from merchant',
    'Order out for delivery',
    'Order Delivered',
  ];
  const [currentStep, setCurrentStep] = useState(3);
  const [complete, setComplete] = useState(false);
  const getIcon = index => {
    if (index === 3) {
      return <TbTruckDelivery size={30} color={`#fff`} />;
    } else if (index === 4) {
      return <LuPackageCheck size={30} color={`#e2e8f0`} />;
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between py-5 md:mt-5">
        {steps?.map((step, i) => (
          <div key={i} className="flex gap-0 ">
            <div
              className={`step-item
              ${i > 0 && i < steps.length ? 'before' : ''}  
              ${currentStep === i + 1 && 'active'} 
              ${i === steps.length - 1 && 'last'} 
              ${
                (currentStep >= i + 1 || complete) &&
                'complete before:bg-yellow'
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? (
                  <TiTick size={24} />
                ) : (
                  getIcon(i + 1)
                )}
              </div>
            </div>
            <p className="text-gray-500 whitespace-nowrap md:absolute md:left-[55%]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeliveryBar;
