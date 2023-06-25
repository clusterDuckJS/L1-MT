import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/NavBar/Navbar';
import { GlobalContext } from '../../context/GlobalContext';
import './home.css';
import Footer from '../../Components/Footer/Footer';

function Home() {
  const { data, setData, filteredData, setFilteredData, showAsia, setShowAsia, showEurope, setShowEurope } = useContext(
    GlobalContext
  );

  // Function to fetch data from the API (.env not used since its a public API)
  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to filter data according to region (asia and europe)
  useEffect(() => {
    if (showAsia) {
      const filteredItems = data.filter((item) => item.region === 'Asia');
      setFilteredData(filteredItems);
    } else if (showEurope) {
      const filteredItems = data.filter((item) => item.region === 'Europe');
      setFilteredData(filteredItems);
    } else {
      setFilteredData(data);
    }
  }, [showAsia, showEurope, data]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-container">
          {filteredData.map((item) => (
            <div key={item.name} className="card">
              <img className="flag" src={item.flag} alt={`flag of ${item.name}`} />
              <div className="data-text">
                <h3>{item.name}</h3>
                <p>{item.region}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
