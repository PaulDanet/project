import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const IphoneFolder = ({ appList, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Références pour chaque élément à animer
  const folderRef = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
  const blurBackgroundRef = useRef(null);

  const openFolder = () => {
    gsap.to(folderRef.current, {
      duration: 0.4,
      scale: 2,
      ease: "linear",
      transformOrigin: "center center",
    });

    gsap.to(titleTopRef.current, {
      opacity: 1,
      duration: 0.4,
    });

    gsap.to(titleBottomRef.current, {
      opacity: 0,
    });

    gsap.to(blurBackgroundRef.current, {
      duration: 0.4,
      backdropFilter: "blur(8px)",
      ease: "linear",
    });

    setIsOpen(true);
  };

  const closeFolder = () => {
    gsap.to(folderRef.current, {
      duration: 0.4,
      scale: 1,
      ease: "linear",
    });

    gsap.to(titleTopRef.current, {
      opacity: 0,
      duration: 0.4,
    });

    gsap.to(titleBottomRef.current, {
      opacity: 1,
      delay: 0.4,
      duration: 0.4,
    });

    gsap.to(blurBackgroundRef.current, {
      duration: 0.4,
      backdropFilter: "blur(0px)",
      ease: "linear",
    });

    setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        ref={titleTopRef}
        className="opacity-0 absolute top-0 text-4xl text-black z-50"
      >
        {title}
      </div>
      <div ref={blurBackgroundRef} className="absolute inset-0" />
      <div
        ref={folderRef}
        onClick={isOpen ? closeFolder : openFolder}
        className="bg-white/50 p-4 rounded-2xl shadow-lg cursor-pointer min-h-36 w-auto z-50"
      >
        <div className={isOpen ? "m-4" : "m-0"}>
          <div
            className={`grid grid-cols-3 grid-rows-3 transition-all duration-300 ${
              isOpen ? "gap-y-4 gap-x-8" : "gap-2"
            }`}
          >
            {appList.map((app, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={app.link}
                  alt={app.name}
                  className={`bg-white flex items-center justify-center shadow-md transition-all duration-300 ${
                    isOpen ? "w-16 h-16 rounded-xl" : "w-8 h-8 rounded-md"
                  }`}
                />
                <div className={isOpen ? "text-xs text-black mt-2" : "hidden"}>
                  {app.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={titleBottomRef} className="text-lg text-black">
        {title}
      </div>
    </div>
  );
};

export default IphoneFolder;
