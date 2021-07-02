import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID', width: 50 },
  { key: 'item', name: 'Item' },
  { key: 'amznPrice', name: 'Amzn $' },
  { key: 'storePrice', name: 'Store $' },
  { key: 'difference', name: 'Diff'}
];
const rows = [];

class Results extends React.Component {

  componentDidMount() {
    for(let i = 0; i < 10; i++) {
      rows.push(
        {
          id: i, 
          item: 'ball', 
          amznPrice: 4.99, 
          storePrice: 2.99, 
          difference: (4.99 - 2.99)
        }
      );
    }
  }

  render() {
    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rows={rows}
        />
      </div>
    );
  }
}

export default Results;