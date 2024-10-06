import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CircleText() {
  useGSAP(() => {
    // Animation texte cercle intro
    gsap.fromTo(
      ".circle-text",
      {
        y: "100%",
        x: "-100%",
      },
      {
        y: "30%",
        x: "-50%",
        ease: "power2.out",
        duration: 2,
        delay: 4,
      }
    );

    gsap.to(".text-rotation", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 4,
      delay: 3,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div className="circle-text absolute top-0 right-0 w-64 h-64">
        <svg viewBox="0 0 160 160">
          <path
            id="text-path"
            fill="none"
            d="M0 80 a 80 80 0 1 1 160 0 80 80 0 0 1 -160 0"
          ></path>
          <text
            dy="12"
            className="text-rotation text-xs fill-[#111111] tracking-[.20em]"
          >
            <textPath xlinkHref="#text-path">
              let's work together let's work together let's work together
            </textPath>
          </text>
          <circle cx="80" cy="80" r="60" fill="none"></circle>
        </svg>
      </div>
    </>
  );
}
