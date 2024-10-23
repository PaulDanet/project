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
      <div className="circlePageNumber fixed lg:bottom-8 bottom-4 left-2 lg:pl-12 lg:pr-2 pl-4 font-roboto bg-transparent z-40">
        <div className="loadingText absolute w-full flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-6xl md:text-4xl text-3xl text-[#f0f0f0] lg:pl-12 pl-6">
          <span className="loadingNumber">0</span>
          <span>%</span>
        </div>
        <div className="uppercase text-center flex flex-col items-center justify-between lg:w-48 lg:h-48 md:w-40 md:h-40 w-28 h-28 py-2 relative">
          <span className="textTop md:text-sm text-xs">Page</span>
          <div>
            <div className="lg:text-6xl md:text-4xl text-3xl leading-[0.8] lg:mr-10 mr-8 overflow-hidden">
              <div className="lg:w-20 lg:h-14 md:w-15 md:h-9 w-10 h-6 flex flex-col">
                <span className="pageNumberTop">0</span>
                <span className="pageNumberTop">1</span>
                <span className="pageNumberTop">2</span>
                <span className="pageNumberTop">3</span>
              </div>
            </div>
            <span className="pageNumberBottom lg:text-6xl md:text-4xl text-3xl leading-[0.8] block lg:ml-10 ml-8">
              3
            </span>
          </div>
          <span className="textBottom md:text-sm text-xs font-extralight">
            Number
          </span>
          <span className="separateNumber absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-32 md:w-28 w-16 h-[1px] -rotate-45 border border-[#9696963e]"></span>
          <button className="arrowLeft absolute left-2 top-1/2 -translate-y-1/2 lg:w-16 md:w-10 w-5 z-[2] cursor-pointer overflow-hidden">
            <svg width="30" height="17" viewBox="0 0 30 17" fill="none">
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
          <button className="arrowRight absolute right-2 top-1/2 -translate-y-1/2 lg:w-16 md:w-10 w-5 z-[2] cursor-pointer overflow-hidden rotate-180">
            <svg width="30" height="17" viewBox="0 0 30 17" fill="none">
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
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            fill="none"
            className="circle w-28 h-28 md:w-40 md:h-40 lg:w-full lg:h-full absolute left-0 bottom-0 z-[0]"
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
              className="circle-progress stroke-[#f0f0f0] [stroke-dasharray:880]  origin-center -rotate-90"
            ></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
