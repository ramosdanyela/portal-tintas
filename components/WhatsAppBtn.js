"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  const phoneNumber = "5567998857070"; // Coloque o número no formato internacional

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 m-4 mr-[200px] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center w-30 h-30"
    >
      <div className="bg-green-500 text-white font-bold rounded-full flex items-center text-lg hover:bg-green-600 transition-all duration-300">
      <FaWhatsapp className="w-16 h-8" />
      <span>WhatsApp</span>
    </div>
    </a>
  );
}
