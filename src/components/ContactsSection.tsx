import { useState } from "react";
import { Instagram, Send } from "lucide-react";

const ContactsSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="py-16 px-6" id="contacts">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">КОНТАКТЫ</h2>

        {/* Form */}
        <div className="mt-10 bg-cta-bg rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-bold text-foreground">Нужна консультация?</h3>
          <p className="text-muted-foreground text-sm mt-2">
            Готовы предоставить полную консультацию по условиям сотрудничества и всем интересующим вопросам работы с нашей компанией!
          </p>
          <div className="mt-6 space-y-4 max-w-lg">
            <input
              type="text"
              placeholder="Имя и фамилия"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder="Ваш номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5" />
              Согласие на обработку персональных данных в соответствии с целями, указанными в Политике обработки персональных данных
            </label>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Отправить
            </button>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-accent rounded-xl p-6">
            <h4 className="text-primary font-bold uppercase text-sm">Позвонить</h4>
            <p className="text-foreground mt-2">+ 375 (29) 597 85 62 (Наташа)</p>
          </div>
          <div className="bg-accent rounded-xl p-6">
            <h4 className="text-primary font-bold uppercase text-sm">Написать</h4>
            <p className="text-foreground mt-2">marketing@pageli.org</p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Корпоративные аккаунты:</span>
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Send className="w-5 h-5 text-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <span className="font-bold text-foreground text-sm">in</span>
            </a>
          </div>
          <a href="#" className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
            <Send className="w-4 h-4" /> Написать в Telegram
          </a>
          <a href="#" className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
            📞 Написать в Viber
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
