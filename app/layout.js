import {Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400", "700"]
});


export const metadata = {
  title: "Portal Tintas",
  description: "Colorindo Ribas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className= {`flex flex-col max-w-[1600px] w-full my-auto mx-auto px-4 ${inter.className} antialiased bg-white`}>
       
        <Navbar />
        <main>{children}</main> {/* O conteúdo das páginas será renderizado aqui */}
        <Footer />
        
      </body>
    </html>
  );
}
