import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function DateOfTheDay() {
  useGSAP(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const firstDigit = parseInt(day.charAt(0));
    const secondDigit = parseInt(day.charAt(1));
    const currentMonthIndex = today.getMonth();

    gsap.fromTo(
      ".intro-date",
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
        delay: 6,
      }
    );

    // Animation du premier chiffre
    gsap.to("#first-digit", {
      innerText: firstDigit,
      delay: 9,
      duration: 0.5,
      snap: { innerText: 1 },
      ease: "power1.inOut",
      onUpdate() {
        document.getElementById("first-digit").innerText = Math.floor(
          this.targets()[0].innerText
        );
      },
    });

    // Animation du deuxième chiffre (après la première)
    gsap.to("#second-digit", {
      innerText: secondDigit,
      duration: 0.5,
      delay: 9.5,
      snap: { innerText: 1 },
      ease: "power1.inOut",
      onUpdate() {
        document.getElementById("second-digit").innerText = Math.floor(
          this.targets()[0].innerText
        );
      },
    });

    let monthIndex = 0;
    const monthAnimation = () => {
      if (monthIndex <= currentMonthIndex) {
        gsap.to("#month", {
          innerText: months[monthIndex],
          duration: 0.1,
          ease: "power2.inOut",
          onUpdate() {
            document.getElementById("month").innerText = months[monthIndex];
          },
          onComplete() {
            monthIndex++;
            if (monthIndex <= currentMonthIndex) {
              monthAnimation();
            }
          },
        });
      }
    };

    gsap.delayedCall(10, monthAnimation);
  });

  return (
    <>
      <div className="font-['safiro'] flex justify-end ">
        <span
          className="intro-date lg:text-9xl md:text-8xl text-7xl"
          id="first-digit"
        >
          0
        </span>
        <span
          className="intro-date lg:text-9xl md:text-8xl text-7xl"
          id="second-digit"
        >
          0
        </span>
        <div className="flex flex-col justify-center">
          <span
            className="intro-date lg:text-2xl md:text-xl text-lg"
            id="month"
          >
            Jan
          </span>
          <span className="intro-date font-roboto font-extralight lg:text-base text-sm">
            available
          </span>
          <span className="intro-date font-roboto font-extralight lg:text-base text-sm -mt-2">
            for work
          </span>
        </div>
      </div>
    </>
  );
}
