import {
  UserGroupIcon,
  StarIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import GenWppBtn from "@/components/GenWppBtn";

export default function QuemSomos() {
  return (
    <div className="overflow-hidden bg-[#f9fcfd] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          {/* Coluna da Esquerda - Descrição */}
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[#d85b17]">
                Colorindo Ribas
              </h2>
              <p className="mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 sm:text-5xl">
                Portal Tintas
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                A Portal Tintas está há pouco menos de um ano no mercado, mas já
                conta com uma grande bagagem de referências em atendimento em
                nosso município e região.
              </p>
              <p className="mt-4 text-3xl/8 text-gray-600 leading-relaxed">
                Tendo como referência nossos atendimentos constantes às grandes
                empresas envolvidas no Projeto Cerrado, temos uma loja completa
                para tudo o que você precisar no universo da Pintura!
              </p>
            </div>
          </div>

          {/* Coluna Direita - Imagem */}
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-[#d85b17] px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-[#D85B32] opacity-20 ring-1 ring-inset ring-white"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt="Product screenshot"
                  src="/bg/bg1.png"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
        
        
        {/* Seção 1: Equipe especializada */}
        <div className="flex flex-row gap-x-16 mt-32 mb-32">
        <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-[#d85b17] px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-[#D85B32] opacity-20 ring-1 ring-inset ring-white"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt="Equipe especializada"
                  src="/equipe-portal/equipe-portal-fev.jpg"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              />
            </div>
          </div>
       
          <div className="h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-center gap-2">
                <UserGroupIcon className="w-16 h-16 text-[#d85b17]" />
                Equipe especializada
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                Nosso time conta com profissionais especializados e com mais de
                20 anos de expertise na área.
              </p>
              <GenWppBtn />
            </div>
          </div>
         
        </div>

        {/* Seção 2: Atendimento personalizado */}
        <div className="flex flex-row mt-8 mb-8">
          <div className="h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-center gap-2">
                <StarIcon className="w-16 h-16 text-[#d85b17]" />
                Atendimento personalizado
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                Contamos com atendimento on-line, via WhatsApp e presencial em nossa loja física.
              </p>
              <GenWppBtn />
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <img src="/equipe-portal/note-café.jpg" alt="Atendimento personalizado" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Seção 3: Melhores Marcas */}
        <div className="flex flex-row mt-8 mb-8">
          <div className="h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-center gap-2">
                <PaintBrushIcon className="w-16 h-16 text-[#d85b17]" />
                Melhores Marcas
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                Trabalhamos com um portfólio diverso e com as melhores marcas do mercado.
              </p>
              <GenWppBtn />
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <img src="/marcas-parceiras/suvinil.png" alt="Melhores marcas" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Seção 4: Rede de Profissionais Parceiros */}
        <div className="flex flex-row mt-8 mb-8">
        
          <div className="sm:px-6 lg:px-0">
            <img src="/equipe-portal/dia-pintor.jpg" alt="Rede de profissionais parceiros" className="w-full rounded-lg" />
          </div>
                  <div className="h-full w-full px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-pretty whitespace-nowrap leading-relaxed font-semibold text-gray-900 sm:text-5xl flex items-center gap-2">
                <UserGroupIcon className="w-16 h-16 text-[#d85b17]" />
                Rede de Profissionais Parceiros
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
                Temos uma ampla rede de parceiros profissionais altamente qualificados.
              </p>
              <GenWppBtn />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
