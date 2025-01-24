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
    <nav className="bg-white shadow-md w-full h-16 flex items-center px-6">
      {/* LOGO */}
      <div className="flex items-center">
        <Link href="/home">
        <img src="/idv-portal/logo.png" alt="Logo" className="w-32 h-16 object-cover cursor-pointer" />
        </Link>
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
