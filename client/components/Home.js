import React, { useContext } from "react";
import { LoggedInContext } from "../context/LoggedInContext";
// import { Carousel } from react-easy-carousel;
import slide1 from "../../assets/blood-ampules-10.jpeg";
import slide2 from "../../assets/draw-blood-10.jpeg";
import slide3 from "../../assets/emergency-10.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const { authenticated } = useContext(LoggedInContext);
  console.log("authenticated", authenticated);
  const CarouselImages = [
    {
      title: "Blood Donors",
      image: slide1,
    },
    {
      title: "Blood Rcipients",
      image: slide2,
    },
    {
      title: "Blood To Save Lives",
      image: slide3,
    },
  ];
  return (
    <div>
      <h1>is it hot reloading??</h1>
      {/* <Carousel>
        <div>
          <p>hello</p>
          <img src={slide1} />
        </div>
        <div>
          <p>hello</p>
          <img src={slide2} />
        </div>
        <div>
          <p>hello</p>
          <img src={slide1} />
        </div>
      </Carousel> */}
      {/* <div style={{ display: "flex", flexWrap: "nowrap", overFlow: "auto" }}> */}
      <div style={{ padding: "3%" }}>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          // width={"80%"}
          // centerMode={true}
          // centerSlidePercentage={"80%"}
          // dynamicHeight={true}
          // thumbWidth="10"
          // style={{ height: "25%", width: "80%", backgroundColor: "red" }}
        >
          {CarouselImages.map((element, index) => {
            return (
              <div key={index}>
                <img src={element.image} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
