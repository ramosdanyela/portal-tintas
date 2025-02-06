import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// Função para gerar slugs (URL amigável)
const slugify = (text) =>
  text
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
    .toLowerCase()
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais

// Array de posts
const posts = [
  {
    id: 1,
    title: "Escolha a Tinta Perfeita para Sua Casa",
    description:
      "Como acertar na cor e no tipo de tinta para transformar seus ambientes.",
    imageUrl: "/blog/artigo1.webp",
    date: "Jan 05, 2025",
    category: "Paredes",
  },
  {
    id: 2,
    title: "Como Cuidar da Sua Pintura para Manter a Parede Sempre Bonita",
    description:
      "Dicas práticas para conservar suas paredes pintadas por mais tempo.",
    imageUrl: "/blog/artigo2.webp",
    date: "Jan 05, 2025",
    category: "Paredes",
  },
  {
    id: 3,
    title:
      "Cores Tendência para 2025: As Paletas que Irão Transformar Seu Espaço",
    description:
      "Descubra as cores que estarão em alta no próximo ano e como aplicá-las em sua decoração.",
    imageUrl: "/blog/artigo3.webp",
    date: "Jan 05, 2025",
    category: "Decoração",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="flex relative mt-6 max-w-[650px] mx-auto">
      {/* Contêiner do Carousel */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4 w-full">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${slugify(post.title)}`}
              className="block flex-shrink-0 embla-slide"
            >
              <article className="flex flex-row gap-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-xl p-12 border border-gray-200 max-w-[650px] h-[400px] cursor-pointer transition hover:bg-gray-100">
                {/* Imagem à esquerda */}
                <div className="flex relative">
                  <img
                    alt={post.title}
                    src={post.imageUrl}
                    className="rounded-2xl h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10" />
                </div>

                {/* Texto do post */}
                <div className="w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-x-4 text-xs text-gray-500">
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                      {post.category}
                    </span>
                  </div>

                  <div className="group relative mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
                              </article>
                          
            </Link>
          ))}


        </div>
      </div>

      {/* Botões de Navegação */}
      <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
        <button
          className={`bg-gray-400 opacity-50 text-white p-2 rounded-full shadow-md transition ${
            prevDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={prevDisabled}
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="absolute top-1/2 right-1 transform -translate-y-1/2">
        <button
          className={`bg-gray-400 text-white opacity-50 p-2 rounded-full shadow-md transition ${
            nextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={nextDisabled}
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
