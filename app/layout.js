import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Portal Tintas",
  description: "Colorindo Ribas",
  icons: "icons/favicon2.png",
  openGraph: {
    title: "Portal Tintas",
    description: "Colorindo Ribas",
    url: "https://www.portaltintas.com.br", 
    siteName: "Portal Tintas",
    images: "https://www.portaltintas.com.br/icons/favicon2.png", // substitua pela URL da sua imagem
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased bg-[#f9fcfd]`}>
        <div className="flex flex-col items-center max-w-screen-sm mx-auto md:max-screen-md lg:max-w-screen-xl">
          <Navbar />

          {children}

          <Footer />
          <WhatsAppBtn />
        </div>
      
      </body>
    </html>
  );
}
