import { BadgeCheck, Gem, Handshake } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Transparência absoluta",
    description:
      "Contratos claros, acompanhamento jurídico e gestão financeira segura em cada etapa do processo.",
  },
  {
    icon: Gem,
    title: "Qualidade premium",
    description:
      "Frota composta por veículos de última geração, com manutenção certificada e upgrades frequentes.",
  },
  {
    icon: Handshake,
    title: "Confiança total",
    description:
      "Atendimento dedicado por consultores bilingues com experiência no mercado europeu e médio oriental.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.05fr,0.95fr] md:px-8 md:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre a Frota Justo"
            title="Ligamos mobilidade inteligente a experiências inesquecíveis."
            description="A Frota Justo nasceu para simplificar o acesso a veículos de luxo e proporcionar roteiros exclusivos em Dubai. Atuamos como partner estratégico para empresas e particulares que buscam serviço premium, com comunicação transparente e foco na personalização."
          />
          <div className="mt-10 grid gap-6">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 shadow-sm transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] backdrop-blur"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-3xl bg-primary/20 blur-3xl sm:block" />
          <div className="absolute -bottom-8 -right-8 hidden h-28 w-28 rounded-full bg-accent/30 blur-3xl sm:block" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80"
              alt="Consultor da Frota Justo apresentando veículo premium"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
