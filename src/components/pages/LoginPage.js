import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import logo from "../../logo.svg";

const LoginPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "NanumSquare",
      }}
      className="d-flex align-items-center"
    >
      <div className="d-flex login-content">
        <div className="flex-grow-1 login-module d-flex flex-column">
          <a className="align-self-center login-logo">
            <img src={logo} alt="Logo" />
          </a>
          <Form
            className="login-form"
            //   onSubmit={tryLogin}
          >
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                // onChange={(value) => setEmail(value.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                // onChange={(value) => setPassword(value.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="login-button" variant="primary">
              Login
            </Button>
            <Form.Text className="text-muted">
              New to RetroCalendar? <a href="/register">Register</a>
            </Form.Text>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
