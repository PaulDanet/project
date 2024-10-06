import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutMe() {
  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(".aboutMe-circle", {
        strokeDashoffset: 126,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(".aboutMe-arrowHeadH, .aboutMe-arrowHeadV, .aboutMe-arrowBody", {
        strokeDashoffset: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(".aboutMe-circle", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(".aboutMe-arrowBody", {
        strokeDashoffset: 58,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(".aboutMe-arrowHeadH", {
        strokeDashoffset: 29,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(".aboutMe-arrowHeadV", {
        strokeDashoffset: 13,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.inOut",
      });
    };
    const buttonElement = document.querySelector(".aboutMe-image");
    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);
  }, []); // [] assure que l'effet ne s'exécute qu'une seule fois

  return (
    <>
      <div className="aboutMe-image cursor-pointer flex justify-center absolute bottom-[10vw] left-[180px]">
        <div className="">
          <img
            src="src/assets/50721.jpg"
            className="rounded-xl  w-[18vw] -rotate-[85deg]"
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
              className="aboutMe-circle stroke-[#111111] -rotate-90 origin-center [stroke-dasharray:126] [stroke-dashoffset:0] stroke-1"
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
              d="M21 0.5h20.5"
              className="aboutMe-arrowHeadH stroke-[#111111] [stroke-dasharray:21] [stroke-dashoffset:29]"
            ></path>
            <path
              d="M41 0.5v20.5"
              className="aboutMe-arrowHeadV stroke-[#111111] [stroke-dasharray:21] [stroke-dashoffset:13]"
            ></path>
            <path
              d="M.5 41 41 .5"
              className="aboutMe-arrowBody stroke-[#111111] [stroke-dasharray:58] [stroke-dashoffset:58]"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
