import { Card, Button } from "react-bootstrap";

const CountryCard = (props) => {
    return(
        
        <Card style={{ width: '18rem' }} border="secondary" className='mb-2'>
        <Card.Img variant="top" src={props.flag}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.region}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
    );
};

export default CountryCard;