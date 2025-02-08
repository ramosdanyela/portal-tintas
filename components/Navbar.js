"use client";
import Link from "next/link";

const Navbar = () => {
  // Lista de itens do menu
  const menuItems = [
    { name: "Quem Somos", link: "/quemsomos" },
    { name: "Marcas & Produtos", link: "/marcaseprodutos" },
    { name: "Dicas da Portal", link: "/blog" },
    { name: "Contato", link: "/contato" },
  ];

  return (
    <nav className="bg-[#f9fcfd] flex justify-between fixed w-full  z-50 shadow-2xl items-center max-w-screen-sm md:max-screen-md lg:max-w-screen-xl">
      {/* LOGO */}
      <div className="flex">
        <Link href="/">
          <img
            src="/idv-portal/logo.png"
            alt="Logo"
            className="w-45 h-20 object-cover cursor-pointer"
          />
        </Link>
      </div>
      {/* MENU */}
      <ul className="hidden md:flex lg:flex lg:gap-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="hover:bg-gray-300  text-gray-700 lg:text-xl rounded-full lg:p-2 text-bold"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
