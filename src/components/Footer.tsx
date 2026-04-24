import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="Pageli" className="h-8 w-8 object-contain" />
      </Link>
      <div className="flex items-center gap-4">
        <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-foreground transition-colors underline">
          Политика конфиденциальности
        </a>
        <span className="text-muted-foreground text-xs">© 2026 Все права защищены</span>
      </div>
    </div>
  </footer>
);

export default Footer;
