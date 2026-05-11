import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/hooks/useLang";

type IncludeItem = string | { bold: string; rest: string };

type Service = {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  includes: IncludeItem[];
  howWeWork: string[];
  results: string[];
};

const ServiceDetail = ({ cs, t }: { cs: Service; t: { includesLabel: string; howWeWorkLabel: string; resultsLabel: string; orderButton: string } }) => (
  <div className="space-y-6">
    <div>
      <p className="text-muted-foreground text-sm mb-4">{cs.description}</p>
      <div className="flex items-center gap-3 flex-wrap">
        <span className="border border-foreground rounded-lg px-4 py-2 font-semibold text-foreground text-sm">{cs.price}</span>
        <a
          href="https://t.me/KukhNata"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          {t.orderButton}
        </a>
      </div>
    </div>
    <div className="bg-accent rounded-xl p-5">
      <h4 className="font-bold text-foreground mb-3">{t.includesLabel}</h4>
      <ul className="space-y-2">
        {cs.includes.map((item, i) => (
          <li key={i} className="text-sm text-foreground flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span>
            <span>
              {typeof item === "string" ? item : <><strong>{item.bold}</strong>{item.rest}</>}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-accent rounded-xl p-5">
      <h4 className="font-bold text-foreground mb-3">{t.howWeWorkLabel}</h4>
      <ul className="space-y-2">
        {cs.howWeWork.map((item, i) => (
          <li key={i} className="text-sm text-foreground flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span><span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-accent rounded-xl p-5">
      <h4 className="font-bold text-foreground mb-3">{t.resultsLabel}</h4>
      <ul className="space-y-2">
        {cs.results.map((item, i) => (
          <li key={i} className="text-sm text-foreground flex gap-2">
            <span className="text-primary mt-0.5 shrink-0">•</span><span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesSection = () => {
  const lang = useLang();
  const t = lang.services;
  const services = t.items as Service[];

  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMobileToggle = (i: number) => {
    const isOpening = mobileOpen !== i;
    setMobileOpen(isOpening ? i : null);
    if (isOpening) {
      setTimeout(() => {
        const el = itemRefs.current[i];
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <section className="py-12 md:py-16 px-6" id="services">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">{t.title}</h2>

        {/* Desktop layout */}
        <div className="hidden md:flex mt-10 flex-row gap-10">
          <div className="md:w-1/3 space-y-6">
            {services.map((s, i) => (
              <div key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`text-left text-lg font-extrabold uppercase transition-colors ${
                    active === i ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {s.title}
                </button>
                {i < services.length - 1 && <div className="mt-4 border-b border-border" />}
              </div>
            ))}
            <p className="text-muted-foreground text-sm mt-4">{t.additionalNote}</p>
          </div>
          <div className="md:w-2/3">
            <ServiceDetail cs={services[active]} t={t} />
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden mt-8 space-y-2">
          {services.map((s, i) => (
            <div key={i} ref={(el) => { itemRefs.current[i] = el; }} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => handleMobileToggle(i)}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
              >
                <span className={`font-extrabold uppercase text-sm leading-tight ${mobileOpen === i ? "text-primary" : "text-foreground"}`}>
                  {s.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 ml-2 transition-transform text-primary ${mobileOpen === i ? "rotate-180" : ""}`}
                />
              </button>
              {mobileOpen === i && (
                <div className="px-4 pb-5 border-t border-border pt-4">
                  <ServiceDetail cs={s} t={t} />
                </div>
              )}
            </div>
          ))}
          <p className="text-muted-foreground text-sm pt-2">{t.additionalNote}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
