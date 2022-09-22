import { Row, Col, Card, Form, Button } from "react-bootstrap";

export function LoginForm() {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col sm="4">
        <Card>
          <Card.Header className="text-center">Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="d-grid">
                <Button variant="dark"> LOGIN</Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
