import React, { useState,Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login_up.css";

export default function Login() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && firstname.length > 0 && lastname.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>

      <Form.Group size="lg" controlId="firstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            autoFocus
            type="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            autoFocus
            type="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login up
        </Button>
      </Form>
    </div>
  );
}