/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import { Cards, Chart, ContryPicker } from './components';

import styles from './App.module.css';

import { fetchData } from './api';

import image from './images/image.png';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function callApi() {
      const fetchedData = await fetchData();

      setData(fetchedData);
    }
    callApi();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <ContryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
