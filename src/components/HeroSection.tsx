import { useLang } from "@/hooks/useLang";

const HeroSection = () => {
  const t = useLang().hero;
  return (
    <section className="py-16 md:py-24 text-center px-6">
      <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
        {t.title}
      </h1>
      <h3 className="text-3xl md:text-5xl font-black uppercase text-primary mt-2">
        {t.subtitle}
      </h3>
      <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
        {t.description}
      </p>
      <a
        href="https://t.me/KukhNata"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        {t.cta}
      </a>
    </section>
  );
};

export default HeroSection;
