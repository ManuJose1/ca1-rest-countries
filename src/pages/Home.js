import { useState, useEffect } from "react";
import axios from "axios";
import {Row} from "react-bootstrap";

import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";

const Home = (props) => {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  //Connect to REST-Countries API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
        setCountriesList(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Filter by Region
  useEffect(() => {
    if (props.selectedRegion === "All" || props.selectedRegion === "") {
      setFilteredCountries(countriesList);
    } else {
      let filter = countriesList.filter((country) => {
        return country.region === props.selectedRegion;
      });
      setFilteredCountries(filter);
    }
  }, [countriesList, props.selectedRegion]);

  //Search for a country
  useEffect(() => {
    if (props.searchTerm <= 2) {
      setFilteredCountries(countriesList);
    } else {
      let filter = countriesList.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(props.searchTerm.toLowerCase());
      });
      setFilteredCountries(filter);
      console.log(filter);
    }
  }, [countriesList, props.searchTerm]);

  let countryCards = filteredCountries.map((country, i) => {
    return (
      <>
        <CountryCard
          key={i}
          flag={country.flags.png}
          name={country.name.common}
          region={country.region}
        />
        
      </>
    );
  });

  return (
    <>
    <h1 className='text-center' >{props.selectedRegion}</h1>
    <hr/>
      <Row className="g-4" style={{justifyContent:"center"}} md={4} xs={2}>
        {countriesList.length > 0 ? countryCards : <Loading />}
      </Row>

    </>
  );
};

export default Home;
