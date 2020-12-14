import React, { useState,Component } from "react";
import InputPage from '../InputPage/InputPage';

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
  Modal,
  Col,
  Container,
  Grid,
  Panel,
  FormGroup,
  FormControl,
} from "react-bootstrap";


export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Faite votre coix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <InputPage />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

