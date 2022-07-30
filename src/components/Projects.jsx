import React from "react";
import amazon from "../assets/portfolio/amazon-clone.png";
import ekart from "../assets/portfolio/ekart.png";
import news from "../assets/portfolio/news.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ekart,
      heading: "Ekart-An ecommerce site",
      points: [
        "Built an application that allows users to buy second hand products.",
        "Contains all features like login/signup using JWT authentication, forgot/reset password using nodemailer, price filtering, adding reviews, payment gateway.",
        "Admin dashboard for stats and CRUD operations on products, orders and users.",
        "Technology used: Reactjs, Expressjs, MongoDB, Nodejs, Stripe API.",
      ],
    },
    {
      id: 2,
      src: news,
      heading: "DayStart News - A News Application",
      points: [
        "Developed a mobile application which will display news articles from an API.User can browse news articles through various categories. App will enable user to view news details, images.",
        "User can search news and switch between dark mode and light mode.",
        "Technology used: React Native, Expo, Context API",
      ],
    },
    {
      id: 3,
      src: amazon,
      heading: "Amazon Clone",
      points: [
        "Built a frontend clone of Amazon",
        "Contains features like login/signup, add/remove products from cart",
        "Technology used: Reactjs, Redux",
      ],
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline ">Projects 💻</p>
          <p className="py-6">Check out some of my personal projects...</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
          {portfolios.map(({ id, src, heading, description, points }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl">{heading}</h1>
                {points.map((p) => (
                  <p className="text-1xl">- {p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
