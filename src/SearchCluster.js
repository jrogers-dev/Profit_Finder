import React from 'react';
import SiteDropdown from './SiteDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchCluster() {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <input type="text"></input>
        </Col>
        <Col>
          <SiteDropdown/>
        </Col>
        <Col>
          <Button variant="primary">Crawl!</Button>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default SearchCluster;