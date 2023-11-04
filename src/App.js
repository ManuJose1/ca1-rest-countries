import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//Components
import MyNavbar from "./components/MyNavbar";

//Pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";

import "./assets/App.css";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");


  const onHandleChange = (e) => {
    setSearchTerm(e.target.value);
};

const onHandleRegion = (selected) => {
  setSelectedRegion(selected);
};

  return (
    <>
      <Router>
      <MyNavbar onHandleRegion={onHandleRegion} onHandleChange={onHandleChange} searchTerm={searchTerm}/>
        <Container>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} selectedRegion={selectedRegion}/>} />
                <Route path="/country/:name" element={<SingleCountry />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
};

export default App;
