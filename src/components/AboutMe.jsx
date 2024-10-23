import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
export default function AboutMe() {
  useGSAP(() => {
    // Cibler tous les éléments avec la classe 'draggable'
    Draggable.create(".draggable", {
      type: "x,y", // Permet de les déplacer en X et Y
      bounds: ".draggable-container", // Limite le déplacement au conteneur
      edgeResistance: 0.9, // Ajoute une résistance au bord pour éviter qu'ils ne sortent trop facilement
      inertia: true, // Ajoute de l'inertie pour des mouvements fluides
    });
  });

  return (
    <>
      <div className="draggable-container relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="lg:h-52 lg:w-52 md:h-40 md:w-40 h-24 w-24 bg-[#ff7b00] rounded-lg draggable absolute"></div>
        <img
          src="src/assets/voyage.png"
          className="lg:w-72 md:w-56 w-36 h-auto draggable absolute"
        />
        <div className="lg:h-52 lg:w-96 md:h-40 md:w-60 h-24 w-40 bg-[#009a43] rounded-lg draggable absolute"></div>
        <div className="lg:h-52 lg:w-52 md:h-40 md:w-40 h-24 w-24 bg-[#8800ff] rounded-lg draggable absolute"></div>
        <img
          src="src/assets/profile-pic (2).png"
          className="lg:w-80 md:w-60 w-36 h-auto draggable absolute"
          alt="Profile"
        />
        <div className="lg:h-80 lg:w-80 md:h-60 md:w-60 h-36 w-36 bg-[#ffc800] rounded-full draggable absolute"></div>
        <img
          src="src/assets/crossfit.png"
          className="lg:w-96 w-48 h-auto draggable absolute"
        />
        <div className="lg:h-52 lg:w-52 md:h-40 md:w-40 h-24 w-24 bg-white border-4 lg:border-8 border-[#005eff] rounded-lg draggable absolute"></div>
        <div className="lg:h-52 lg:w-96 md:h-40 md:w-60 h-24 w-40 bg-[#ff8888] rounded-lg draggable absolute"></div>
        <img
          src="src/assets/surf.png"
          className="lg:w-72 md:w-56 w-36 h-auto draggable absolute"
        />
        <div className="lg:h-52 lg:w-52 md:h-40 md:w-40 h-24 w-24 bg-white lg:border-8 border-4 border-[#dbdada] rounded-lg draggable absolute"></div>

        <img
          src="src/assets/dragAndDrop.png"
          className="lg:w-96 md:w-64 w-48 h-auto draggable absolute"
        />
      </div>
    </>
  );
}
