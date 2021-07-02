import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'item', name: 'Item' },
  { key: 'amznPrice', name: 'Amzn $' },
  { key: 'storePrice', name: 'Store $' }
];
const rows = [];

class Results extends React.Component {
  
  componentDidMount() {
    rows.push(
      {id: 0, item: 'ball', amznPrice: 4.99, storePrice: 2.99}
    );
  }

  render() {
    return (
      <div>
        <ReactDataGrid
          rows={rows}
          columns={columns}
        />
      </div>
    );
  }
}

export default Results;