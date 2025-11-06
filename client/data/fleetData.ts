export interface CarImage {
  url: string;
  alt: string;
}

export interface Car {
  id: string;
  name: string;
  category: string;
  year: number;
  transmission: "Manual" | "Automática";
  fuel: "Gasolina" | "Diesel" | "Híbrido" | "Elétrico";
  description: string;
  mainImage: string;
  images: CarImage[];
  featured?: boolean; // ⭐ NOVO: Marca se é destaque na home
}

export const categories = [
  "Sedan",
  "SUV",
  "Carrinhas",
  "Muscle",
  "Outros",
];

// ============================================
// SEDANS - 20 carros
// ============================================
const sedans: Car[] = [
  {
    id: "bmw-m3-competition-2025",
    name: "BMW M3 Competition",
    category: "Sedan",
    year: 2025,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O BMW M3 Competition é um sedã esportivo de alta performance com motor 3.0L biturbo de 6 cilindros em linha, produzindo 510 cv e 66 kgfm de torque. Acelera de 0 a 100 km/h em 3,9 segundos e atinge 290 km/h. Possui teto de fibra de carbono, faróis full LED com tecnologia BMW Laser e interior premium com painel digital de 14 polegadas.",
    mainImage: "/images/fleet/Sedan/BMW/image1.jpg",
    featured: true,
    images: [
      { url: "/images/fleet/Sedan/BMW/image2.jpg", alt: "BMW M3 Competition - Vista frontal" },
      { url: "/images/fleet/Sedan/BMW/image3.jpg", alt: "BMW M3 Competition - Lateral esportiva" },
      { url: "/images/fleet/Sedan/BMW/image4.jpg", alt: "BMW M3 Competition - Interior de luxo" }
    ]
  },
  {
    id: "genesis-g70-2026",
    name: "Genesis G70",
    category: "Sedan",
    year: 2026,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Genesis G70 é um sedã esportivo de luxo com design atlético e interior refinado. Está disponível com motores 2.0L turbo ou V6 biturbo 3.3L, com até 365 cv e 376 lb-ft de torque. Acelera de 0 a 100 km/h em 4,5 segundos. Possui interior focado no motorista, com materiais premium e tela multimídia de 10,25 polegadas com suporte a Apple CarPlay e Android Auto.",
    mainImage: "/images/fleet/Sedan/Genesis-G70/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Genesis-G70/image2.jpg", alt: "Genesis G70 - Vista frontal" },
      { url: "/images/fleet/Sedan/Genesis-G70/image3.jpg", alt: "Genesis G70 - Traseira elegante" },
      { url: "/images/fleet/Sedan/Genesis-G70/image4.jpg", alt: "Genesis G70 - Interior de luxo" }
    ]
  },
  {
    id: "hyundai-sonata-2025-branco",
    name: "Hyundai Sonata Branco",
    category: "Sedan",
    year: 2025,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Hyundai Sonata de nova geração apresenta design moderno e faróis full LED. Disponível com motores 1.6L turbo de 180 cv ou 2.5L aspirado de 191 cv. Equipado com teto solar panorâmico, painel digital e sistema de carregamento por indução. Inclui piloto automático adaptativo e assistente de permanência em faixa.",
    mainImage: "/images/fleet/Sedan/Hundai-sonata-2025-branco/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Hundai-sonata-2025-branco/image2.jpg", alt: "Hyundai Sonata Branco - Vista frontal" },
      { url: "/images/fleet/Sedan/Hundai-sonata-2025-branco/image3.jpg", alt: "Hyundai Sonata Branco - Lateral elegante" },
      { url: "/images/fleet/Sedan/Hundai-sonata-2025-branco/image4.jpg", alt: "Hyundai Sonata Branco - Interior moderno" }
    ]
  },
  {
    id: "hyundai-sonata-black-2023",
    name: "Hyundai Sonata Preto",
    category: "Sedan",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Hyundai Sonata da oitava geração combina estilo cupê e tecnologia avançada. Possui painel digital de 10,3 polegadas, carregamento por indução, bancos com aquecimento e ventilação e assistente de estacionamento remoto. Equipado com piloto automático adaptativo e recursos de segurança de última geração.",
    mainImage: "/images/fleet/Sedan/hundai-sonata-black/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/hundai-sonata-black/image2.jpg", alt: "Hyundai Sonata Preto - Frente" },
      { url: "/images/fleet/Sedan/hundai-sonata-black/image3.jpg", alt: "Hyundai Sonata Preto - Traseira" },
      { url: "/images/fleet/Sedan/hundai-sonata-black/image4.jpg", alt: "Hyundai Sonata Preto - Interior" }
    ]
  },
  {
    id: "hyundai-sonata-red-2023",
    name: "Hyundai Sonata Vermelho",
    category: "Sedan",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Hyundai Sonata 2023 na cor Calypso Red apresenta design elegante com grade frontal em cascata e luzes LED integradas. Equipado com motor 1.6L turbo de 180 cv ou 2.5L 4-cilindros, câmbio automático e consumo de até 15,7 km/l. Inclui câmera de visão traseira, controle adaptativo e assistência de permanência na faixa.",
    mainImage: "/images/fleet/Sedan/hundai-sonata-red/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/hundai-sonata-red/image2.jpg", alt: "Hyundai Sonata Vermelho - Vista frontal" },
      { url: "/images/fleet/Sedan/hundai-sonata-red/image3.jpg", alt: "Hyundai Sonata Vermelho - Lateral" },
      { url: "/images/fleet/Sedan/hundai-sonata-red/image4.jpg", alt: "Hyundai Sonata Vermelho - Interior" }
    ]
  },
  {
    id: "kia-optima-2019",
    name: "Kia Optima",
    category: "Sedan",
    year: 2019,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Kia Optima 2019 é um sedã elegante com motor 2.4L de 185 hp ou 2.0L de 165 cv. Apresenta faróis afilados, grade redesenhada e interior moderno com compatibilidade Apple CarPlay e Android Auto. Oferece frenagem automática de emergência e alerta de ponto cego.",
    mainImage: "/images/fleet/Sedan/kia-optima/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/kia-optima/image2.jpg", alt: "Kia Optima - Vista frontal" },
      { url: "/images/fleet/Sedan/kia-optima/image3.jpg", alt: "Kia Optima - Lateral" },
      { url: "/images/fleet/Sedan/kia-optima/image4.jpg", alt: "Kia Optima - Interior" }
    ]
  },
  {
    id: "mercedes-a45-amg-2015",
    name: "Mercedes-Benz A45 AMG Petronas Edition",
    category: "Sedan",
    year: 2015,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Mercedes-Benz A45 AMG Petronas World Champion Edition celebra as vitórias da equipe na F1. Possui faixas em verde petróleo, rodas de 19 polegadas com detalhes verdes e interior com bancos AMG e costuras combinando. Equipado com motor 2.0L turbo de quatro cilindros de alto desempenho.",
    mainImage: "/images/fleet/Sedan/Mercedes-Benz-A45-AMG-2015/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Mercedes-Benz-A45-AMG-2015/image1.jpg", alt: "Mercedes A45 AMG - Frente" },
      { url: "/images/fleet/Sedan/Mercedes-Benz-A45-AMG-2015/image1.jpg", alt: "Mercedes A45 AMG - Traseira" },
      { url: "/images/fleet/Sedan/Mercedes-Benz-A45-AMG-2015/image1.jpg", alt: "Mercedes A45 AMG - Interior" }
    ]
  },
  {
    id: "mercedes-class-e-2021",
    name: "Mercedes-Benz Classe E AMG Line",
    category: "Sedan",
    year: 2021,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Mercedes-Benz Classe E (W213) facelift de 2021 apresenta novos faróis multi-beam LED e lanternas traseiras triangulares. Interior com sistema MBUX e telas duplas de 12,3 polegadas. Disponível com motores gasolina, diesel e híbridos, nas versões E200, E300, AMG E53 e E63.",
    mainImage: "/images/fleet/Sedan/Mercedes-Benz-Class-E/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Mercedes-Benz-Class-E/image2.jpg", alt: "Mercedes Classe E AMG Line - Frente" },
      { url: "/images/fleet/Sedan/Mercedes-Benz-Class-E/image3.jpg", alt: "Mercedes Classe E AMG Line - Traseira" },
      { url: "/images/fleet/Sedan/Mercedes-Benz-Class-E/image4.jpg", alt: "Mercedes Classe E AMG Line - Interior" }
    ]
  },
  {
    id: "mercedes-class-s-2017",
    name: "Mercedes-Benz Classe S 550 4MATIC",
    category: "Sedan",
    year: 2017,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Mercedes-Benz S 550 4MATIC 2017 é um sedã de luxo com motor V8 biturbo de 4.7L, produzindo 449 cv. Traz tração integral e acabamento premium. A cor cinza Selenite Metallic destaca o visual elegante deste ícone de conforto e tecnologia.",
    mainImage: "/images/fleet/Sedan/Mercedes-Benz-Class-S/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Mercedes-Benz-Class-S/image2.jpg", alt: "Mercedes Classe S 550 - Frente" },
      { url: "/images/fleet/Sedan/Mercedes-Benz-Class-S/image3.jpg", alt: "Mercedes Classe S 550 - Traseira" },
      { url: "/images/fleet/Sedan/Mercedes-Benz-Class-S/image4.jpg", alt: "Mercedes Classe S 550 - Interior" }
    ]
  },
  {
    id: "toyota-corolla-2022",
    name: "Toyota Corolla",
    category: "Sedan",
    year: 2022,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Toyota Corolla da 12ª geração (2019–2022) combina eficiência e confiabilidade. Equipado com motor 2.0L ou híbrido, oferece faróis LED e sistema Toyota Safety Sense com controle adaptativo e pré-colisão. Modelo popular em mercados como Angola, disponível na cor preta.",
    mainImage: "/images/fleet/Sedan/toyota-corolla/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/toyota-corolla/image2.jpg", alt: "Toyota Corolla - Frente" },
      { url: "/images/fleet/Sedan/toyota-corolla/image3.jpg", alt: "Toyota Corolla - Traseira" },
      { url: "/images/fleet/Sedan/toyota-corolla/image4.jpg", alt: "Toyota Corolla - Interior" }
    ]
  },
  {
    id: "hyundai-elantra-se-2020",
    name: "Hyundai Elantra SE",
    category: "Sedan",
    year: 2020,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Hyundai Elantra SE 2020 é o modelo de entrada da linha Elantra. Sedã de quatro portas com capacidade para cinco passageiros, equipado com motor 2.0L de 4 cilindros produzindo 147 cv e 132 lb-ft de torque. Consumo de combustível estimado de 13 km/l na cidade e 17 km/l na estrada.",
    mainImage: "/images/fleet/Sedan/Hundai-Elantra-Cinza/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Hundai-Elantra-Cinza/image2.jpg", alt: "Hyundai Elantra SE - Vista lateral" }
    ]
  },
  {
    id: "nissan-sentra-2025",
    name: "Nissan Sentra",
    category: "Sedan",
    year: 2025,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Nissan Sentra 2025 é um sedã compacto de quatro portas com design atualizado. Motor 2.0L de quatro cilindros com 149 cv. Disponível em três níveis de acabamento: S, SV e SR. O modelo SV inclui NissanConnect e oferece três mudanças de óleo gratuitas durante os primeiros 24.000 km ou 24 meses.",
    mainImage: "/images/fleet/Sedan/Nissan-Sentra/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Nissan-Sentra/image2.jpg", alt: "Nissan Sentra - Vista frontal" },
      { url: "/images/fleet/Sedan/Nissan-Sentra/image3.jpg", alt: "Nissan Sentra - Lateral moderna" },
      { url: "/images/fleet/Sedan/Nissan-Sentra/image4.jpg", alt: "Nissan Sentra - Interior confortável" }
    ]
  },
  {
    id: "nissan-altima-2018",
    name: "Nissan Altima",
    category: "Sedan",
    year: 2018,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Nissan Altima 2018 está disponível em cinco níveis de acabamento: 2.5 S, 2.5 SR, 2.5 SV, 2.5 SL e 3.5 SL. A maioria dos modelos está equipada com motor de quatro cilindros de 2.5L produzindo 179 cv. O modelo 3.5 SL tem um motor de 3.5L mais potente. Recursos de segurança padrão incluem travagem de emergência automática e aviso de colisão frontal.",
    mainImage: "/images/fleet/Sedan/Nissan-Altima/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Nissan-Altima/image2.jpg", alt: "Nissan Altima - Frente" },
      { url: "/images/fleet/Sedan/Nissan-Altima/image3.jpg", alt: "Nissan Altima - Lateral" },
      { url: "/images/fleet/Sedan/Nissan-Altima/image4.jpg", alt: "Nissan Altima - Interior" }
    ]
  },
  {
    id: "nissan-maxima-2018",
    name: "Nissan Maxima",
    category: "Sedan",
    year: 2018,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Nissan Maxima de nona geração (2016-2023) apresenta design esportivo e tecnologia avançada. Equipado com motor V6 de 3.5L produzindo 300 cv, acoplado a transmissão Xtronic CVT. Disponível em cinco modelos: S, SV, SL, SR e Platinum. Modelos de 2017 em diante incluem Apple CarPlay como padrão.",
    mainImage: "/images/fleet/Sedan/Nissan-Maxima/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Nissan-Maxima/image2.jpg", alt: "Nissan Maxima - Vista frontal" },
      { url: "/images/fleet/Sedan/Nissan-Maxima/image3.jpg", alt: "Nissan Maxima - Lateral esportiva" }
    ]
  },
  {
    id: "mitsubishi-mirage-g4-sedan-2020",
    name: "Mitsubishi Mirage G4",
    category: "Sedan",
    year: 2020,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Mitsubishi Mirage G4 é um sedã subcompacto conhecido pela eficiência de combustível. Motor de três cilindros de 1.2L produzindo 78 cv, com classificação de 37 MPG combinada quando equipado com CVT automática. Modelo LE de 2020 inclui jantes de liga leve de 15 polegadas, entrada sem chave, botão de arranque, bancos dianteiros aquecidos e ecrã tátil de 6.5 polegadas com Apple CarPlay e Android Auto.",
    mainImage: "/images/fleet/Sedan/Mitsubishi-Mirage-G4/image1.jpg",
    images: [
      { url: "/images/fleet/Sedan/Mitsubishi-Mirage-G4/image2.jpg", alt: "Mitsubishi Mirage G4 - Vista frontal" },
      { url: "/images/fleet/Sedan/Mitsubishi-Mirage-G4/image3.jpg", alt: "Mitsubishi Mirage G4 - Lateral" },
      { url: "/images/fleet/Sedan/Mitsubishi-Mirage-G4/image4.jpg", alt: "Mitsubishi Mirage G4 - Interior" }
    ]
  }
];
// ============================================
// SUVs - 20 carros
// ============================================
const suvs: Car[] = [
  {
    id: "dodge-durango-srt",
    name: "Dodge Durango SRT",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "O Dodge Durango é um SUV de alto desempenho, possivelmente um SRT Hellcat, com capô com entradas de ar e design agressivo. SUV de sete lugares equipado com faróis de LED e motor V8 sobrealimentado que pode chegar a 710 cavalos de potência. Combina desempenho robusto e funcionalidade familiar.",
    mainImage: "/images/fleet/SUV/Dogde-Durango/image1.jpg",
    featured: true,
    images: [
      { url: "/images/fleet/SUV/Dogde-Durango/image2.jpg", alt: "Dodge Durango - Vista frontal agressiva" },
      { url: "/images/fleet/SUV/Dogde-Durango/image3.jpg", alt: "Dodge Durango - Lateral esportiva" },
      { url: "/images/fleet/SUV/Dogde-Durango/image4.jpg", alt: "Dodge Durango - Interior espaçoso" }
    ]
  },
  {
    id: "gmc-acadia-at4-2024",
    name: "GMC Acadia AT4",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "O GMC Acadia AT4 é da geração redesenhada de 2024/2025 com design robusto e recursos focados em off-road. Possui grade dianteira exclusiva, ganchos de reboque vermelhos, faróis LED em formato de 'C' e rodas de 18 polegadas. Equipado com motor turbo 2.5L de 4 cilindros produzindo 328 cv e 326 lb-ft de torque, com tração nas quatro rodas e modos de condução selecionáveis incluindo modo 'Terrain' para terrenos irregulares.",
    mainImage: "/images/fleet/SUV/GMC-Acadia-AT4/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/GMC-Acadia-AT4/image2.jpg", alt: "GMC Acadia AT4 - Vista frontal robusta" },
      { url: "/images/fleet/SUV/GMC-Acadia-AT4/image3.jpg", alt: "GMC Acadia AT4 - Detalhes off-road" },
      { url: "/images/fleet/SUV/GMC-Acadia-AT4/image4.jpg", alt: "GMC Acadia AT4 - Interior" }
    ]
  },
  {
    id: "hyundai-santa-fe-2019",
    name: "Hyundai Santa Fe Ultimate",
    category: "SUV",
    year: 2019,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Hyundai Santa Fe Ultimate 2019 com motor 2.0L Turbo GDI de 4 cilindros, tração integral AWD e transmissão automática de 8 velocidades. Consumo de combustível de 12.3 L/100km na cidade. SUV versátil e tecnológico para família.",
    mainImage: "/images/fleet/SUV/Hundai-SantaFe-2019/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Hundai-SantaFe-2019/image2.jpg", alt: "Hyundai Santa Fe - Vista frontal" },
      { url: "/images/fleet/SUV/Hundai-SantaFe-2019/image3.jpg", alt: "Hyundai Santa Fe - Lateral" },
      { url: "/images/fleet/SUV/Hundai-SantaFe-2019/image4.jpg", alt: "Hyundai Santa Fe - Interior Ultimate" }
    ]
  },
  {
    id: "kia-sorento-2016",
    name: "Kia Sorento",
    category: "SUV",
    year: 2016,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Sorento da terceira geração (2015-2018) com motor V6 3.3L de 270 cavalos de potência. SUV para sete passageiros com consumo de 7,2 km/l na cidade e 9,3 km/l na estrada. Inclui teto solar panorâmico, bancos com ajustes elétricos e aquecimento, direção elétrica, ar-condicionado digital de dupla zona e chave presencial.",
    mainImage: "/images/fleet/SUV/Kia-Sorento/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Kia-Sorento/image1.jpg", alt: "Kia Sorento - Vista frontal" },
      { url: "/images/fleet/SUV/Kia-Sorento/image1.jpg", alt: "Kia Sorento - Lateral" },
      { url: "/images/fleet/SUV/Kia-Sorento/image1.jpg", alt: "Kia Sorento - Interior de 7 lugares" }
    ]
  },
  {
    id: "kia-soul-2020",
    name: "Kia Soul",
    category: "SUV",
    year: 2020,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Soul de terceira geração lançado em 2020, conhecido por seu design distinto semelhante a uma caixa. Possui faróis estreitos na parte superior, luzes diurnas de LED na parte inferior e grade frontal grande. Equipado com motor 2.0L de 147 cavalos de potência. Crossover compacto com design único e personalidade marcante.",
    mainImage: "/images/fleet/SUV/Kia-Soul/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Kia-Soul/image2.jpg", alt: "Kia Soul - Vista frontal distintiva" },
      { url: "/images/fleet/SUV/Kia-Soul/image3.jpg", alt: "Kia Soul - Lateral característico" },
      { url: "/images/fleet/SUV/Kia-Soul/image4.jpg", alt: "Kia Soul - Interior" }
    ]
  },
  {
    id: "kia-sportage-2021",
    name: "Kia Sportage",
    category: "SUV",
    year: 2021,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Sportage da quarta geração (2017-2022), SUV compacto com capacidade para cinco passageiros. Modelos de 2020 e 2021 incluem Apple CarPlay e Android Auto como padrão. Compete com Toyota RAV4 e Honda CR-V, oferecendo ótimo custo-benefício. Considerado um dos mais confiáveis da quarta geração.",
    mainImage: "/images/fleet/SUV/Kia-Sportage/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Kia-Sportage/image2.jpg", alt: "Kia Sportage - Vista frontal" },
      { url: "/images/fleet/SUV/Kia-Sportage/image3.jpg", alt: "Kia Sportage - Lateral" },
      { url: "/images/fleet/SUV/Kia-Sportage/image4.jpg", alt: "Kia Sportage - Interior" }
    ]
  },
  {
    id: "kia-sportage-2024-white",
    name: "Kia Sportage Branco",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Sportage 2024 da quinta geração com design arrojado e moderno. Conjunto óptico em LED em formato de bumerangue e grade tridimensional. Motor 1.6 turbo de 180 cv com sistema híbrido leve de 48V. Interior espaçoso com telas curvadas, console com câmbio em disco, carregamento por indução, bancos com aquecimento/refrigeração e câmera 360°. Porta-malas de 543L (expandível para 1778L).",
    mainImage: "/images/fleet/SUV/Kia-Sportage-2024-white/image1.jpg",
    featured: true,
    images: [
      { url: "/images/fleet/SUV/Kia-Sportage-2024-white/image2.jpg", alt: "Kia Sportage Branco - Vista frontal moderna" },
      { url: "/images/fleet/SUV/Kia-Sportage-2024-white/image3.jpg", alt: "Kia Sportage Branco - Lateral" },
      { url: "/images/fleet/SUV/Kia-Sportage-2024-white/image4.jpg", alt: "Kia Sportage Branco - Interior tecnológico" }
    ]
  },
  {
    id: "kia-sportage-2024-black",
    name: "Kia Sportage Preto",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Sportage 2024 da quinta geração na cor preta. Design robusto e esportivo com faróis de LED em formato de bumerangue integrados à grade frontal. Equipado com motor 1.6 turbo de 180 cv e sistema híbrido leve de 48V para eficiência energética. Inclui tecnologias como sensor de ponto cego, alerta de saída de faixa e piloto automático adaptativo.",
    mainImage: "/images/fleet/SUV/Kia-Sportage-2024-Black/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Kia-Sportage-2024-Black/image2.jpg", alt: "Kia Sportage Preto - Vista frontal" },
      { url: "/images/fleet/SUV/Kia-Sportage-2024-Black/image3.jpg", alt: "Kia Sportage Preto - Lateral" },
      { url: "/images/fleet/SUV/Kia-Sportage-2024-Black/image4.jpg", alt: "Kia Sportage Preto - Interior" }
    ]
  },
  {
    id: "kia-sportage-red",
    name: "Kia Sportage Vermelho",
    category: "SUV",
    year: 2021,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Sportage da quarta geração na cor vermelha (Sunset Red/Hyper Red). Design moderno com faróis de nevoeiro distintos e grade 'nariz de tigre'. Disponível com motores 2.4L ou 2.0L turbo. Inclui freios ABS, controle de estabilidade e tração, e sistema de infoentretenimento com tela sensível ao toque compatível com Android Auto e Apple CarPlay.",
    mainImage: "/images/fleet/SUV/Kia-Sportage-Red/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Kia-Sportage-Red/image2.jpg", alt: "Kia Sportage Vermelho - Vista frontal" },
      { url: "/images/fleet/SUV/Kia-Sportage-Red/image3.jpg", alt: "Kia Sportage Vermelho - Lateral" },
      { url: "/images/fleet/SUV/Kia-Sportage-Red/image4.jpg", alt: "Kia Sportage Vermelho - Interior" }
    ]
  },
  {
    id: "kia-telluride-2020",
    name: "Kia Telluride",
    category: "SUV",
    year: 2020,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Kia Telluride é um SUV de três fileiras muito popular, com configurações para 7 ou 8 passageiros. Equipado com motor V6 3.8L de 291 cavalos de potência. Inclui controle de cruzeiro inteligente com funcionalidade stop-and-go, assistente de manutenção de faixa, alerta de colisão frontal, sensores de estacionamento, sistema de câmera de 360 graus, bancos aquecidos e ventilados, e sistema de som premium Harman Kardon.",
    mainImage: "/images/fleet/SUV/Kia-Telluride-2020/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Kia-Telluride-2020/image2.jpg", alt: "Kia Telluride - Vista frontal robusta" },
      { url: "/images/fleet/SUV/Kia-Telluride-2020/image3.jpg", alt: "Kia Telluride - Lateral" },
      { url: "/images/fleet/SUV/Kia-Telluride-2020/image4.jpg", alt: "Kia Telluride - Interior de três fileiras" }
    ]
  },
  {
    id: "lexus-lx570-2018",
    name: "Lexus LX 570",
    category: "SUV",
    year: 2018,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Lexus LX 570 2018 é um SUV de luxo com motor 5.7L V8 produzindo 383 cv e 55,7 kgfm de torque. Faróis Full LED, grade proeminente, rodas de 21 polegadas. Interior premium com bancos em couro com ajustes elétricos, aquecimento e ventilação, teto solar, sistema de som premium. Central multimídia com tela de 10 polegadas, GPS, câmeras de 360°, seletor de modos de condução e porta-malas elétrico. Sistemas de segurança incluindo alerta de colisão, pontos cegos, controle de descidas e piloto automático adaptativo.",
    mainImage: "/images/fleet/SUV/Lexus-570/image1.jpg",
    featured: true,
    images: [
      { url: "/images/fleet/SUV/Lexus-570/image2.jpg", alt: "Lexus LX 570 - Vista frontal de luxo" },
      { url: "/images/fleet/SUV/Lexus-570/image1.jpg", alt: "Lexus LX 570 - Lateral" },
      { url: "/images/fleet/SUV/Lexus-570/image2.jpg", alt: "Lexus LX 570 - Interior premium" }
    ]
  },
  {
    id: "mercedes-gl-class-2015",
    name: "Mercedes-Benz GL-Class",
    category: "SUV",
    year: 2015,
    transmission: "Automática",
    fuel: "Diesel",
    description: "Mercedes-Benz GL-Class de segunda geração (X166), SUV de luxo de sete lugares. Antes da mudança para GLS em 2016. Disponível com motorizações como GL 350 BlueTEC com motor diesel V6 3.0L ou GL 500 AMG com motor V8 biturbo. Grade com duas barras horizontais e detalhes cromados no para-choque.",
    mainImage: "/images/fleet/SUV/Mercedes-Benz-GL-Class/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Mercedes-Benz-GL-Class/image2.jpg", alt: "Mercedes GL-Class - Vista frontal" },
      { url: "/images/fleet/SUV/Mercedes-Benz-GL-Class/image3.jpg", alt: "Mercedes GL-Class - Lateral" },
      { url: "/images/fleet/SUV/Mercedes-Benz-GL-Class/image1.jpg", alt: "Mercedes GL-Class - Interior de luxo" }
    ]
  },
  {
    id: "brabus-900-rocket-edition",
    name: "Brabus 900 Rocket Edition",
    category: "SUV",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Brabus 900 Rocket Edition baseado no Mercedes-AMG G63. Motor V8 biturbo Rocket 900 de 4.5L produzindo 900 cv e 1.250 Nm de torque. Aceleração 0-100 km/h em 3.7 segundos, velocidade máxima de 280 km/h. Conceito aerodinâmico Widestar com spoilers em fibra de carbono, rodas forjadas de 24 polegadas. Interior artesanal com couro e detalhes 'Rocket Red'. Edição limitada de apenas 25 unidades.",
    mainImage: "/images/fleet/SUV/Mercedes-G63-BRABUS/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Mercedes-G63-BRABUS/image2.jpg", alt: "Brabus 900 Rocket - Vista frontal exclusiva" },
      { url: "/images/fleet/SUV/Mercedes-G63-BRABUS/image3.jpg", alt: "Brabus 900 Rocket - Detalhes em fibra de carbono" },
      { url: "/images/fleet/SUV/Mercedes-G63-BRABUS/image4.jpg", alt: "Brabus 900 Rocket - Interior de edição limitada" }
    ]
  },
  {
    id: "mercedes-g63-branco",
    name: "Mercedes-AMG G63 Branco",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Mercedes-AMG G63 branco, SUV de luxo de alto desempenho da linha G-Class. Grade frontal com barras verticais características e para-choque esportivo. Interior premium com tecnologia de ponta e acabamentos de alta qualidade. Ícone de robustez e luxo combinados.",
    mainImage: "/images/fleet/SUV/Mercedes-G63-White/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Mercedes-G63-White/image2.jpg", alt: "Mercedes G63 Branco - Vista frontal icônica" },
      { url: "/images/fleet/SUV/Mercedes-G63-White/image3.jpg", alt: "Mercedes G63 Branco - Lateral" },
      { url: "/images/fleet/SUV/Mercedes-G63-White/image4.jpg", alt: "Mercedes G63 Branco - Interior de luxo" }
    ]
  },
  {
    id: "mercedes-g63-preto",
    name: "Mercedes-AMG G63 Preto",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Mercedes-AMG G63 na cor preta, combinando o design icônico do G-Class com performance excepcional. Motor V8 biturbo de alta potência, interior luxuoso com acabamentos premium e capacidade off-road lendária.",
    mainImage: "/images/fleet/SUV/Mercedes-G63-Black/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Mercedes-G63-Black/image2.jpg", alt: "Mercedes G63 Preto - Vista frontal" },
      { url: "/images/fleet/SUV/Mercedes-G63-Black/image3.jpg", alt: "Mercedes G63 Preto - Lateral" },
      { url: "/images/fleet/SUV/Mercedes-G63-Black/image4.jpg", alt: "Mercedes G63 Preto - Interior" }
    ]
  },
  {
    id: "mercedes-maybach-gls600",
    name: "Mercedes-Maybach GLS 600",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Mercedes-Maybach GLS 600, SUV de luxo com grade frontal com barras verticais e emblema Maybach no capô. Motor V8 biturbo 4.0L com sistema híbrido leve EQ Boost de 550 cv. Aceleração 0-96 km/h em 4,8 segundos. Interior focado no luxo com poltronas traseiras com aquecimento, massagem e ajuste elétrico. Suspensão a ar com modo 'Maybach' para máximo conforto. Acabamentos em couro Napa e madeira real.",
    mainImage: "/images/fleet/SUV/Mercedes-Maybach-GLS600/image1.jpg",
    featured: true,
    images: [
      { url: "/images/fleet/SUV/Mercedes-Maybach-GLS600/image2.jpg", alt: "Mercedes-Maybach GLS600 - Vista frontal luxuosa" },
      { url: "/images/fleet/SUV/Mercedes-Maybach-GLS600/image3.jpg", alt: "Mercedes-Maybach GLS600 - Detalhes premium" },
      { url: "/images/fleet/SUV/Mercedes-Maybach-GLS600/image4.jpg", alt: "Mercedes-Maybach GLS600 - Interior Maybach" }
    ]
  },
  {
    id: "nissan-patrol-preto",
    name: "Nissan Patrol Preto",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Nissan Patrol 2024 na cor preta, SUV conhecido por capacidades off-road e características de luxo. Disponível com motores V6 e V8 5.6L de 400 cv, capacidade para 7-8 passageiros. Versões Titanium e Platinum City disponíveis. Interior espaçoso com três fileiras de assentos e tecnologia avançada.",
    mainImage: "/images/fleet/SUV/Nissan-Patrol-Black/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Nissan-Patrol-Black/image2.jpg", alt: "Nissan Patrol Preto - Vista frontal imponente" },
      { url: "/images/fleet/SUV/Nissan-Patrol-Black/image3.jpg", alt: "Nissan Patrol Preto - Lateral" },
      { url: "/images/fleet/SUV/Nissan-Patrol-Black/image4.jpg", alt: "Nissan Patrol Preto - Interior espaçoso" }
    ]
  },
  {
    id: "nissan-patrol-branco",
    name: "Nissan Patrol Branco",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Nissan Patrol na cor branca, SUV full-size de luxo com presença imponente. Motor V8 5.6L oferecendo 298 kW de potência e 560 Nm de torque. Capacidade para até oito passageiros com três fileiras de assentos. Conforto refinado e tecnologia avançada em pacote robusto.",
    mainImage: "/images/fleet/SUV/Nissan-Patrol-White/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Nissan-Patrol-White/image2.jpg", alt: "Nissan Patrol Branco - Vista frontal" },
      { url: "/images/fleet/SUV/Nissan-Patrol-White/image3.jpg", alt: "Nissan Patrol Branco - Lateral" },
      { url: "/images/fleet/SUV/Nissan-Patrol-White/image4.jpg", alt: "Nissan Patrol Branco - Interior" }
    ]
  },
  {
    id: "nissan-patrol-nismo",
    name: "Nissan Patrol Nismo",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Nissan Patrol Nismo, versão de alto desempenho desenvolvida pela divisão NISMO. Motor V8 5.6L de 428 cv e 560 Nm de torque. Design aerodinâmico com grade V-Motion, detalhes em vermelho e rodas de 22 polegadas. Suspensão aprimorada com amortecedores Bilstein para melhor manuseio. Exclusivo para mercados do Oriente Médio.",
    mainImage: "/images/fleet/SUV/Nissan-Patrol-WhiteKit/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Nissan-Patrol-WhiteKit/image2.jpg", alt: "Nissan Patrol Nismo - Vista frontal esportiva" },
      { url: "/images/fleet/SUV/Nissan-Patrol-WhiteKit/image3.jpg", alt: "Nissan Patrol Nismo - Lateral" },
      { url: "/images/fleet/SUV/Nissan-Patrol-WhiteKit/image4.jpg", alt: "Nissan Patrol Nismo - Interior Nismo" }
    ]
  },
  {
    id: "toyota-bz4x",
    name: "Toyota bZ4X",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Elétrico",
    description: "Toyota bZ4X, SUV elétrico similar em tamanho ao RAV4. Versão FWD com motor 150 kW (201 cv) 0-100 km/h em 7,5s, versão AWD com dois motores totalizando 160 kW (214 cv) 0-100 km/h em 6,9s. Autonomia de 450 km (WLTP) com bateria de 71,4 kWh. Carregamento rápido DC até 80% em menos de 1 hora. Design distinto com para-lamas pretos e painel de instrumentos em posição elevada. Garantia de bateria mantendo 70% da capacidade após 10 anos ou 1 milhão de km.",
    mainImage: "/images/fleet/SUV/Toyota-bZ4X/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Toyota-bZ4X/image2.jpg", alt: "Toyota bZ4X - Vista frontal elétrica" },
      { url: "/images/fleet/SUV/Toyota-bZ4X/image3.jpg", alt: "Toyota bZ4X - Lateral" },
      { url: "/images/fleet/SUV/Toyota-bZ4X/image4.jpg", alt: "Toyota bZ4X - Interior tecnológico" }
    ]
  },
  {
    id: "toyota-rav4-2019",
    name: "Toyota RAV4",
    category: "SUV",
    year: 2019,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Toyota RAV4 quinta geração lançada em 2019. Opções de motorização gasolina e híbrida com motor 2.5L. Versão híbrida com consumo de 17,3 km/l cidade e 15,3 km/l estrada. Sistema de som JBL, Apple CarPlay, Android Auto, controle de cruzeiro adaptativo, assistente de permanência em faixa e ar-condicionado de duas zonas. Design moderno e tecnologia avançada.",
    mainImage: "/images/fleet/SUV/Toyota-RAV4-2019/image1.jpg",
    images: [
      { url: "/images/fleet/SUV/Toyota-RAV4-2019/image2.jpg", alt: "Toyota RAV4 - Vista frontal" },
      { url: "/images/fleet/SUV/Toyota-RAV4-2019/image3.jpg", alt: "Toyota RAV4 - Lateral" },
      { url: "/images/fleet/SUV/Toyota-RAV4-2019/image4.jpg", alt: "Toyota RAV4 - Interior" }
    ]
  }
];
// ============================================
// CARRINHAS - 20 carros
// ============================================
const carrinhas: Car[] = [
    {
    id: "chevrolet-silverado-1500-2020",
    name: "Chevrolet Silverado 1500",
    category: "Carrinhas",
    year: 2020,
    transmission: "Automática",
    fuel: "Diesel",
    description: "A Chevrolet Silverado 1500 é uma popular carrinha de caixa aberta (pickup truck) conhecida pela sua força e fiabilidade. Os modelos de 2019 e 2020 foram redesenhados com um aumento no uso de aço de alta resistência na carroçaria e na estrutura. O modelo de 2020 introduziu mais opções de motor e tecnologia em comparação com o modelo de 2019. A Silverado 1500 oferece várias opções de motor, incluindo um motor V8 e um motor turbo-diesel, com uma capacidade máxima de reboque de até 6.033 kg.",
    mainImage: "/images/fleet/Carrinhas/Chervolet-Silverado/image1.jpg",
    images: [
      {
        url: "/images/fleet/Carrinhas/Chervolet-Silverado/image2.jpg",
        alt: "Chevrolet Silverado 1500 - Vista lateral"
      },
      {
        url: "/images/fleet/Carrinhas/Chervolet-Silverado/image3.jpg",
        alt: "Chevrolet Silverado 1500 - Vista traseira"
      },
      {
        url: "/images/fleet/Carrinhas/Chervolet-Silverado/image4.jpg",
        alt: "Chevrolet Silverado 1500 - Interior moderno"
      }
    ]
  },
    {
    id: "toyota-coaster-2025",
    name: "Toyota Coaster",
    category: "Carrinhas",
    year: 2025,
    transmission: "Manual",
    fuel: "Diesel",
    description: "É um micro-ônibus robusto e confiável, projetado para oferecer conforto e segurança. Tem capacidade para 30 passageiros e é flexível para viagens longas e deslocações urbanas. O modelo de 2025 está disponível para venda em vários locais, incluindo Angola e Dubai. Algumas versões vêm com ar condicionado, portas de correr duplas e um motor diesel de 4.0L. A suspensão, o radiador e o ar condicionado são reforçados, tornando-o adequado para ambientes tropicais.",
    mainImage: "/images/fleet/Carrinhas/Coaster/image1.jpg",
    featured: true,
    images: [
      {
        url: "/images/fleet/Carrinhas/Coaster/image2.jpg",
        alt: "Toyota Coaster - Vista frontal"
      },
      {
        url: "/images/fleet/Carrinhas/Coaster/image3.jpg",
        alt: "Toyota Coaster - Vista lateral"
      },
      {
        url: "/images/fleet/Carrinhas/Coaster/image4.jpg",
        alt: "Toyota Coaster - Interior espaçoso"
      }
    ]
  },
  {
    id: "chevrolet-silverado-1500-high-country-2019",
    name: "Chevrolet Silverado 1500 High Country",
    category: "Carrinhas",
    year: 2019,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Chevrolet Silverado 1500 High Country 2019 é a versão de luxo do modelo Silverado 1500. Características incluem grade frontal cromada distintiva e detalhes exclusivos. Opções de motor incluem 5.3L EcoTec3 V8 com 355 cv e 383 lb-ft de torque, ou 6.2L EcoTec3 V8 com 420 cv e 460 lb-ft de torque. Transmissão automática de 8 ou 10 velocidades. Interior premium com acabamento em couro e costura exclusiva do pacote High Country. Recursos incluem câmera de visão surround, assistente de manutenção de faixa, alerta de colisão frontal e assentos aquecidos e ventilados.",
    mainImage: "/images/fleet/Carrinhas/Chevrolet-Silverado-1500-High Country/image1.jpg",
    images: [
      { url: "/images/fleet/Carrinhas/Chevrolet-Silverado-1500-High Country/image2.jpg", alt: "Silverado High Country - Vista lateral luxuosa" },
      { url: "/images/fleet/Carrinhas/Chevrolet-Silverado-1500-High Country/image3.jpg", alt: "Silverado High Country - Traseira" },
      { url: "/images/fleet/Carrinhas/Chevrolet-Silverado-1500-High Country/image4.jpg", alt: "Silverado High Country - Interior premium" }
    ]
  },
  {
    id: "hyundai-staria-2024",
    name: "Hyundai Staria",
    category: "Carrinhas",
    year: 2024,
    transmission: "Automática",
    fuel: "Diesel",
    description:
      "O Hyundai Staria é uma minivan ou MPV (Multi-Purpose Vehicle) com design futurista. Apresenta design minimalista com faixa de luzes diurnas de LED horizontais na frente e lanternas verticais de LED pixelizadas na traseira, reminiscentes de naves espaciais. Interior inspirado no salão de um navio de cruzeiro, com capacidade para até 9 passageiros. Versões topo de linha incluem poltronas reclináveis, aquecidas e ventiladas. Disponível com motor diesel 2.2 e motor a gasolina V6 3.5.",
    mainImage: "/images/fleet/Carrinhas/Hyundai-Staria/image1.jpg",
    images: [
      { url: "/images/fleet/Carrinhas/Hyundai-Staria/image2.jpg", alt: "Hyundai Staria - Vista frontal futurista" },
      { url: "/images/fleet/Carrinhas/Hyundai-Staria/image3.jpg", alt: "Hyundai Staria - Lateral espaçosa" },
      { url: "/images/fleet/Carrinhas/Hyundai-Staria/image4.jpg", alt: "Hyundai Staria - Interior luxuoso" }
    ]
  },
  {
    id: "toyota-alphard-2023",
    name: "Toyota Alphard",
    category: "Carrinhas",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Toyota Alphard é uma minivan de luxo conhecida por seu interior espaçoso e confortável. Design chamativo com grade dianteira proeminente e faróis marcantes. Interior projetado para oferecer máximo conforto com três fileiras de bancos ajustáveis que transformam o ambiente em sala de estar. Equipamentos incluem ar-condicionado digital, controle de tração opcional, câmeras de ré, portas laterais e porta-malas com acionamento elétrico. Modelos recentes incluem faróis e lanternas de LED sequenciais. Disponível com motores 2.4L (160 cv), 3.0L V6 (220 cv) ou versão híbrida 2.5L com excelente consumo de 17-18 km/l.",
    mainImage: "/images/fleet/Carrinhas/Toyota-Alphard/image1.jpg",
    images: [
      { url: "/images/fleet/Carrinhas/Toyota-Alphard/image2.jpg", alt: "Toyota Alphard - Frente imponente" },
      { url: "/images/fleet/Carrinhas/Toyota-Alphard/image3.jpg", alt: "Toyota Alphard - Lateral elegante" },
      { url: "/images/fleet/Carrinhas/Toyota-Alphard/image4.jpg", alt: "Toyota Alphard - Interior de luxo" }
    ]
  },
  {
    id: "toyota-granvia-2022",
    name: "Toyota Granvia",
    category: "Carrinhas",
    year: 2022,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Toyota Granvia é uma minivan de luxo produzida pela Toyota, conhecida por seu amplo espaço interno e conforto. Focado no transporte de passageiros em ambiente de alta qualidade. Design apresenta grande grade cromada e faróis de LED. Capacidade do interior oferece assentos confortáveis com configurações de seis ou sete lugares. Equipado com motor a gasolina V6 de 3.5 litros.",
    mainImage: "/images/fleet/Carrinhas/Toyota-Granvia/image1.jpg",
    images: [
      { url: "/images/fleet/Carrinhas/Toyota-Granvia/image2.jpg", alt: "Toyota Granvia - Vista frontal premium" },
      { url: "/images/fleet/Carrinhas/Toyota-Granvia/image3.jpg", alt: "Toyota Granvia - Lateral" },
      { url: "/images/fleet/Carrinhas/Toyota-Granvia/image4.jpg", alt: "Toyota Granvia - Interior confortável" }
    ]
  },
  {
    id: "toyota-land-cruiser-70-2024",
    name: "Toyota Land Cruiser Série 70",
    category: "Carrinhas",
    year: 2024,
    transmission: "Automática",
    fuel: "Diesel",
    description:
      "O Toyota Land Cruiser da série 70 é um veículo utilitário esportivo (SUV) conhecido por sua durabilidade e capacidade off-road excepcional. Design original da década de 1980 mantido e aprimorado. Versões recentes equipadas com motor 2.8L turbo-diesel de 4 cilindros (também usado na Toyota Hilux), ou motor V8 a diesel em modelos anteriores. Visual nostálgico com construção robusta focada na funcionalidade para condições extremas. Interior combina elementos modernos como tela sensível ao toque com controles simples e tradicionais. Transmissão automática de seis velocidades facilita condução em terrenos 4x4 e condições de overlanding.",
    mainImage: "/images/fleet/Carrinhas/Toyota-Land-Cruiser/image1.jpg",
    images: [
      { url: "/images/fleet/Carrinhas/Toyota-Land-Cruiser/image2.jpg", alt: "Land Cruiser Série 70 - Frente robusta" },
      { url: "/images/fleet/Carrinhas/Toyota-Land-Cruiser/image3.jpg", alt: "Land Cruiser Série 70 - Lateral off-road" },
      { url: "/images/fleet/Carrinhas/Toyota-Land-Cruiser/image4.jpg", alt: "Land Cruiser Série 70 - Interior funcional" }
    ]
  }
];

