import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchCluster() {
  return (
    <Container fluid className="my-2">
      <Form>
        <Row>
          <Col xs={7}>
            <Form.Control as="input" placeholder="Search for..."></Form.Control>
          </Col>
          <Col>
            <Form.Control
              as="select"
            >
              <option value="0">Site Selector...</option>
              <option value="1">Walmart</option>
              <option value="2">Target</option>
              <option value="3">Lowes</option>
            </Form.Control>
          </Col>
          <Col className="">
            <Button type="submit" variant="outline-primary" className="w-100">Crawl!</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchCluster;