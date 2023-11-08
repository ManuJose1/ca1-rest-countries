import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CountryCard = (props) => {
  return (
    <>
    <div>
      <h2 className='text-center'>{props.name}</h2>
      <Card className='m-3 text-white' style={{ backgroundImage: `url(${props.flag})` }}>
        {/* <Card.Img variant="top" src={props.flag} /> */}
        <Card.Body className="text-center my-5">
          <div>
          <Link className="btn" to={`/country/${props.name}`}>
            <Button variant="dark">Show More</Button>
          </Link>
          </div>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default CountryCard;
