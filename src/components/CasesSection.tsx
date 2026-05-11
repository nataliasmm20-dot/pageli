import { useState, useRef, useEffect } from "react";
import { useLang } from "@/hooks/useLang";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Mobile avatars
import case1Mobile from "@/assets/cases/mobile/case-1.jpg";
import case2Mobile from "@/assets/cases/mobile/case-2.jpg";
import case3Mobile from "@/assets/cases/mobile/case-3.jpg";
import case4Mobile from "@/assets/cases/mobile/case-4.jpg";
import case5Mobile from "@/assets/cases/mobile/case-5.jpg";

// Desktop banners (только для кейсов где есть широкая картинка)
import case1Desktop from "@/assets/cases/desctop/case-1-desctop.webp";
import case2Desktop from "@/assets/cases/desctop/case-2-desctop.webp";
import case3Desktop from "@/assets/cases/desctop/case-3-desctop.webp";
import case4Desktop from "@/assets/cases/desctop/case-4-desctop.webp";
import case5Desktop from "@/assets/cases/desctop/case-5-desctop.webp";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.jpg";
import screenshot4 from "@/assets/screenshot-4.jpg";

const caseImages = [
  { mobileImg: case1Mobile, desktopImg: case1Desktop as string },
  { mobileImg: case2Mobile, desktopImg: case2Desktop as string },
  { mobileImg: case3Mobile, desktopImg: case3Desktop as string },
  { mobileImg: case4Mobile, desktopImg: case4Desktop as string },
  { mobileImg: case5Mobile, desktopImg: case5Desktop as string },
];

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

const CasesSection = () => {
  const t = useLang().cases;
  const cases = t.items.map((item, i) => ({ ...item, ...caseImages[i] }));
  const [current, setCurrent] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Предзагрузка всех изображений кейсов
  useEffect(() => {
    const urls = caseImages.flatMap((c) => [c.mobileImg, c.desktopImg].filter(Boolean) as string[]);
    urls.forEach((src) => { const img = new Image(); img.src = src; });
  }, []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent((c) => (c === 0 ? cases.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cases.length - 1 ? 0 : c + 1));

  const cs = cases[current];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActiveScreenshot(index);
  };

  const scrollTo = (i: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: "smooth" });
    setActiveScreenshot(i);
  };

  const scrollDesktop = (dir: "left" | "right") => {
    if (!desktopScrollRef.current) return;
    const el = desktopScrollRef.current;
    const cardWidth = el.offsetWidth / 3;
    el.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-6" id="cases">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">{t.title}</h2>

        {/* Carousel */}
        <div className="mt-10 border border-border rounded-2xl overflow-hidden bg-background">

          {/* DESKTOP: full banner (только если есть desktopImg) */}
          {cs.desktopImg && (
            <div className="relative hidden md:block">
              <img src={cs.desktopImg} alt={cs.role} className="w-full h-auto" />
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow-md">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow-md">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          )}
          {/* DESKTOP: навигация если нет баннера */}
          {!cs.desktopImg && (
            <div className="relative hidden md:flex justify-end px-4 pt-4 gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          )}

          {/* MOBILE: compact header with avatar + nav */}
          <div className="md:hidden flex items-center justify-between px-4 pt-4 pb-3 border-b border-border">
            <div className="flex items-center gap-3">
              <img src={cs.mobileImg} alt={cs.role} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="text-muted-foreground text-xs leading-tight">{cs.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
              <button onClick={prev} className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              <button onClick={next} className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          <div className="p-4 md:p-8">
            {/* Desktop name block */}
            <div className="hidden md:flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {current + 1}
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{cs.role}</p>
              </div>
            </div>

            <p className="text-primary text-sm font-semibold">{cs.period}</p>

            <div className="mt-3">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">{t.taskLabel}</h4>
              <p className="text-foreground text-sm mt-1">{cs.goal}</p>
            </div>

            <div className="mt-3">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">{t.audienceLabel}</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {cs.audience.map((a, i) => (
                  <span key={i} className="bg-accent text-foreground text-xs px-3 py-1.5 rounded-full">{a}</span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">{t.resultsLabel}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {cs.results.map((r, i) => (
                  <div key={i} className="bg-accent rounded-xl p-3 text-center">
                    <div className="font-bold text-foreground text-sm md:text-lg leading-tight">{r.value}</div>
                    <div className="text-muted-foreground text-xs mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 pb-4">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">{t.screenshotsTitle}</h3>

          {/* Desktop: horizontal scroll carousel with arrows */}
          <div className="hidden md:block relative">
            <button
              onClick={() => scrollDesktop("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div
              ref={desktopScrollRef}
              className="flex gap-4 overflow-x-auto items-start"
              style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            >
              {screenshots.map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-border shadow-sm flex-shrink-0"
                  style={{ width: "calc(33.333% - 11px)", scrollSnapAlign: "start" }}
                >
                  <img src={src} alt={`Результат ${i + 1}`} className="w-full h-auto block" />
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollDesktop("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Mobile: horizontal scroll */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {screenshots.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border shadow-sm flex-shrink-0 snap-center" style={{ width: "65vw", lineHeight: 0 }}>
                <img src={src} alt={`Результат ${i + 1}`} style={{ width: "65vw", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>
          {/* Mobile dots indicator */}
          <div className="md:hidden flex justify-center gap-2 mt-3">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all ${activeScreenshot === i ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
