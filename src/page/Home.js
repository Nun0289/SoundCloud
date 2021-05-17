import React from "react";
import "react-awesome-slider/dist/styles.css";
import Cardcarousel from "../component/Cardcarousel.js";
import Tabletopweek from "../component/Table";
import Eventcarousel from "../component/Eventcarousel.js";
import { SHOW_MUSICS_LIST_QUERY } from "../GraphQL/musicListsQuery";
import { useQuery } from "@apollo/client";
import "react-jinke-music-player/assets/index.css";
// import ReactDOM from "react-dom";
// import ReactJkMusicPlayer from "react-jinke-music-player";
// const onBeforeDestroy = (currentPlayId, audioLists, audioInfo) => {
//   return new Promise((resolve, reject) => {
//     // your custom validate
//     if (window.confirm("Are you confirm destroy the player?")) {
//       // if resolve, player destroyed
//       resolve();
//     } else {
//       // if reject, skip.
//       reject();
//     }
//   });
// };
// const onDestroyed = (currentPlayId, audioLists, audioInfo) => {
//   console.log("onDestroyed:", currentPlayId, audioLists, audioInfo);
// };

export const Home = () => {
  const { loading, error, data } = useQuery(SHOW_MUSICS_LIST_QUERY);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error);
    return "Error !!";
  }
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3c096c",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3c096c",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          display: "grid",
          width: "100%",
          backgroundColor: "#10002B",
          flex: "1",
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
          <Cardcarousel name={"Top 10 Week"} datas={data.Top10Music} />
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
          <Tabletopweek datas={data.Top10Music} />
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
          <Cardcarousel name={"Thai song"} datas={data.ThaiMusic} />
        </div>
        <div
          style={{
            width: "200vh",
            height: "40vh",
            alignItems: "center",
          }}
        >
          <Cardcarousel name={"Inter Song"} datas={data.InterMusic} />
        </div>
        <div
          style={{
            width: "200vh",
            height: "40vh",
            alignItems: "center",
          }}
        >
          <Cardcarousel name={"EDM Song"} datas={data.EdmMusic} />
        </div>
        {/* .................................................................... */}
      </div>
    </div>
  );
};

export default Home;
