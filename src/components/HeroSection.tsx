import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="py-16 md:py-24 text-center px-6">
    <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
      Личный бренд и теплые лиды    </h1>
    <h3 className="text-3xl md:text-5xl font-black uppercase text-primary mt-2">
      через самую бизнесовую соц сеть - Linkedin
    </h3>
    <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
      Ведем профиль вашим голосом под ключ. <br></br> Вы лишь согласовываете и получаете результаты.
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
