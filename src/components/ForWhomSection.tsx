const items = [
  { title: "Фаундер", desc: "Хотите привлекать клиентов, партнёров и инвесторов через личный бренд" },
  { title: "Эксперт", desc: "Хотите, чтобы клиенты приходили сами, а у вашей экспертности была визитная карточка" },
  { title: "B2B-компания", desc: "Хотите системную лидогенерацию и узнаваемость в нише" },
  { title: "HR-специалист", desc: "Хотите нанимать лучших специалистов через LinkedIn" },
];

const ForWhomSection = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
        Наши услуги вам подходят, если вы
      </h2>
      <p className="text-center text-muted-foreground mt-3">
      
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhomSection;
