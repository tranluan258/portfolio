import React from "react";
import HeroImg from "../assets/image.jpg";

import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="px-5  py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span>L</span>uan <br />
            Software Engineer
          </h1>

          <p className="py-5">
            I am software engineer with 2 year of experience in Javascript,
            TypeScript, Nodejs and Golang
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.facebook.com/luantran258"
              className="pr-4 inline-block hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://github.com/tranluan258"
              className="pr-4 inline-block hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/luan-tran-3ab717228/"
              className="pr-4 inline-block  hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
