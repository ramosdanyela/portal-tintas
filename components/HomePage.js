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

  return (
    <div className="flexbox-master lg:max-w-screen-xl max-w-screen-sm flex flex-col w-full bg-[#d65126] ">
     
       
          {/* Hero card */}
          <div className="herocard relative items-center w-full h-full inset-0 bottom-0 mx-auto shadow-xl">
            <img
              alt="colorful room"
              src="bg/hero.jpeg"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="relative flex flex-col items-center px-2 md:px-6 lg:px-8 py-32 md:py-24 lg:py-32">
              <h1 className="tracking-tight text-5xl md:text-8xl lg:text-[130px]">
                <span className="block font-bold text-center backdrop-blur-lg text-white">
                  Colorindo Ribas
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-bold text-white sm:max-w-xl lg:max-w-3xl">
                A Portal Tintas é a loja completa para o que você precisa no
                universo da Pintura!
              </p>
            </div>
          </div>
        
        <div className=" flex flex-row bg-white rounded-xl shadow-lg pr-0 pt-0 pb-0 p-8 m-16 h-[900px]">
          {/* Coluna Esquerda - Texto + Logos */}
          <div className="w-[60%] flex flex-col">
            <p className="text-gray-900 leading-relaxed pt-8 text-5xl font-bold text-left">
              As melhores marcas para sua obra
            </p>
            <p className="mt-2 text-lg/8 text-gray-600 pt-4 ">
              Na Portal Tintas, oferecemos <b>qualidade em produtos</b> e{" "}
              <b>agilidade no atendimento</b> para a sua construção ou reforma.
              Trabalhamos com as principais marcas do mercado, garantindo
              excelência em cada projeto.
            </p>

            <p className="text-lg/8 text-gray-600 pt-2 ">
              {" "}
              Nossa equipe de especialistas está pronta para oferecer um{" "}
              <b>atendimento personalizado</b>, auxiliando você na escolha dos
              melhores produtos para suas necessidades.
            </p>

            <p className="text-lg/8 text-gray-600 pt-2 ">
              Transforme seus espaços com cores e acabamentos de alta
              performance. <b>Conte com a Portal Tintas!</b>{" "}
            </p>

            <div ref={flexboxRef2} className="opacity-0 translate-y-10">
              <dl className="flex flex-col mt-14 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 size-5 text-[#d85b17]"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
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

          {/* Coluna Direita - Imagem do Rolo de Pintura preenchendo altura */}
          <div className="w-[50%]  rounded-xl ml-16 mb-16 mr-16 pt-8 flex justify-end items-center">
            <img
              src="/idv-portal/fachada-loja-3.jpeg"
              alt="Fachada"
              className="w-full h-full bg-contain rounded-xl  rounded-r-xl"
            />
          </div>
        </div>

        {/* Flexbox1 - Marcas Parceiras */}
        <div
          ref={flexboxRef3}
          className="opacity-0 translate-y-10 flex flex-row bg-white rounded-xl shadow-lg pr-0 pt-0 pb-0 p-6 m-16 h-[800px]"
        >
          {/* Coluna Esquerda - Texto + Logos */}
          <div className="w-[60%] flex flex-col p-6">
            <p className="text-gray-900  text-5xl font-bold text-left mt-8 mb-16">
              Marcas Parceiras
            </p>

            <div className="grid grid-cols-3 gap-6">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="lg:w-[120px] md:w-[180px] h-auto object-contain mx-auto"
                />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <Link
                href="/marcaseprodutos"
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

          {/* Coluna Direita - Imagem do Rolo de Pintura preenchendo altura */}
          <div className="w-[80%] flex justify-end items-center">
            <img
              src="/bg/bg1.png"
              alt="Rolo de Pintura"
              className="w-full h-full object-cover rounded-xl  -scale-x-100 rounded-r-xl"
            />
          </div>
        </div>

        {/* Flexbox2 - Dicas da Portal */}
        <div className=" relative flex mt-16 mb-16 justify-end">
          {/* Fundo da Seção */}
          <div
            className="flex flex-row absolute inset-0 items-end max-w-[1600px] justify-end bg-cover bg-center opacity-90"
            style={{
              backgroundImage: "url('/bg/bg3.jpg')",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Branco com 90% de opacidade
              backgroundBlendMode: "overlay", // Mistura a cor branca com a imagem
            }}
          />

          {/* Container principal respeitando os limites da imagem */}
          <div className="flex flex-col  p-12 w-[60%] backdrop-blur-3xl">
            <div className="flex flex-col max-w-2xl lg:max-w-4xl mx-auto">
              {/* Título */}
              <h2 className="text-gray-900 text-5xl font-bold text-left mb-4">
                Dicas da Portal
              </h2>
              <p className=" text-lg text-white font-bold text-left">
                Tudo o que você precisa saber para acertar na pintura
              </p>

              {/* Embla Carousel */}

              <Carousel />
              <div className="flex flex-col items-center">
                <Link
                  href="/blog"
                  className="flex hover:bg-gray-600 hover:text-gray-200 rounded-full p-2 text-bold mt-6 text-[#f9fcfd] gap-1  hover:underline"
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
        </div>
        <div
          ref={flexboxRef4}
          className="translate-y-10 flexbox-homepage flex flex-row bg-white h-[550px] opacity-100 rounded-xl p-8 shadow-lg m-16 justify-between text-center"
        >
          <div className="flexbox-left flex-row w-[50%] items-start gap-4">
            <p className="text-gray-900 font-bold opacity-100 text-4xl  text-left">
              Venha nos visitar
            </p>
            <p className=" text-lg text-gray-600  text-left">
              Estamos te esperando para um cafézinho ☕
            </p>
            <div className="w-full mt-4 mb-4 flex bg-white opacity-100 rounded-lg shadow-md overflow-hidden ">
              <GoogleMap />{" "}
            </div>
          </div>
          <div className="flex flex-col m-6 mt-12">
            <div className="flex rounded-2xl w-fit self-start bg-gray-50 m-8 p-4 items-center flex-col">
              <h3 className=" text-2xl font-semibold text-gray-900">
                Horário de Funcionamento
              </h3>
              <address className="mt-3 space-y-1 justify-end  text-2xl not-italic text-gray-600">
                <p>Segunda a Sexta 07:30 - 18:00</p>
                <p>Sábado 08:00 - 12:00</p>
              </address>
            </div>
            <div className="flex rounded-2xl w-fit self-start bg-gray-50 m-8 p-4 items-center flex-col">
              <h3 className=" text-2xl font-semibold text-gray-900">
                Nosso endereço
              </h3>
              <address className="mt-3 space-y-1 justify-end text-2xl not-italic text-gray-600">
                <p>Rua Conceição do Rio Pardo, 2158</p>
                <p>Ribas do Rio Pardo - MS</p>
              </address>
            </div>
          </div>
        </div>

        {/* Seção de Contato */}
        <div className="relative flex flex-row items-start h-[390px] mt-16 bg-[#f6f7fa]">
          {/* Fundo da Seção */}

          {/* Conteúdo */}
          <div className="flex left-side justify-center ml-[400px] flex-col p-4 h-full w-full">
            <h2 className="text-[#011F4B] text-4xl font-bold">Contato</h2>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-[#011F4B] font-bold text-2xl">
                Faça seu orçamento:
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <img
                src="/icons/wpp-icon.gif"
                alt="WhatsApp"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-[#011F4B] text-2xl">(067) 99885-7070</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mt-3">
              <img
                src="/icons/email-icon.svg"
                alt="Email"
                className="w-8 h-8"
              />
              <span className="text-[#011F4B] text-2xl">
                portaltintasribas@gmail.com
              </span>
            </div>
          </div>

          <div className="flex object-cover mt-2 mr-[300px] h-full w-full right-side">
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
