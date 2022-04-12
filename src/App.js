import React, { useState, useEffect } from 'react';
import './style.css';
import JSON_DATA from './MOCK_DATA.json';
import DataTable from './DataTable';
import { USER_PER_PAGE } from './utils/constants';
import Pagination from './Pagination';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchColumn, setSearchColumn] = useState(['first_name', 'last_name']);
  useEffect(() => {
    setData(JSON_DATA);
    setTotalPages(Math.ceil(JSON_DATA.length / USER_PER_PAGE));
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
  const handleClick = (num) => {
    setPage(num);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable rows={searchData(data)} page={page} />
      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </div>
  );
}
