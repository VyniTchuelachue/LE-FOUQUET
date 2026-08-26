import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#avis", label: "Avis" },
  { href: "/menu", label: "Menu" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/menu#reservation", label: "Réservation" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wine-dark/95 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/#accueil"
          className="font-script text-3xl leading-none transition-colors duration-300 sm:text-4xl"
          style={{ color: scrolled ? "#E4C567" : "#7A1F1F" }}
        >
          {restaurant.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                scrolled ? "text-cream/90 hover:text-gold" : "text-wine hover:text-wine-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={restaurant.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-cream" : "text-wine"
            }`}
          >
            <Phone size={16} className="text-gold" />
            {restaurant.phone}
          </a>
          <Link to="/menu#reservation" className="btn-gold !px-6 !py-2.5 text-xs">
            Réserver
          </Link>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-cream" : "text-wine"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 border-t border-gold/20 bg-wine-dark/98 px-6 py-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-cream/90 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/menu#reservation" onClick={() => setOpen(false)} className="btn-gold mt-2 text-xs">
              Réserver une table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
