import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".pr_client");
    let endValue = window.innerHeight * sections.length; // La hauteur totale des sections

    // Animation main en intro
    gsap.from(".main", {
      x: "100%",
      duration: 2,
      delay: 5,
      ease: "power.out",
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".main",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: `+=${endValue}`,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2);
          gsap.to(".pageNumberTop", {
            yPercent: -100 * progress * (sections.length - 1),
          });
          gsap.to(".circle-progress", {
            strokeDashoffset: 880 - 880 * progress,
          });
        },
      },
    });
  });
  return (
    <>
      <section className="main flex w-full font-['safiro'] overflow-x-hidden">
        <div className="pr_client text-[6vw] leading-[6vw] uppercase tracking-[-.2vw] min-w-[100%] h-[100vh] flex justify-end items-end pb-12 pr-12 text-[#fe4534]">
          <span className="pr_num mb-16 text-lg tracking-normal">(01)</span>
          SCROLL DOWN
        </div>
        <div className="pr_client text-[6vw] leading-[6vw] uppercase tracking-[-.2vw] min-w-[100%] h-[100vh] flex justify-end items-end pb-12 pr-12 text-[#fe4534]">
          <span className="pr_num mb-16 text-lg tracking-normal">(02)</span>
          ABOUT ME
        </div>
        <div className="pr_client text-[6vw] leading-[6vw] uppercase tracking-[-.2vw] min-w-[100%] h-[100vh] flex justify-end items-end pb-12 pr-12 text-[#fe4534]">
          <span className="pr_num mb-16 text-lg tracking-normal">(03)</span>
          TOOLBOX
        </div>
        <div className="pr_client text-[6vw] leading-[6vw] uppercase tracking-[-.2vw] min-w-[100%] h-[100vh] flex justify-end items-end pb-12 pr-12 text-[#fe4534]">
          <span className="pr_num mb-16 text-lg tracking-normal">(04)</span>
          PROJECTS
        </div>
      </section>
    </>
  );
}
