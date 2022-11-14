import React from "react";
import { useState } from "react";

const SelectCity = ({ cities = [] }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <select
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
    >
      <option disabled selected value>
        Please select city
      </option>
      {cities.map((city) => (
        <option key={city}>{city}</option>
      ))}
    </select>
  );
};

const SelectCountry = ({ countries, selectedCountry, setSelectedCountry }) => {
  return (
    <select
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
    >
      <option disabled selected value>
        Please select country
      </option>
      {countries.map((country) => (
        <option key={country}>{country}</option>
      ))}
    </select>
  );
};

export default function SelectCountryAndCity({ countriesAndCities }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = Object.keys(countriesAndCities);

  return (
    <p>
      <SelectCountry
        countries={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <SelectCity
        key={selectedCountry}
        cities={countriesAndCities[selectedCountry]}
      />
    </p>
  );
}
