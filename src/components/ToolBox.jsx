import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function ToolBox() {
  useGSAP(() => {
    gsap.to(".textAnimation", {
      xPercent: -50, // Fait défiler le texte à gauche
      repeat: -1, // Répète l'animation à l'infini
      duration: 30, // Durée de l'animation (ajuste selon la vitesse souhaitée)
      ease: "linear", // Animation linéaire pour un défilement fluide
    });
  });

  return (
    <>
      <div className="flex flex-row justify-start w-[100vw] -rotate-12 z-20 overflow-hidden">
        <div className="textAnimation flex justify-start w-auto whitespace-nowrap font-roboto text-4xl font-extralight">
          <p className="inline-block">
            HTML5 • CSS3 • JavaScript • TypeScript • React • Tailwind • Node.js
            • Nest.js • Prisma • Whimsical • Miro • Figma • Docker • Gitlab •
            MySql • MangoDB •&nbsp;
          </p>
          <p className="inline-block">
            HTML5 • CSS3 • JavaScript • TypeScript • React • Tailwind • Node.js
            • Nest.js • Prisma • Whimsical • Miro • Figma • Docker • Gitlab •
            MySql • MangoDB •&nbsp;
          </p>
        </div>
        <div className="textAnimation flex justify-start w-auto relative whitespace-nowrap">
          <p className="inline-block">
            HTML5 • CSS3 • JavaScript • TypeScript • React • Tailwind • Node.js
            • Nest.js • Prisma • Whimsical • Miro • Figma • Docker • Gitlab •
            MySql • MangoDB •&nbsp;
          </p>
          <p className="inline-block">
            HTML5 • CSS3 • JavaScript • TypeScript • React • Tailwind • Node.js
            • Nest.js • Prisma • Whimsical • Miro • Figma • Docker • Gitlab •
            MySql • MangoDB •&nbsp;
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-start w-[100vw] rotate-12 z-10 overflow-hidden">
        <div className="textAnimation flex justify-start w-auto whitespace-nowrap">
          <div className="flex">
            <img src="src/assets/html5.png" className="imgToolbox" />
            <img src="src/assets/css3.png" className="imgToolbox" />
            <img src="src/assets/js.png" className="imgToolbox" />
            <img src="src/assets/TS.png" className="imgToolbox" />
            <img src="src/assets/tailwind.png" className="imgToolbox" />
            <img src="src/assets/react.png" className="imgToolbox" />
            <img src="src/assets/node.webp" className="imgToolbox" />
            <img src="src/assets/nest.webp" className="imgToolbox" />
            <img src="src/assets/prisma.webp" className="imgToolbox" />
            <img src="src/assets/whimsical.png" className="imgToolbox" />
            <img src="src/assets/miro.png" className="imgToolbox" />
            <img src="src/assets/figma.png" className="imgToolbox" />
            <img src="src/assets/docker.png" className="imgToolbox" />
            <img src="src/assets/gitlab.png" className="imgToolbox" />
            <img src="src/assets/mysql.png" className="imgToolbox" />
            <img src="src/assets/mangodb.png" className="imgToolbox" />
          </div>
          <div className="flex">
            <img src="src/assets/html5.png" className="imgToolbox" />
            <img src="src/assets/css3.png" className="imgToolbox" />
            <img src="src/assets/js.png" className="imgToolbox" />
            <img src="src/assets/TS.png" className="imgToolbox" />
            <img src="src/assets/tailwind.png" className="imgToolbox" />
            <img src="src/assets/react.png" className="imgToolbox" />
            <img src="src/assets/node.webp" className="imgToolbox" />
            <img src="src/assets/nest.webp" className="imgToolbox" />
            <img src="src/assets/prisma.webp" className="imgToolbox" />
            <img src="src/assets/whimsical.png" className="imgToolbox" />
            <img src="src/assets/miro.png" className="imgToolbox" />
            <img src="src/assets/figma.png" className="imgToolbox" />
            <img src="src/assets/docker.png" className="imgToolbox" />
            <img src="src/assets/gitlab.png" className="imgToolbox" />
            <img src="src/assets/mysql.png" className="imgToolbox" />
            <img src="src/assets/mangodb.png" className="imgToolbox" />
          </div>
        </div>
        <div className="textAnimation flex justify-start w-auto relative whitespace-nowrap">
          <div className="flex">
            <img src="src/assets/html5.png" className="imgToolbox" />
            <img src="src/assets/css3.png" className="imgToolbox" />
            <img src="src/assets/js.png" className="imgToolbox" />
            <img src="src/assets/TS.png" className="imgToolbox" />
            <img src="src/assets/tailwind.png" className="imgToolbox" />
            <img src="src/assets/react.png" className="imgToolbox" />
            <img src="src/assets/node.webp" className="imgToolbox" />
            <img src="src/assets/nest.webp" className="imgToolbox" />
            <img src="src/assets/prisma.webp" className="imgToolbox" />
            <img src="src/assets/whimsical.png" className="imgToolbox" />
            <img src="src/assets/miro.png" className="imgToolbox" />
            <img src="src/assets/figma.png" className="imgToolbox" />
            <img src="src/assets/docker.png" className="imgToolbox" />
            <img src="src/assets/gitlab.png" className="imgToolbox" />
            <img src="src/assets/mysql.png" className="imgToolbox" />
            <img src="src/assets/mangodb.png" className="imgToolbox" />
          </div>
          <div className="flex">
            <img src="src/assets/html5.png" className="imgToolbox" />
            <img src="src/assets/css3.png" className="imgToolbox" />
            <img src="src/assets/js.png" className="imgToolbox" />
            <img src="src/assets/TS.png" className="imgToolbox" />
            <img src="src/assets/tailwind.png" className="imgToolbox" />
            <img src="src/assets/react.png" className="imgToolbox" />
            <img src="src/assets/node.webp" className="imgToolbox" />
            <img src="src/assets/nest.webp" className="imgToolbox" />
            <img src="src/assets/prisma.webp" className="imgToolbox" />
            <img src="src/assets/whimsical.png" className="imgToolbox" />
            <img src="src/assets/miro.png" className="imgToolbox" />
            <img src="src/assets/figma.png" className="imgToolbox" />
            <img src="src/assets/docker.png" className="imgToolbox" />
            <img src="src/assets/gitlab.png" className="imgToolbox" />
            <img src="src/assets/mysql.png" className="imgToolbox" />
            <img src="src/assets/mangodb.png" className="imgToolbox" />
          </div>
        </div>
      </div>
    </>
  );
}
