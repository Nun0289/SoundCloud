import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Card } from "react-bootstrap";

const datalist = [
  {
    img:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    id: 1,
    name: "test1",
    description: "this test 1",
  },
  {
    img:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 2,
    name: "test2",
    description: "this test 2",
  },
  {
    img:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 3,
    name: "test3",
    description: "this test 3",
  },
  {
    img:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 4,
    name: "test4",
    description: "this test 4",
  },
  {
    img:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 5,
    name: "test5",
    description: "this test 5",
  },
  {
    img:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 6,
    name: "test6",
    description: "this test 6",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Cardcarousel = ({ name }) => {
  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        margin: "auto",
      }}
    >
      <div>
        <h3 style={{ textAlign: "left" }}>{name}</h3>
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
        {datalist.map((data) => {
          return (
            <div>
              <Card style={{ width: "15rem", backgroundColor: "#FFF" }}>
                <Card.Img
                  variant="top"
                  src={data.img}
                  style={{ height: "120px" }}
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
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
