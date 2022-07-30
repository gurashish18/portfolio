import React from "react";
import Me from "../assets/me.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full  mr-40">
          <h4 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-500">
              <Typewriter
                options={{ loop: true, autoStart: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Full Stack developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .start()
                    .typeString("Student")
                    .pauseFor(2500)
                    .deleteAll()
                    .start()
                    .typeString("Learner")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </h2>
          </h4>
          <p className="text-gray-500 py-4 max-w-md">
            Final year student at Thapar Institute of Engineering and Technology
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              More about me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Me}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-half"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
