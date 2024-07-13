import { Table, Tbody, Td, Th, Thead, Tr, Box } from "@chakra-ui/react";
import React from 'react';
import { useData } from '../../context/DataProvider';

const TableComponent = ({ filteredCustomers, amountRange, handleCustomerSelect }) => {
  const { transactions } = useData();

  (amountRange[0], amountRange[1]);

  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="blackAlpha" size="sm">
        <Thead>
          <Tr>
            <Th>Customer ID</Th>
            <Th>Customer Name</Th>
            <Th>Transaction ID</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredCustomers.length === 0 ? (
            <Tr>
              <Td colSpan={5}>No customers matching</Td>
            </Tr>
          ) : (
            filteredCustomers.map((customer, index) => {
              const customerTransactions = transactions.filter(
                (transaction) =>
                  transaction.customer_id == customer.id &&
                  transaction.amount >= amountRange[0] &&
                  transaction.amount <= amountRange[1]
              );
              return customerTransactions.length >= 0 ? (
                customerTransactions.map((transaction) => (
                  <Tr
                    key={transaction.id}
                    cursor={"pointer"}
                    onClick={() => handleCustomerSelect(customer.id)}
                    _hover={{
                      backgroundColor: customer.id % 2 === 0 ? 'gray.100' : 'gray.200',
                      color: "gray.800"
                    }}
                  >
                    <Td>{customer.id}</Td>
                    <Td>{customer.name}</Td>
                    <Td>{transaction.id}</Td>
                    <Td>
                      <span className="inline-block w-8 lg:w-12">{transaction.amount}</span>
                      <span className="curancy"> &#x24;</span>
                    </Td>
                    <Td>{transaction.date}</Td>
                  </Tr>
                ))
              ) : (
                <Tr key={customer.id}>
                  <Td colSpan={5}>No transactions found for this customer</Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
