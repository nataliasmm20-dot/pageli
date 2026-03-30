const reasons = [
  { title: "Только LinkedIn", desc: "Мы не распыляемся — работаем с одной платформой и знаем её глубоко" },
  { title: "Фокус на диалогах", desc: "Мы не гонимся за лайками — важны реальные разговоры и сделки" },
  { title: "Ваш голос", desc: "Контент пишется в вашем стиле — аудитория не почувствует разницы" },
  { title: "Опыт в B2B", desc: "Работаем с фаундерами, экспертами и компаниями, понимаем специфику" },
];

const WhyUsSection = () => (
  <section className="py-16 px-6" id="team">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
        Почему мы
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground">{r.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