// ============================================
// MUSCLE CARS - 20 carros
// ============================================
const muscles: Car[] = [
  {
    id: "dodge-challenger-hellcat-2023",
    name: "Dodge Challenger SRT Hellcat",
    category: "Muscle",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Dodge Challenger SRT Hellcat é um muscle car americano conhecido por seu design agressivo e alto desempenho. Equipado com um motor supercharged HEMI V8 que produz até 707 cavalos de potência (ou 797 cv na versão Redeye). Possui transmissão automática de oito velocidades e interior espaçoso. A produção com motor V8 terminou em 2023, marcando o fim de uma era.",
    mainImage: "/images/fleet/Muscle/Dodge-Challenger-Hellcat/image1.jpg",
    featured: true,
    images: [
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat/image2.jpg", alt: "Dodge Challenger SRT Hellcat - Vista frontal" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat/image3.jpg", alt: "Dodge Challenger SRT Hellcat - Traseira" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat/image4.jpg", alt: "Dodge Challenger SRT Hellcat - Interior esportivo" }
    ]
  },
  {
    id: "dodge-challenger-hellcat-green-2021",
    name: "Dodge Challenger SRT Hellcat Redeye Widebody",
    category: "Muscle",
    year: 2021,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Dodge Challenger SRT Hellcat Redeye Widebody de 2021 é um muscle car de produção em massa capaz de ir de 0 a 96 km/h em 3,25 segundos. Equipado com motor V8 HEMI 6.2L Supercharged que gera 807 cv. O capô de fibra de carbono e a carroçaria alargada marcam o visual Widebody.",
    mainImage: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-Green/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-Green/image2.jpg", alt: "Dodge Challenger Redeye Widebody - Lateral" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-Green/image3.jpg", alt: "Dodge Challenger Redeye Widebody - Traseira" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-Green/image4.jpg", alt: "Dodge Challenger Redeye Widebody - Interior" }
    ]
  },
  {
    id: "dodge-challenger-hellcat-white-2023",
    name: "Dodge Challenger SRT Hellcat",
    category: "Muscle",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Dodge Challenger Hellcat é movido por um motor V8 HEMI superalimentado de 6.2L com potência entre 707 e 797 cv. Seu design clássico e agressivo homenageia os muscle cars dos anos 70. Os faróis 'Air-Catcher' canalizam ar frio diretamente para o motor.",
    mainImage: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-White/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-White/image2.jpg", alt: "Dodge Challenger Hellcat - Capô e entradas de ar" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-White/image3.jpg", alt: "Dodge Challenger Hellcat - Vista frontal" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Hellcat-White/image4.jpg", alt: "Dodge Challenger Hellcat - Interior" }
    ]
  },
  {
    id: "dodge-challenger-vinho-2023",
    name: "Dodge Challenger",
    category: "Muscle",
    year: 2023,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Dodge Challenger é um ícone dos muscle cars americanos, com versões como SXT, R/T e Hellcat. Seu design musculoso remete aos clássicos dos anos 70. Motores variam de V6 3.6L até V8 HEMI supercharged com mais de 700 cv. Produção encerrada em 2023.",
    mainImage: "/images/fleet/Muscle/Dodge-Challenger-Vinho/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Dodge-Challenger-Vinho/image2.jpg", alt: "Dodge Challenger - Vista lateral" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Vinho/image1.jpg", alt: "Dodge Challenger - Traseira" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-Vinho/image2.jpg", alt: "Dodge Challenger - Interior" }
    ]
  },
  {
    id: "dodge-challenger-srt-widebody-2022",
    name: "Dodge Challenger SRT Hellcat Widebody",
    category: "Muscle",
    year: 2022,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Dodge Challenger SRT Hellcat Widebody é um muscle car com cavas de roda alargadas e motor V8 HEMI 6.2L de até 717 cv (797 cv na versão Redeye). Design inspirado nos anos 70, freios Brembo e modos de condução Street, Sport e Track.",
    mainImage: "/images/fleet/Muscle/Dodge-Challenger-SRT/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Dodge-Challenger-SRT/image2.jpg", alt: "Dodge Challenger SRT Widebody - Lateral" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-SRT/image3.jpg", alt: "Dodge Challenger SRT Widebody - Frente" },
      { url: "/images/fleet/Muscle/Dodge-Challenger-SRT/image4.jpg", alt: "Dodge Challenger SRT Widebody - Interior" }
    ]
  },
  {
    id: "ford-mustang-red-2020",
    name: "Ford Mustang GT",
    category: "Muscle",
    year: 2020,
    transmission: "Manual",
    fuel: "Gasolina",
    description:
      "O Ford Mustang GT (2018–2023) tem design agressivo e motor V8 5.0L com 466 cv. Acelera de 0 a 100 km/h em 4,3 segundos. Inclui modos de condução configuráveis e direção esportiva, freios Brembo e escapamento ajustável.",
    mainImage: "/images/fleet/Muscle/Ford-Mustang-Red/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Ford-Mustang-Red/image2.jpg", alt: "Ford Mustang GT - Vista frontal" },
      { url: "/images/fleet/Muscle/Ford-Mustang-Red/image3.jpg", alt: "Ford Mustang GT - Lateral" },
      { url: "/images/fleet/Muscle/Ford-Mustang-Red/image4.jpg", alt: "Ford Mustang GT - Interior" }
    ]
  },
  {
    id: "ford-mustang-shelby-gt500-2020",
    name: "Ford Mustang Shelby GT500",
    category: "Muscle",
    year: 2020,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Ford Mustang Shelby GT500 é um dos Mustangs mais potentes já produzidos. Motor V8 5.2L Supercharged Predator com mais de 760 cv. Acelera de 0 a 100 km/h em 3,5 segundos e atinge 300 km/h. Freios Brembo e pacote Track Pack opcional.",
    mainImage: "/images/fleet/Muscle/Ford-Mustang-White/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Ford-Mustang-White/image2.jpg", alt: "Ford Mustang Shelby GT500 - Frente" },
      { url: "/images/fleet/Muscle/Ford-Mustang-White/image3.jpg", alt: "Ford Mustang Shelby GT500 - Lateral" },
      { url: "/images/fleet/Muscle/Ford-Mustang-White/image4.jpg", alt: "Ford Mustang Shelby GT500 - Interior" }
    ]
  },
  {
    id: "ford-mustang-dark-horse-2024",
    name: "Ford Mustang Dark Horse",
    category: "Muscle",
    year: 2024,
    transmission: "Manual",
    fuel: "Gasolina",
    description:
      "O Ford Mustang Dark Horse (S650, 2024) combina design clássico com tecnologia moderna. Equipado com motor V8 5.0L de 486 HP, é o símbolo da nova geração Mustang. Oferece potência, estilo e emoção pura.",
    mainImage: "/images/fleet/Muscle/Ford-Mustang-Vinho/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Ford-Mustang-Vinho/image2.jpg", alt: "Ford Mustang Dark Horse - Frente" },
      { url: "/images/fleet/Muscle/Ford-Mustang-Vinho/image3.jpg", alt: "Ford Mustang Dark Horse - Lateral" },
      { url: "/images/fleet/Muscle/Ford-Mustang-Vinho/image4.jpg", alt: "Ford Mustang Dark Horse - Interior" }
    ]
  },
  {
    id: "dodge-challenger-hellcat-red-2019",
    name: "Dodge Challenger SRT Hellcat Widebody",
    category: "Muscle",
    year: 2019,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Dodge Challenger SRT Hellcat Widebody apresenta alargamentos de para-lamas (widebody) e motor V8 supercharged HEMI de 6.2L produzindo entre 717 e 808 cavalos de potência. Versões incluem Hellcat e Hellcat Redeye. Capô com entrada de ar dupla, rodas esportivas e design agressivo. Modelo de terceira geração produzido entre 2019 e 2023.",
    mainImage: "/images/fleet/Muscle/Dogde-Challenger-Hellcat-Red/image1.jpg",
    images: [
      { url: "/images/fleet/Muscle/Dogde-Challenger-Hellcat-Red/image2.jpg", alt: "Dodge Challenger Hellcat Red - Vista frontal agressiva" },
      { url: "/images/fleet/Muscle/Dogde-Challenger-Hellcat-Red/image3.jpg", alt: "Dodge Challenger Hellcat Red - Lateral widebody" },
      { url: "/images/fleet/Muscle/Dogde-Challenger-Hellcat-Red/image4.jpg", alt: "Dodge Challenger Hellcat Red - Interior esportivo" }
    ]
  }
];

