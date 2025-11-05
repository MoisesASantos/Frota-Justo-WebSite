import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FleetDetailsModal from "@/components/sections/FleetDetailsModal";
import SectionHeading from "@/components/sections/SectionHeading";
import { cars, categories, type Car } from "@/data/fleetData";

const Fleet = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCars =
    selectedCategory === null
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleRequestClick = () => {
    setIsModalOpen(false);
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contactos");
      if (element) {
        const headerOffset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Frota Completa"
            title="Explore nossa seleção de veículos premium"
            description="100 veículos de luxo selecionados. Encontre o carro perfeito para sua jornada."
          />
        </div>
      </section>

      {/* Main Fleet Section */}
      <section className="flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-5 py-2 text-xs md:text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "border border-border/70 text-foreground/80 hover:border-primary hover:bg-primary/10"
              }`}
            >
              Todos ({cars.length})
            </button>
            {categories.map((category) => {
              const count = cars.filter(
                (car) => car.category === category,
              ).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 text-xs md:text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "border border-border/70 text-foreground/80 hover:border-primary hover:bg-primary/10"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredCars.map((car) => (
                <article
                  key={car.id}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/10 bg-card shadow-md transition-all duration-300 hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1"
                >
                  {/* Image Section */}
                  <div
                    className="relative aspect-square w-full cursor-pointer overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50"
                    onClick={() => handleCarClick(car)}
                  >
                    <img
                      src={car.mainImage}
                      alt={car.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col gap-2 p-3 md:p-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                        {car.category}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
                        {car.name}
                      </h3>
                    </div>

                    {/* Specs Row */}
                    <div className="flex gap-2 text-xs text-foreground/60 flex-wrap">
                      <span className="font-medium">{car.year}</span>
                      <span className="text-foreground/40">•</span>
                      <span className="font-medium">{car.fuel}</span>
                      <span className="text-foreground/40">•</span>
                      <span className="font-medium">{car.transmission}</span>
                    </div>

                    {/* Action Button */}
                    <button
                      type="button"
                      onClick={() => handleCarClick(car)}
                      className="mt-auto w-full rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border/40 bg-card/50 p-12 text-center">
              <p className="text-foreground/60">
                Nenhum carro encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-8">
            <SectionHeading
              eyebrow="Precisa de ajuda?"
              title="Entre em contacto connosco"
              description="Tem perguntas sobre um carro? Quer agendar um test drive? Estamos aqui para ajudar!"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <Phone className="size-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">
                Telefone
              </h3>
              <div className="mt-2 space-y-1 text-sm text-foreground/70">
                <a
                  href="tel:+971507587620"
                  className="block hover:text-foreground"
                >
                  +971 50 758 7620
                </a>
                <a
                  href="tel:+244923951128"
                  className="block hover:text-foreground"
                >
                  +244 923 951 128
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-card p-6">
              <Mail className="size-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">
                Email
              </h3>
              <a
                href="mailto:frotajustolda@hotmail.com"
                className="mt-2 block text-sm text-foreground/70 hover:text-foreground"
              >
                frotajustolda@hotmail.com
              </a>
            </div>

            <div className="rounded-xl border border-border/40 bg-card p-6">
              <MapPin className="size-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">
                Localização
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                Doha Centre, 29, 40a Street, Al Muraqqabat, Deira, Dubai
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg shadow-primary/20"
              onClick={() => navigate("/")}
            >
              Enviar mensagem
            </Button>
          </div>
        </div>
      </section>

      {/* Fleet Details Modal */}
      <FleetDetailsModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestClick={handleRequestClick}
      />
    </div>
  );
};

export default Fleet;
