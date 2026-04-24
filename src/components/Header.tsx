import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/services", label: "Услуги" },
  { to: "/cases", label: "Кейсы" },
  { to: "/contacts", label: "Контакты" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Pageli" className="h-10 w-10 object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-primary transition-colors ${pathname === l.to ? "text-primary" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contacts"
          className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Оставить заявку
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium py-2 hover:text-primary transition-colors ${pathname === l.to ? "text-primary" : "text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacts"
            onClick={() => setOpen(false)}
            className="mt-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity"
          >
            Оставить заявку
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
