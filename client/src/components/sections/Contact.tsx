import { motion } from "motion/react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const Contact = () => {
  return (
    <section id="contact" className="bg-cream py-24 sm:py-28">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold" />
            Nous trouver
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-wine sm:text-4xl md:text-5xl">
            Venez nous rendre visite
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wine-gradient text-cream">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-wine">Adresse</h3>
                <p className="mt-1 text-sm text-ink/60">{restaurant.address}</p>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-wine underline underline-offset-4"
                >
                  Voir l'itinéraire
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wine-gradient text-cream">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-wine">Téléphone &amp; WhatsApp</h3>
                <a href={restaurant.phoneHref} className="mt-1 block text-sm text-ink/60 hover:text-wine">
                  {restaurant.phone}
                </a>
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wine underline underline-offset-4"
                >
                  <MessageCircle size={14} /> Écrire sur WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wine-gradient text-cream">
                <Clock size={20} />
              </div>
              <div className="w-full">
                <h3 className="font-serif font-semibold text-wine">Horaires d'ouverture</h3>
                <div className="mt-2 space-y-1 text-sm text-ink/60">
                  <div className="flex justify-between gap-4">
                    <span>Tous les jours</span>
                    <span className="font-semibold text-wine">12:00 – 01:30</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="min-h-[360px] overflow-hidden rounded-2xl border border-gold/20 shadow-sm"
          >
            <iframe
              title="Localisation de Le Fouquet sur Google Maps"
              src={restaurant.mapEmbedUrl}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
