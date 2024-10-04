import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutMe() {
  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to("circle", {
        strokeDashoffset: 95,
        strokeDasharray: 95,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to("path", {
        strokeDashoffset: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
    };
    const handleMouseLeave = () => {
      gsap.to("circle", {
        strokeDashoffset: 0,
        strokeDasharray: 0,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(".arrow-body", {
        strokeDashoffset: 58,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(".arrow-head", {
        strokeDashoffset: 21,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
    };
    const buttonElement = document.querySelector(".experiences-image");
    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);
  }, []); // [] assure que l'effet ne s'exécute qu'une seule fois

  return (
    <>
      <div className="experiences-image cursor-pointer flex justify-center absolute bottom-[13vw] left-[150px]">
        <div className="">
          <img
            src="src/assets/50721.jpg"
            className="rounded-xl  w-[28vw] -rotate-[85deg]"
          ></img>
        </div>
        <div className="relative">
          <svg
            height="32"
            width="32"
            viewBox="0 0 42 42"
            className="absolute bottom-[68px] right-1"
          >
            <circle
              className="stroke-[#111111] [stroke-dasharray:0] [stroke-dashoffset:0] stroke-1"
              fill="none"
              r="20"
              cx="21"
              cy="21"
            ></circle>
          </svg>
          <svg
            height="40"
            width="40"
            viewBox="0 0 42 42"
            className="absolute bottom-12 right-4"
          >
            <path
              d="M21 .5h20.5"
              className="arrow-head stroke-[#111111] [stroke-dasharray:16] [stroke-dashoffset:21]"
            ></path>
            <path
              d="M41 0.5v20.5"
              className="arrow-head stroke-[#111111] [stroke-dasharray:30] [stroke-dashoffset:21]"
            ></path>
            <path
              d="M.5 41 41 .5"
              className="arrow-body stroke-[#111111] [stroke-dasharray:58] [stroke-dashoffset:58]"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
