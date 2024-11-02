import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutMe from "./AboutMe";
import ScrollDown from "./ScrollDown";
import ToolBox from "./ToolBox";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".pr_client");
    let endValue = window.innerHeight * sections.length;

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
      <section className="main flex w-full font-roboto overflow-x-hidden z-30">
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-center items-center h-[100vh]">
            <div className="w-[90vw] h-[44vh] flex justify-start items-center font-thin">
              <ScrollDown />
            </div>
          </div>
          <div className="absolute lg:text-6xl md:text-4xl text-2xl uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-4 pr-6 lg:pb-8 lg:pr-12 text-[#fe4534]">
            <span className="pr_num mb-8 text-sm md:mb-10 md:text-base lg:mb-16 lg:text-lg">
              (01)
            </span>
            SCROLL DOWN
          </div>
        </div>
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-center items-center h-[100vh]">
            <div className="w-full">
              <AboutMe />
            </div>
          </div>
          <div className="absolute lg:text-6xl md:text-4xl text-2xl uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-4 pr-6 lg:pb-8 lg:pr-12 text-[#fe4534]">
            <span className="pr_num mb-8 text-sm md:mb-10 md:text-base lg:mb-16 lg:text-lg">
              (02)
            </span>
            ABOUT ME
          </div>
        </div>
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-center items-end h-[100vh]">
            <div className="w-[100vw] h-[55vh]">
              <ToolBox />
            </div>
          </div>
          <div className="absolute lg:text-6xl md:text-4xl text-2xl uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-4 pr-6 lg:pb-8 lg:pr-12 text-[#fe4534]">
            <span className="pr_num mb-8 text-sm md:mb-10 md:text-base lg:mb-16 lg:text-lg">
              (03)
            </span>
            TOOLBOX
          </div>
        </div>
        <div className="pr_client relative min-w-[100vw] h-[100vh]">
          <div className="flex justify-center items-center gap-4 h-[100vh]">
            <Projects />
          </div>
          <div className="absolute lg:text-6xl md:text-4xl text-2xl uppercase tracking-[-0.125rem] flex justify-end items-end bottom-0 right-0 pb-4 pr-6 lg:pb-8 lg:pr-12 text-[#fe4534]">
            <span className="pr_num mb-8 text-sm md:mb-10 md:text-base lg:mb-16 lg:text-lg">
              (04)
            </span>
            PROJECTS
          </div>
        </div>
      </section>
    </>
  );
}
