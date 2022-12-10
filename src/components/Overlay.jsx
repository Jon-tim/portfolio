import React from "react";
export default function Overlay() {
  return (
    <div className="absolute w-full h-screen z-40">
      <div className="overlay-top w-full h-[50vh] flex items-center absolute top-0 left-0">
        <div className="a bg-black w-[33.333vw] h-full absolute left-0"></div>
        <div className="b bg-black w-[33.333vw] h-full absolute left-[33.333%]"></div>
        <div className="c bg-black w-[33.333vw] h-full absolute left-[66.666%]"></div>
      </div>
      <div className="overlay-bottom w-full h-[50vh] flex items-center absolute bottom-0 left-0">
        <div className="a bg-black w-[33.333vw] h-full absolute left-0"></div>
        <div className="b bg-black w-[33.333vw] h-full absolute left-[33.333%]"></div>
        <div className="c bg-black w-[33.333vw] h-full absolute left-[66.666%]"></div>
      </div>
    </div>
  );
}
