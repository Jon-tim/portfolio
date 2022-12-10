import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import Home from "./pages/Home";
import gsap from "gsap";
function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // console.log(vh, window.innerHeight);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // window.addEventListener("resize", () => {});

    //GSAP
    const tl = gsap.timeline();
    tl.to(".overlay-top div", 1, {
      yPercent: -100,
      delay: 2,
      stagger: {
        amount: 0.5,
      },
    })
      .to(".overlay-bottom div", 2, {
        yPercent: 100,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .from(".hero", 1.8, {
        ease: "expo.inOut",
        scale: 1.4,
        delay: -2,
      });
  }, []);
  return (
    <div className="App relative overflow-hidden">
      <Overlay></Overlay>
      <Home />
    </div>
  );
}

export default App;
