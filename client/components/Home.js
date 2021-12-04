import React, { useContext, useEffect } from "react";
import { LoggedInContext } from "../context/LoggedInContext";
// import { Carousel } from react-easy-carousel;
import slide1 from "../../assets/blood-ampules-10.jpeg";
import slide2 from "../../assets/lab-edit-6.jpeg";
import slide3 from "../../assets/lab-test-1.jpeg";
import pic1 from "../../assets/lavender-3.jpeg";
import pic2 from "../../assets/volunteer-2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import TestProject from "./TestProject";

const Home = () => {
  const { authenticated } = useContext(LoggedInContext);
  console.log("authenticated home screen", authenticated);
  const CarouselImages = [
    {
      title: "Blood Donors",
      image: slide1,
      button: (
        <button
          style={{
            position: "absolute",
            left: "30%",
            top: "70%",
            color: "white",
            backgroundColor: "#cc0000",
            // borderRadius: 20,
            width: 100,
            height: 40,
            fontWeight: "bold",
            borderColor: "#7a7a85",
            borderWidth: 2,
            elevation: 6,
          }}
        >
          SIGN UP
        </button>
      ),
    },
    {
      title: "Blood Rcipients",
      image: slide2,
      button: (
        <button
          style={{
            position: "absolute",
            left: "42%",
            top: "75%",
            color: "white",
            backgroundColor: "#cc0000",
            // borderRadius: 20,
            width: 150,
            height: 40,
            fontWeight: "bold",
            borderWidth: 2,
            borderColor: "#7a7a85",
            elevation: 6,
          }}
        >
          LEARN MORE
        </button>
      ),
    },
    {
      title: "Blood To Save Lives",
      image: slide3,
      button: (
        <button
          style={{
            position: "absolute",
            left: "42%",
            top: "75%",
            color: "white",
            backgroundColor: "#cc0000",
            // borderRadius: 20,
            width: 150,
            height: 40,
            fontWeight: "bold",
            borderColor: "#7a7a85",
            borderWidth: 2,
            elevation: 6,
          }}
        >
          LEARN MORE
        </button>
      ),
    },
  ];
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <Navbar />
      <TestProject />
      {/* <a href={"#bloodLinks"}>here</a> */}
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
            <div key={index} style={{ position: "relative" }}>
              <img src={element.image} />
              {element.button}
            </div>
          );
        })}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // height: "50%",
          height: 300,
          marginTop: "1%",
          marginBottom: "1%",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "50%",
            marginRight: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>register to get access to our exclusive donor database</p>
        </div>
        <div
          style={{ border: "2px solid black", width: "50%", borderRadius: 10 }}
        >
          <p>schedule donation or learn how to receive blood transfusion</p>
        </div>
      </div>
      {/* <img src={pic1} style={{ width: "100%" }} /> */}
      <div
        style={{
          backgroundImage: `url(${pic1})`,
          // width: "100%",
          display: "flex",
          flexDirection: "row",
          // height: "50%",
          // height: 500,
        }}
      >
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            borderRadius: 10,
            width: "20%",
            marginRight: "1%",
            // marginTop: "20%",
            marginBottom: "1%",
            marginLeft: "1%",
            // height: "30%",
            // border: "2 solid grey",
            // width: 200,
            // marginLeft: 10,
            // marginTop: 10,
            // padding: 5,
            // borderWidth: 3,
            // backgroundColor: "yellow",
            // borderColor: "red",
          }}
        >
          <p>hello</p>
        </div>
        {/* <p>hello world</p> */}
      </div>
      <div
        id="bloodLinks1"
        style={{
          backgroundImage: `url(${pic2})`,
          // width: "100%",
          // display: "flex",
          // flexDirection: "row",
          // height: "50%",
          height: 700,
        }}
      >
        <p>how to volunteer, learn more</p>
      </div>
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div
          id="bloodLinks"
          style={{
            display: "flex",
            justifyContent: "space-between",
            // height: "50%",
            height: 300,
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          <div
            style={{
              border: "2px solid black",
              borderRadius: 10,
              width: "50%",
              marginRight: "1%",
              // height: "30%",
              // border: "2 solid grey",
              // width: 200,
              // marginLeft: 10,
              // marginTop: 10,
              // padding: 5,
              // borderWidth: 3,
              // backgroundColor: "yellow",
              // borderColor: "red",
            }}
          >
            <p>register to get access to our exclusive donor database</p>
          </div>
          <div
            style={{
              border: "2px solid black",
              width: "50%",
              borderRadius: 10,
              marginRight: "1%",
            }}
          >
            <p>schedule donation or learn how to receive blood transfusion</p>
          </div>
          <div
            style={{
              border: "2px solid black",
              width: "50%",
              borderRadius: 10,
            }}
          >
            <p>schedule donation or learn how to receive blood transfusion</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // height: "50%",
            height: 300,
            marginTop: "1%",
            marginBottom: "1%",
          }}
        >
          <div
            style={{
              border: "2px solid black",
              width: "50%",
              borderRadius: 10,
              marginRight: "1%",
            }}
          >
            <p>schedule donation or learn how to receive blood transfusion</p>
          </div>
          <div
            style={{
              border: "2px solid black",
              width: "50%",
              borderRadius: 10,
              marginRight: "1%",
            }}
          >
            <p>schedule donation or learn how to receive blood transfusion</p>
          </div>
          <div
            style={{
              border: "2px solid black",
              width: "50%",
              borderRadius: 10,
              marginRight: "1%",
            }}
          >
            <p>schedule donation or learn how to receive blood transfusion</p>
          </div>
        </div>
      </Carousel>

      <div style={{ backgroundColor: "yellow" }}>
        {/* <Route path="/blog"
        component={() => {
          window.location.href = 'https://blah-blah';
          return null;
        }} */}
        <p>this is footnote</p>
      </div>
    </div>
  );
};

export default Home;
