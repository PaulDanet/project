import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";

function App() {
  useGSAP(() => {
    const timeline = gsap.timeline();

    // Animation du cercle dessiné à la main
    gsap.to(".circle-svg", {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power1.inOut",
      delay: 3,
    });

    // Animation de l'invasion de couleur
    gsap.to(".color-bg", {
      height: "100vh",
      duration: 1,
      delay: 1,
      ease: "power3.in",
    });

    // Animation du prénom en intro
    gsap.from(".first-name", {
      y: "10vw",
      duration: 2,
      ease: "power.out",
      onComplete: () => {
        gsap.to(".first-name, .last-name", { color: "#111111" });
      },
    });

    // Animation du nom en intro
    gsap.from(".last-name", {
      y: "-10vw",
      duration: 2,
      ease: "power.out",
    });

    // Animation des mots qui sortent du sol en intro
    gsap.fromTo(
      ".intro-word",
      {
        y: "10vw",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0vw",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 1,
        ease: "power.out",
        stagger: 0.1,
        delay: 2,
      }
    );

    // Animation des lettres du mot "Brittany" qui apparaissent
    gsap.fromTo(
      ".brittany-letters .letter",
      {
        y: "10vw",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0vw",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 1,
        ease: "power.out",
        delay: 3,
      }
    );

    // Animation des lettres du mot "Brittany" qui disparaissent
    timeline.to(".brittany-letters .letter", {
      y: "-100%",
      clipPath: "inset(0 0 100% 0)",
      stagger: 0.03,
      ease: "power2.in",
      delay: 4,
    });

    // Animation des lettres du mot "Lorient" qui apparaissent
    timeline.fromTo(
      ".lorient-letters .letter",
      {
        y: "100%",
        clipPath: "inset(0 0 100% 0)",
      },
      {
        y: "0%",
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        stagger: 0.03,
        ease: "power2.out",
      },
      "-=0.3" // Décalage pour chevaucher l'animation précédente
    );

    // Animation texte cercle intro
    gsap.fromTo(
      ".circle-text",
      {
        y: "100%",
        x: "-100%",
      },
      {
        y: "20%",
        x: "-20%",
        ease: "power2.out",
        duration: 2,
        delay: 4,
      }
    );

    gsap.to(".text-rotation", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 4,
      delay: 3,
      ease: "power2.out",
    });

    gsap.to(".stacks-image img", {
      y: 20, // Déplace l'image de 20 pixels vers le bas
      duration: 2, // Durée de l'animation
      ease: "power1.inOut",
      yoyo: true, // Fait osciller l'animation
      repeat: -1, // Répète indéfiniment
    });

    // Animation du soulignement en intro
    gsap.to(".underline", {
      scaleX: 1,
      duration: 1,
      delay: 4,
      ease: "power2.in",
    });

    // Animation du soulignement lors du hover sur l'adresse email
    document
      .querySelector(".email-hover")
      .addEventListener("mouseenter", () => {
        gsap.fromTo(
          ".underline",
          {
            scaleX: 1,
            duration: 1,
          },
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.in",
            onComplete: () => {
              gsap.to(".underline", {
                scaleX: 1,
                duration: 1,
                ease: "power2.out",
              });
            },
          }
        );
      });
  });

  return (
    <>
      <div className="color-bg"></div>
      <div className="intro-section">
        <div className="developer-info">
          <span className="intro-word">Web </span>
          <span className="intro-word">Developer </span>
          <span className="intro-word">Available </span>
          <span className="intro-word">for </span>
          <div className="circle-container">
            <span className="intro-word">your </span>
            <span className="intro-word">Project</span>
            <svg className="circle-svg" fill="none" viewBox="0 0 350 100">
              <path d="M122.5 1.5C78.5-2.2 1.6 6.7 6 39.5c5.5 41 90 40 158.5 44 32 1.9 201 12 178.5-38.5C325 4.5 139 6 120.5 6S-3.5 2.5 1 35.5s126 52.5 178.5 54S347 99 347 35.5"></path>
            </svg>
          </div>
        </div>
        <div className="made-in">
          <span className="intro-word">Made </span>
          <span className="intro-word">In </span>
          <div className="location-container">
            <div className="brittany-letters">
              <span className="letter">B</span>
              <span className="letter">r</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter">t</span>
              <span className="letter">a</span>
              <span className="letter">n</span>
              <span className="letter">y</span>
            </div>
            <div className="lorient-letters">
              <span className="letter">L</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">i</span>
              <span className="letter">e</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
            </div>
          </div>
        </div>
        <div className="email-container">
          <h1 className="email-hover">
            <span className="intro-word">hello</span>
            <span className="intro-word">@</span>
            <span className="first-name">paul</span>
            <span className="last-name">danet</span>
            <span className="intro-word">.</span>
            <span className="intro-word">com</span>
          </h1>
          <span className="underline"></span>
        </div>
      </div>
      <div className="presentation-image">
        <div className="stacks-image">
          <img src="src/assets/a-3d-image-of-a-web-development-workspace-a-develo-D-tunVUmQ8iyxbLDx_LJlw-rd2Uhgs8T3m_4LMQkPFbZA-Photoroom.png"></img>
        </div>
      </div>
      <div className="circle-text">
        <svg viewBox="0 0 160 160">
          <path
            id="text-path"
            fill="none"
            d="M0 80 a 80 80 0 1 1 160 0 80 80 0 0 1 -160 0"
          ></path>
          <text dy="12" className="text-rotation">
            <textPath xlinkHref="#text-path">
              let's work together let's work together let's work together
            </textPath>
          </text>
          <circle cx="80" cy="80" r="60" fill="none"></circle>
        </svg>
      </div>
    </>
  );
}

export default App;
