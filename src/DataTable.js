import React, { useState } from 'react';

export default function DataTable({ rows }) {
  const columns = rows[0] && Object.keys(rows[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{rows[0] && columns.map((header) => <th> {header}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((data) => (
          <tr>
            {columns.map((columns) => (
              <td>{data[columns]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
