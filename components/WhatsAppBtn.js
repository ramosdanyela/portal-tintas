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
      className="flex w-full z-50 sm:left-1/2 transform -translate-x-1/2 items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg lg:bottom-8 hover:bg-green-600 transition-all duration-300"
    >
      <div className="flex absolute items-center justify-center  gap-2 font-bold text-center text-lg">
        <FaWhatsapp className="w-8 h-8" />
        <p>WhatsApp</p>
      </div>
    </a>
  );
}
