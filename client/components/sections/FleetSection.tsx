import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const vehicles = [
  {
    name: "Range Rover Sport 2025",
    category: "SUV de luxo",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F8967826605a24ba7a731600e4d32f07f?format=webp&width=800",
  },
  {
    name: "Mercedes-Benz Classe S",
    category: "Sedan executivo",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fe30d959f2c9f4f00a867bb726f3725ff?format=webp&width=800",
  },
  {
    name: "Mercedes-Benz G63",
    category: "Off-Road",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F1a79150f81114f61a1aba3e3e6df623a?format=webp&width=800",
  },
  {
    name: "Dodge Challenger",
    category: "Muscle Car",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2F83138d1d94f14893b0ff948730e4262a?format=webp&width=800",
  },
];

const FleetSection = () => {
  return (
    <section id="frota" className="bg-primary/5 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Frota exclusiva"
          title="Veículos preparados para cada momento da sua jornada"
          description="Escolha entre SUVs de luxo para famílias, desportivos icónicos para experiências inesquecíveis ou sedans executivos perfeitos para transfer corporativo."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-card shadow-lg transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    {vehicle.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    {vehicle.name}
                  </h3>
                </div>
                <div className="mt-auto flex justify-end">
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="#contactos">
                      Saber mais
                      <ArrowUpRight className="ml-1.5 size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
