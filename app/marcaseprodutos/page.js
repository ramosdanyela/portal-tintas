"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Marcas() {
  const flexboxRef1 = useRef(null);
  const flexboxRef2 = useRef(null);

  useEffect(() => {
    const animateSection = (ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 }, // Estado inicial
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    animateSection(flexboxRef1);
    animateSection(flexboxRef2);
  }, []);

  const logos = [
    { src: "/logos/suvinil.png", alt: "Suvinil" },
    { src: "/logos/coral.png", alt: "Coral" },
    { src: "/logos/quartzolit.png", alt: "Quartzolit" },
    { src: "/logos/atlas.webp", alt: "Atlas" },
    { src: "/logos/kala.jpeg", alt: "Kala" },
    { src: "/logos/worker.webp", alt: "Worker" },
    { src: "/logos/brasilux.png", alt: "Brasilux" },
    { src: "/logos/hydronorth.png", alt: "Hydronorth" },
    { src: "/logos/maxirubber.jpg", alt: "MaxiRubber" },
    { src: "/logos/3m.png", alt: "3M" },
    { src: "/logos/adere.png", alt: "Adere" },
    { src: "/logos/eucatex.png", alt: "Eucatex" },
    { src: "/logos/arara-azul.png", alt: "Arara Azul" },
    { src: "/logos/osmocolor.png", alt: "Osmocolor" },
    { src: "/logos/grafftex.png", alt: "Grafftex" },
    { src: "/logos/condor.png", alt: "Condor" },
    { src: "/logos/carplast.jpg", alt: "Carplast" },
    { src: "/logos/roma.png", alt: "Roma" },
    { src: "/logos/juntalider.webp", alt: "JuntaLíder" },
  ];

  return (
    <div className="flex flex-row bg-[#f9fcfd] w-full h-full">
      <div className="flex pt-[8rem] pb-[8rem] w-full items-center h-full  flex-col justify-center">
        <div
          ref={flexboxRef1}
          className="m-4 opacity-0 text-center translate-y-10"
        >
          <p className="text-balance text-center sm:text-5xl  mb-4 text-4xl font-semibold tracking-tight text-gray-900 ">
            Marcas Parceiras
          </p>
          <p className="tmt-2 text-lg/8 font-semibold text-[#d85b17] mb-8">
            Encontre as melhores marcas do mercado
          </p>
        </div>
        <div
          ref={flexboxRef2}
          className="opacity-0 translate-y-10 h-full w-full place-items-center "
        >
          <div className="grid place-items-center grid-cols-4 lg:gap-12 md:gap-6 gap-4 px-4">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="flex w-full lg:w-[120px] bg-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
