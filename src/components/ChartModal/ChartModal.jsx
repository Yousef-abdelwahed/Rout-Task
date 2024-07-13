import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'; // Import components from your UI library
import TransactionChart from '../TransactionChart/TransactionChart ';

const ChartModal = ({ isOpen, onClose, customer, transactionsCustomer }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Transaction Chart for {customer.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TransactionChart customer={customer} transactions={transactionsCustomer} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChartModal;
