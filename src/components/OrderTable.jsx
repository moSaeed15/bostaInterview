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
import { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../utils/DateUtils';
const OrderTable = ({ orderData, language }) => {
  const [tableData, setTableData] = useState([]);

  const stateTranslations = {
    TICKET_CREATED: 'Order Created',
    PACKAGE_RECEIVED: 'Order Received from Merchant',
    OUT_FOR_DELIVERY: 'Order Out for Delivery',
    DELIVERED: 'Order Delivered',
    DELIVERED_TO_SENDER: 'Order Delivered to Sender',
    CANCELLED: 'Order Cancelled',
    WAITING_FOR_CUSTOMER_ACTION: 'Waiting for Customer action',
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
      if (!unique.includes(event.state) || unique.reason || unique.hub) {
        unique.push(event.state);
        uniqueArray.push(event);
      }
      return unique;
    }, []);
    const wantedStates = uniqueArray.filter(event => {
      return completedStates.includes(event.state) || event.reason || event.hub;
    });
    console.log(wantedStates);
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
                    <Th>Details</Th>
                    <Th>Date</Th>
                    <Th>Time</Th>
                    <Th>Reason</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData?.map((item, i) => {
                    return (
                      <Tr key={i}>
                        <Td>{stateTranslations[item.state]}</Td>
                        <Td>{formatDate(item.timestamp)}</Td>
                        <Td>{formatTime(item.timestamp)}</Td>
                        <Td>{item.reason}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <div className="lg:w-[50%] xl:w-[35%] 2xl:w-[25%] ">
              <h3 className="mb-5 font-semibold">Address of delivery</h3>
              <p className="bg-slate-50 max-w-[60ch] py-5 pl-5 pr-20">
                20 Street 66, New Cairo 1, Cairo Governorate 4723412
              </p>
              <div className="flex  items-center  py-5 border mt-3 rounded-lg border-slate-100">
                <img src="/question.png" alt="question" className="w-24 h-24" />
                <div className="flex flex-col">
                  <p className="font-bold  mx-2">
                    Do you have any problems with your order?!
                  </p>
                  <button className=" mx-8 mt-4 p-2 px-10 bg-brand-red rounded-2xl text-white">
                    Report the problem
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
