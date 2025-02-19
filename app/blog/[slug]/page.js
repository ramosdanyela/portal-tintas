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
    <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
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
      <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
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
      <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
    `,
  },
  {
    id: 4,
    title:
      "Guia Completo para Renovação de Ambientes com Tintas de Alta Qualidade",
    description:
      "Descubra como transformar seus espaços com dicas avançadas e produtos de alta performance.",
    imageUrl: "/blog/artigo1.webp",
    date: "Fev 10, 2025",
    category: "Renovação",
    content: `
        <p>Renovar um ambiente pode ser uma tarefa desafiadora, mas com as tintas certas, a transformação é garantida. Neste guia completo, abordamos tudo o que você precisa saber para revitalizar seus espaços com produtos de alta qualidade.</p>
  
        <h2>1. Planejamento e Preparação</h2>
        <p>Antes de iniciar a pintura, é fundamental planejar cada etapa:</p>
        <ul>
          <li>Escolha as cores de acordo com a iluminação natural e a função do ambiente.</li>
          <li>Prepare as superfícies, corrigindo imperfeições e garantindo que estejam limpas.</li>
          <li>Proteja móveis e pisos com lonas e fitas adesivas para evitar danos.</li>
        </ul>
  
        <h2>2. Seleção da Tinta Ideal</h2>
        <p>O mercado oferece uma variedade de tintas, cada uma com características específicas. Considere fatores como durabilidade, acabamento e facilidade de aplicação para escolher o produto que melhor se adequa às suas necessidades.</p>
  
        <h2>3. Técnicas de Aplicação</h2>
        <p>A aplicação correta é essencial para um resultado profissional:</p>
        <ul>
          <li>Utilize pincéis e rolos de qualidade para cada tipo de superfície.</li>
          <li>Aplique demãos finas e uniformes, respeitando o tempo de secagem entre elas.</li>
          <li>Para áreas maiores, considere o uso de equipamentos que garantam uma cobertura homogênea.</li>
        </ul>
  
        <h2>4. Acabamento e Manutenção</h2>
        <p>Após a pintura, invista em um bom acabamento para prolongar a vida útil da cor e manter a beleza do ambiente. Realize pequenos retoques periodicamente para preservar a qualidade da pintura.</p>
  
        <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
    `,
  },
  {
    id: 5,
    title:
      "Tendências de Cores para 2025: Inspire-se para Transformar Sua Casa",
    description:
      "Conheça as cores que vão dominar o mercado e como aplicá-las para renovar seus ambientes com estilo.",
    imageUrl: "/blog/artigo2.webp",
    date: "Fev 15, 2025",
    category: "Tendências",
    content: `
        <p>O universo da decoração está sempre em evolução e 2025 promete trazer tendências inovadoras para a escolha de cores. Este artigo apresenta as principais tendências e inspirações para transformar seu lar com harmonia e personalidade.</p>
  
        <h2>1. Cores Neutras com Toques Vibrantes</h2>
        <p>As cores neutras continuam em alta, mas agora ganham vida com detalhes em tons vibrantes. Essa combinação cria ambientes sofisticados e modernos, permitindo que pequenos acentos de cor façam toda a diferença.</p>
  
        <h2>2. Tons Terrosos e Naturais</h2>
        <p>Tons como bege, marrom e verde oliva remetem à natureza, trazendo aconchego e equilíbrio para salas e quartos. Essas cores ajudam a criar um ambiente relaxante e conectado com o meio ambiente.</p>
  
        <h2>3. Acabamentos Metálicos</h2>
        <p>Detalhes em dourado, prata e cobre estão ganhando espaço, agregando um toque de luxo e exclusividade aos ambientes. Use-os em móveis e acessórios para criar pontos de destaque.</p>
  
        <h2>4. A Suavidade dos Tons Pastel</h2>
        <p>Tons pastel, com sua leveza e delicadeza, são ideais para criar espaços que transmitem tranquilidade e sofisticação. Eles combinam perfeitamente com elementos naturais e móveis de madeira.</p>
  
        <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
    `,
  },
  {
    id: 6,
    title: "Passo a Passo para Pintura Profissional: Dicas de Especialistas",
    description:
      "Aprenda técnicas e segredos dos especialistas para obter um acabamento impecável em suas pinturas.",
    imageUrl: "/blog/artigo3.webp",
    date: "Mar 01, 2025",
    category: "Tutoriais",
    content: `
        <p>Pintar como um profissional vai muito além de escolher uma boa tinta. Este passo a passo detalhado reúne dicas e técnicas dos maiores especialistas para que você alcance um acabamento de alto nível em seus projetos.</p>
  
        <h2>1. Preparação do Ambiente</h2>
        <p>Um ambiente bem preparado é crucial para o sucesso da pintura:</p>
        <ul>
          <li>Proteja pisos, móveis e objetos com lonas e fitas adesivas.</li>
          <li>Certifique-se de que as paredes estejam limpas e sem imperfeições.</li>
          <li>Utilize um primer para garantir a aderência e a uniformidade da tinta.</li>
        </ul>
  
        <h2>2. Escolha dos Materiais</h2>
        <p>Ferramentas de qualidade fazem toda a diferença. Opte por pincéis, rolos e equipamentos que permitam uma aplicação uniforme e sem desperdícios.</p>
  
        <h2>3. Técnicas de Aplicação</h2>
        <p>Algumas técnicas podem transformar a aplicação da tinta:</p>
        <ul>
          <li>Mantenha movimentos constantes e suaves para evitar marcas e gotejamentos.</li>
          <li>Aplique demãos finas e aguarde o tempo de secagem adequado antes de iniciar a próxima camada.</li>
          <li>Realize retoques para corrigir pequenas imperfeições e garantir um acabamento perfeito.</li>
        </ul>
  
        <h2>4. Finalização e Cuidados Pós-Pintura</h2>
        <p>Após a aplicação, reserve um tempo para a finalização, removendo cuidadosamente as proteções e fazendo os ajustes necessários. A manutenção periódica ajuda a conservar a beleza e a durabilidade da pintura.</p>
  
        <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
    `,
  },
  {
    id: 7,
    title: "Cuidados Essenciais na Aplicação de Tinta: Evite Erros Comuns",
    description:
      "Dicas práticas para evitar os erros mais comuns na hora de pintar e garantir um acabamento de qualidade.",
    imageUrl: "/blog/artigo4.webp",
    date: "Mar 05, 2025",
    category: "Dicas",
    content: `
        <p>Aplicar tinta pode parecer simples, mas pequenos erros podem comprometer o resultado final. Descubra neste artigo os cuidados essenciais para uma aplicação perfeita e sem imprevistos.</p>
  
        <h2>1. Preparação Adequada da Superfície</h2>
        <p>Uma boa preparação é a base para um acabamento duradouro:</p>
        <ul>
          <li>Limpe bem a parede, removendo poeira, gordura e resíduos.</li>
          <li>Corrija imperfeições com massa corrida e lixe até obter uma superfície lisa.</li>
          <li>Utilize um primer para uniformizar a absorção da tinta.</li>
        </ul>
  
        <h2>2. Escolha dos Materiais Certos</h2>
        <p>Ferramentas de qualidade evitam muitos problemas:</p>
        <ul>
          <li>Pincéis e rolos adequados para cada tipo de tinta e superfície.</li>
          <li>Fitas adesivas de boa qualidade para demarcar áreas e proteger bordas.</li>
          <li>Equipamentos de proteção, como luvas e óculos, para segurança durante a aplicação.</li>
        </ul>
  
        <h2>3. Técnicas de Aplicação</h2>
        <p>Para uma pintura uniforme, siga estas dicas:</p>
        <ul>
          <li>Não sobrecarregue o pincel ou rolo com tinta.</li>
          <li>Mantenha movimentos constantes e evite repetir a mesma área várias vezes.</li>
          <li>Respeite o tempo de secagem indicado pelo fabricante.</li>
        </ul>
  
        <p>Descubra o produto perfeito para o seu projeto de pintura <a href="https://www.portaltintas.com.br" target="_blank" rel="noopener">aqui</a> conosco.</p>
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
