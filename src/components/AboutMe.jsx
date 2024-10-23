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
        <img
          src="src/assets/profile-pic (2).png"
          className="w-auto h-[20vh] draggable absolute"
          alt="Profile"
        />
        <div className="w-52 h-52 bg-[#ff7b00] rounded-lg draggable absolute"></div>
        <div className="h-52 w-96 bg-[#009a43] rounded-lg draggable absolute"></div>
        <div className="h-52 w-52 bg-[#8800ff] rounded-lg draggable absolute"></div>
        <div className="h-80 w-80 bg-[#ffc800] rounded-full draggable absolute"></div>
        <div className="h-52 w-52 bg-white border-8 border-[#005eff] rounded-lg draggable absolute"></div>
        <div className="h-52 w-96 bg-[#ff8888] rounded-lg draggable absolute"></div>
        <div className="h-52 w-52 bg-white border-8 border-[#dbdada] rounded-lg draggable absolute"></div>
      </div>
    </>
  );
}
