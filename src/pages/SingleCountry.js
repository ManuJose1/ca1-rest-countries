import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container, Image } from "react-bootstrap";

import Loading from "../components/Loading";

const SingleCountry = () => {

    let {name} = useParams();
    const [country,setCountry] = useState();

    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
             .then((response)=>{
                setCountry(response.data[0]);
             })
             .catch((error)=>{
                error.log(error);
             })
    },[]);

    if (!country) {
        return <Loading/>;
      } 
      
    return(
        <>
        <Container>
            <h1>{country.name.official}</h1>
            <Row>
                <Image src={country.flags.svg} width={1400} height={700}/>
            </Row>
            <Row>
                <Col>
                <p><b>Common Name:</b></p>
                <p><b>Currency:</b></p>
                </Col>
                <Col>
                <p>{country.name.common}</p>
                <p>{Object.values(country.currencies)[0].name}</p>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default SingleCountry;