import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

class Results extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactDataGrid
          rows={rows}
          columns={columns}
          minHeight={150} 
        />
      </div>
    );
  }
}

export default Results;