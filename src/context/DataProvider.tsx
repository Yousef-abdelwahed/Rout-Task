import React from "react";
import axios from "axios";

const DataContext = React.createContext({ customers: [], transactions: [] });

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState({ customers: [], transactions: [] });
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await axios.get(
          "http://localhost:3001/customers"
        );
        const transactionResponse = await axios.get(
          "http://localhost:3001/transactions"
        );
        setData({
          customers: customerResponse.data,
          transactions: transactionResponse.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => React.useContext(DataContext);
