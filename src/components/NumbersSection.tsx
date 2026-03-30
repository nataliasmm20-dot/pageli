import worldMap from "@/assets/world-map.jpg";

const stats = [
  { value: "30+", label: "успешных профилей" },
  { value: "3+", label: "года опыта" },
  { value: "10+", label: "стран" },
  { value: "5 000+", label: "просмотров постов в первые месяцы" },
];

const flags = ["🇺🇸", "🇬🇧", "🇫🇷", "🇩🇪", "🇵🇱", "🇧🇷", "🇮🇱", "🇮🇳", "🇦🇪", "🇹🇷", "🇬🇪"];

const NumbersSection = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
        Цифры, которым доверяют
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-black text-primary">{s.value}</div>
            <div className="text-muted-foreground text-sm mt-1 max-w-[120px]">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-8 text-2xl flex-wrap">
        {flags.map((f, i) => <span key={i}>{f}</span>)}
      </div>
      <div className="mt-8 flex justify-center">
        <img src={worldMap} alt="Карта мира" className="max-w-md w-full opacity-60" />
      </div>
    </div>
  </section>
);

export default NumbersSection;
