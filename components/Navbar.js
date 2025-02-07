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
    <nav className="bg-[#f9fcfd] flex justify-between fixed w-full overflow-hidden z-50 shadow-2xl lg:max-w-screen-xl sm:max-w-screen-sm mx-auto items-center">
      {/* LOGO */}
      <div className="flex pl-6">
        <Link href="/">
          <img
            src="/idv-portal/logo.png"
            alt="Logo"
            className="w-45 h-20 object-cover cursor-pointer"
          />
        </Link>
      </div>
      {/* MENU */}
      <ul className="hidden md:flex gap-6 font-bold">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="hover:bg-gray-300 text-gray-700 text-xl rounded-full p-2 text-bold"
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
