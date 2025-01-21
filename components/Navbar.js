"use client";
import { useState } from "react";
import React from "react";

const Navbar = () => {
  // Lista de itens do menu
  const menuItems = [
    { name: "Quem Somos", link: "#" },
    { name: "Marcas & Produtos", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contato", link: "#" },
  ];

  return (
    <nav className="bg-white shadow-md w-full h-16 flex items-center px-6">
      {/* LOGO */}
      <div className="flex items-center">
        <img src="https://via.placeholder.com/50" alt="Logo" className="h-10" />
        <span className="ml-2 text-xl font-bold text-blue-600">
          PORTAL <span className="text-orange-600">TINTAS</span>
        </span>
      </div>

      {/* MENU */}
      <ul className="hidden md:flex gap-8 ml-auto text-lg text-gray-700">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="hover:text-blue-600">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
