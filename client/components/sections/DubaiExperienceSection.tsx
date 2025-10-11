import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Pedido de visto express",
    description:
      "Gestão completa da documentação com acompanhamento em tempo real e suporte jurídico quando necessário.",
  },
  {
    title: "Hospedagem sob medida",
    description:
      "Seleção de hotéis, residências e villas com benefícios exclusivos e upgrades garantidos.",
  },
  {
    title: "Transporte e experiências",
    description:
      "Transfers com chauffeurs, reservas em restaurantes Michelin e roteiros privados no deserto e marinas.",
  },
];

const DubaiExperienceSection = () => {
  return (
    <section id="dubai-experience" className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
          alt="Skyline de Dubai ao entardecer"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#021024]/90 via-[#052049]/85 to-[#0d2e66]/75" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Dubai Experience"
          title="Consultoria completa para uma viagem inesquecível"
          description="Aliamos know-how local, rede de parceiros de luxo e logística impecável para transformar a sua estadia em Dubai numa memória inesquecível."
        />

        <div className="mt-14 grid gap-8 text-white md:grid-cols-[1.2fr,0.8fr] md:items-end">
          <div className="space-y-6 text-base text-white/80">
            <p>
              Cuidamos de todo o planeamento, desde o visto, escolha de hospedagem, transporte e experiências exclusivas. Com uma equipa presente em Dubai, garantimos acesso privilegiado e serviço altamente personalizado.
            </p>
            <div className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-lg font-semibold text-accent">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/75">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-8 text-white/80 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">
              Concierge premium disponível 24/7
            </h3>
            <p className="mt-5 text-sm text-white/75">
              A Frota Justo mantém uma equipa local pronta para responder em minutos, organizar upgrades de última hora e assegurar cada detalhe da sua agenda nos Emirados.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" />
                Acompanhamento remoto via WhatsApp e telefone
              </li>
              <li className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" />
                Acesso a lounges, iates, desert safaris e eventos privados
              </li>
              <li className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" />
                Coordenação com motoristas, guias e parceiros estratégicos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DubaiExperienceSection;
