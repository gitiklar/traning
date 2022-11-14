import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import SelectColor from './select_color';
import SelectCountryAndCity from './select_country_and_city';


const countriesAndCities = {
  Israel: ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'],
  Jordan: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'],
  Syria: ['Damascus', 'Hama', 'Idlib', 'Raqqa'],
  Egypt: ['Cairo', 'Alexandria', 'Giza'],
};


export const MyApp = () => {

  return (
    <div>
      <h2>Country and City Select Demo</h2>
      <SelectCountryAndCity countriesAndCities={countriesAndCities} />
    </div>
  )
};
