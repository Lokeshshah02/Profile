import React from "react";
import Servicescard from "../layouts/Servicescard";
import { BsAndroid, BsWordpress } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact} from "react-icons/di";
import { AiOutlineCodepen } from "react-icons/ai";
import { PiGameControllerFill } from "react-icons/pi";

const Services = () => {
  const icon1 = <BiCodeAlt size={55} className="text-brightColor" />;
  const icon2 = <BsAndroid size={55} className="text-brightColor" />;
  const icon3 = <DiReact size={55} className="text-brightColor" />;
  const icon4 = <AiOutlineCodepen size={55} className="text-brightColor" />;
  const icon5 = <PiGameControllerFill size={55} className="text-brightColor" />;
  const icon6 = <BsWordpress size={55} className="text-brightColor" />;
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
        My Services
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
        <Servicescard icon={icon1} title="web developer" />
        <Servicescard icon={icon2} title="app developer" />
        <Servicescard icon={icon3} title="mern developer" />
        <Servicescard icon={icon4} title="Freelancing" />
        <Servicescard icon={icon5} title="full stack developer" />
        <Servicescard icon={icon6} title="wordpress developer" />
      </div>
    </div>
  );
};

export default Services;
