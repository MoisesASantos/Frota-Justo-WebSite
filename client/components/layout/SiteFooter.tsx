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
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2d1ab92b00a64a1cb521942d45c01811%2Fdab3468c9fd3463a95a5b7151b5f935d?format=webp&width=256"
                alt="Logotipo Frota Justo"
                className="h-12 w-12 object-contain"
                loading="lazy"
              />
            </div>
            <div className="leading-tight">
              <span className="text-xl font-semibold text-primary">Grupo Frota Justo</span>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/60">
                General Trading LLC Dubai
              </p>
            </div>
          </div>
          <p className="max-w-lg text-base text-foreground/70">
            Mobilidade premium e experiências completas em Dubai. Da escolha do veículo ao planeamento da viagem, a Frota Justo acompanha cada detalhe com confiança e transparência.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
            <span className="text-foreground/60">Siga-nos:</span>
            <a
              href="https://www.instagram.com/frotajustoofficial?utm_source=ig_web_button_share_sheet&igsh=aTVtcnNvNW4zMmlm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403.61.224 1.045.49 1.506.951.461.46.727.896.95 1.506.163.457.347 1.257.404 2.426.059 1.268.07 1.648.07 4.851s-.011 3.584-.07 4.85c-.057 1.17-.241 1.97-.404 2.427a3.61 3.61 0 0 1-.95 1.506 3.607 3.607 0 0 1-1.506.95c-.457.163-1.257.347-2.427.404-1.266.059-1.646.07-4.85.07s-3.584-.011-4.85-.07c-1.17-.057-1.97-.241-2.427-.404a3.61 3.61 0 0 1-1.506-.95 3.607 3.607 0 0 1-.95-1.506c-.163-.457-.347-1.257-.404-2.427-.059-1.266-.07-1.646-.07-4.85s.011-3.583.07-4.85c.057-1.17.241-1.97.404-2.427a3.61 3.61 0 0 1 .95-1.506 3.607 3.607 0 0 1 1.506-.95c.457-.163 1.257-.347 2.427-.404 1.266-.059 1.646-.07 4.85-.07Zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.128 4.845.308 4.07.588 3.262.884 2.576 1.3 1.89 1.987 1.204 2.673.787 3.36.492 4.17.212 4.943.032 5.873-.026 7.152-.084 8.432-.096 8.842-.096 12c0 3.158.012 3.568.07 4.848.058 1.279.238 2.209.518 2.983.295.81.712 1.496 1.398 2.182.686.687 1.373 1.104 2.182 1.399.774.28 1.704.46 2.983.518 1.28.058 1.69.07 4.848.07s3.568-.012 4.848-.07c1.279-.058 2.209-.238 2.983-.518.81-.295 1.496-.712 2.182-1.399.687-.686 1.104-1.372 1.399-2.182.28-.774.46-1.704.518-2.983.058-1.28.07-1.69.07-4.848s-.012-3.568-.07-4.848c-.058-1.28-.238-2.21-.518-2.983-.295-.81-.712-1.496-1.399-2.182C21.424 1.3 20.737.884 19.928.588 19.154.308 18.224.128 16.944.07 15.664.012 15.255 0 12 0Z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998Zm7.2-11.631a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
              </svg>
              @frotajustoofficial
            </a>
            <a
              href="https://www.tiktok.com/@antoniolaurind?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
                <path d="M12.91 2h2.862c.166 1.455.851 2.673 2.015 3.734 1.15 1.05 2.488 1.62 4.036 1.776v3.185c-1.59.166-3.076-.215-4.52-1.018v6.81c0 3.54-2.215 6.51-5.616 7.41-3.768.999-7.781-.93-9.27-4.52-1.486-3.582.166-7.89 3.498-9.57 1.044-.525 2.12-.776 3.276-.776.35 0 .713.028 1.107.083v3.313c-.359-.083-.69-.111-1.007-.083-1.806.194-3.19 1.69-3.19 3.512 0 2.018 1.663 3.604 3.739 3.604 1.857 0 3.475-1.34 3.681-3.17.028-.222.042-.445.042-.666V2Z" />
              </svg>
              @frotajustoofficial
            </a>
          </div>
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
              <span>
                Frota Justo General Trading — Doha Centre, 29, 40a Street, Al Muraqqabat, Deira, Dubai, Dubai Municipality
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+97142223766" className="hover:text-foreground">
                +971 4 222 3766
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+971507587620" className="hover:text-foreground">
                +971 50 758 7620
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+244949918673" className="hover:text-foreground">
                +244 949 918 673
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
