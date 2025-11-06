import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/fleetData";

interface FleetDetailsModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestClick: () => void;
}

const FleetDetailsModal = ({
  car,
  isOpen,
  onClose,
  onRequestClick,
}: FleetDetailsModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) return null;

  // Combina mainImage com as outras imagens para criar galeria completa
  const allImages = [
    { url: car.mainImage, alt: `${car.name} - Imagem principal` },
    ...car.images
  ];

  const currentImage = allImages[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCurrentImageIndex(0);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl gap-0 overflow-y-auto p-0 sm:rounded-2xl max-h-[90vh]">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="flex flex-col bg-gradient-to-br from-slate-100 to-slate-50">
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="h-full w-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

              {/* Navigation Buttons */}
              {allImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
              <div className="flex gap-2 border-t border-border/40 bg-white/50 p-4 backdrop-blur">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                      index === currentImageIndex
                        ? "border-primary"
                        : "border-border/30 hover:border-border/60"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Miniatura ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-auto">
            <DialogHeader className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                {car.category}
              </span>
              <DialogTitle className="mt-2 text-2xl md:text-3xl">
                {car.name}
              </DialogTitle>
            </DialogHeader>

            <p className="mb-6 text-sm text-foreground/70 md:text-base">
              {car.description}
            </p>

            {/* Specifications */}
            <div className="mb-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    Ano
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {car.year}
                  </p>
                </div>

                <div className="rounded-xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    Combustível
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {car.fuel}
                  </p>
                </div>

                <div className="rounded-xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    Caixa
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {car.transmission}
                  </p>
                </div>

                <div className="rounded-xl bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                    Categoria
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {car.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              type="button"
              size="lg"
              className="mt-auto w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 animate-pulse hover:animate-none"
              onClick={onRequestClick}
            >
              Solicitar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FleetDetailsModal;
