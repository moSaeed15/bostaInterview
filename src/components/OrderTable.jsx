import PropTypes from 'prop-types';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ChakraProvider,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../utils/DateUtils';
const OrderTable = ({ orderData, language }) => {
  const [tableData, setTableData] = useState([]);
  const { t } = useTranslation();

  const stateTranslations = {
    TICKET_CREATED: t('orderTable.orderCreated'),
    PACKAGE_RECEIVED: t('orderTable.orderReceived'),
    OUT_FOR_DELIVERY: t('orderTable.outForDelivery'),
    DELIVERED: t('orderTable.orderDelivered'),
    DELIVERED_TO_SENDER: t('orderTable.orderDeliveredToSender'),
    CANCELLED: t('orderTable.orderCancelled'),
    WAITING_FOR_CUSTOMER_ACTION: t('orderTable.waitingForCustomerAction'),
  };

  const determineTableData = () => {
    const completedStates = [
      'TICKET_CREATED',
      'PACKAGE_RECEIVED',
      'OUT_FOR_DELIVERY',
      'DELIVERED',
      'DELIVERED_TO_SENDER',
      'CANCELLED',
    ];

    const uniqueArray = [];
    orderData.TransitEvents.reduce((unique, event) => {
      if (!unique.some(item => item.state === event.state) || event.reason) {
        unique.push(event);
        uniqueArray.push(event);
      }
      return unique;
    }, []);

    const wantedStates = uniqueArray.filter(event => {
      return completedStates.includes(event.state) || event.reason;
    });
    return wantedStates;
  };

  useEffect(() => {
    setTableData(determineTableData());
  }, []);

  return (
    <div className={` mb-10 ${language === 'en' ? 'font-Lato' : 'font-Cairo'}`}>
      <ChakraProvider>
        {tableData && (
          <div className="flex flex-col md:flex-row gap-10">
            <TableContainer className=" mb-10 w-[80%] ">
              <h3 className="mb-5 font-semibold">Order Details</h3>
              <Table variant="simple" size={{ base: 'sm', md: 'lg' }}>
                <Thead className="bg-slate-50">
                  <Tr>
                    <Th>{t('orderTable.details')}</Th>
                    <Th>{t('orderTable.date')}</Th>
                    <Th>{t('orderTable.time')}</Th>
                    <Th>{t('orderTable.reason')}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData?.map((item, i) => {
                    return (
                      <Tr key={i}>
                        <Td>{stateTranslations[item.state]}</Td>
                        <Td>{formatDate(item.timestamp)}</Td>
                        <Td dir="ltr">{formatTime(item.timestamp)}</Td>
                        <Td>
                          {item.reason &&
                            t(`orderTable.reasonText`, {
                              returnObjects: true,
                            })[item.reason]}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <div className="lg:w-[50%] xl:w-[35%] 2xl:w-[25%] ">
              <h3 className="mb-5 font-semibold">
                {t('orderTable.deliveryAddress')}
              </h3>
              <p className="bg-slate-50 max-w-[60ch] py-5 ltr:pl-5 ltr:pr-20 rtl:pr-5 rtl:pl-20">
                {t('orderTable.address')}
              </p>
              <div className="flex  items-center  py-5 border mt-3 rounded-lg border-slate-100">
                <img src="/question.png" alt="question" className="w-24 h-24" />
                <div className="flex flex-col">
                  <p className="font-bold  mx-2">
                    {t('orderTable.anyProblems')}
                  </p>

                  <button className=" mx-8 mt-4 p-2 px-10 bg-brand-red rounded-2xl text-white">
                    {t('orderTable.reportProblem')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </ChakraProvider>
    </div>
  );
};

OrderTable.propTypes = {
  orderData: PropTypes.object,
};
export default OrderTable;
