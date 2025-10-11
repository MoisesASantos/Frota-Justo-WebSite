import { Globe2, SteeringWheel, Workflow } from "lucide-react";

import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: SteeringWheel,
    title: "Venda e arrendamento",
    description:
      "Veículos premium com planos flexíveis de aquisição, assinatura ou aluguer de curta e longa duração.",
    details: ["Entrega e recolha onde preferir", "Substituição rápida em caso de imprevistos"],
  },
  {
    icon: Globe2,
    title: "Assessoria Dubai",
    description:
      "Vistos, hospedagem, experiências exclusivas e concierge completo com parceiros certificados.",
    details: ["Curadoria de hotéis 5⭐", "Programas VIP no deserto e marinas"],
  },
  {
    icon: Workflow,
    title: "Logística & consultoria",
    description:
      "Planeamento estratégico, chauffeurs, traslados corporativos e suporte ao protocolo empresarial.",
    details: ["Assistência bilingue 24/7", "Relatórios e acompanhamento em tempo real"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Serviços personalizados"
          title="Do volante às experiências em Dubai, tudo numa só equipa"
          description="Oferecemos soluções integradas que combinam mobilidade de alto padrão e consultoria estratégica para viagens e eventos nos Emirados Árabes."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description, details }) => (
            <article
              key={title}
              className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/5 transition-shadow duration-300 hover:shadow-primary/20"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{description}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-foreground/60">
                {details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
