import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const columns = [
  { key: 'id', name: 'ID', width: 50 },
  { key: 'item', name: 'Item' },
  { key: 'amznPrice', name: 'Amzn $' },
  { key: 'storePrice', name: 'Store $' },
  { key: 'difference', name: 'Diff'}
];
const rows = [];

function Results() {

  return (
    <Container fluid>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Amazon $</th>
            <th>Store $</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Ball</td>
            <td>4.99</td>
            <td>2.99</td>
            <td>2.00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}


export default Results;