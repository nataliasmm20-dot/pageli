const services = [
  "ВЕДЕНИЕ ЛИЧНОЙ СТРАНИЦЫ",
  "КОНСУЛЬТАЦИЯ",
  "НАСТРОЙКА ПРОФИЛЯ + КОНСУЛЬТАЦИЯ",
  "ВЕДЕНИЕ СТРАНИЦЫ КОМПАНИИ",
  "ЛИЧНАЯ СТРАНИЦА + СТРАНИЦА КОМПАНИИ",
];

const includes = [
  "Анализ конкурентов и разработка стратегии продвижения личного бренда",
  "Заполнение страницы с учётом SEO и ключевых слов вашей ниши",
  "Не менее 5 публикаций в месяц (экспертиза, личные истории, кейсы, мнение)",
  "Ежедневная работа с внутренним продвижением (комментарии, реакции, вовлечение нужных людей)",
  "Привлечение от 300 подписчиков в месяц",
  "Выборка целевых лидов из входящих сообщений и запросов",
  "Еженедельная и ежемесячная отчётность",
];

const howWeWork = [
  "На старте просим вас заполнить бриф с вопросами о ваших целях, пожелания, опорной информации",
  "Формируем позиционирование и контент-стратегию: какие темы подсвечивать, каким тоном говорить",
  "Готовим и публикуем посты от вашего имени, согласовывая картинки, истории и кейсы",
  "Отвечаем на комментарии, поддерживаем диалог и отслеживаем потенциальные лиды",
];

const results = [
  "Личный профиль под ключ",
  "Рост вашей медийности",
  "Список лидов, с которыми можно переходить к диалогу и сделкам",
];

const ServicesSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-6" id="services">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">УСЛУГИ</h2>

        <div className="mt-10 flex flex-col md:flex-row gap-10">
          {/* Left - service names */}
          <div className="md:w-1/3 space-y-6">
            {services.map((s, i) => (
              <div key={i}>
                <h3 className="text-lg font-extrabold text-primary uppercase">{s}</h3>
                {i < services.length - 1 && <div className="mt-4 border-b border-border" />}
              </div>
            ))}
            <p className="text-muted-foreground text-sm mt-4">Дополнительные услуги обсуждаются отдельно</p>
          </div>

          {/* Right - details */}
          <div className="md:w-2/3 space-y-8">
            <div className="flex items-center gap-4">
              <span className="border border-foreground rounded-lg px-4 py-2 font-semibold text-foreground">от 450$ /месяц</span>
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Заказать услугу
              </button>
            </div>
            <p className="text-muted-foreground text-sm">
              Для экспертов, фаундеров и руководителей, которые хотят получать клиентов и предложения о сотрудничестве через свой личный профиль.
            </p>

            <div className="bg-accent rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3">Что входит:</h4>
              <ul className="space-y-2">
                {includes.map((item, i) => (
                  <li key={i} className="text-sm text-foreground flex gap-2">
                    <span className="text-primary mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3">Как мы работаем:</h4>
              <ul className="space-y-2">
                {howWeWork.map((item, i) => (
                  <li key={i} className="text-sm text-foreground flex gap-2">
                    <span className="text-primary mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3">Что вы получаете на выходе:</h4>
              <ul className="space-y-2">
                {results.map((item, i) => (
                  <li key={i} className="text-sm text-foreground flex gap-2">
                    <span className="text-primary mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
