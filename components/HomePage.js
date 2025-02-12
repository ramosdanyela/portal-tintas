import GoogleMap from "@/components/GoogleMap";
import {
  UserGroupIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from "@/components/Carousel";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const flexboxRef1 = useRef(null);
  const flexboxRef2 = useRef(null);
  const flexboxRef3 = useRef(null);
  const flexboxRef4 = useRef(null);
  const flexboxRef5 = useRef(null);

  useEffect(() => {
    const animateSection = (ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 }, // Estado inicial
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    animateSection(flexboxRef1);
    animateSection(flexboxRef2);
    animateSection(flexboxRef3);
    animateSection(flexboxRef4);
    animateSection(flexboxRef5);
  }, []);

  const features = [
    {
      name: "Equipe especializada.",
      description:
        "Nosso time conta com profissionais especializados e com mais de 20 anos de expertise na área.",
      icon: UserGroupIcon,
    },
    {
      name: "Melhores marcas.",
      description:
        "Trabalhamos com um portfólio diverso e com as melhores marcas do mercado.",
      icon: PaintBrushIcon,
    },
    {
      name: "Rede de profissionais parceiros.",
      description:
        "Temos uma ampla rede de pintores parceiros altamente qualificados.",
      icon: StarIcon,
    },
  ];

  const logos = [
    { src: "/logos/suvinil.png", alt: "Suvinil" },
    { src: "/logos/coral.png", alt: "Coral" },
    { src: "/logos/quartzolit.png", alt: "Quartzolit" },
    { src: "/logos/atlas.webp", alt: "Atlas" },
    { src: "/logos/kala.jpeg", alt: "Kala" },
    { src: "/logos/worker.webp", alt: "Worker" },
    { src: "/logos/brasilux.png", alt: "Brasilux" },
    { src: "/logos/hydronorth.png", alt: "Hydronorth" },
    { src: "/logos/maxirubber.jpg", alt: "MaxiRubber" },
    { src: "/logos/3m.png", alt: "3M" },
    { src: "/logos/adere.png", alt: "Adere" },
    { src: "/logos/eucatex.png", alt: "Eucatex" },
    { src: "/logos/arara-azul.png", alt: "Arara Azul" },
    { src: "/logos/osmocolor.png", alt: "Osmocolor" },
    { src: "/logos/grafftex.png", alt: "Grafftex" },
  ];

  const phoneNumber = "5567998857070";

  return (
    <div className="flexbox-master flex flex-col w-full bg-[#d65126]">
      {/* Hero card */}
      <div
        className="herocard flex flex-col bg-cover shadow-xl mt-20 mb-3 md:mb-4 lg:mb-8 gap-1 md:gap-2 lg:gap-2 py-8 md:py-16 lg:py-20"
        style={{
          backgroundImage: "url('bg/hero.jpeg')",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Branco com 90% de opacidade
          backgroundBlendMode: "overlay", // Mistura a cor branca com a imagem
        }}
      >
        <div className="backdrop-blur-sm">
          <h1 className="text-center text-white font-bold tracking-tight text-4xl md:text-7xl lg:text-[130px]">
            Colorindo Ribas
          </h1>
          <p className=" text-center text-white font-bold tracking-tight text-md md:text-2xl lg:text-3xl">
            A Portal Tintas é a loja completa para o que você precisa no
            universo da Pintura!
          </p>
        </div>
      </div>

      {/* 1st container*/}
      <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 my-3 md:my-4 lg:my-8 mx-6 md:mx-8 lg:mx-16 bg-white rounded-xl shadow-lg">
        {/* Coluna Esquerda - Texto + Logos */}
        <div className="flex flex-col lg:w-[45%]">
          <p className="text-gray-800 pb-2 leading-relaxed lg:text-4xl md:text-3xl text-2xl font-bold text-center md:text-center lg:text-left">
            As melhores marcas para sua obra
          </p>
          <p className="lg:text-lg/8 md:text-md sm:text-sm text-gray-600 pt-4 ">
            Na Portal Tintas, oferecemos <b>qualidade em produtos</b> e{" "}
            <b>agilidade no atendimento</b> para a sua construção ou reforma.
            Trabalhamos com as principais marcas do mercado, garantindo
            excelência em cada projeto.
          </p>

          <p className="lg:text-lg/8 md:text-md text-sm text-gray-600">
            {" "}
            Nossa equipe de especialistas está pronta para oferecer um{" "}
            <b>atendimento personalizado</b>, auxiliando você na escolha dos
            melhores produtos para suas necessidades.
          </p>

          <p className="lg:text-lg/8 md:text-md text-sm text-gray-600 pt-2 ">
            Transforme seus espaços com cores e acabamentos de alta performance.{" "}
            <b>Conte com a Portal Tintas!</b>{" "}
          </p>

          <div ref={flexboxRef2} className="opacity-0 translate-y-10">
            <dl className="flex flex-col mt-7 md:mt-7 lg:mt-8 space-y-8 lg:text-base/8 md:text-md text-sm text-gray-600 ">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-800">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-[#d85b17]"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline lg:text-base/8 md:text-md text-sm text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col items-center">
              <Link
                href="/quemsomos"
                className="flex hover:bg-gray-300 rounded-full p-2 text-bold mt-6 text-gray-600 gap-1  hover:underline"
              >
                Veja mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Imagem da fachada*/}
        <div className="rounded-xl flex justify-end lg:w-[50%] items-center">
          <img
            src="/idv-portal/fachada-loja-3.jpeg"
            alt="Fachada"
            className="w-full h-full bg-cover rounded-xl"
          />
        </div>
      </div>

      {/* Flexbox2 - Marcas Parceiras */}
      <div
        ref={flexboxRef3}
        className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 my-3 md:my-4 lg:my-8 mx-6 md:mx-8 lg:mx-16 opacity-0 translate-y-10 bg-white rounded-xl shadow-lg"
      >
        {/* Coluna Esquerda - Texto + Logos */}
        <div className="flex flex-col lg:w-[45%]">
          <p className="text-gray-900 lg:text-4xl md:text-3xl text-3xl font-bold text-center md:text-center lg:text-left">
            Marcas Parceiras
          </p>

          <div className="grid grid-cols-3 pt-6 gap-3 md:gap-3 lg:gap-6 justify-center items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="flex w-full lg:w-[120px] object-contain"
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/marcaseprodutos"
              className="flex hover:bg-gray-300 rounded-full p-1 text-bold mt-2 lg:mt-6 text-gray-600 gap-1  hover:underline"
            >
              Veja mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Coluna Direita - Imagem do Rolo de Pintura preenchendo altura */}
        <div className="hidden lg:relative md:hidden lg:items-end lg:block lg:w-[55%]">
          <img
            src="/bg/bg1.png"
            alt="Rolo de Pintura"
            className="w-full lg:flex lg:absolute h-full object-cover lg:inset-0 rounded-xl -scale-x-100 "
          />
        </div>
      </div>

      {/* Flexbox2 - Dicas da Portal */}
      <div
        className="dicas flex flex-col bg-cover shadow-lg my-5 md:my-4 lg:my-8 "
        style={{
          backgroundImage: "url('/bg/bg3.jpg')",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Branco com 90% de opacidade
          backgroundBlendMode: "overlay", // Mistura a cor branca com a imagem
        }}
      >
        {/* Container principal respeitando os limites da imagem */}
        <div className="flex flex-col lg:w-[60%] pt-10 lg:p-16 backdrop-blur-lg gap-1 md:gap-2 lg:gap-2 py-2 md:py-4 lg:py-8">
          {/* Título */}
          <h2 className="text-gray-900 lg:text-4xl md:text-3xl text-3xl font-bold lg:text-left md:text-center text-center ">
            Dicas da Portal
          </h2>
          <p className=" text-lg text-white font-bold text-center md:text-center lg:text-left">
            Tudo o que você precisa saber para acertar na pintura
          </p>

          {/* Embla Carousel */}

          <Carousel />

          <div className="flex flex-col items-center">
            <Link
              href="/blog"
              className="flex hover:bg-gray-600 hover:text-gray-200 rounded-full p-2 text-bold  text-[#f9fcfd] gap-1  hover:underline"
            >
              Veja mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Venha nos visitar */}
      <div
        ref={flexboxRef4}
        className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 my-3 md:my-4 lg:my-8 mx-6 md:mx-8 lg:mx-16 opacity-0 translate-y-10 bg-white rounded-xl shadow-lg"
      >
        <div className="flexbox-left md:flex-col lg:flex-row items-start gap-4 lg:w-[50%]">
          <p className="text-gray-900 font-bold opacity-100 lg:text-4xl md:text-3xl text-3xl  text-center md:text-center lg:text-left">
            Venha nos visitar
          </p>
          <p className=" text-lg text-gray-600  text-center md:text-center lg:text-left">
            Estamos te esperando para um cafézinho ☕
          </p>
          <div className="w-full mt-4 mb-4 flex bg-white opacity-100 rounded-lg shadow-md overflow-hidden ">
            <GoogleMap />{" "}
          </div>
        </div>
        <div className="flex flex-col items-center lg:m-6 lg:mt-12 lg:items-center lg:justify-start">
          <div className="flex rounded-2xl bg-gray-50 lg:m-6 lg:p-4 m-2 p-1 items-center flex-col">
            <h3 className="text-md md:text-xl lg:text-2xl text-center font-semibold text-gray-900">
              Horário de Funcionamento
            </h3>
            <address className="lg:mt-3 space-y-1 mt-1 text-center justify-end text-md md:text-xl lg:text-2xl not-italic text-gray-600">
              <p>Segunda à Sexta 07:30 - 18:00</p>
              <p>Sábado 08:00 - 12:00</p>
            </address>
          </div>
          <div className="flex-col rounded-2xl bg-gray-50 lg:m-6 lg:p-4 mt-4 items-center">
            <h3 className=" text-md md:text-xl lg:text-2xl text-center font-semibold text-gray-900">
              Nosso endereço
            </h3>
            <address className="flex-col mt-2 space-y-1 items-center text-center text-md md:text-xl lg:text-2xl not-italic text-gray-600">
              <p>Rua Conceição do Rio Pardo, 2158</p>
              <p>Ribas do Rio Pardo - MS</p>
            </address>
          </div>
        </div>
      </div>

      {/* Seção de Contato */}
      <div className="contato flex flex-col md:flex-col lg:flex-row shadow-lg mt-3 md:mt-4 lg:mt-8 bg-white h-full w-full">
        {/* Fundo da Seção */}

        {/* Conteúdo */}
        <div className="left-side flex flex-col  my-auto items-center lg:items-end lg:text-left lg:justify-center p-4 h-full w-full">
          <h2 className="text-[#011F4B] lg:text-4xl md:text-3xl text-3xl font-bold">
            Contato
          </h2>

          {/* WhatsApp */}
          <div className="flex items-center lg:items-start gap-3 lg:mt-4">
            <span className="text-[#011F4B] font-bold sm:text-2xl md:text-xl lg:text-2xl">
              Faça seu orçamento:
            </span>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:p-2 rounded-full hover:bg-gray-300">
            <img
              src="/icons/wpp-icon.gif"
              alt="WhatsApp"
              className="w-8 h-8 rounded-full"
            />
            <a href={`https://wa.me/${phoneNumber}`}>
              <span className="text-[#011F4B] text-2xl cursor-pointer">
                (067) 99885-7070
              </span>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mt-3">
            <img src="/icons/email-icon.svg" alt="Email" className="w-8 h-8" />
            <span className="text-[#011F4B] sm: lg:text-2xl">
              portaltintasribas@gmail.com
            </span>
          </div>
        </div>

        <div className="flex object-cover mt-2 h-full w-full right-side">
          <img
            alt="painter"
            src="/equipe-portal/painter-contato2.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
