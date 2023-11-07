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
        error.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://goweather.herokuapp.com/weather/${name}`)
      .then((r) => {
        setWeather(r.data);
      })
      .catch((error) => {
        error.log(error);
      });
  }, []);

  if (!country) {
    return <Loading />;
  }

  return (
    <>
      <Container>
            <p>{country.name.common}</p>
            <p>{Object.values(country.currencies)[0].name}</p>
      </Container>
      <h1 className='text-center'>{country.name.official}</h1>
      <Card>
        <Card.Img variant="top" src={country.flags.svg} />
        <Card.Body>
          <Card.Title>Common name: <b>{country.name.common}</b></Card.Title>
          <Card.Text>
                Currency: {Object.values(country.currencies)[0].name} {Object.values(country.currencies)[0].symbol}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default SingleCountry;
