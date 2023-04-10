import { Container, Row, Col, Button } from "reactstrap";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1 className="text-white attention">
              Best <span>Pizza</span> in Town
            </h1>
            <h3 className="pt-2 text-white">
              Got that Friday night craving for something
              delicious? We've got delivery! Order our Philly famous{" "}
              Pepperoni <span>Pizza</span>, 30 mins or less!
            </h3>
            <Button className="mt-1 order-btn text-black fw-bold btn-lg">Order Now</Button>'
          </Col>
          <Col className="d-none d-md-block" />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
