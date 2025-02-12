"use client";

import {
  UserGroupIcon,
  StarIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import GenWppBtn from "@/components/GenWppBtn";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuemSomos() {
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
            duration: 1,
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

  return (
    <div className="flex flex-col bg-[#f9fcfd]">
      <div
        ref={flexboxRef1}
        className="container-hero flex flex-col md:flex-row pt-[8rem] lg:flex-row "
      >
       
          {/* Coluna da Esquerda - Descrição */}
          <div className="flex flex-col px-6 gap-x-2 md:px-6 lg:px-8 w-full lg:justify-center lg:w-[60%]">
            <h2 className="text-base/7 lg:text-2xl/8 font-semibold text-[#d85b17]">
              Colorindo Ribas
            </h2>
            <p className="lg:mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 lg:text-5xl">
              Portal Tintas
            </p>
            <p className="lg:mt-6 text-md md:text-md lg:text-4xl/8 lg:font-thin text-gray-600 pt-8 ">
              A Portal Tintas é uma loja em Ribas do Rio Pardo que se destaca
              pelo atendimento ágil e pela parceria com as principais marcas do
              mercado.{" "}
            </p>
            <p className="lg:mt-6 text-md md:text-md lg:text-4xl/8 lg:font-thin text-gray-600 pt-4 ">
              Tendo como referência nossos atendimentos constantes às grandes
              empresas envolvidas no Projeto Cerrado, temos uma loja completa
              para tudo o que você precisar no universo da Pintura!
            </p>
          </div>

          {/* Coluna Direita - Imagem */}
          <div className="flex px-6 py-4 h-full  lg:px-0 ">
            <img
              alt="Product screenshot"
              src="/bg/bg1.png"
              className="w-full h-full object-contain transform -scale-x-100"
            />
          </div>
        </div>

        {/* Seção 1: Equipe especializada */}
        <div
          ref={flexboxRef2}
          className="opacity-0 translate-y-10 flex flex-col lg:mt-16 mt-6 mb-6 lg:mb-16 md:flex-col lg:flex-row gap-x-12 items-center justify-between "
        >
          <div className="mx-6 lg:w-1/2 bg-[#d85b17] rounded-xl">
            <img
              alt="Equipe especializada"
              src="/equipe-portal/equipe-portal-fev.jpg"
              className="bg-cover rounded-xl p-2 "
            />
          </div>

          <div className="flex flex-col flex-1 items-center md:items-center lg:items-start max-w-2xl lg:mx-0 h-full my-4 gap-y-4 w-full px-6 lg:px-0">
            <p className="flex mt-2 lg:mt-0 text-center md:text-center lg:text-left text-pretty text-xl md:text-2xl lg:text-4xl leading-relaxed font-semibold text-gray-900 gap-2">
              <UserGroupIcon className="inline-block w-[1em] h-[1em] text-[#d85b17]" />
              Equipe especializada
            </p>
            <p className="text-md md:text-md text-center lg:text-left lg:text-3xl/8 md:text-center text-gray-600 lg:py-8 leading-relaxed">
              Nosso time conta com profissionais especializados e com mais de 20
              anos de expertise na área.
            </p>
            <div className="flex-col items-center w-full ">
              <GenWppBtn />
            </div>
          </div>
        </div>

        {/* Seção 2: Atendimento   */}
        <div
          ref={flexboxRef3}
          className="opacity-0 translate-y-10 flex flex-col md:flex-col lg:flex-row h-full min-h-[500px] gap-x-16 items-center mx-auto w-full mt-32 mb-32"
        >
          <div className="max-w-2xl lg:mx-0 lg:max-w-lg h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-2">
            <p className="mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-center gap-2">
              <StarIcon className="inline-block w-[1em] h-[1em] text-[#d85b17]" />
              Atendimento personalizado
            </p>
            <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
              Contamos com atendimento on-line, via WhatsApp e presencial em
              nossa loja física.
            </p>
            <GenWppBtn />
          </div>

          <div className="sm:px-6 lg:px-0">
            <div className="flex max-w-2xl shadow-4xl sm:mx-0 sm:max-w-none">
              <img
                alt="Atendimento personalizado"
                src="/equipe-portal/note-cafe.jpg"
                className="-mb-12 w-[57rem] h-auto rounded-xl bg-gray-800 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>

        {/* Seção 3: Melhores Marcas */}
        <div
          ref={flexboxRef4}
          className="opacity-0 translate-y-10 flex flex-col md:flex-col lg:flex-row h-full min-h-[500px] gap-x-16 justify-between mx-auto w-full mt-32 mb-32"
        >
          <div className="sm:px-6 lg:px-0">
            <div
              aria-hidden="true"
              className="flex absolute bottom-0 right-0 -z-0 w-full origin-bottom-right skew-x-30 bg-[#D85B32] opacity-20"
            />
            <div className="flex mx-auto max-w-2xl shadow-4xl sm:mx-0 sm:max-w-none">
              <img
                alt="Melhores marcas"
                src="/marcas-parceiras/suvinil item folder/Screenshot 2025-01-18 at 10.45.07.png"
                width={2432}
                height={1500}
                className="-mb-12 w-[57rem] rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
              />
            </div>
          </div>
          <div className="h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-center gap-2">
                <PaintBrushIcon className="inline-block w-[1em] h-[1em] text-[#d85b17]" />
                Melhores Marcas
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                Trabalhamos com um portfólio diverso e com as melhores marcas do
                mercado.
              </p>
              <GenWppBtn />
            </div>
          </div>
        </div>

        {/* Seção 4: Rede de Profissionais Parceiros */}
        <div
          ref={flexboxRef5}
          className="opacity-0 translate-y-10 flex flex-col md:flex-col lg:flex-row h-full min-h-[500px] gap-x-16 justify-between mx-auto w-full mt-32 mb-32"
        >
          <div className="h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="text-pretty whitespace-nowrap leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-start gap-2">
                <UserGroupIcon className="inline-block w-[1em] h-[1em] text-[#d85b17]" />
                Rede de Profissionais Parceiros
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                Temos uma ampla rede de pintores parceiros altamente
                qualificados.
              </p>
              <GenWppBtn />
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="flex mx-auto max-w-2xl shadow-4xl sm:mx-0 sm:max-w-none">
              <img
                alt="Melhores marcas"
                src="/equipe-portal/dia-pintor.jpg"
                width={2432}
                height={1500}
                className="-mb-12 w-[57rem] rounded-xl bg-gray-800 "
              />
            </div>
          </div>
        </div>
      </div>
   
  );
}
