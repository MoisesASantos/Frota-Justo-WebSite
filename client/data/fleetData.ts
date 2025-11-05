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

const sedans: Car[] = Array.from({ length: 20 }, (_, i) => ({
  id: `sedan-${i + 1}`,
  name: `${["Mercedes-Benz Classe S", "BMW M340i", "Audi A4", "Tesla Model S", "Lexus LS", "Porsche Panamera", "Jaguar XE", "Infiniti Q50", "Genesis G80", "Cadillac CT5", "Lincoln Continental", "Acura TLX", "Volvo S90", "Polestar 1", "Alfa Romeo Giulia", "Maserati Ghibli", "Tesla Model 3", "Hyundai Ioniq", "Kia Stinger", "BMW 740i"][i % 20]}`
  ,
  category: "Sedan",
  year: 2023 + Math.floor(i / 10),
  transmission: i % 2 === 0 ? "Automática" : "Automática",
  fuel: ["Gasolina", "Diesel", "Híbrido", "Elétrico"][i % 4],
  description: "Elegância executiva. O sedan perfeito para transferências corporativas e eventos especiais.",
  mainImage: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=800",
  images: [
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200", alt: "Vista frontal" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200", alt: "Interior" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=1200", alt: "Vista traseira" },
  ],
}));

const suvs: Car[] = Array.from({ length: 20 }, (_, i) => ({
  id: `suv-${i + 1}`,
  name: `${["Range Rover Sport", "Mercedes-Benz G63", "BMW X7", "Porsche Cayenne", "Audi Q8", "Tesla Model X", "Lexus RX", "Land Rover Discovery", "Jeep Grand Cherokee", "Cadillac Escalade", "Lincoln Navigator", "Infiniti QX80", "Volvo XC90", "BMW X5", "Audi Q7", "Mercedes-Benz GLE", "Porsche Macan", "Range Rover Evoque", "Jeep Wrangler", "Toyota 4Runner"][i % 20]}`
  ,
  category: "SUV",
  year: 2023 + Math.floor(i / 10),
  transmission: i % 2 === 0 ? "Automática" : "Automática",
  fuel: ["Gasolina", "Diesel", "Híbrido", "Elétrico"][i % 4],
  description: "O SUV de luxo perfeito para explorar Dubai com estilo e conforto máximo.",
  mainImage: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
  images: [
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Vista frontal" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Interior" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Vista traseira" },
  ],
}));

const carrinhas: Car[] = Array.from({ length: 20 }, (_, i) => ({
  id: `carrinha-${i + 1}`,
  name: `${["Chevrolet Silverado", "Ford Transit", "Ford F-150", "Ram 1500", "GMC Sierra", "Toyota Tundra", "Nissan Titan", "Dodge Ram", "Volkswagen Transporter", "Mercedes Sprinter", "Ford E-Transit", "Fiat Ducato", "Iveco Daily", "Renault Master", "Peugeot Boxer", "Ford Transit Connect", "Nissan NV200", "Vauxhall Movano", "MAN TGE", "Hyundai H350"][i % 20]}`
  ,
  category: "Carrinhas",
  year: 2023 + Math.floor(i / 10),
  transmission: i % 2 === 0 ? "Automática" : "Manual",
  fuel: ["Gasolina", "Diesel"][i % 2],
  description: "Van comercial confiável. Espaço, eficiência e durabilidade comprovada.",
  mainImage: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
  images: [
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Vista frontal" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Interior" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Vista traseira" },
  ],
}));

const muscles: Car[] = Array.from({ length: 20 }, (_, i) => ({
  id: `muscle-${i + 1}`,
  name: `${["Dodge Challenger", "Chevrolet Corvette", "Ford Mustang", "Dodge Charger", "Chevrolet Camaro", "Pontiac GTO", "Plymouth Barracuda", "Oldsmobile 442", "Buick GSX", "AMC Javelin", "Hemi Cuda", "Boss Mustang", "Super Bee", "Road Runner", "Judge", "Firebird", "Monza", "Starfire", "Cutlass", "Ranchero"][i % 20]}`
  ,
  category: "Muscle",
  year: 2023 + Math.floor(i / 10),
  transmission: "Automática",
  fuel: "Gasolina",
  description: "Muscle car lendário com power e presença. Para os que querem ser notados.",
  mainImage: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=800",
  images: [
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200", alt: "Vista frontal" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200", alt: "Interior" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=1200", alt: "Vista traseira" },
  ],
}));

const maisProc: Car[] = Array.from({ length: 20 }, (_, i) => ({
  id: `mais-procurados-${i + 1}`,
  name: `${["Honda Civic", "Toyota Corolla", "Mazda 3", "Hyundai Elantra", "Kia Forte", "Subaru Legacy", "Nissan Altima", "Honda Accord", "Toyota Camry", "Mazda CX-5", "Honda CR-V", "Toyota RAV4", "Nissan Qashqai", "Hyundai Santa Fe", "Kia Sorento", "Subaru Outback", "Nissan Murano", "Toyota Highlander", "Honda Pilot", "Mazda CX-9"][i % 20]}`
  ,
  category: "Mais procurados",
  year: 2023 + Math.floor(i / 10),
  transmission: i % 2 === 0 ? "Automática" : "Manual",
  fuel: ["Gasolina", "Diesel", "Híbrido"][i % 3],
  description: "Os carros mais populares e confiáveis. Perfeitos para o dia a dia com qualidade garantida.",
  mainImage: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
  images: [
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Vista frontal" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Interior" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=1200", alt: "Vista traseira" },
  ],
}));

export const cars: Car[] = [
  ...sedans,
  ...suvs,
  ...carrinhas,
  ...muscles,
  ...maisProc,
];
