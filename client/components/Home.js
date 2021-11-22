import React, { useContext } from "react";
import { LoggedInContext } from "../context/LoggedInContext";
// import { Carousel } from react-easy-carousel;
import slide1 from "../../assets/blood-ampules-6.jpeg";
import slide2 from "../../assets/blood-3.jpeg";
import slide3 from "../../assets/emergency-4.jpeg";
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
      <Carousel showThumbs={false} infiniteLoop={true}>
        {CarouselImages.map((element, index) => {
          return (
            <div key={index} style={{ height: 500 }}>
              <img src={element.image} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;
