/* Table.jsx */

import React from 'react';
import '../styles/Table.css';

const tableData = [
  { p: 1, team: 'Real Madrid', gp: 3, w: 2, d: 1, l: 0, f: 5, a: 1, gd: 4, pts: 7, form: 'Won 2-1 against Rayo Vallecano...' },
  { p: 2, team: 'Barcelona', gp: 2, w: 2, d: 1, l: 0, f: 5, a: 1, gd: 4, pts: 7, form: 'Won 2-1 villareal...' },
  { p: 3, team: 'Athletico Madrid', gp: 3, w: 2, d: 0, l: 1, f: 5, a: 1, gd: 4, pts: 5, form: 'loss 2-1 against Rayo Vallecano...' },
  { p: 4, team: 'Newcastle', gp: 3, w: 2, d: 0, l: 1, f: 5, a: 1, gd: 4, pts: 5, form: 'Won 2-1 against Girona...' },
  { p: 5, team: 'Athletico Club', gp: 3, w: 1, d: 1, l: 1, f: 5, a: 1, gd: 4, pts: 4, form: 'loss 2-1 against Real Madrid...' },
  { p: 6, team: 'Sevilla', gp: 3, w: 1, d: 1, l: 1, f: 5, a: 1, gd: 4, pts: 4, form: 'loss 2-1 against Barcelona...' },
  { p: 7, team: 'Cadiz', gp: 3, w: 1, d: 1, l: 1, f: 5, a: 1, gd: 4, pts: 4, form: 'Won 2-1 against Rayo Vallecano...' },
  { p: 8, team: 'Celta vigo', gp: 3, w: 1, d: 0, l: 2, f: 5, a: 1, gd: 4, pts: 3, form: 'loss 2-1 against Cadiz...' },
  { p: 9, team: 'Osasuna', gp: 3, w:1, d: 0, l: 2, f: 5, a: 1, gd: 4, pts: 3, form: 'loss 2-1 against  Celta vigo...' },
  { p: 10, team: ' Real sociedad', gp: 3, w:0, d: 1, l: 2, f: 5, a: 1, gd: 4, pts: 1, form: 'draw 2-1 against  valencia...' },
  { p: 11, team: 'Valencia', gp: 3, w: 0, d: 1, l: 2, f: 5, a: 1, gd: 4, pts: 1, form: 'draw 2-1 against Rayo Sevilla...' },
  { p: 12, team: 'Mallorca', gp: 3, w: 0, d: 0, l: 0, f: 5, a: 1, gd: 0, pts: 0, form: 'loss 2-1 against Getafe...' },
  { p: 13, team: 'Girona', gp: 3, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0, form: 'loss 2-1 against Valencia...' },

  // Add more data items...
];

const Table = () => {
  return (
    <div className="table-container">
      <h1>Laliga table:</h1>
      <table>
        <thead>
          <tr>
            <th>P</th>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>F</th>
            <th>A</th>
            <th>GD</th>
            <th>Pts</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.p}</td>
              <td>{data.team}</td>
              <td>{data.gp}</td>
              <td>{data.w}</td>
              <td>{data.d}</td>
              <td>{data.l}</td>
              <td>{data.f}</td>
              <td>{data.a}</td>
              <td>{data.gd}</td>
              <td>{data.pts}</td>
              <td>{data.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
