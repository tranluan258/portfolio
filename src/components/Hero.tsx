import HeroImg from "../assets/image.jpeg";

import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section className="px-5 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, I'm <span>L</span>uan <br />
            Software Engineer
          </h1>

          <TextGenerateEffect
            words="
            I am a software engineer with 2 year of
            experience in Javascript, TypeScript, Nodejs and Golang.
              "
            className="py-5"
          />

          <div className="flex py-5 ">
            <a
              href="https://www.facebook.com/luantran258"
              className="pr-4 inline-block"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://github.com/tranluan258"
              className="pr-4 inline-block"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/luan-tran-3ab717228/"
              className="pr-4 inline-block "
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="ml-auto p-20 rounded-full w-3/4 max-sm:w-full">
            <img
              src={HeroImg}
              alt="coding illustration"
              className="ml-auto rounded-full p-7 border-solid border-2  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
