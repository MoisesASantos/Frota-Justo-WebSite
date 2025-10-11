import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, description, align = "center" }: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base text-foreground/70", align === "center" ? "mx-auto max-w-2xl" : "") }>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
