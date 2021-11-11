import './login.css'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { Context } from "../../context/Context";
import { useContext, useRef } from 'react';

export default function Login() {
    const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    return (
        <Container>
            <Row className="justify-content-md-center login">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" 
                            ref={userRef}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            ref={passwordRef}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isFetching}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
