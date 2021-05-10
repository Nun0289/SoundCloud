import React from "react";
import { Table } from "react-bootstrap";

const datalist = [
  {
    rank: 1,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 2,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 3,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 4,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 5,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 6,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 7,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 8,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 9,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
  {
    rank: 10,
    song: "อยากโดนช้อนเเกง",
    artist: "เเจ๊กเเป๊โฮ",
    votes: 69,
  },
];
export const Tabletopweek = () => {
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
          {datalist.map((data) => {
            return (
              <tr>
                <td>{data.rank}</td>
                <td>{data.song}</td>
                <td>{data.artist}</td>
                <td>{data.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Tabletopweek;
