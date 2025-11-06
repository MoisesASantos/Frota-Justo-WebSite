import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

// Imagens da pasta CEO
const ceoImages = [
  "/images/fleet/CEO/image1.png",
  "/images/fleet/CEO/image2.webp",
  "/images/fleet/CEO/image3.webp",
  "/images/fleet/CEO/image4.jpg",
  "/images/fleet/CEO/image5.jpg",
  "/images/fleet/CEO/image6.jpg",
  "/images/fleet/CEO/image7.jpg",
];

const FounderSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carrossel automático de imagens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ceoImages.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="fundador"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          align="left"
          eyebrow="Liderança"
          title={'António Lissimo Laurindo "Justo"'}
          description="Fundador e CEO do Grupo Frota Justo"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <div className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              António Lissimo Laurindo, amplamente reconhecido como Justo, é o
              visionário fundador e actual CEO do Grupo Frota Justo, um dos
              conglomerados empresariais de maior crescimento e influência em
              Angola.
            </p>
            <p>
              Natural da província do Huambo, Justo construiu a sua trajetória a
              partir de origens humildes, demonstrando desde cedo uma capacidade
              singular para liderar, inovar e transformar desafios em
              oportunidades. O seu percurso, iniciado aos 12 anos como auxiliar
              de limpeza e consolidado através de uma visão empreendedora
              arrojada, reflecte os pilares que definem a sua liderança:
              trabalho, integridade e fé.
            </p>
            <p>
              Hoje, sob a sua direcção, o Grupo Frota Justo destaca-se nos
              sectores da mobilidade, comércio e serviços, empregando centenas
              de profissionais e contribuindo activamente para o desenvolvimento
              económico e social de Angola.
            </p>
            <p>
              Mais do que um empresário de sucesso, Justo é um homem de valores
              familiares, profundamente comprometido com o progresso humano e
              comunitário. Acredita que o verdadeiro legado de um líder não está
              apenas nas empresas que constrói, mas nas vidas que transforma e
              nas oportunidades que cria.
            </p>
            <p>
              Com uma visão sólida e orientada para o futuro, Justo continua a
              inspirar uma nova geração de empreendedores angolanos,
              demonstrando que a grandeza nasce da humildade, da fé e do
              trabalho honesto.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/20 shadow-2xl shadow-primary/10">
              {ceoImages.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`António Lissimo Laurindo 'Justo' ${index + 1}`}
                  className={`h-full w-full transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  } ${index === 0 ? "" : "absolute inset-0"} ${
                    index === 3 || index === 4 ? "object-contain" : "object-cover"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
            <aside className="relative overflow-hidden rounded-[2.25rem] border border-primary/20 bg-white/70 p-6 shadow-2xl shadow-primary/10 backdrop-blur">
              <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-3xl bg-accent/30 blur-3xl" />
              <div className="relative space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                  Mensagem do fundador
                </div>
                <blockquote className="text-sm font-medium text-foreground">
                  "A grandeza nasce da humildade, da fé e do trabalho honesto.
                  Cada conquista da Frota Justo é fruto de um compromisso
                  inabalável com as pessoas e com o futuro de Angola."
                </blockquote>
                <div className="h-px w-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
                <div>
                  <p className="text-xs font-medium text-foreground">
                    António Lissimo Laurindo "Justo"
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                    Fundador e CEO do Grupo Frota Justo
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
