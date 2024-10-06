import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  useGSAP(() => {
    const timeline = gsap.timeline();

    // Animation du cercle dessiné à la main
    gsap.to(".circle-svg", {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power1.inOut",
      delay: 3,
    });

    // Animation de l'invasion de couleur
    gsap.to(".color-bg", {
      height: "0vh",
      duration: 1,
      delay: 1,
      ease: "power3.in",
    });

    // Animation du prénom en intro
    gsap.from(".first-name", {
      y: "10vw",
      duration: 2,
      ease: "power.out",
      onComplete: () => {
        gsap.to(".first-name, .last-name", { color: "#111111" });
      },
    });

    // Animation du nom en intro
    gsap.from(".last-name", {
      y: "-10vw",
      duration: 2,
      ease: "power.out",
    });

    // Animation des mots qui sortent du sol en intro
    gsap.fromTo(
      ".intro-word",
      {
        y: "10vw",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0vw",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 1,
        ease: "power.out",
        stagger: 0.1,
        delay: 2,
      }
    );

    // Animation des lettres du mot "Brittany" qui apparaissent
    gsap.fromTo(
      ".brittany-letters .letter",
      {
        y: "10vw",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0vw",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 1,
        ease: "power.out",
        delay: 3,
      }
    );

    // Animation des lettres du mot "Brittany" qui disparaissent
    timeline.to(".brittany-letters .letter", {
      y: "-100%",
      clipPath: "inset(0 0 100% 0)",
      stagger: 0.03,
      ease: "power2.in",
      delay: 4,
    });

    // Animation des lettres du mot "Lorient" qui apparaissent
    timeline.fromTo(
      ".lorient-letters .letter",
      {
        y: "100%",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0%",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        stagger: 0.03,
        ease: "power2.out",
      },
      "-=0.3" // Décalage pour chevaucher l'animation précédente
    );

    // Animation du soulignement en intro
    gsap.to(".underline", {
      scaleX: 1,
      duration: 1,
      delay: 4,
      ease: "power2.in",
    });

    // Animation du soulignement lors du hover sur l'adresse email
    document
      .querySelector(".email-hover")
      .addEventListener("mouseenter", () => {
        gsap.fromTo(
          ".underline",
          {
            scaleX: 1,
            duration: 1,
          },
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(".underline", {
                scaleX: 1,
                duration: 1,
                ease: "power2.out",
              });
            },
          }
        );
      });
  });
  return (
    <>
      <div className="color-bg absolute top-0 left-0 w-screen h-screen bg-[#111111] -z-10"></div>
      <div className="intro-section fixed font-['canela'] text-[4vw] leading-normal font-extralight z-20 p-12">
        <div>
          <span className="intro-word mr-1.5">Web </span>
          <span className="intro-word mr-1.5">Developer </span>
          <span className="intro-word mr-1.5">Available </span>
          <span className="intro-word mr-1.5">for </span>
          <div className="relative inline-block">
            <span className="intro-word mr-1.5">your </span>
            <span className="intro-word mr-1.5">Project</span>
            <svg
              className="circle-svg absolute -top-2 -left-1.5 stroke-[#111111] z-10 w-[110%] h-[110%] [filter: url(#fuzzy)] [stroke-dasharray:1259] [stroke-dashoffset:1259]"
              fill="none"
              viewBox="0 0 350 80"
            >
              <path d="M122.5 1.5C78.5-2.2 1.6 6.7 6 39.5c5.5 41 90 40 158.5 44 32 1.9 201 12 178.5-38.5C325 4.5 139 6 120.5 6S-3.5 2.5 1 35.5s126 52.5 178.5 54S347 99 347 35.5"></path>
            </svg>
          </div>
        </div>
        <div className="flex">
          <span className="intro-word mr-1.5">Made </span>
          <span className="intro-word mr-1.5">In </span>
          <div className="relative">
            <div className="brittany-letters flex absolute top-0 left-0 w-full">
              <span className="letter">B</span>
              <span className="letter">r</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter">t</span>
              <span className="letter">a</span>
              <span className="letter">n</span>
              <span className="letter">y</span>
            </div>
            <div className="lorient-letters flex absolute top-0 left-0 w-full">
              <span className="letter">L</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">i</span>
              <span className="letter">e</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
            </div>
          </div>
        </div>
        <div className="relative inline-block cursor-pointer">
          <h1 className="email-hover">
            <span className="intro-word">hello</span>
            <span className="intro-word">@</span>
            <span className="first-name relative inline-block text-[#f0f0f0]">
              paul
            </span>
            <span className="last-name relative inline-block text-[#f0f0f0]">
              danet
            </span>
            <span className="intro-word">.</span>
            <span className="intro-word">com</span>
          </h1>
          <span className="underline inline-block w-full h-[0.5px] bg-[#111111] absolute left-0 bottom-1 scale-x-0 origin-left"></span>
        </div>
      </div>
    </>
  );
}
