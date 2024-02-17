import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { TbTruckDelivery } from 'react-icons/tb';
import { LuPackageCheck } from 'react-icons/lu';

const DeliveryBar = ({ orderData, getColor }) => {
  const steps = [
    'Order Created',
    'Order Recived from merchant',
    'Order out for delivery',
    'Order Delivered',
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const determineCompletedSteps = () => {
    let step = 0;
    const completedStates = [
      'TICKET_CREATED',
      'PACKAGE_RECEIVED',
      'OUT_FOR_DELIVERY',
      'DELIVERED',
      'DELIVERED_TO_SENDER',
    ];

    const uniqueStates = orderData.TransitEvents.reduce((unique, event) => {
      if (!unique.includes(event.state)) {
        unique.push(event.state);
      }
      return unique;
    }, []);
    if (uniqueStates.includes('DELIVERED_TO_SENDER')) {
      step = 3;
    } else {
      uniqueStates.forEach(event => {
        if (completedStates.includes(event)) {
          step++;
        }
      });
    }
    return step;
  };
  useEffect(() => {
    setCurrentStep(determineCompletedSteps());
  }, []);
  const getIcon = index => {
    if (index === 1) {
      return (
        <img
          src={
            currentStep === index
              ? '/order-created-b.svg'
              : '/order-created.svg'
          }
          alt="order created"
          className="w-[30px] h-[30px] ml-1 mb-1"
        />
      );
    } else if (index === 2) {
      return (
        <img
          src={currentStep === index ? '/received.svg-b' : '/received.svg'}
          alt="received"
          className="w-[30px] h-[30px] "
        />
      );
    } else if (index === 3) {
      return (
        <TbTruckDelivery
          size={30}
          color={`${currentStep === index ? '#fff' : '#e2e8f0'}`}
        />
      );
    } else if (index === 4) {
      return (
        <LuPackageCheck
          size={30}
          color={`${currentStep === index ? '#fff' : '#e2e8f0'}`}
        />
      );
    }
  };

  const getStepClassName = (currentState, index) => {
    const baseClass = 'step w-10 h-10 ';
    if (currentStep === index + 1) {
      return baseClass + ' [&&]:w-10 [&&]:h-10 ' + getColor(currentState);
    } else if (currentStep > index + 1) {
      return baseClass + ' [&]:w-5 [&]:h-5 ' + getColor(currentState);
    } else {
      return baseClass + ' bg-white';
    }
  };

  const getStepItemClassName = i => {
    let classNames = 'step-item';
    if (i > 0 && i < steps.length) {
      classNames += ' before';
    }
    if (i === steps.length - 1) {
      classNames += ' last';
    }
    if (currentStep >= i + 1) {
      classNames += ` ${getColor(orderData.CurrentStatus.state, false, true)}`;
    } else {
      classNames += ' before:bg-slate-200';
    }
    return classNames;
  };

  return (
    <>
      <div
        className="flex flex-col justify-between
       py-5 md:mt-5 lg:justify-between lg:w-[100%] lg:ml-10 lg:flex-row relative"
      >
        {steps?.map((step, i) => (
          <div key={i} className="flex gap-0 ">
            <div className={getStepItemClassName(i)}>
              <div
                className={getStepClassName(orderData.CurrentStatus.state, i)}
              >
                {i + 1 < currentStep ? <TiTick size={24} /> : getIcon(i + 1)}
              </div>
            </div>
            <p className="text-gray-500 whitespace-nowrap md:absolute md:left-[55%] lg:relative lg:w-[120px] lg:whitespace-normal lg:text-center lg:-left-[55%] lg:-top-3 ">
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

DeliveryBar.propTypes = {
  orderData: PropTypes.object,
  getColor: PropTypes.func,
};

export default DeliveryBar;
