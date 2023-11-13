import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CountryCard = (props) => {
  return (
    <>
    <div>
      <b><p className='text-center'>{props.name}</p></b>
      <Card className='m-3 text-white' style={{ backgroundImage: `url(${props.flag})` }}>
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
