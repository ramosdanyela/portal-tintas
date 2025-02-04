"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GenWppBtn() {
 
  const buttonRef = useRef(null);
  
  useEffect(() => {
  

    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "center",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 95%", // Inicia quando o Flexbox entra 80% na tela
        toggleActions: "play none none none", // Executa apenas uma vez
      },
    });
  }, []);


  
  const phoneNumber = "5567998857070"; // Coloque o número no formato internacional



  return (
    <a 
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      className="flex text-center bottom-4 right-4 m-4 mr-[100px] bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 items-center justify-center w-30 h-30"
    >
      <div  className="bg-green-500 text-white gap-1 font-bold rounded-full flex items-center text-lg hover:bg-green-600 transition-all duration-300">
      <FaWhatsapp className="items-center flex w-14 h-14" />
      <p>Fale com nosso time agora!</p>
    </div>
    </a>
  );
}
