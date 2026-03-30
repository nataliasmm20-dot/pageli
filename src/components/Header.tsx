import logo from "@/assets/logo.jpg";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={logo} alt="Pageli" className="h-10 w-10 object-contain" />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollTo("team")} className="hover:text-primary transition-colors">Команда</button>
          <button onClick={() => scrollTo("cases")} className="hover:text-primary transition-colors">Кейсы</button>
          <button onClick={() => scrollTo("contacts")} className="hover:text-primary transition-colors">Контакты</button>
        </nav>
        <button
          onClick={() => scrollTo("contacts")}
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Оставить заявку
        </button>
      </div>
    </header>
  );
};

export default Header;
