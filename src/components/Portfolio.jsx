import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/card.png";
import j1 from  "../assets/j1.png"
import j2 from  "../assets/j2.png"
import j3 from  "../assets/j3.png"

const Portfolio = () => {
  const redirectToLink1 = () => {
    const link = "https://stirring-caramel-7f9758.netlify.app";
    window.open(link, "_blank");
  };
  const redirectToLink2 = () => {
    const link = "https://spectacular-granita-05bf57.netlify.app";
    window.open(link, "_blank");
  };
  const redirectToLink3 = () => {
    const link = "https://delicate-kulfi-c64358.netlify.app";
    window.open(link, "_blank");
  };
  const redirectToLink4 = () => {
    const link = "https://zippy-fox-8b5a76.netlify.app/";
    window.open(link, "_blank");
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        Portfolio
      </h1>
      <p className=" text-center font-semibold text-3xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        Images are Linked and Deployed Please have a look.
      </p>
      <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img1}
            alt="img"
            onClick={redirectToLink1}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img2}
            alt="img"
            onClick={redirectToLink1}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img3}
            alt="img"
            onClick={redirectToLink2}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img4}
            alt="img"
            onClick={redirectToLink2}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img5}
            alt="img"
            onClick={redirectToLink3}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={j1}
            alt="img"
            onClick={redirectToLink4}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={j2}
            alt="img"
            onClick={redirectToLink4}
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={j3}
            alt="img"
            onClick={redirectToLink4}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
