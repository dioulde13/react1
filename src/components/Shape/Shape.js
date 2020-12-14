import la from "../../image/la.jpg";
import "./Shape.css";
import {
    Nav,
  Navbar,
  Card,
  NavDropdown,
  MenuItem,
  Tabs,
  ButtonToolbar,
  Button,
  Table,
  ButtonGroup,
  Image,
  Row,
  Col,
  Container,
  Grid,
  Panel,
  FormGroup,
  FormControl,
  } from "react-bootstrap";

  const Shape = () => {
    return (
<Container className="cercle" >
 <h4 className="r">Restaurants à proximité</h4>
  <Row  style={{ margin: "1px" }}>
    <Col xs={2} md={2}>
      <Image src={la} roundedCircle  style={{ width: "120px" }}/>
    </Col>
  </Row>
  <Row style={{ margin: "1px" }}>
    <Col xs={2} md={2}>
      <Image src={la} roundedCircle  style={{ width: "120px" }}/>
    </Col>
  </Row>
  <Row style={{ margin: "1px" }}>
    <Col xs={2} md={2}>
      <Image src={la} roundedCircle  style={{ width: "120px" }}/>
    </Col>
  </Row>
  <Row  style={{ margin: "1px" }}>
    <Col xs={2} md={2}>
      <Image src={la} roundedCircle  style={{ width: "120px" }}/>
    </Col>
  </Row>
  <Row  style={{ margin: "1px" }}>
    <Col xs={2} md={2}>
      <Image src={la} roundedCircle  style={{ width: "120px" }}/>
    </Col>
  </Row>
</Container>
);
};
export default Shape;