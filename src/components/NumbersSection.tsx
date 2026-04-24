import worldMap from "@/assets/world-map.jpg";
import flagRB from "@/assets/rb.jpg";
import flagUAE from "@/assets/uae.jpg";

const stats = [
  { value: "3+", label: "года опыта" },
  { value: "30+", label: "успешных\nпрофилей" },
  { value: "5 000+", label: "просмотров постов в первые месяцы" },
  { value: "10+", label: "стран" },
];

// Флаги: код для flagcdn.com, кроме Беларуси — для неё используем Wikipedia SVG
const flags = [
  { code: "us", src: "https://flagcdn.com/w80/us.png" },
  { code: "ca", src: "https://flagcdn.com/w80/ca.png" },
  { code: "be", src: "https://flagcdn.com/w80/be.png" },
  { code: "pl", src: "https://flagcdn.com/w80/pl.png" },
  { code: "ua", src: "https://flagcdn.com/w80/ua.png" },
  { code: "es", src: "https://flagcdn.com/w80/es.png" },
  { code: "ru", src: "https://flagcdn.com/w80/ru.png" },
  { code: "by", src: flagRB },
  { code: "ae", src: flagUAE },
  { code: "ge", src: "https://flagcdn.com/w80/ge.png" },
];


const NumbersSection = () => (
  <section className="py-12 md:py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-foreground">
        Цифры, которым доверяют
      </h2>

      {/* Stats row with dividers */}
      <div className="flex justify-center gap-0 mt-10">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-stretch">
            <div className="w-[80px] md:w-[160px] py-2 flex flex-col items-center justify-start text-center">
              <div className="text-xl md:text-4xl font-black text-primary">{s.value}</div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1 whitespace-pre-line">{s.label}</div>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px bg-border self-stretch" />
            )}
          </div>
        ))}
      </div>

      {/* Flags row */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8">
        {flags.map((f) => (
          <div
            key={f.code}
            className="rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: "rgba(99, 137, 222, 0.38)", padding: "8px" }}
          >
            <img
              src={f.src}
              alt={f.code}
              className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full block"
            />
          </div>
        ))}
      </div>

      {/* World map */}
      <div className="mt-1">
        <img src={worldMap} alt="Карта мира" className="w-full" />
      </div>
    </div>
  </section>
);

export default NumbersSection;
