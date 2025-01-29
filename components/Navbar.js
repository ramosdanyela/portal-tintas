"use client";
import Link from "next/link"
import { useState } from "react";
import React from "react";

const Navbar = () => {
  // Lista de itens do menu
  const menuItems = [
    { name: "Quem Somos", link: "/quemsomos" },
    { name: "Marcas & Produtos", link: "/marcaseprodutos" },
    { name: "Dicas da Portal", link: "/blog" },
    { name: "Contato", link: "/contato" },
  ];

  return (
    <nav className="bg-[#f9fcfd] relative shadow-2xl w-full h-20 flex items-center px-0">
      {/* LOGO */}
      <div className="flex absolute pl-6 items-center">
        <Link href="/home">
        <img src="/idv-portal/logo.png" alt="Logo" className="w-45 h-20 object-cover cursor-pointer" />
        </Link>
        </div>
      {/* MENU */}
      <ul className="hidden md:flex gap-8 ml-auto text-xl font-bold pr-6 text-gray-700">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className= "hover:bg-gray-300 rounded-full p-2 text-bold">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
