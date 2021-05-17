import React from "react";
import playmusic from "../component/playsong/playsong";
const MusicInfomation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3c096c",
      }}
    >
      <playmusic />
      <div
        style={{
          display: "grid",
          width: "100%",
          backgroundColor: "#10002B",
          marginLeft: "6em",
          flex: "3",
          flexDirection: "column",
        }}
      >
        <div>
          <h1>MusicInfomation</h1>
        </div>
      </div>
    </div>
  );
};
export default Musicinfomation;
