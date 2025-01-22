export default function Example() {
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
                      src="/hero.jpeg"
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
          <div className=" flexbox-homepage m-1 bg-white h-[350px] rounded-xl p-8 shadow-lg m-2 text-center">
            <p className="text-[#243E88] opacity-100 text-[70px] sm:text-xl md:text-2xl text-left font-semibold">
              Marcas Parceiras
            </p>
          </div>

          <div className=" flexbox-homepage m-1 bg-white h-[350px] opacity-80 rounded-xl p-8 shadow-lg m-2  text-center">
            <p className="text-[#243E88] opacity-100 text-[70px] sm:text-xl md:text-2xl text-left font-semibold">
              Dicas da Portal
            </p>
          </div>
          <div className=" flexbox-homepagem m-1  bg-white h-[350px] opacity-80 rounded-xl p-8 shadow-lg m-2  text-center">
            <p className="text-[#243E88] opacity-100 text-[70px] sm:text-xl md:text-2xl text-left font-semibold">
              Localização
            </p>
          </div>
          <div className=" flexbox-homepage m-2 bg-white h-[350px] opacity-80 rounded-xl p-8 shadow-lg m-2 text-center">
            <p className="text-[#243E88] opacity-100 text-[70px] sm:text-xl md:text-2xl text-left font-semibold">
              Contato{" "}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
