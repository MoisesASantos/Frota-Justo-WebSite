import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  target: string;
};

const navItems: NavItem[] = [
  { label: "Início", target: "inicio" },
  { label: "Frota", target: "frota" },
  { label: "Serviços", target: "servicos" },
  { label: "Dubai Experience", target: "dubai-experience" },
  { label: "Contactos", target: "contactos" },
];

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/60 transition-all",
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-[0_12px_30px_-12px_rgba(15,30,84,0.35)]" : "bg-background/85 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8 md:py-5">
        <a
          href="#inicio"
          onClick={(event) => handleAnchorClick(event, "inicio")}
          className="text-lg font-semibold tracking-tight text-foreground"
          aria-label="Frota Justo início"
        >
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frota
          </span>{" "}
          <span className="text-foreground">Justo</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => handleAnchorClick(event, item.target)}
              className="relative text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="lg" className="rounded-full px-6 shadow-lg shadow-primary/20">
            <a href="#contactos" onClick={(event) => handleAnchorClick(event, "contactos")}>
              Solicitar Orçamento
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-border/70 bg-background/95 px-6 pb-6 pt-4 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-4 text-base">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => handleAnchorClick(event, item.target)}
                className="rounded-lg px-2 py-1.5 text-foreground/85 transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            size="lg"
            className="mt-5 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30"
          >
            <a href="#contactos" onClick={(event) => handleAnchorClick(event, "contactos")}>
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
