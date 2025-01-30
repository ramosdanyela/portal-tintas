import GoogleMap from "@/components/GoogleMap";

export default function Home() {
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
        imageUrl: "/blog/artigo1.webp",
      },
    },
  ];

  return (
    <div className="bg-[#f9fcfd] p-2 object-cover">
      <div className="flexbox-master bg-[#d65126] pb-2 rounded-xl relative">
        <main>
          <div>
            {/* Hero card */}
            <div className="herocard relative">
              <div className="absolute inset-x-0 bottom-0 h-full w-full" />
              <div className="mx-auto w-full ">
                <div className="relative shadow-xl sm:overflow-hidden">
                  <div className="absolute  inset-0 w-full h-full ">
                    <img
                      alt="colorful room"
                      src="bg/hero.jpeg"
                      className="opacity-90 rounded-b-xl  w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                    <h1 className="text-center  tracking-tight sm:text-8xl lg:text-8xl">
                      <span className="block font-bold backdrop-blur-[7px] text-[130px] text-white">
                        Colorindo Ribas
                      </span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-center text-[30px] font-bold text-white sm:max-w-3xl">
                      A Portal Tintas é a loja completa para o que você precisa
                      no universo da Pintura!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row bg-white rounded-xl shadow-lg pr-0 pt-0 pb-0 p-6 m-16 h-[800px]">
            {/* Coluna Esquerda - Texto + Logos */}
            <div className="w-[60%] flex flex-col justify-center p-6">
              <p className="text-[#011F4B]  text-4xl font-bold text-left mb-6">
                Conheça a Portal
              </p>
              <p className="mt-6 text-3xl/8 text-gray-600 pt-8 leading-relaxed">
             A Portal Tintas conta com as melhores marcas para construções e reformas.
                Com ampla bagagem e referência em atendimento, contamos com profissionais especializados com mais de 20 anos de expertise no segmento e atendimento totalmente personalizado para sua necessidade.
             
              </p>
              
            </div>

            {/* Coluna Direita - Imagem do Rolo de Pintura preenchendo altura */}
            <div className="w-[80%] bg-[#d65126] rounded-xl p-2 m-8 flex justify-end items-center">
              <img
                src="/idv-portal/fachada-loja-2.jpg"
                alt="Fachada"
                className="w-full h-full object-cover rounded-xl  rounded-r-xl"
              />
            </div>
          </div>

          {/* Flexbox1 - Marcas Parceiras */}
          <div className="flex flex-row bg-white rounded-xl shadow-lg pr-0 pt-0 pb-0 p-6 m-16 h-[800px]">
            {/* Coluna Esquerda - Texto + Logos */}
            <div className="w-[60%] flex flex-col justify-center p-6">
              <p className="text-[#011F4B]  text-4xl font-bold text-left mb-6">
                Marcas Parceiras
              </p>
              <div className="grid grid-cols-3 gap-6">
                <img
                  src="/logos/suvinil.png"
                  alt="Suvinil"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/coral.png"
                  alt="Coral"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/quartzolit.png"
                  alt="Quartzolit"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/atlas.webp"
                  alt="Atlas"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/kala.jpeg"
                  alt="Kala"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/worker.webp"
                  alt="Worker"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/brasilux.png"
                  alt="Brasilux"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/hydronorth.png"
                  alt="Hydronorth"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/maxirubber.jpg"
                  alt="MaxiRubber"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/3m.png"
                  alt="3M"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/adere.png"
                  alt="Adere"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/eucatex.png"
                  alt="Eucatex"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/arara-azul.png"
                  alt="Arara Azul"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
                <img
                  src="/logos/osmocolor.png"
                  alt="Osmocolor"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />

                <img
                  src="/logos/grafftex.png"
                  alt="Grafftex"
                  className="w-[180px] h-[90px] object-contain mx-auto"
                />
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
          <div className="relative flex mt-16 mb-16 justify-end">
            {/* Fundo da Seção */}
            <div
              className="flex flex-row absolute inset-0 items-end justify-end bg-cover bg-center opacity-90"
              style={{
                backgroundImage: "url('/bg/bg3.jpg')",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Branco com 90% de opacidade
                backgroundBlendMode: "overlay", // Mistura a cor branca com a imagem
              }}
            />

            {/* Container principal respeitando os limites da imagem */}
            <div className="flex flex-col relative p-8 w-[60%] backdrop-blur-3xl">
              <div className="flex flex-col max-w-2xl lg:max-w-4xl mx-auto">
                {/* Título */}
                <h2 className="text-[#011F4B]  text-4xl font-bold text-left mb-6">
                  Dicas da Portal
                </h2>
                <p className="mt-2 text-lg text-white text-left">
                  Tudo o que você precisa saber para acertar na pintura
                </p>

                {/* Blog Post */}
                <div className="mt-12 space-y-12 lg:mt-16 lg:space-y-16">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="relative flex flex-row gap-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-xl p-8 border border-gray-200"
                    >
                      {/* Imagem à esquerda */}
                      <div className="relative w-full lg:w-1/3 flex-shrink-0">
                        <img
                          alt=""
                          src={post.imageUrl}
                          className="rounded-2xl w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10" />
                      </div>

                      {/* Texto do post */}
                      <div className="w-full lg:w-2/3">
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
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" flexbox-homepage flex flex-row bg-white h-[550px] opacity-100 rounded-xl p-8 shadow-lg m-16 justify-between text-center">
            <div className="flexbox-left flex-row w-[50%] items-start gap-4">
              <p className="text-[#011F4B] font-bold opacity-100 text-4xl  text-left">
                Venha nos visitar
              </p>
              <div className="w-full mt-4 mb-4 flex bg-white opacity-100 rounded-lg shadow-md overflow-hidden ">
                <GoogleMap />{" "}
              </div>
            </div>
            <div className="flex flex-col m-6">
              <div className="flex rounded-2xl w-fit self-start bg-gray-50 m-8 p-4 items-center flex-col">
                <h3 className=" text-2xl font-semibold text-gray-900">
                  Horário de Funcionamento
                </h3>
                <address className="mt-3 space-y-1 justify-end  text-2xl not-italic text-gray-600">
                  <p>Segunda a Sexta 07:30 - 18:30</p>
                  <p>Sábado 07:30 - 11:30</p>
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

          <div className=" flexbox-homepage relative flex shadow-lg flex-row bg-[#eaebee] backdrop-blur-3xl  m-16 h-[450px] rounded-xl p-8 justify-between">
            <div className=" flexbox-homepage flex flex-col">
              <p className="text-[#011F4B]  text-4xl font-bold opacity-100  text-left">
                Contato{" "}
              </p>

              {/* Linha do WhatsApp */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-[#011F4B] mt-8 font-bold text-2xl">
                  Faça seu orçamento:
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="/icons/wpp-icon.gif"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
                <span className="text-[#011F4B] text-2xl">(067) 99885-7070</span>
              </div>

              {/* Linha do Email */}
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
            <div className="flexbox-right inset-0 flex relative">
              <img
                src="/equipe-portal/painter-contato.jpg"
                alt="painter"
                className="flex rounded-lg relative"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
