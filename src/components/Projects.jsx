import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Projects() {
  useGSAP(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const content = card.querySelector(".content");

      function handleMouseMove(e) {
        const w = card.clientWidth;
        const h = card.clientHeight;
        const y = ((e.offsetX - w * 0.5) / w) * 20;
        const x = ((1 - (e.offsetY - h * 0.5)) / h) * 20;
        gsap.to(content, {
          duration: 0.2,
          rotationX: x,
          rotationY: y,
          transformPerspective: 400,
          ease: "power2.out",
        });
      }

      function handleMouseOut() {
        gsap.to(content, {
          duration: 2,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          ease: "power2.inOut",
        });
      }

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseout", handleMouseOut);

      // Nettoyage des événements
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseout", handleMouseOut);
      };
    });
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="card">
          <div className="content w-[25vw] h-[20vh] border border-black shadow-2xl rounded-xl"></div>
        </div>
        <div className="card">
          <div className="content w-[25vw] h-[20vh] border border-black shadow-2xl rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="card">
          <div className="content w-[25vw] h-[20vh] border border-black shadow-2xl rounded-xl"></div>
        </div>
        <div className="card">
          <div className="content w-[25vw] h-[20vh] border border-black shadow-2xl rounded-xl"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="card">
          <div className="content w-[25vw] h-[20vh] border border-black shadow-2xl rounded-xl"></div>
        </div>
        <div className="card">
          <div className="content w-[25vw] h-[20vh] border border-black shadow-2xl rounded-xl"></div>
        </div>
      </div>
    </>
  );
}
