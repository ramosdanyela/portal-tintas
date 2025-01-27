import GoogleMap from "@/components/GoogleMap";

export default function Contato() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                Fale conosco diretamente
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Estamos à disposição
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Portal Tintas
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:portaltintasribas@gmail.com"
                        className="font-semibold text-indigo-600"
                      >
                        portaltintasribas@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Phone number</dt>
                    <dd className="mt-1 flex items-center gap-2">
                      <img
                        src="icons/wpp-icon.gif"
                        alt="WhatsApp"
                        className="w-5 h-5"
                      />
                      <span>(67) 99885-7070</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* 🔴 Essa div estava faltando ser fechada corretamente */}

          <div className="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                Localização
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Visite a nossa loja! Estamos te esperando para um cafézinho
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Maps
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                  <p>
                    Rua Conceição do Rio Pardo, 2158 Ribas do Rio Pardo - MS
                  </p>
                  <div>
                    <GoogleMap />
                  </div>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Horário de Funcionamento
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                  <p>Segunda a Sexta 07:30 - 18:30</p>
                  <p>Sábado 07:30 - 11:30</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
