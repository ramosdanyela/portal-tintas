import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

// Array de posts
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
    <div className="flex relative mt-6 mx-auto">
      {/* Contêiner do Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {posts.map((post) => (
            <article key={post.id} className="flex-shrink-0 embla-slide">
              <div className="flex flex-row gap-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-xl p-12 border border-gray-200 max-w-[650px] h-[400px]">
                {/* Imagem à esquerda */}
                <div className="flex relative  ">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="rounded-2xl  h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10" />
                </div>

                {/* Texto do post */}
                <div className="w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-x-4 text-xs text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
                    >
                      {post.category.title}
                    </a>
                  </div>

                  <div className="group relative mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Botões de Navegação */}
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <button
          className={`bg-gray-500 opacity-50 text-white p-3 rounded-full shadow-md transition ${
            prevDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={prevDisabled}
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-[1250px] transform -translate-y-1/2">
        <button
          className={`bg-gray-500 text-white opacity-50 p-3 rounded-full shadow-md transition ${
            nextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={nextDisabled}
        >
          →
        </button>
      </div>
    </div>
  );
}
