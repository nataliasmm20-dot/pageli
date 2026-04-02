import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="Pageli" className="h-8 w-8 object-contain" />
      </Link>
      <span className="text-muted-foreground text-xs">© 2026 Все права защищены</span>
    </div>
  </footer>
);

export default Footer;
