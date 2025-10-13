import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const vehicles = [
  {
    name: "Range Rover Sport 2024",
    category: "SUV de luxo",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-Benz Classe S",
    category: "Sedan executivo",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Huracán EVO",
    category: "Super desportivo",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW i7 Excellence",
    category: "Elétrico premium",
    image:
      "https://images.unsplash.com/photo-1523983302122-62e63b48ef67?auto=format&fit=crop&w=1200&q=80",
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
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-card shadow-lg shadow-primary/5 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
