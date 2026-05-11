import { useLang } from "@/hooks/useLang";

const CtaBanner = () => {
  const t = useLang().cta;
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-5xl bg-cta-bg rounded-2xl p-10 md:p-14 text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-foreground">
          {t.title}
        </h2>
        <p className="text-muted-foreground mt-3 text-sm">{t.subtitle}</p>
        <a
          href="https://t.me/KukhNata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          {t.button}
        </a>
        <p className="text-muted-foreground text-xs mt-3">{t.note}</p>
      </div>
    </section>
  );
};

export default CtaBanner;
