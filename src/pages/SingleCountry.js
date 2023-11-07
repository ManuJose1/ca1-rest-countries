import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container, Image, Card, ListGroup } from "react-bootstrap";

import Loading from "../components/Loading";

const SingleCountry = () => {
  let { name } = useParams();
  const [country, setCountry] = useState();
  const [weather, setWeather] = useState();

  //REST Countries API connection
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://goweather.herokuapp.com/weather/${name}`)
      .then((r) => {
        setWeather(r.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!country && !weather) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center">{country.name.official}</h1>
      <Container>
        <Row>
          <Col>
            <Image variant="left" src={country.flags.svg} alt={country.flags.alt} fluid />
          </Col>
          <Col xs={6}>
           <h3> Common name: <b>{country.name.common}</b></h3>
           <h3> Currency: <b>{Object.values(country.currencies)[0].name}</b> | Symbol: <b>{Object.values(country.currencies)[0].symbol}</b></h3>
           <h3> Region: <b>{country.region}</b></h3>
           <h3> Capital City: <b>{country.capital}</b></h3>
            
          </Col>
        </Row>
        
        <ListGroup className="list-group-flush">
          <h3>
            Weather
          <ListGroup.Item>Temperature: {weather.temperature}</ListGroup.Item>
          <ListGroup.Item>Wind Speed: {weather.wind}</ListGroup.Item>
          <ListGroup.Item>Description: {weather.description}</ListGroup.Item>
          </h3>
        </ListGroup>
      </Container>
    </>
  );
};

export default SingleCountry;
