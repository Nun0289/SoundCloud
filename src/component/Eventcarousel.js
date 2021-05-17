import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const datalist = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bumS0kN8UT1HkOeTB0cmcVTJZL9aPW5b_A&usqp=CAU",
  },
  {
    img: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-0/p206x206/184176611_136721825143898_3979123847513896001_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_eui2=AeGg56xLj7iW266km2e2U_xXY7w_D_2gHE1jvD8P_aAcTQXCrsrCFNQnGdb7CrEXEZWrEVY7FnTVVRmlUS94G8Bq&_nc_ohc=jjUMfp97MQkAX-M-kXu&_nc_ht=scontent.fbkk22-1.fna&tp=6&oh=30c25a49af4848115a9481f2b6324fa3&oe=60C00103",
  },
  {
    img: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-0/p206x206/184176611_136721825143898_3979123847513896001_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_eui2=AeGg56xLj7iW266km2e2U_xXY7w_D_2gHE1jvD8P_aAcTQXCrsrCFNQnGdb7CrEXEZWrEVY7FnTVVRmlUS94G8Bq&_nc_ohc=jjUMfp97MQkAX-M-kXu&_nc_ht=scontent.fbkk22-1.fna&tp=6&oh=30c25a49af4848115a9481f2b6324fa3&oe=60C00103",
  },
  {
    img: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-0/p206x206/184176611_136721825143898_3979123847513896001_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_eui2=AeGg56xLj7iW266km2e2U_xXY7w_D_2gHE1jvD8P_aAcTQXCrsrCFNQnGdb7CrEXEZWrEVY7FnTVVRmlUS94G8Bq&_nc_ohc=jjUMfp97MQkAX-M-kXu&_nc_ht=scontent.fbkk22-1.fna&tp=6&oh=30c25a49af4848115a9481f2b6324fa3&oe=60C00103",
  },
  {
    img: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-0/p206x206/184176611_136721825143898_3979123847513896001_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_eui2=AeGg56xLj7iW266km2e2U_xXY7w_D_2gHE1jvD8P_aAcTQXCrsrCFNQnGdb7CrEXEZWrEVY7FnTVVRmlUS94G8Bq&_nc_ohc=jjUMfp97MQkAX-M-kXu&_nc_ht=scontent.fbkk22-1.fna&tp=6&oh=30c25a49af4848115a9481f2b6324fa3&oe=60C00103",
  },
];
const Eventcarousel = () => {
  return (
    <AwesomeSlider
      animation="cubeAnimation"
      style={{ height: "100%", width: "100%", borderRadius: "20px" }}
    >
      {datalist.map((data) => {
        return <div data-src={data.img} />;
      })}
    </AwesomeSlider>
  );
};
export default Eventcarousel;
