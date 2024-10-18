import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageNumber() {
  useGSAP(() => {
    gsap.fromTo(
      ".separateNumber",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 4,
      }
    );

    gsap.fromTo(
      ".circle-progress",
      { strokeDashoffset: 880 },
      {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(".circle-progress", {
            delay: 1,
            duration: 2,
            strokeDashoffset: 880,
            ease: "power.out",
          });
          gsap.to(".circle-progress", {
            delay: 1,
            stroke: "#111111",
          });
        },
      }
    );

    gsap.to(".loadingNumber", {
      innerHTML: 100,
      snap: { innerHTML: 1 },
      duration: 3,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(".loadingText", {
          delay: 1,
          opacity: 0,
        });
      },
    });

    gsap.fromTo(
      ".pageNumberTop",
      {
        y: "10vw",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0vw",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: "power.out",
      }
    );

    gsap.fromTo(
      ".textTop",
      {
        y: "-1vw",
        opacity: 0,
      },
      {
        y: "0vw",
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: "power.out",
      }
    );

    gsap.fromTo(
      ".textBottom",
      {
        y: "1vw",
        opacity: 0,
      },
      {
        y: "0vw",
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: "power.out",
      }
    );

    gsap.fromTo(
      ".pageNumberBottom",
      {
        y: "-10vw",
        clipPath: "inset(100% 0 0 0)",
      },
      {
        y: "0vw",
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: "power.out",
      }
    );

    gsap.fromTo(
      ".arrowLeft",
      {
        x: "-1vw",
        opacity: 0,
      },
      {
        x: "0vw",
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: "power.out",
      }
    );

    gsap.fromTo(
      ".arrowRight",
      {
        x: "1vw",
        opacity: 0,
      },
      {
        x: "0vw",
        opacity: 1,
        duration: 1,
        delay: 4,
        ease: "power.out",
      }
    );
  });

  return (
    <>
      <div className="circlePageNumber fixed bottom-8 left-0 pl-12 pr-2 font-roboto bg-transparent z-40">
        <div className="loadingText absolute w-full flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] text-[#f0f0f0] pl-12">
          <span className="loadingNumber">0</span>
          <span>%</span>
        </div>
        <div className="uppercase text-center p-5 flex flex-col items-center justify-between w-[12rem] h-[13rem] relative">
          <span className="textTop text-sm">Page</span>
          <div>
            <div className="text-[4rem] leading-[0.8] mr-[2.5rem] overflow-hidden">
              <div className="w-20 h-[3.12rem] flex flex-col">
                <span className="pageNumberTop">0</span>
                <span className="pageNumberTop">1</span>
                <span className="pageNumberTop">2</span>
                <span className="pageNumberTop">3</span>
              </div>
            </div>
            <span className="pageNumberBottom text-6xl leading-[0.8] block ml-[2.5rem]">
              3
            </span>
          </div>
          <span className="textBottom text-sm font-extralight">Number</span>
          <span className="separateNumber absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[8rem] h-[1px] -rotate-45 border border-[#9696963e]"></span>
          <button className="arrowLeft absolute left-0 top-1/2 transform -translate-y-1/2 w-16 z-[2] cursor-pointer overflow-hidden">
            <svg
              width="30"
              height="17"
              viewBox="0 0 30 17"
              fill="none"
              className="icon-svg w-full"
            >
              <path
                className="stroke-current"
                d="M8.54736 16.6364L1.38827 8.26321L7.83145 0.727323"
              ></path>
              <path
                className="stroke-current"
                d="M1.38817 8.28388L30.0245 8.28387"
              ></path>
            </svg>
          </button>
          <button className="arrowRight absolute right-0 top-1/2 transform -translate-y-1/2 w-16 z-[2] cursor-pointer overflow-hidden">
            <svg
              width="30"
              height="17"
              viewBox="0 0 30 17"
              fill="none"
              className="icon-svg w-full"
            >
              <path
                className="stroke-current"
                d="M21.7229 0.363708L28.882 8.73691L22.4388 16.2728"
              ></path>
              <path
                className="stroke-current"
                d="M28.8821 8.71619L0.245728 8.71619"
              ></path>
            </svg>
          </button>
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            fill="none"
            className="circle w-full h-full absolute left-0 top-0 z-[0]"
          >
            <circle
              cx="140"
              cy="140"
              r="139.5"
              className="stroke-[#9696967b] [stroke-dasharray:880]"
            ></circle>
            <circle
              cx="140"
              cy="140"
              r="139.5"
              className="circle-progress stroke-[#f0f0f0] [stroke-dasharray:880]  origin-center -rotate-[90deg]"
            ></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
