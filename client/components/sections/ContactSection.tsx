import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "./SectionHeading";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState(initialState);
    }, 900);
  };

  return (
    <section id="contactos" className="bg-primary/5 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Fale conosco"
            title="Conte com a Frota Justo para acelerar os seus planos"
            description="Preencha o formulário e um consultor responderá em menos de 24 horas para ajudar com arrendamento de veículos ou planeamento completo da sua viagem para Dubai."
          />

          <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/10">
            {isSubmitted && (
              <div className="mb-6 rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm text-primary">
                Mensagem enviada com sucesso! Entraremos em contacto muito em
                breve.
              </div>
            )}
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="O seu nome"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@empresa.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+351 21 000 0000"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre a sua necessidade ou viagem ao Dubai"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-2 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Aguarde..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
        <aside className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-white to-primary/10 p-8 shadow-xl shadow-primary/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Contacto directo
            </h3>
            <p className="text-sm text-foreground/70">
              Preferia falar agora? Ligue-nos ou envie uma mensagem via
              WhatsApp. Estamos disponíveis em horários alargados para apoiar o
              seu projecto.
            </p>
            <div className="space-y-4 text-sm text-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <a
                  href="tel:+244949918673"
                  className="font-medium text-foreground hover:text-primary"
                >
                  +244 949 918 673
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <a
                  href="tel:+97142223766"
                  className="font-medium text-foreground hover:text-primary"
                >
                  +971 4 222 3766
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <a
                  href="tel:+971507587620"
                  className="font-medium text-foreground hover:text-primary"
                >
                  +971 50 758 7620
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary" />
                <div className="space-y-2">
                  <span className="block">
                    Frota Justo General Trading — Doha Centre, 29, 40a Street,
                    Al Muraqqabat, Deira, Dubai, Dubai Municipality
                  </span>
                  <span className="block">
                    Jardins de Talatona — Rua do Mundo Verde, Condomínio Jardins
                    de Talatona, Edifício A, APT 404, Talatona, Luanda, Luanda
                    Province
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <a
                  href="mailto:contacto@frotajusto.com"
                  className="font-medium text-foreground hover:text-primary"
                >
                  contacto@frotajusto.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-4 text-primary" />
                <span>
                  Hospitalidade imediata: todos os dias, 08h – 22h CET
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-foreground/75">
            <p>
              Equipa presente em Dubai e Angola para garantir acompanhamento
              presencial e remoto, com especialistas em mobilidade, lifestyle e
              viagens de luxo.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
