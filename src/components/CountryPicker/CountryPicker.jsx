import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

// eslint-disable-next-line react/prop-types
const ContryPicker = ({ handleCountryChange }) => {
  const [fetchdCountries, setFetchdCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchdCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchdCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchdCountries.map((country, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default ContryPicker;
