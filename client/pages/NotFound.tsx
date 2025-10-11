import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="flex items-center justify-center px-6 py-32 md:py-40">
      <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card/70 p-10 text-center shadow-xl shadow-primary/10 backdrop-blur">
        <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          404
        </span>
        <h1 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-sm text-foreground/70">
          O endereço que procurou não existe ou foi movido. Utilize o menu principal para navegar pelas secções da Frota Justo.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="rounded-full">
            <a href="/">
              <ArrowLeft className="mr-2 size-5" />
              Voltar ao início
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
