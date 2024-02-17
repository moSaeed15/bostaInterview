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
const OrderTable = () => {
  return (
    <div className="font-Lato mx-5  mb-10 ">
      <ChakraProvider>
        <div className="flex flex-col md:flex-row gap-10">
          <TableContainer className="font-Lato mb-10 ">
            <h3 className="mb-5 font-semibold">Order Details</h3>
            <Table variant="simple">
              <Thead className="bg-slate-50">
                <Tr>
                  <Th>Branch</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <div className="">
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
      </ChakraProvider>
    </div>
  );
};

export default OrderTable;
