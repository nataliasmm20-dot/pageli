import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex items-center justify-between">
      <img src={logo} alt="Pageli" className="h-8 w-8 object-contain" />
      <span className="text-muted-foreground text-xs">© 2026 Все права защищены</span>
    </div>
  </footer>
);

export default Footer;
