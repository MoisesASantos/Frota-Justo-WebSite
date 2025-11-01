import { Button } from "@/components/ui/button";
import { ArrowRight, PlaneTakeoff, ShieldCheck } from "lucide-react";

const stats = [
  {
    label: "Clientes satisfeitos",
    value: "500+",
    description: "Projetos de mobilidade e viagens concluídos com excelência",
  },
  {
    label: "Veículos premium",
    value: "120",
    description: "Seleção curada de carros de luxo, SUVs e desportivos",
  },
  {
    label: "Suporte dedicado",
    value: "24/7",
    description: "Equipa disponível em Dubai e Angola para o que precisar",
  },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80"
          alt="Carros de luxo com skyline do Dubai ao fundo"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/90 via-[#091b3a]/75 to-[#102b5b]/65" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-28 text-white md:px-8 md:py-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-white/80 backdrop-blur">
          Luxo & Mobilidade
        </div>
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-end">
          <div className="space-y-8">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Mobilidade e experiências de luxo, ao seu alcance.
            </h1>
            <p className="max-w-xl text-lg text-white/80 md:text-xl">
              Venda e arrendamento de automóveis premium, assessoria completa para Dubai e um serviço que combina confiança, exclusividade e atenção absoluta aos detalhes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-primary-foreground shadow-xl shadow-[rgba(30,87,255,0.35)] hover:bg-primary/90"
              >
                <a href="#frota">
                  Ver Frota
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-white shadow-lg shadow-black/30 hover:bg-white/20 hover:text-white"
              >
                <a href="#dubai-experience">
                  Planear Viagem
                  <PlaneTakeoff className="ml-2 size-5" />
                </a>
              </Button>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85 backdrop-blur">
              <ShieldCheck className="size-5 text-accent" />
              Consultoria personalizada, contratos transparentes e suporte bilingue.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
              >
                <span className="text-3xl font-semibold text-white md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                  {stat.label}
                </span>
                <p className="text-sm text-white/65">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
