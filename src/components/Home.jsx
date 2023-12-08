import React from "react";
import img from "../assets/profile.png";
import Button from "../layouts/Button";
import BouncingBallsCanvas from "../canvas component/Home"; // Import the BouncingBallsCanvas component

const Home = () => {
  return (
    
    <div className="relative min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      {/* Bouncing balls canvas behind the content */}
      <BouncingBallsCanvas className="fixed top-0 left-0 w-full h-full " />


      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Lokesh Kumar Shah
          <span className=" text-brightColor"> Front-end | MERN Stack </span>
          Developer
        </h1>
        <p>
          Passionate about development and continuous learning, I'm eager to
          embark on this journey, building robust solutions. With a strong work
          ethic, I'm dedicated to driving success in dynamic software
          development projects as a Frontend Developer and MERN Stack Developer.
        </p>
        <Button title="HIRE ME" />
      </div>
      <div className=" mt-20">
        <img width={570} src={img} alt="img" />
      </div>

    </div>
  );
};

export default Home;
