import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const IphoneFolder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const folderRef = useRef(null);
  const backdropRef = useRef(null);

  const openFolder = () => {
    gsap.to(folderRef.current, {
      duration: 0.5,
      scale: 1.5, // Agrandir la taille du dossier
      top: "50%", // Centrer verticalement
      left: "50%", // Centrer horizontalement
      x: "-50%", // Réajustement pour centrer parfaitement
      y: "-50%",
      ease: "power2.out",
    });

    // Appliquer un flou à l'arrière-plan
    gsap.to(backdropRef.current, {
      duration: 0.5,
      backdropFilter: "blur(10px)",
      ease: "power2.out",
    });

    setIsOpen(true);
  };

  const closeFolder = () => {
    gsap.to(folderRef.current, {
      duration: 0.5,
      scale: 1, // Revenir à la taille normale
      top: "initial",
      left: "initial",
      x: "0%",
      y: "0%",
      ease: "power2.out",
    });

    gsap.to(backdropRef.current, {
      duration: 0.5,
      backdropFilter: "blur(0px)",
      ease: "power2.out",
    });

    setIsOpen(false);
  };

  return (
    <div className="relative h-screen bg-gray-200 flex justify-center items-center">
      {/* Arrière-plan */}
      <div
        ref={backdropRef}
        className={`absolute inset-0 transition-all ${
          isOpen ? "pointer-events-none" : ""
        }`}
      />

      {/* Le Dossier */}
      <div
        ref={folderRef}
        onClick={isOpen ? closeFolder : openFolder}
        className="bg-white p-4 rounded-lg shadow-lg cursor-pointer transition-all transform"
      >
        <h3 className="text-center font-semibold">Dossier d'apps</h3>
        {!isOpen && (
          <p className="text-center text-gray-500">Clique pour ouvrir</p>
        )}
        {isOpen && (
          <div className="mt-4">
            {/* Les icônes d'applications */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-300 p-2 rounded-md">App 1</div>
              <div className="bg-gray-300 p-2 rounded-md">App 2</div>
              <div className="bg-gray-300 p-2 rounded-md">App 3</div>
              <div className="bg-gray-300 p-2 rounded-md">App 4</div>
              <div className="bg-gray-300 p-2 rounded-md">App 5</div>
              <div className="bg-gray-300 p-2 rounded-md">App 6</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IphoneFolder;
