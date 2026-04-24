import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Mobile avatars
import case1Mobile from "@/assets/cases/mobile/case-1.jpg";
import case2Mobile from "@/assets/cases/mobile/case-2.jpg";
import case3Mobile from "@/assets/cases/mobile/case-3.jpg";
import case4Mobile from "@/assets/cases/mobile/case-4.jpg";
import case5Mobile from "@/assets/cases/mobile/case-5.jpg";

// Desktop banners (только для кейсов где есть широкая картинка)
import case1Desktop from "@/assets/cases/desctop/case-1-desctop.jpg";
import case2Desktop from "@/assets/cases/desctop/case-2-desctop.jpg";
import case3Desktop from "@/assets/cases/desctop/case-3-desctop.jpg";
import case4Desktop from "@/assets/cases/desctop/case-4-desctop.jpg";
import case5Desktop from "@/assets/cases/desctop/case-5-desctop.jpg";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.jpg";
import screenshot4 from "@/assets/screenshot-4.jpg";

const cases = [
  {
    id: 1,
    mobileImg: case1Mobile,
    desktopImg: case1Desktop as string,
    name: "",
    role: "IT-руководитель с более чем 30-летним опытом.",
    period: "Старт: январь 2024 — по настоящее время.",
    goal: "Развить свою сеть контактов для расширения клиентской базы нескольких компаний: XIM, Inc (его основная компания, индустрия: saas разработка), ZIMAD (кофаундер, индустрия: мобильные игры), ERP.AERO (инвестор, индустрия: ERP для аэро индустрии).",
    audience: [
      "B2B-клиенты и партнёры в SaaS, mobile gaming и aerospace",
      "C-level лица, принимающие решения",
      "Инвесторы и предприниматели, работающие в схожих нишах",
      "Стартапы и компании, нуждающиеся в техническом партнёрстве",
    ],
    results: [
      { value: "1K → 5K", label: "рост подписчиков" },
      { value: "4 000", label: "средний охват публикаций" },
      { value: "персонализированные визуальные материалы", label: "при полном отсутствии фотоконтента" },
      { value: "20-30", label: "целевых сообщений в неделю" },
    ],
  },
  {
    id: 2,
    mobileImg: case2Mobile,
    desktopImg: case2Desktop as string,
    name: "",
    role: "CEO at Delivio Software | Scaling SaaS Platforms",
    period: "Время проекта: март 2025 — март 2026.",
    goal: "Развить личный бренд и привлечь B2B-клиентов через LinkedIn для SaaS-платформ в сфере FoodTech и TravelTech.",
    audience: [
      "SaaS-фаундеры и CTO",
      "B2B-клиенты в FoodTech и TravelTech",
      "Инвесторы и акселераторы",
      "Партнёры для интеграций",
    ],
    results: [
      { value: "0,5K → 1,9K", label: "рост подписчиков" },
      { value: "16 000", label: "топовый охват публикаций" },
      { value: "нетворкинг", label: "упрощенная коммуникация с инностранными партнерами" },
      { value: "5-15", label: "целевых сообщений в неделю" },
    ],
  },
  {
    id: 3,
    mobileImg: case3Mobile,
    desktopImg: case3Desktop as string,
    name: "",
    role: "Основатель компании по разработке ИИ решений для бизнеса.",
    period: "Старт: ноябрь 2025 — по настоящее время.",
    goal: "Привлечь запросы на выступления, консультации и стратегические сессии по теме AI в космосе и автономных систем, а также медиа-запросы и коллаборации от tech/space-изданий.",
    audience: [
      "C-level и VP в AI-, robotics- и space-компаниях",
      "Фаундеры deep tech и frontier-стартапов",
      "Продуктовые и R&D-лидеры, которые смотрят дальше классических AI-кейсов",
      "Тех-журналисты и медиа, в поисках цитат и понятных объяснений",
    ],
    results: [
      { value: "1,3K → 3,3K", label: "рост подписчиков" },
      { value: "12 000", label: "средний охват публикаций" },
      { value: "1,5K-2,5K", label: "просмотров страницы в неделю" },
      { value: "эксперт", label: "восприятие на конференциях" },
    ],
  },
  {
    id: 4,
    mobileImg: case4Mobile,
    desktopImg: case4Desktop as string,
    name: "",
    role: "Продуктовый дата- и ML-аналитик в сфере маркетплейсов.",
    period: "Старт: декабрь 2025 — по настоящее время.",
    goal: "Предложения от зарубежных продуктовых и технологических компаний (особенно маркетплейсов/платформ) и рекрутеров через позиционирование как эксперта по монетизации, экспериментам и ML в продуктовой аналитике.",
    audience: [
      "CPO, Head of Product, VP Growth, Head of Analytics/Data, Monetization Leads",
      "Senior/Lead Product Managers & Product Owners",
      "Senior/Lead Data/Product Analysts, Product Data Scientists",
      "Tech-рекрутеры и HR зарубежных продуктовых компаний",
    ],
    results: [
      { value: "327 → 1,6к", label: "рост подписчиков" },
      { value: "2-4", label: "приглашения на топ-позиции/месяц" },
      { value: "еженедельные", label: "технические публикации" },
      { value: "нетворкинг", label: "переходы общения в сообщения" },
    ],
  },
  {
    id: 5,
    mobileImg: case5Mobile,
    desktopImg: case5Desktop as string,
    name: "",
    role: "Предприниматель и основатель проектов в сфере инфлюенс маркетинга.",
    period: "Время проекта: октябрь 2025 — декабрь 2025.",
    goal: "Развить сеть контактов и личный бренд перед запуском своего приложения для бизнеса и инфлюенсеров.",
    audience: [
      "Performance & User Acquisition Agencies (Partners, Top Priority)",
      "Mobile App Products (500k+ installs)",
      "Well-Known B2C Brands (DTC/eCom, $5M+ revenue)",
    ],
    results: [
      { value: "1к → 2,5к", label: "рост подписчиков" },
      { value: "12 000", label: "топовый охват публикации" },
      { value: "200+", label: "холодных сообщений" },
      { value: "16%", label: "конверсия ответов" },
    ],
  },
];

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

const CasesSection = () => {
  const [current, setCurrent] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
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
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">КЕЙСЫ</h2>

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
                {cs.id}
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{cs.role}</p>
              </div>
            </div>

            <p className="text-primary text-sm font-semibold">{cs.period}</p>

            <div className="mt-3">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Цель</h4>
              <p className="text-foreground text-sm mt-1">{cs.goal}</p>
            </div>

            <div className="mt-3">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Целевая аудитория</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {cs.audience.map((a, i) => (
                  <span key={i} className="bg-accent text-foreground text-xs px-3 py-1.5 rounded-full">{a}</span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Результаты</h4>
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
          <h3 className="text-xl font-bold text-foreground text-center mb-6">Пару примеров результатов от наших клиентов</h3>

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
