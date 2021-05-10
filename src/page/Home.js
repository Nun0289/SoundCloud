import React from "react";
import "react-awesome-slider/dist/styles.css";
import Cardcarousel from "../component/Cardcarousel.js";
import Tabletopweek from "../component/Table.js";
import Eventcarousel from "../component/Eventcarousel.js";
export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3c096c",
      }}
    >
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
        {/* gallery event */}
        <div
          style={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
              width: "80%",
              borderRadius: "20px",
            }}
          >
            <Eventcarousel />
          </div>
        </div>
        {/* ...................................................................................... */}
        {/* gallery song */}
        <div
          style={{
            width: "200vh",
            height: "40vh",
            alignItems: "center",
          }}
        >
          <Cardcarousel name={"Top 10 Week"} />
        </div>
        {/* .................................................................... */}
        {/* table rank*/}
        <div
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabletopweek />
        </div>
        {/*...................*/}
        {/* gallery song */}
        <div
          style={{
            width: "200vh",
            height: "40vh",
            alignItems: "center",
          }}
        >
          <Cardcarousel name={"Thai song"} />
        </div>
        <div
          style={{
            width: "200vh",
            height: "40vh",
            alignItems: "center",
          }}
        >
          <Cardcarousel name={"Inter Song"} />
        </div>
        <div
          style={{
            width: "200vh",
            height: "40vh",
            alignItems: "center",
          }}
        >
          <Cardcarousel name={"EDM Song"} />
        </div>
        {/* .................................................................... */}
      </div>
    </div>
  );
};
export default Home;
