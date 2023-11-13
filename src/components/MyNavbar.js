import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "../assets/App.css";

const MyNavbar = (props) => {
  let navigate = useNavigate();

  const handleRegion = (selected) => {
    navigate("/");
    props.onHandleRegion(selected);
    console.log(selected);
  };

  const handleInputChange = (e) => {
    navigate("/");
    props.onHandleChange(e);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark" variant="dark" class="my-nav">
        <Container>
          <Navbar.Brand href="#home">RestCountries</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>

          <DropdownButton
            title="Region"
            onSelect={handleRegion}
            variant="secondary"
            className="mx-5"
          >
            <Dropdown.Item eventKey="All">All Countries</Dropdown.Item>
            <Dropdown.Item eventKey="Americas">Americas</Dropdown.Item>
            <Dropdown.Item eventKey="Oceania">Oceania</Dropdown.Item>
            <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
            <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
            <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
          </DropdownButton>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={handleInputChange}
                  value={props.searchTerm}
                />
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
