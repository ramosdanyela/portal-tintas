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
      imageUrl: "/blog/artigo1.webp",
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
      imageUrl: "/blog/artigo1.webp",
    },
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Dicas da Portal
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Tudo o que você precisa saber para acertar na pintura.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
