import React from "react";
import lapin from "../../image/lapin.jpg";

import Jumbotron from "react-bootstrap/Jumbotron";
import "./HomePage.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image';
import Modale from '../Modale/Modale';
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
  Row,
  Col,
  Container,
  Grid,
  Panel,
  FormGroup,
  FormControl,
} from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="car">
      <Card style={{ padding: "10px" }} style={{ margin: "10px" }}>
        <Card.Img variant="top" src={lapin} rounded/>
        <Card.Body>
          <Card.Title>Aidez vos collaborateurs à se restaurer</Card.Title>
        </Card.Body>
        <Card.Footer>
          <a href="page2.html">Créez un compte professionnel</a>
        </Card.Footer>
      </Card>
      <Card style={{ padding: "10px" }} style={{ margin: "10px" }}>
        <Card.Img variant="top"  src={lapin} />
        <Card.Body>
          <Card.Title>
            Les plats de vos restaurants préférés, livrés chez vous
          </Card.Title>
        </Card.Body>
        <Card.Footer>
        <Modale />
        </Card.Footer>
      </Card>
      <Card style={{ padding: "10px" }} style={{ margin: "10px" }}>
        <Card.Img variant="top" src={lapin} />
        <Card.Body>
          <Card.Title>Livrez avec Uber Eats</Card.Title>
        </Card.Body>
        <Card.Footer>
          <a href="page2.html">Devenez coursier-partenaire</a>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default HomePage;
