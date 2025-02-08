"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatsAppBtn() {
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
      className="flex fixed z-50 max-w-screen-sm md:max-screen-md lg:max-w-screen-xl bottom-20 mx-auto transform"
    >
      <div className="flex  gap-2 font-bold text-lg text-white  rounded-full shadow-lg p-3 hover:bg-green-600  bg-green-500 transition-all duration-300">
        <FaWhatsapp className="w-8 h-8" />
        <p>WhatsApp</p>
      </div>
    </a>
  );
}
