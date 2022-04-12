import React from 'react';
import { USER_PER_PAGE } from './utils/constants';

const DataTable = ({ rows, page }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = rows.slice(startIndex, startIndex + USER_PER_PAGE);
  const columns = selectedUsers[0] && Object.keys(rows[0]);

  return (
    <table>
      <thead>
        <tr>
          {selectedUsers[0] && columns.map((header) => <th>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {selectedUsers.map((data, key) => (
          <tr>
            {columns.map((columns) => (
              <td>{data[columns]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DataTable;
