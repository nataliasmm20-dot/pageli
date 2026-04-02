import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="py-16 md:py-24 text-center px-6">
    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
      Ведем вам LinkedIn страницу
    </h1>
    <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mt-2">
      под ключ
    </h2>
    <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
      Вашим голосом. Повышаем бизнес медийность и приводим горячих лидов
    </p>
    <a
      href="https://t.me/KukhNata"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
    >
      Бесплатный расчет и план продвижения
    </a>
  </section>
);

export default HeroSection;
