import { Container, Row, Col, Card } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <Container>
        <Card className="mt-5">
          <h1>Sorry, Page Not Found</h1>
          <Card.Text>This page does not exist</Card.Text>
        </Card>
    </Container>
  );
};

export default PageNotFound;
