import React from "react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-DarkText border-opacity-30 py-3  top-0 left-6 right-6 absolute">
      <p className="font-lato text-OrangeRed">12:00 AM</p>
      <h1 className="font-playfair font-bold text-4xl xl:text-5xl text-DarkText">
        OA
      </h1>
      <div className="flex flex-col gap-2 items-end cursor-pointer ">
        <span className="hamburger"></span>
        <span className="hamburger w-5"></span>
      </div>
    </nav>
  );
}

//height: calc(var(--vh, 1vh)*50)
//let vh = window.innerHeight * .01
// add 'px' to vh