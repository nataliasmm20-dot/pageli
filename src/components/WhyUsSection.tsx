const reasons = [
  { title: "Только LinkedIn", desc: "Мы не распыляемся — работаем с одной платформой и знаем все нюансы и функции" },
  { title: "Фокус на вашей цели", desc: "Мы на старте уточняем чего вы хотите добиться, прописываем шаги достижения и идем к цели" },
  { title: "Ваш голос", desc: "Мы на старте обсуждаем и прописываем ваш голос, чтоыб контент всегда был в вашем стиле" },
  { title: "Опыт разных ниш и тем профилей", desc: "Работаем с разными направлениями: SaaS, FinTech, MedTech, AI, маркетинг, дизайн, космос и многие другие" },
];

const WhyUsSection = () => (
  <section className="py-12 md:py-16 px-6" id="team">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
        Почему выбирают нас
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
