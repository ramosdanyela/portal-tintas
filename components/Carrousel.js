

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { PrevButton, NextButton } from "./EmblaButtons"; // Criamos botões separados
import Autoplay from "embla-carousel-autoplay";

  const [emblaRef] = useEmblaCarousel()


  const posts = [
    {
      id: 1,
      title: "Escolha a Tinta Perfeita para Sua Casa",
      href: "#",
      description:
        "Como acertar na cor e no tipo de tinta para transformar seus ambientes.",
      imageUrl: "/blog/artigo1.webp",
      date: "Jan 05, 2025",
      datetime: "2020-03-16",
      category: { title: "Paredes", href: "#" },
      author: {
        name: "Portal Tintas",
        role: "",
        href: "#",
        imageUrl: "/icons/favicon2.png",
      },
    },
    {
      id: 2,
      title: "Como Cuidar da Sua Pintura para Manter a Parede Sempre Bonita",
      href: "#",
      description:
        "Dicas práticas para conservar suas paredes pintadas por mais tempo.",
      imageUrl: "/blog/artigo2.webp",
      date: "Jan 05, 2025",
      datetime: "2020-03-16",
      category: { title: "Paredes", href: "#" },
      author: {
        name: "Portal Tintas",
        role: "",
        href: "#",
        imageUrl: "/icons/favicon2.png",
      },
    },
    {
      id: 3,
      title:
        "Cores Tendência para 2025: As Paletas que Irão Transformar Seu Espaço",
      href: "#",
      description:
        "Descubra as cores que estarão em alta no próximo ano e como aplicá-las em sua decoração.",
      imageUrl: "/blog/artigo3.webp",
      date: "Jan 05, 2025",
      datetime: "2020-03-16",
      category: { title: "Paredes", href: "#" },
      author: {
        name: "Portal Tintas",
        role: "",
        href: "#",
        imageUrl: "/icons/favicon2.png",
      },
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}
