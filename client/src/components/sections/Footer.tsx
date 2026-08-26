import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const Footer = () => {
  return (
    <footer className="bg-ink py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-b border-gold/15 pb-10 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <div className="font-script text-4xl text-gold">{restaurant.name}</div>
            <p className="mt-2 max-w-sm text-sm text-cream/50">
              {restaurant.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-cream/60 md:items-end">
            <a href={restaurant.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone size={15} className="text-gold" /> {restaurant.phone}
            </a>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-center hover:text-gold md:text-right"
            >
              <MapPin size={15} className="shrink-0 text-gold" /> {restaurant.address}
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-wine-dark"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-wine-dark"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-cream/35">
          © {new Date().getFullYear()} {restaurant.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
