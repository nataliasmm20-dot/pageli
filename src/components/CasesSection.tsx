import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import caseOleg from "@/assets/case-oleg.jpg";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";

const cases = [
  {
    id: 1,
    bannerImg: caseOleg,
    name: "OLEG MUZA",
    role: "CEO of XIM, Inc. | Founder of Multiple Companies",
    period: "Старт: январь 2025 — по настоящее время. 13 месяцев",
    goal: "Развить свою сеть контактов для расширения клиентской базы нескольких компаний: XIM, Inc (его основная компания, индустрия: saas разработка), ZIMAD (кофаундер, индустрия: мобильные игры), ERP.AERO (инвестор, индустрия: ERP для аэро индустрии).",
    audience: [
      "B2B-клиенты и партнёры в SaaS, mobile gaming и aerospace",
      "C-level лица, принимающие решения",
      "Инвесторы и предприниматели, работающие в схожих нишах",
      "Стартапы и компании, нуждающиеся в техническом партнёрстве",
    ],
    results: [
      { value: "1 050 → 4 467", label: "рост подписчиков" },
      { value: "x7", label: "охвата публикаций" },
      { value: "x2,5", label: "органического показа" },
      { value: "30-40", label: "сообщений в неделю" },
    ],
  },
  {
    id: 2,
    bannerImg: caseOleg,
    name: "Andrei Sudakov",
    role: "CEO at Delivio Software | Scaling SaaS Platforms",
    period: "Старт: март 2025 — по настоящее время. 12 месяцев",
    goal: "Развить личный бренд и привлечь B2B-клиентов через LinkedIn для SaaS-платформ в сфере FoodTech и TravelTech.",
    audience: [
      "SaaS-фаундеры и CTO",
      "B2B-клиенты в FoodTech и TravelTech",
      "Инвесторы и акселераторы",
      "Партнёры для интеграций",
    ],
    results: [
      { value: "500 → 3 200", label: "рост подписчиков" },
      { value: "x5", label: "охвата публикаций" },
      { value: "x3", label: "органического показа" },
      { value: "20-30", label: "сообщений в неделю" },
    ],
  },
];

const CasesSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? cases.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cases.length - 1 ? 0 : c + 1));

  const cs = cases[current];

  return (
    <section className="py-16 px-6" id="cases">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">КЕЙСЫ</h2>

        {/* Carousel */}
        <div className="mt-10 border border-border rounded-2xl overflow-hidden bg-background">
          {/* Banner */}
          <div className="relative">
            <img src={cs.bannerImg} alt={cs.name} className="w-full h-48 md:h-64 object-cover" />
            {/* Navigation arrows */}
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow-md">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow-md">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {cs.id}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{cs.name}</h3>
                <p className="text-muted-foreground text-sm">{cs.role}</p>
              </div>
            </div>

            <p className="text-primary text-sm font-semibold mt-4">{cs.period}</p>

            <div className="mt-4">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Цель</h4>
              <p className="text-foreground text-sm mt-1">{cs.goal}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Целевая аудитория</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {cs.audience.map((a, i) => (
                  <span key={i} className="bg-accent text-foreground text-xs px-3 py-1.5 rounded-full">{a}</span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-primary text-xs font-bold uppercase tracking-wider">Результаты</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                {cs.results.map((r, i) => (
                  <div key={i} className="bg-accent rounded-xl p-4 text-center">
                    <div className="font-bold text-foreground text-lg">{r.value}</div>
                    <div className="text-muted-foreground text-xs mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 pb-6">
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
          <h3 className="text-xl font-bold text-foreground text-center mb-6">Примеры результатов наших клиентов</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <img src={screenshot1} alt="Результат 1" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <img src={screenshot2} alt="Результат 2" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <img src={screenshot3} alt="Результат 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
