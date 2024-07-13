import React from 'react';
import { Box, Flex, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react';
import ToggleDarkModeButton from '../../components/ToggleDarkModeButton';
import TableComponent from '../../components/TableComponent/TableComponent';
import { useData } from '../../context/DataProvider';
import Inputs from '../../components/Inputs';
import ChartModal from '../../components/ChartModal/ChartModal';
import AmountSlider from '../../components/AmountSlider/AmountSlider';

const Home = () => {
  const { customers, transactions } = useData();
  const [filter, setFilter] = React.useState({ name: '', amountRange: [0, 0] });

  const [selectedCustomer, setSelectedCustomer] = React. useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };



  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.name.toLowerCase())
  );
  const handleCustomerSelect =(id)=>{
    setSelectedCustomer(id);
    setIsModalOpen(true);

    console.log(transactions.filter(t => t.customer_id == selectedCustomer))
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className='transaction__container w-[80%] mx-auto'>
      <ToggleDarkModeButton />
      <section className='table__section'>
    

        <Box  px={8} as="header" className='filter-filed flex  my-8 ' >
          <div className='w-1/2  flex justify-center items-center'>
           <h1 className='font-bold text-4xl text-primary'>Transitions </h1>
            
          </div>
          <div className='scale-div  flex justify-between gap-8 border rounded-xl shadow-sm px-8  '>
            
        <Inputs
            id="name"
            label="Filter by name"
            type="text"
            name="name"
            placeholder="please enter customer name "
            value={filter.name}
            onChange={handleFilterChange}
          />
        <AmountSlider setFilter={setFilter} filter={filter}/>
          </div>
        </Box>       
        <Box >
          <TableComponent handleCustomerSelect={handleCustomerSelect} filteredCustomers={filteredCustomers} amountRange={filter.amountRange} />
        </Box>
      </section>
        {selectedCustomer && 
          <ChartModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          customer={selectedCustomer}
  
          transactionsCustomer={transactions.filter(t => t.customer_id == selectedCustomer)} 
          />
        }
    </main>
  );
};

export default Home;
