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
            opacity: 1, y: 0, 
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





  return (
    <div className="flex flex-row bg-[#f9fcfd] mt-30 w-full h-full">
      <div className="flex py-24 w-full items-center h-full   flex-col justify-center">
       <div ref={flexboxRef1} className="m-4 opacity-0 text-center translate-y-10">
        <p className="text-balance text-center sm:text-5xl  mb-4 text-4xl font-semibold tracking-tight text-gray-900 ">
          Marcas Parceiras
        </p>
        <p className="tmt-2 text-lg/8 font-semibold text-[#d85b17] mb-8">
          Encontre as melhores marcas do mercado
        </p>
      </div>
        <div ref={flexboxRef2} className="opacity-0 translate-y-10 h-full w-full place-items-center ">
        <div className="grid place-items-center grid-cols-4 gap-12">
          <img
            src="/logos/suvinil.png"
            alt="Suvinil"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/coral.png"
            alt="Coral"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/quartzolit.png"
            alt="Quartzolit"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/atlas.webp"
            alt="Atlas"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/kala.jpeg"
            alt="Kala"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/worker.webp"
            alt="Worker"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/brasilux.png"
            alt="Brasilux"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/hydronorth.png"
            alt="Hydronorth"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/maxirubber.jpg"
            alt="MaxiRubber"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/3m.png"
            alt="3M"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/adere.png"
            alt="Adere"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/eucatex.png"
            alt="Eucatex"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/arara-azul.png"
            alt="Arara Azul"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/osmocolor.png"
            alt="Osmocolor"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/grafftex.png"
            alt="Grafftex"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/condor.png"
            alt="Condor"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
          <img
            src="/logos/juntalider.webp"
            alt="JuntaLider"
            className="w-[180px] h-[90px] object-cover mx-auto"
          />
          <img
            src="/logos/carplast.jpg"
            alt="Carplast"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
           <img
            src="/logos/roma.png"
            alt="Roma"
            className="w-[180px] h-[90px] object-contain mx-auto"
          />
        </div>
       
      </div>
      </div>
    </div>
  );
}
