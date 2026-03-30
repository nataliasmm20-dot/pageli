const steps = [
  { num: 1, title: "Стратегия и планирование", desc: "Определяем вашу уникальность и план продвижения" },
  { num: 2, title: "Оптимизация профиля", desc: "Превращаем профиль в продающую страницу" },
  { num: 3, title: "Контент от вашего имени", desc: "Пишем посты в вашем голосе и стиле" },
  { num: 4, title: "Вовлечение аудитории", desc: "Рост подписчиков и взаимодействия" },
  { num: 5, title: "Лидогенерация через диалоги", desc: "Конвертируем контакты в разговоры и сделки" },
  { num: 6, title: "Входящие сообщения от клиентов и партнёров", desc: "Структурированный личный бренд, который вызывает доверие" },
];

const StepsSection = () => (
  <section className="py-16 px-6 bg-muted/50">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
        Этапы работы
      </h2>
      <p className="text-center text-muted-foreground mt-3">
        Полный цикл продвижения — от стратегии до входящих лидов
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {steps.map((step) => (
          <div key={step.num} className="bg-background rounded-xl p-6 border border-border">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              {step.num}
            </div>
            <h3 className="font-bold text-foreground mt-3 text-sm">{step.title}</h3>
            <p className="text-muted-foreground text-xs mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
