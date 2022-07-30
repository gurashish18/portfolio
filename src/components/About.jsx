import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">About Me 😀</p>
        </div>

        <p className="text-xl mt-20 leading-10">
          Hi 👋, I am Gurashish Singh Gill from India. I am passionate about Web
          development, problem-solving, and playing badminton 🏸. I am currently
          pursuing BE (Bachelor of Engineering) that is focused on Computer
          Science and Engineering from Thapar Institute of Engineering and
          Technology, Patiala, India.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
