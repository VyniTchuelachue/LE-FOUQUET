import { motion } from "motion/react";
import { UtensilsCrossed, Clock, Users, Wine } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Cuisine Authentique",
    text: "Ndolé, poulet DG et grillades préparés à la camerounaise, avec des produits sélectionnés.",
  },
  {
    icon: Clock,
    title: "Ouvert Tard",
    text: "Service continu de midi à 1h30 du matin, tous les jours de la semaine.",
  },
  {
    icon: Users,
    title: "Cadre Convivial",
    text: "Salle chaleureuse et terrasse, idéales entre collègues, en famille ou en tête-à-tête.",
  },
  {
    icon: Wine,
    title: "Bar & Cocktails",
    text: "Une carte de cocktails maison pour prolonger la soirée en toute élégance.",
  },
];

const About = () => {
  return (
    <section id="a-propos" className="relative bg-wine-gradient py-24 sm:py-28">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/interior.jpg"
              alt="Intérieur du restaurant Le Fouquet"
              className="col-span-2 h-64 w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              src="/images/la-jardiniere.jpg"
              alt="Plat signature Le Fouquet"
              className="h-48 w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              src="/images/interior-people-2.jpg"
              alt="Convives au restaurant Le Fouquet"
              className="h-48 w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/40 bg-ink/90 px-7 py-5 text-center shadow-2xl backdrop-blur sm:block">
            <div className="font-script text-4xl text-gold">{restaurant.since}</div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-cream/70">
              Depuis
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow !text-gold">
            <span className="h-px w-8 bg-gold" />
            Notre histoire
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            L'art de recevoir, à la camerounaise
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed">
            Niché au cœur d'Akwa, à Douala, Le Fouquet est devenu depuis{" "}
            {restaurant.since} une adresse incontournable pour les amoureux de
            la gastronomie locale. Entre plats traditionnels revisités,
            grillades généreuses et cocktails signature, chaque visite est
            pensée comme un moment de partage — que ce soit pour un déjeuner
            d'affaires, un dîner entre amis ou une soirée prolongée jusqu'au
            bout de la nuit.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-wine-dark shadow-gold">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-cream">{title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