// ============================================
// OUTROS - Carros diversos
// ============================================
const outros: Car[] = [
  {
    id: "chevrolet-spark-orange-2020",
    name: "Chevrolet Spark Laranja",
    category: "Outros",
    year: 2020,
    transmission: "Manual",
    fuel: "Gasolina",
    description:
      "O Chevrolet Spark é um carro subcompacto ideal para a vida na cidade. Equipado com motor 1.4L de 4 cilindros produzindo 98 cv. Inclui câmera de ré, Apple CarPlay e Android Auto. Design compacto e fácil de estacionar, perfeito para uso urbano diário.",
    mainImage: "/images/fleet/Outros/Chevrolet-Spark-Orange/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Chevrolet-Spark-Orange/image2.jpg", alt: "Chevrolet Spark Laranja - Vista frontal" },
      { url: "/images/fleet/Outros/Chevrolet-Spark-Orange/image3.jpg", alt: "Chevrolet Spark Laranja - Lateral compacta" }
    ]
  },
  {
    id: "chevrolet-spark-red-2019",
    name: "Chevrolet Spark Vermelho",
    category: "Outros",
    year: 2019,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Chevrolet Spark 2019 conhecido por sua fiabilidade e estilo. Hatchback subcompacto com motor 1.4L produzindo 98 cv. Versões incluem transmissão CVT automática. Design vibrante e recursos modernos como Apple CarPlay e Android Auto.",
    mainImage: "/images/fleet/Outros/Chevrolet-Spark-Red/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Chevrolet-Spark-Red/image2.jpg", alt: "Chevrolet Spark Vermelho - Frente" },
      { url: "/images/fleet/Outros/Chevrolet-Spark-Red/image3.jpg", alt: "Chevrolet Spark Vermelho - Lateral" },
      { url: "/images/fleet/Outros/Chevrolet-Spark-Red/image4.jpg", alt: "Chevrolet Spark Vermelho - Interior" }
    ]
  },
  {
    id: "chevrolet-spark-white-2020",
    name: "Chevrolet Spark Branco",
    category: "Outros",
    year: 2020,
    transmission: "Manual",
    fuel: "Gasolina",
    description:
      "Chevrolet Spark na cor branca, compacto e econômico. Motor 1.4L de 98 cv com excelente eficiência de combustível. Perfeito para estacionamento fácil e mobilidade urbana. Equipado com recursos de segurança e conectividade modernos.",
    mainImage: "/images/fleet/Outros/Chevrolet-Spark-White/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Chevrolet-Spark-White/image2.jpg", alt: "Chevrolet Spark Branco - Vista frontal" },
      { url: "/images/fleet/Outros/Chevrolet-Spark-White/image3.jpg", alt: "Chevrolet Spark Branco - Lateral" }
    ]
  },
  {
    id: "mercedes-a45-amg-2016",
    name: "Mercedes-Benz A45 AMG",
    category: "Outros",
    year: 2016,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Mercedes-Benz A45 AMG (W176) é um hatchback esportivo de alto desempenho. Motor 2.0L turbo de quatro cilindros produzindo entre 376 cv e 421 cv, um dos mais potentes do mundo. Acelera de 0 a 100 km/h em 3,9 segundos, com velocidade máxima de 270 km/h. Tração integral 4MATIC e transmissão automática de 7 velocidades.",
    mainImage: "/images/fleet/Outros/Mercedes-Benz-A45-AMG/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Mercedes-Benz-A45-AMG/image2.jpg", alt: "Mercedes A45 AMG - Frente agressiva" },
      { url: "/images/fleet/Outros/Mercedes-Benz-A45-AMG/image3.jpg", alt: "Mercedes A45 AMG - Lateral esportiva" }
    ]
  },
  {
    id: "mini-cooper-countryman-2014",
    name: "MINI Cooper Countryman",
    category: "Outros",
    year: 2014,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O MINI Cooper Countryman (R60) é um SUV compacto com design icônico da MINI. Oferece mais espaço que o hatchback padrão, com direção nítida e manuseio impressionante. Mantém a sensação característica de dirigir um MINI com conforto adicional.",
    mainImage: "/images/fleet/Outros/MINI-Cooper-Countryman/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/MINI-Cooper-Countryman/image2.jpg", alt: "MINI Countryman - Vista frontal" },
      { url: "/images/fleet/Outros/MINI-Cooper-Countryman/image3.jpg", alt: "MINI Countryman - Lateral distintiva" }
    ]
  },
  {
    id: "mitsubishi-mirage-g4-2024",
    name: "Mitsubishi Mirage G4",
    category: "Outros",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Mitsubishi Mirage G4 é um sedã subcompacto acessível com motor 1.2L de 3 cilindros produzindo 78 cv. Oferece economia de combustível de 17,4 km/l na estrada. Equipado com Apple CarPlay, Android Auto e tela de 7 polegadas. Garantia de 10 anos ou 160.000 km.",
    mainImage: "/images/fleet/Outros/Mitsubishi-Mirage-G4/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Mitsubishi-Mirage-G4/image2.jpg", alt: "Mitsubishi Mirage G4 - Frente econômica" }
    ]
  },
  {
    id: "nissan-versa-note-2017",
    name: "Nissan Versa Note",
    category: "Outros",
    year: 2017,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Nissan Versa Note 2017 é um hatchback compacto eficiente. Motor 1.6L de 4 cilindros com 109 cv. Conhecido por interior espaçoso e bom consumo de combustível. Versões incluem S, S Plus, SV, SR e SL com diversos recursos de conforto.",
    mainImage: "/images/fleet/Outros/Nissan-Versa-Note/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Nissan-Versa-Note/image2.jpg", alt: "Nissan Versa Note - Vista frontal" },
      { url: "/images/fleet/Outros/Nissan-Versa-Note/image3.jpg", alt: "Nissan Versa Note - Lateral" }
    ]
  },
  {
    id: "rolls-royce-ghost-2012",
    name: "Rolls-Royce Ghost",
    category: "Outros",
    year: 2012,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O Rolls-Royce Ghost é o ápice do luxo automotivo. Motor V12 6.6L biturbo produzindo 563 cv. Acelera de 0 a 100 km/h em 4,9 segundos. Suspensão a ar adaptativa, bancos de couro com costura artesanal, portas de fechamento suave e guarda-chuva embutido. Peso de 2.470 kg e 5,4 metros de comprimento.",
    mainImage: "/images/fleet/Outros/Rolls-Royce-Ghost/image1.jpg",
    images: [
      { url: "/images/fleet/Outros/Rolls-Royce-Ghost/image2.jpg", alt: "Rolls-Royce Ghost - Frente majestosa" },
      { url: "/images/fleet/Outros/Rolls-Royce-Ghost/image4.jpg", alt: "Rolls-Royce Ghost - Lateral elegante" }
    ]
  }
];
// ============================================
// EXPORTAÇÕES
// ============================================

// Todos os 100 carros (usado na página Fleet com filtros)
export const cars: Car[] = [
  ...muscles,
  ...suvs,
  ...sedans,
  ...carrinhas,
  ...outros,
];

// ⭐ Apenas carros em destaque (usado na home - apenas 4-6 carros)
export const featuredCars = cars.filter(car => car.featured);