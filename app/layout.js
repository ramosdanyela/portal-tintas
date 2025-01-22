import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portal Tintas",
  description: "Colorindo Ribas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main> {/* O conteúdo das páginas será renderizado aqui */}
        <Footer />
      </body>
    </html>
  );
}
