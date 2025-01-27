import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Escolher a Tinta Perfeita para Sua Casa",
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
    <div className="bg-white p-2 object-cover">
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
                      <span className="block font-bold  text-[130px] text-white">
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

          {/* Flexbox1 - Marcas Parceiras */}
          <div className="flex flex-row bg-white rounded-xl shadow-lg p-6 m-2 h-[800px]">
            {/* Coluna Esquerda - Texto + Logos */}
            <div className="w-[60%] flex flex-col justify-center p-6">
              <p className="text-[#243E88] text-4xl font-semibold text-left mb-6">
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
            <div className="w-[40%] flex justify-end items-center">
              <img
                src="/bg/bg1.png"
                alt="Rolo de Pintura"
                className="w-full h-full object-cover rounded-r-xl"
              />
            </div>
          </div>

          {/* Flexbox2 - Dicas da Portal */}
          <div className="relative flex justify-center m-2 items-center py-24 sm:py-32">
            {/* Fundo da Seção */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 rounded-3xl"
              style={{
                backgroundImage: "url('/bg/bg3.jpg')",
                backgroundColor: "rgba(255, 255, 255, 0.7)", // Branco com 90% de opacidade
                backgroundBlendMode: "overlay", // Mistura a cor branca com a imagem
              }}
            />

            {/* Camada escura para melhorar contraste */}
            <div className="absolute inset-0 bg-black/20 rounded-3xl" />

            {/* Container principal respeitando os limites da imagem */}
            <div className="relative max-w-[1200px] w-full mx-auto px-6 lg:px-8">
              <div className="max-w-2xl lg:max-w-4xl mx-auto">
                {/* Título */}
                <h2 className="text-[#243E88] text-4xl font-semibold text-left mb-6">
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
                      className="relative flex flex-col lg:flex-row gap-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-3xl p-8 border border-gray-200"
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

                        {/* Autor */}
                        <div className="mt-6 flex items-center gap-x-4 border-t border-gray-200 pt-6">
                          <img
                            alt=""
                            src={post.author.imageUrl}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">
                              <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {post.author.name}
                              </a>
                            </p>
                            <p className="text-gray-600 text-sm">
                              {post.author.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" flexbox-homepage flex flex-row bg-white h-[550px] opacity-100 rounded-xl p-8 shadow-lg m-2  justify-between text-center">
            <div className="flexbox-left flex-col w-[50%] items-start gap-4">
              <p className="text-[#243E88] opacity-100 text-[70px] sm:text-xl md:text-2xl text-left font-semibold">
                Nossa Localização
              </p>
              <p className="text-left text-[#243E88] opacity-100">
                {" "}
                Rua Conceição do Rio Pardo, 2158
              </p>
              <p className="text-left text-[#243E88] opacity-100">
                {" "}
                Ribas do Rio Pardo - MS{" "}
              </p>
              <div className="w-full h-[300px] flex bg-white opacity-100 rounded-lg shadow-md overflow-hidden ">
                <GoogleMap />{" "}
              </div>
            </div>

            <div className="flexbox-right w-[50%] m-4 justify-end items-end">
              <img
                src="/idv-portal/fachada-loja.jpeg"
                alt="fachada"
                className="w-full h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div
            className=" flexbox-homepage m-2 h-[350px] rounded-xl p-8 shadow-lg m-2 text-center"
            style={{
              backgroundImage: "url('/bg/bg2.webp')",
              backgroundColor: "rgba(255, 255, 255, 1)",
              backgroundBlendMode: "overlay",
            }}
          >
            <p className="text-[#243E88] opacity-100 text-[70px] sm:text-xl md:text-2xl text-left font-semibold">
              Contato{" "}
            </p>

            {/* Linha do WhatsApp */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src="/icons/wpp-icon.gif"
                alt="WhatsApp"
                className="w-8 h-8"
              />
              <span className="text-[#243E88] text-lg">(067) 99885-7070</span>
            </div>

            {/* Linha do Email */}
            <div className="flex items-center gap-3 mt-3">
              <img
                src="/icons/email-icon.svg"
                alt="Email"
                className="w-8 h-8"
              />
              <span className="text-[#243E88] text-lg">
                portaltintasribas@gmail.com
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
