import React from "react";
import Nav from "../components/Nav";
import hero from "../assets/images/img1.jpg";

export default function Home() {
  return (
    <div className="px-6 h-screen relative bg-white">
      <Nav></Nav>
      <div className="h-[50vh] h-[calc(var(--vh, 1vh)*50)] grid place-items-center ">
        <div className="flex flex-col w-[60%] ">
          <div className="name flex items-baseline gap-2 self-start z-50 mix-blend-difference">
            <p className="font-playfair uppercase font-bold text-white text-6xl">
              oluwatimilehin
            </p>
            <p className="uppercase font-semibold font-lato text-white text-3xl">
              awoniyi
            </p>
          </div>
          <div className="flex items-end gap-2 font-playfair uppercase font-bold text-3xl text-OrangeRed self-end z-50">
            <p>frontend</p>
            <p>developer</p>
          </div>
        </div>
      </div>
      <div className=" group w-full h-[50vh] flex items-center">
        <div className="w-[33.333%] grid place-items-center ">
          <p className=" text-DarkText w-2/3 text-center font-lato ">
            Oluwatimilehin Awoniyi is a frontend developer from Lagos, Nigeria,
            with a love for creating user-friendly and visually appealing
            interfaces.
          </p>
        </div>
        <div className=" w-[33.333%] h-full overflow-hidden ">
          <img
            src={hero}
            alt=""
            className="hero  object-cover w-full h-full "
          />
        </div>
        <div className="w-[33.333%] grid place-items-center">
          <p className="text-DarkText w-2/3 text-center font-lato">
            In this portfolio, I have included a selection of my projects that
            showcase my skills and experience in UI development.
          </p>
        </div>
      </div>
    </div>
  );
}

//mix-blend-mode: difference
