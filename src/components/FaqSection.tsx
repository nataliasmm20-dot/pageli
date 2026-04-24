import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Через какое время будут результаты?", a: "Первые результаты видны уже через 2-4 недели — рост охватов, подписчиков и входящих сообщений. Устойчивая система лидогенерации формируется к 3 месяцу." },
  { q: "Сколько моего времени это займёт?", a: "Минимально. На старте — 1-2 часа на заполнение брифа. Далее — 15-30 минут в неделю на согласование контента." },
  { q: "Для кого это подходит?", a: "Для фаундеров, CEO, экспертов, HR-команд и B2B-компаний, которые хотят привлекать клиентов и партнёров через LinkedIn." },
  { q: "Каких результатов ожидать?", a: "Рост подписчиков в 2-5 раз, увеличение охватов в 5-10 раз, регулярные входящие сообщения от потенциальных клиентов." },
  { q: "Вы пишете контент за меня?", a: "Да, мы создаём контент от вашего имени в вашем голосе и стиле. Вы утверждаете тексты перед публикацией." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center text-foreground">
          Частые вопросы
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
