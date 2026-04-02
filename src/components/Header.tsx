import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => (
  <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link to="/">
        <img src={logo} alt="Pageli" className="h-10 w-10 object-contain" />
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
        <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
        <Link to="/cases" className="hover:text-primary transition-colors">Кейсы</Link>
        <Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link>
      </nav>
      <Link
        to="/contacts"
        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Оставить заявку
      </Link>
    </div>
  </header>
);

export default Header;
