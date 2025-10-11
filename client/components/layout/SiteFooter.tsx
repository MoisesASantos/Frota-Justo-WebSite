import { Mail, MapPin, Phone } from "lucide-react";

const anchorItems = [
  { label: "Início", target: "inicio" },
  { label: "Frota", target: "frota" },
  { label: "Serviços", target: "servicos" },
  { label: "Dubai Experience", target: "dubai-experience" },
  { label: "Contactos", target: "contactos" },
];

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-primary/5 text-sm text-foreground/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.4fr,1fr,1fr] md:px-8">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2">
            <span className="text-xl font-semibold text-primary">Frota</span>
            <span className="text-xl font-semibold text-foreground">Justo</span>
          </div>
          <p className="max-w-lg text-base text-foreground/70">
            Mobilidade premium e experiências completas em Dubai. Da escolha do veículo ao planeamento da viagem, a Frota Justo acompanha cada detalhe com confiança e transparência.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground">Navegação</h3>
          <nav className="mt-4 grid gap-2 text-foreground/70">
            {anchorItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className="hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-foreground">Contactos</h3>
          <ul className="space-y-3 text-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-primary" />
              <span>Dubai & Lisboa — atendimento global e remoto</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+351210000000" className="hover:text-foreground">
                +351 21 000 0000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              <a href="mailto:contacto@frotajusto.com" className="hover:text-foreground">
                contacto@frotajusto.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 bg-primary/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-foreground/70 md:flex-row md:px-8">
          <p>© {year} Frota Justo. Todos os direitos reservados.</p>
          <p className="text-center md:text-right">
            Mobilidade inteligente e experiências exclusivas para quem exige excelência.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
