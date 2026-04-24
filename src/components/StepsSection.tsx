const topSteps = [
  { title: "Оптимизация профиля", desc: "Превращаем профиль в продающую страницу" },
  { title: "Вовлечение аудитории", desc: "Рост подписчиков и взаимодействия" },
];

const bottomSteps = [
  { title: "Стратегия и позиционирование", desc: "Определяем вашу уникальность и план продвижения" },
  { title: "Контент от вашего имени", desc: "Пишем посты в вашем голосе и стиле" },
  { title: "Лидогенерация через диалоги", desc: "Конвертируем контакты в разговоры и сделки" },
];

// Все шаги по порядку для мобильного степпера
const allSteps = [
  { title: "Стратегия и позиционирование", desc: "Через заполнения брифа или онлайн-интервью, определяем ваш голос, стиль и план продвижения." },
  { title: "Оптимизация профиля", desc: "Превращаем профиль в понятную страницу, которая решает вашу задачу" },
  { title: "Контент от вашего имени", desc: "Подбираем темы под вас и пишем посты в вашем голосе" },
  { title: "Вовлечение аудитории", desc: "Ежедневно растим подписчиков и взаимодействуем с целевой аудиторией" },
  { title: "Лидогенерация через диалоги", desc: "Конвертируем контакты в разговоры и сделки" },
];

const results = [
  "Входящие сообщения от потенциальных клиентов и партнёров",
  "Медийность и личный бренд, которые вызывают доверие",
  "Рост узнаваемости и упрощения нетворкинга в вашей нише",
  "Диалоги с ЛПР и руководителями релевантных компаний",
];

const StepsSection = () => (
  <section className="py-16 px-6 bg-muted/50">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-foreground">
        Этапы работы
      </h2>
      <p className="text-center text-muted-foreground mt-3">
        Мы вкладываем свою экспертизу, насмотренность и время, чтобы через ваш Linkedin профиль, вы получали желаемый результат. 
        <br></br>И вот, что именно мы делаем на старте работы:
      </p>

      {/* Desktop: wave diagram */}
      <div className="hidden lg:flex flex-row gap-10 mt-12">
        <div className="lg:w-2/3">
          <div className="flex justify-around mb-2 px-4">
            {topSteps.map((s, i) => (
              <div key={i} className="text-center max-w-[160px]">
                <p className="font-bold text-foreground text-sm">{s.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full">
            <svg viewBox="0 0 600 120" className="w-full" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 30 70 C 80 70 100 25 150 25 C 200 25 220 78 270 78 C 320 78 340 22 390 22 C 440 22 450 75 480 80 C 510 85 530 40 590 35"
                fill="none"
                stroke="hsl(224 85% 55%)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="30"  cy="70" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="150" cy="25" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="270" cy="78" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="390" cy="22" r="7" fill="hsl(224 85% 55%)" />
              <circle cx="480" cy="80" r="7" fill="hsl(224 85% 55%)" />
            </svg>
          </div>

          <div className="flex justify-between mt-2">
            {bottomSteps.map((s, i) => (
              <div key={i} className="max-w-[160px]">
                <p className="font-bold text-foreground text-sm">{s.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

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

      {/* Mobile: stepper */}
      <div className="lg:hidden mt-10">
        {/* Steps */}
        <div className="relative">
          {allSteps.map((s, i) => (
            <div key={i} className="flex gap-4 relative">
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10">
                  {i + 1}
                </div>
                {i < allSteps.length - 1 && (
                  <div className="w-0.5 bg-primary/30 flex-1 my-1" style={{ minHeight: "32px" }} />
                )}
              </div>
              {/* Content */}
              <div className="pb-6">
                <p className="font-bold text-foreground text-sm">{s.title}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-0.5 h-8 bg-primary/40" />
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary/60" />
          </div>
        </div>

        {/* Results block */}
        <div className="bg-background rounded-2xl border border-border p-5">
          <p className="text-xs font-bold uppercase text-primary tracking-wider mb-4">В итоге вы получаете</p>
          <div className="space-y-4">
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

    </div>
  </section>
);

export default StepsSection;
