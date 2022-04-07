import React, { useState, useEffect } from 'react';
import './style.css';
import JSON_DATA from './MOCK_DATA.json';
import DataTable from './DataTable';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [searchColumn, setSearchColumn] = useState(["first_name", "last_name"])
  useEffect(() => {
    setData(JSON_DATA);
  }, []);

  function searchData(rows) {
    // const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
    searchColumn.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
      )
    );
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable rows={searchData(data)} />
    </div>
  );
}
