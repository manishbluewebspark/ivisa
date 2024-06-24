import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const username1 = 'admin';
  const password1 = '1234';
  const encodedCredentials = 'Basic ' + btoa(username1 + ':' + password1);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };



  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('https://thesoftwareexperts.com/cdksolar/admin/api/login', {
              email: email,
              password: password
          }, { headers });

          if (response.data.status) {
              console.log(response.data);
              setMessage('Login successful!');
              // Save the user data or token here
              localStorage.setItem('user', JSON.stringify(response.data));
              // You can save the user data or token here, and redirect the user
              navigate('/application');
          } else {
              setMessage('Login failed: ' + response.data.message);
          }
      } catch (error) {
          setMessage('Login failed: ' + error.message);
      }
  };
  return (
    <Container className='login-con'>
      <Row className="justify-content-md-center mt-5">
        <Col className='login-form-col' xs={12} md={6}>
          <h3 className="text-center">Login</h3>
          {message && <Alert variant="danger">{message}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
