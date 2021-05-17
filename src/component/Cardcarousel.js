import Carousel from "react-multi-carousel";
import "react-jinke-music-player/assets/index.css";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/playsong.css";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

const Cardcarousel = ({ name, datas }) => {
  const datalist = datas?.reduce(
    (a, c, i) =>
      a.concat({
        id: i,
        name: c.name,
        img: c.img,
        description: c.description,
        cover: c.img,
        musicSrc: c.url,
        singer: c.artistName,
      }),
    []
  );
  const onBeforeDestroy = (currentPlayId, audioLists, audioInfo) => {
    return new Promise((resolve, reject) => {
      // your custom validate
      if (window.confirm("Are you confirm destroy the player?")) {
        // if resolve, player destroyed
        resolve();
      } else {
        // if reject, skip.
        reject();
      }
    });
  };
  const onDestroyed = (currentPlayId, audioLists, audioInfo) => {
    console.log("onDestroyed:", currentPlayId, audioLists, audioInfo);
  };
  const [isplaysong, setisplaysong] = useState(false);
  const [idsong, setidsong] = useState(0);
  const playmusic = (id) => {
    return setisplaysong(true), setidsong(id);
  };
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        margin: "auto",
      }}
    >
      {isplaysong ? (
        <ReactJkMusicPlayer
          audioLists={datalist}
          mode="full"
          playIndex={idsong}
          showMediaSession
          style={{ styles }}
          showDestroy
          onBeforeDestroy={onBeforeDestroy}
          onDestroyed={onDestroyed}
        />
      ) : null}
      <div>
        <h3 style={{ textAlign: "left", color: "#39ff14" }}>{name}</h3>
      </div>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        arrows={true}
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {datas.map((data, i) => {
          return (
            <div onClick={() => playmusic(i)}>
              <Card style={{ width: "15rem", backgroundColor: "#FFF" }}>
                <Card.Img
                  variant="top"
                  src={data?.img}
                  style={{ height: "120px" }}
                />
                <Card.Body>
                  <Card.Title>{data?.name}</Card.Title>
                  <Card.Text>{data?.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Cardcarousel;
