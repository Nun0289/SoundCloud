import React from "react";
import { Table } from "react-bootstrap";
const Tabletopweek = ({datas}) => {
  return (
    <div
      style={{
        width: "80%",
      }}
    >
      <div>
        <h3 style={{ textAlign: "left" }}>Top 10 song</h3>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data,i) => {
            return (
              <tr>
                <td>{i+1}</td>
                <td>{data?.name}</td>
                <td>{data?.artistName}</td>
                <td>{data?.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Tabletopweek;