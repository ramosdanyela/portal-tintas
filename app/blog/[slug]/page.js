import { notFound } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "Escolha a Tinta Perfeita para Sua Casa",
    description:
      "Como acertar na cor e no tipo de tinta para transformar seus ambientes.",
    imageUrl: "/blog/artigo1.webp",
    date: "Jan 05, 2025",
    category: "Paredes",
    content: `
      <p>Escolher a tinta perfeita para sua casa é um passo essencial para transformar qualquer ambiente. Com tantas opções disponíveis, pode parecer desafiador, mas algumas dicas podem facilitar sua escolha.</p>

      <h2>1. Considere o Ambiente</h2>
      <p>Cada cômodo da casa pode exigir um tipo de tinta diferente:</p>
      <ul>
        <li><strong>Áreas úmidas</strong>: prefira tintas acrílicas ou epóxi, pois são resistentes à umidade.</li>
        <li><strong>Ambientes internos</strong>: tintas laváveis são ideais para facilitar a manutenção.</li>
        <li><strong>Paredes externas</strong>: use tintas resistentes ao sol e à chuva.</li>
      </ul>

      <h2>2. Escolha a Cor com Cuidado</h2>
      <p>A cor da tinta pode influenciar no humor e na percepção do espaço. Tons claros ampliam ambientes, enquanto tons escuros trazem aconchego.</p>

      <h2>3. Faça Testes Antes de Pintar</h2>
      <p>Antes de comprar grandes quantidades de tinta, aplique pequenas amostras na parede para testar a iluminação do ambiente.</p>
    `,
  },
  {
    id: 2,
    title: "Como Cuidar da Sua Pintura para Manter a Parede Sempre Bonita",
    description:
      "Dicas práticas para conservar suas paredes pintadas por mais tempo.",
    imageUrl: "/blog/artigo2.webp",
    date: "Jan 05, 2025",
    category: "Paredes",
    content: `
      <p>Manter suas paredes sempre bonitas exige cuidados regulares. Algumas ações simples ajudam a preservar a pintura por mais tempo.</p>

      <h2>1. Limpeza Adequada</h2>
      <p>Para limpar as paredes sem danificar a tinta:</p>
      <ul>
        <li>Use um pano macio ou esponja levemente umedecida.</li>
        <li>Evite produtos abrasivos que possam remover a pintura.</li>
        <li>Para manchas, misture detergente neutro com água morna.</li>
      </ul>

      <h2>2. Evite Excesso de Umidade</h2>
      <p>A umidade pode causar mofo e descascamento da pintura. Use desumidificadores ou ventilação adequada para evitar o problema.</p>

      <h2>3. Pequenos Reparos</h2>
      <p>Se houver riscos ou descascados, faça retoques com um pincel pequeno para manter a aparência uniforme.</p>
    `,
  },
  {
    id: 3,
    title: "Técnicas de Pintura para Criar Efeitos Incríveis na Parede",
    description:
      "Aprenda a criar texturas e efeitos especiais para personalizar seus ambientes.",
    imageUrl: "/blog/artigo3.webp",
    date: "Jan 05, 2025",
    category: "Decoração",
    content: `
      <p>Quer inovar na decoração da sua casa? Algumas técnicas de pintura podem transformar completamente seus ambientes, criando efeitos visuais incríveis.</p>

      <h2>1. Efeito Degradê</h2>
      <p>Esse efeito é feito com esponjas ou pincéis largos para mesclar tons de cores, criando um visual suave e moderno.</p>

      <h2>2. Paredes Texturizadas</h2>
      <p>Usar massa corrida e rolos especiais permite criar texturas como:</p>
      <ul>
        <li>Rústica (com espátula irregular)</li>
        <li>Grafiato (usando um rolo texturizado)</li>
        <li>Escovada (com pinceladas finas)</li>
      </ul>

      <h2>3. Efeito Geométrico</h2>
      <p>Com fita crepe e cores vibrantes, você pode criar formas geométricas para um ambiente moderno e sofisticado.</p>

      <h2>4. Pintura com Esponja</h2>
      <p>Essa técnica cria um efeito rústico e natural, ideal para dar textura sutil às paredes.</p>
    `,
  },
];

export default function BlogPost({ params }) {
  const { slug } = params;

  // Encontra o post correspondente
  const post = posts.find((p) => slugify(p.title) === slug);

  // Retorna 404 caso o post não exista
  if (!post) return notFound();

  return (
    <div className="overflow-hidden bg-[#f9fcfd] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-gray-600 mt-2">
          {post.date} - {post.category}
        </p>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="my-6 rounded-lg w-full"
        />
        <div
          className="prose prose-lg text-gray-600 leading-7"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

// Função para criar URLs amigáveis
const slugify = (text) =>
  text
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
    .toLowerCase()
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais
