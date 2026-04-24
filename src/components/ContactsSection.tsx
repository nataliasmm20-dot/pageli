import { useState } from "react";
import { Instagram, Send } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxovxmQLjs4GZavs0VYuqoo9nFSscnLaurtIfMhCd_ahRmYERzaRnRANBTHAAe0PnIv/exec";

// Только буквы, пробелы и дефис, от 2 до 60 символов
const NAME_RE = /^[\p{L}\s\-]{2,60}$/u;
// Цифры, +, -, пробелы, скобки — от 5 до 20 символов
const PHONE_RE = /^[+\d\s\-()]{5,20}$/;

const sanitize = (value: string) => value.replace(/[<>"'`]/g, "");

const ContactsSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const handleNameChange = (value: string) => {
    setName(sanitize(value));
  };

  const handlePhoneChange = (value: string) => {
    // Разрешаем вводить только допустимые символы
    setPhone(value.replace(/[^\d+\s\-()]/g, ""));
  };

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!NAME_RE.test(name.trim())) {
      errs.name = "Введите имя и фамилию (только буквы, от 2 до 60 символов)";
    }
    if (!PHONE_RE.test(phone.trim())) {
      errs.phone = "Введите корректный номер телефона (от 5 до 20 цифр)";
    }
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    if (!agreed) return;
    setStatus("loading");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      });
      setStatus("success");
      setName("");
      setPhone("");
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-6" id="contacts">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-primary italic">КОНТАКТЫ</h2>

        {/* Form */}
        <div className="mt-10 bg-cta-bg rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-bold text-foreground">Остались вопросы?</h3>
          <p className="text-muted-foreground text-sm mt-2">
            Напишите нам и мы свяжемся с вами в ближайшее время, чтобы ответить по всем интересующим моментам.
          </p>
          <div className="mt-6 space-y-4 max-w-lg">
            {/* <div>
              <input
                type="text"
                placeholder="Вопрос/предложение/уточнение"
                value={question}
                onChange={(e) => handleNameChange(e.target.value)}
                maxLength={60}
                className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors.question ? "border-destructive" : "border-border"}`}
              />
              {errors.question && <p className="text-xs text-destructive mt-1">{errors.question}</p>}
            </div> */}
            <div>
              <input
                type="text"
                placeholder="Имя и фамилия"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                maxLength={60}
                className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors.name ? "border-destructive" : "border-border"}`}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Ваш номер телефона"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                maxLength={20}
                className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors.phone ? "border-destructive" : "border-border"}`}
              />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 shrink-0" />
              <span>Согласен(а) на обработку персональных данных в соответствии с <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:opacity-80">Политикой конфиденциальности</a></span>
            </label>
            <button
              onClick={handleSubmit}
              disabled={!agreed || status === "loading"}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Отправка..." : "Отправить"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600">Заявка отправлена! Мы свяжемся с вами в течение 24 часов.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.</p>
            )}
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-accent rounded-xl p-6">
            <h4 className="text-primary font-bold uppercase text-sm">Позвонить</h4>
            <p className="text-foreground mt-2">+ 375 (29) 597 85 62 (МТС)</p>
          </div>
          <div className="bg-accent rounded-xl p-6">
            <h4 className="text-primary font-bold uppercase text-sm">Написать</h4>
            <p className="text-foreground mt-2">marketing@pageli.org</p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Аккаунты для связи:</span>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/kukhareva_nat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a href="https://t.me/KukhNata" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <Send className="w-5 h-5 text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/nataliakukhareva/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <span className="font-bold text-foreground text-sm">in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
