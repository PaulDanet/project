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
      delay: 4,
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
      <section className="main flex w-full font-['safiro'] overflow-x-hidden z-30">
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-around items-center h-[100vh]">
            <div className="w-[30vw] h-[40vh] border border-black rounded-lg"></div>
            <div className="w-[30vw] h-[40vh] border border-black rounded-lg"></div>
            <div className="w-[30vw] h-[40vh] border border-black rounded-lg"></div>
          </div>
          <div className=" absolute text-[3.75rem] leading-[3.75rem] uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-8 pr-12 text-[#fe4534]">
            <span className="pr_num mb-16 text-lg tracking-normal">(01)</span>
            SCROLL DOWN
          </div>
        </div>
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex flex-col justify-center items-center gap-4 h-[100vh]">
            <div className="w-[90vw] h-[20vh] border border-black rounded-lg"></div>
            <div className="w-[90vw] h-[20vh] border border-black rounded-lg"></div>
          </div>
          <div className=" absolute text-[3.75rem] leading-[3.75rem] uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-8 pr-12 text-[#fe4534]">
            <span className="pr_num mb-16 text-lg tracking-normal">(02)</span>
            ABOUT ME
          </div>
        </div>
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-center items-center h-[100vh]">
            <div className="w-[90vw] h-[44vh] border border-black rounded-lg"></div>
          </div>
          <div className=" absolute text-[3.75rem] leading-[3.75rem] uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-8 pr-12 text-[#fe4534]">
            <span className="pr_num mb-16 text-lg tracking-normal">(03)</span>
            TOOLBOX
          </div>
        </div>
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-center items-center gap-4 h-[100vh]">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-[25vw] h-[20vh] border border-black rounded-lg"></div>
              <div className="w-[25vw] h-[20vh] border border-black rounded-lg"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-[25vw] h-[20vh] border border-black rounded-lg"></div>
              <div className="w-[25vw] h-[20vh] border border-black rounded-lg"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-[25vw] h-[20vh] border border-black rounded-lg"></div>
              <div className="w-[25vw] h-[20vh] border border-black rounded-lg"></div>
            </div>
          </div>
          <div className=" absolute text-[3.75rem] leading-[3.75rem] uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-8 pr-12 text-[#fe4534]">
            <span className="pr_num mb-16 text-lg tracking-normal">(04)</span>
            PROJECTS
          </div>
        </div>
      </section>
    </>
  );
}
