import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { useLang } from "@/hooks/useLang";

const Footer = () => {
  const t = useLang().footer;
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Pageli" className="h-8 w-8 object-contain" />
        </Link>
        <div className="flex items-center gap-4">
          <a href={t.privacyUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-foreground transition-colors underline">
            {t.privacy}
          </a>
          <span className="text-muted-foreground text-xs">{t.copyright}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
