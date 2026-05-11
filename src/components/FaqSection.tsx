import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const FaqSection = () => {
  const t = useLang().faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
          {t.title}
        </h2>
        <div className="mt-10 space-y-3">
          {t.items.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
