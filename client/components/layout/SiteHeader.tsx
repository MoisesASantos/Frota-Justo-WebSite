import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);

    const isFleetPage = location.pathname === "/frota";
    const isHomePage = location.pathname === "/";

    // If navigating to "Frota" and already on fleet page, scroll to top
    if (target === "frota") {
      if (isFleetPage) {
        window.scrollTo(0, 0);
      } else {
        navigate("/frota");
      }
      return;
    }

    // If navigating to "Início"
    if (target === "inicio") {
      if (isHomePage) {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate("/");
      }
      return;
    }

    // For other anchor links, navigate to home if not there
    if (!isHomePage) {
      navigate(`/#${target}`);
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/60 transition-all",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-[0_12px_30px_-12px_rgba(15,30,84,0.35)]"
          : "bg-background/85 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8 md:py-5">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"
          aria-label="Frota Justo início"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fdab3468c9fd3463a95a5b7151b5f935d?format=webp&width=256"
              alt="Logotipo Frota Justo"
              className="h-10 w-10 object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Frota Justo
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
              General Trading LLC Dubai
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`${item.target === "frota" ? "/frota" : `/#${item.target}`}`}
              onClick={(event) => handleNavClick(event, item.target)}
              className="relative text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="rounded-full px-6 shadow-lg shadow-primary/20"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick(event as any, "contactos");
            }}
          >
            Solicitar Orçamento
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
                href={`${item.target === "frota" ? "/frota" : `/#${item.target}`}`}
                onClick={(event) => handleNavClick(event, item.target)}
                className="rounded-lg px-2 py-1.5 text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            size="lg"
            className="mt-5 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick(event as any, "contactos");
            }}
          >
            Solicitar Orçamento
          </Button>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
