import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className="flex gap-10">
        {/* <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a> */}
        {/* <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a> */}
        <a
          href="https://www.linkedin.com/in/lokesh-shah-6489211a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
        <a
          href="https://github.com/Lokeshshah02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={32}
            className="hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold">Lokesh shah</h1>
      </div>
    </div>
  );
};

export default Footer;
