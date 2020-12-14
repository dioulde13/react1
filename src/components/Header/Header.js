import React from "react";
import lapin from "../../image/lapin.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./Header.css";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron style={{ backgroundImage: `url(${lapin})` }}>
      <h5 className="sign_in">sign in</h5>
      <Button className="sign_up">sign up</Button>
      <h3>Un petit creux ? Vous êtes au bon endroit</h3>
      <Form className="bar">
        <FormControl
          type="text"
          placeholder="Entrer votre Quartier"
          className="mr-sm-2"
        />
        <Button>Search</Button>
      </Form>
    </Jumbotron>
  );
};
export default Header;
