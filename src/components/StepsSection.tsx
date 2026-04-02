const topSteps = [
  { title: "Оптимизация профиля", desc: "Превращаем профиль в продающую страницу" },
  { title: "Вовлечение аудитории", desc: "Рост подписчиков и взаимодействия" },
];

const bottomSteps = [
  { title: "Стратегия и позиционирование", desc: "Определяем вашу уникальность и план продвижения" },
  { title: "Контент от вашего имени", desc: "Пишем посты в вашем голосе и стиле" },
  { title: "Лидогенерация через диалоги", desc: "Конвертируем контакты в разговоры и сделки" },
];

const results = [
  "Входящие сообщения от клиентов и партнёров",
  "Структурированный личный бренд, который вызывает доверие",
  "Рост видимости и узнаваемости в вашей нише",
  "Диалоги с ЛПР и руководителями нужных компаний",
];

const StepsSection = () => (
  <section className="py-16 px-6 bg-muted/50">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-foreground">
        Этапы работы
      </h2>
      <p className="text-center text-muted-foreground mt-3">
        Полный цикл продвижения — от стратегии до входящих лидов
      </p>

      <div className="mt-12 flex flex-col lg:flex-row gap-10">
        {/* Left: wave diagram */}
        <div className="lg:w-2/3">
          {/* Top labels */}
          <div className="flex justify-around mb-2 px-4">
            {topSteps.map((s, i) => (
              <div key={i} className="text-center max-w-[160px]">
                <p className="font-bold text-foreground text-sm">{s.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* SVG wave */}
          <div className="relative w-full">
            <svg viewBox="0 0 600 120" className="w-full" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 30 70 C 80 70 100 25 150 25 C 200 25 220 78 270 78 C 320 78 340 22 390 22 C 440 22 450 75 480 80 C 510 85 530 40 590 35"
                fill="none"
                stroke="hsl(224 85% 55%)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Dots */}
              <circle cx="30"  cy="70" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="150" cy="25" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="270" cy="78" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="390" cy="22" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="480" cy="80" r="7" fill="hsl(224 85% 55%)" />
            </svg>
          </div>

          {/* Bottom labels */}
          <div className="flex justify-between mt-2 px-0">
            {bottomSteps.map((s, i) => (
              <div key={i} className="max-w-[160px]">
                <p className="font-bold text-foreground text-sm">{s.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: results list */}
        <div className="lg:w-1/3 space-y-4">
          {results.map((r, i) => (
            <div key={i}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full border-2 border-primary flex-shrink-0" />
                <p className="text-foreground text-sm">{r}</p>
              </div>
              {i < results.length - 1 && <div className="mt-4 border-b border-border" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StepsSection;
