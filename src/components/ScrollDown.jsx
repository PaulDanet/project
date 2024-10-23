import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function ScrollDown() {
  const words = [
    "💻 Web Developer",
    "😃 JavaScript Enthusiast",
    "🥰 Tech Lover",
    "🥷 React Ninja",
  ]; // Liste des mots
  useGSAP(() => {
    gsap.from(".welcomeText", {
      x: "-150%",
      delay: 9,
      duration: 2,
      ease: "power.out",
    });

    gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
    });

    let tlMaster = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to(".typewriter", { duration: 2, text: word });
      tlMaster.add(tlText);
    });
  });

  return (
    <>
      <div className="welcomeText lg:text-6xl md:text-4xl text-2xl">
        <div>
          <span>Welcome</span>
        </div>
        <span className="pr-4">I'm a</span>
        <span className="typewriter text-[#fe4534]"></span>
        <span className="cursor text-[#fe4534]">_</span>
      </div>
    </>
  );
}
