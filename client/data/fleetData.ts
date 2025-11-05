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
}

export const categories = [
  "Sedan",
  "SUV",
  "Carrinhas",
  "Muscle",
  "Mais procurados",
];

export const cars: Car[] = [
  {
    id: "range-rover-sport-2025",
    name: "Range Rover Sport 2025",
    category: "SUV",
    year: 2025,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O SUV de luxo perfeito para explorar Dubai com estilo e conforto máximo.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Range Rover Sport Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Range Rover Sport Vista lateral",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Range Rover Sport Interior",
      },
    ],
  },
  {
    id: "mercedes-benz-s-class",
    name: "Mercedes-Benz Classe S",
    category: "Sedan",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Elegância executiva. O sedan perfeito para transferências corporativas e eventos especiais.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Mercedes-Benz Classe S Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Mercedes-Benz Classe S Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Mercedes-Benz Classe S Vista traseira",
      },
    ],
  },
  {
    id: "mercedes-g63",
    name: "Mercedes-Benz G63",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "O ícone das pistas e das cidades. Potência bruta com design icónico.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F1a79150f81114f61a1aba3e3e6df623a?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F1a79150f81114f61a1aba3e3e6df623a?format=webp&width=1200",
        alt: "Mercedes-Benz G63 Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F1a79150f81114f61a1aba3e3e6df623a?format=webp&width=1200",
        alt: "Mercedes-Benz G63 Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F1a79150f81114f61a1aba3e3e6df623a?format=webp&width=1200",
        alt: "Mercedes-Benz G63 Vista traseira",
      },
    ],
  },
  {
    id: "dodge-challenger",
    name: "Dodge Challenger",
    category: "Muscle",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Muscle car lendário com power e presença. Para os que querem ser notados.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200",
        alt: "Dodge Challenger Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200",
        alt: "Dodge Challenger Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200",
        alt: "Dodge Challenger Vista traseira",
      },
    ],
  },
  {
    id: "bmw-m340i",
    name: "BMW M340i",
    category: "Sedan",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Performance e elegância em um sedan compacto. Para quem quer dinamismo e conforto.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "BMW M340i Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "BMW M340i Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "BMW M340i Vista lateral",
      },
    ],
  },
  {
    id: "audi-a4",
    name: "Audi A4",
    category: "Sedan",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Tecnologia avançada e design alemão de qualidade. O sedan inteligente.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Audi A4 Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Audi A4 Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Audi A4 Vista traseira",
      },
    ],
  },
  {
    id: "tesla-model-s",
    name: "Tesla Model S",
    category: "Sedan",
    year: 2024,
    transmission: "Automática",
    fuel: "Elétrico",
    description:
      "O futuro é agora. Sedã elétrico com performance devastadora e tecnologia de ponta.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Tesla Model S Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Tesla Model S Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200",
        alt: "Tesla Model S Vista lateral",
      },
    ],
  },
  {
    id: "porsche-cayenne",
    name: "Porsche Cayenne",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description: "Performance no DNA. Um SUV que é um desportivo sobre rodas.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Porsche Cayenne Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Porsche Cayenne Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Porsche Cayenne Vista traseira",
      },
    ],
  },
  {
    id: "chevrolet-silverado",
    name: "Chevrolet Silverado",
    category: "Carrinhas",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Pickup americana robusta. Capacidade de carga e conforto para trabalho ou aventura.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Chevrolet Silverado Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Chevrolet Silverado Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Chevrolet Silverado Vista traseira",
      },
    ],
  },
  {
    id: "ford-transit",
    name: "Ford Transit",
    category: "Carrinhas",
    year: 2024,
    transmission: "Automática",
    fuel: "Diesel",
    description: "Van comercial confiável. Espaço, eficiência e durabilidade comprovada.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Ford Transit Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Ford Transit Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "Ford Transit Vista traseira",
      },
    ],
  },
  {
    id: "chevrolet-corvette",
    name: "Chevrolet Corvette",
    category: "Muscle",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Lenda americana. Desportivo puro com performance de supercar a preço acessível.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200",
        alt: "Chevrolet Corvette Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200",
        alt: "Chevrolet Corvette Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200",
        alt: "Chevrolet Corvette Vista traseira",
      },
    ],
  },
  {
    id: "bmw-x7",
    name: "BMW X7",
    category: "SUV",
    year: 2024,
    transmission: "Automática",
    fuel: "Gasolina",
    description:
      "Luxo em forma de SUV grande. Espaço para 7 passageiros com conforto de primeira classe.",
    mainImage:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "BMW X7 Vista frontal",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "BMW X7 Interior",
      },
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200",
        alt: "BMW X7 Vista traseira",
      },
    ],
  },
];
