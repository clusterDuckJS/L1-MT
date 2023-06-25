import { createContext, useState } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showAsia, setShowAsia] = useState(false);
  const [showEurope, setShowEurope] = useState(false);

  return (
    <GlobalContext.Provider value={{ data, setData, filteredData, setFilteredData, showAsia, setShowAsia, showEurope, setShowEurope }}>
      {children}
    </GlobalContext.Provider>
  );
};