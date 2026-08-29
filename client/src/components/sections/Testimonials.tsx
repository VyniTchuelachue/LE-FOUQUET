import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { reviews, googleRating, totalGoogleReviews } from "@/data/reviews";

const firstColumn = reviews.slice(0, 4);
const secondColumn = reviews.slice(4, 8);
const thirdColumn = reviews.slice(8, 12);

const Testimonials = () => {
  return (
    <section id="avis" className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #7A1F1F 0, transparent 45%), radial-gradient(circle at 80% 80%, #D4AF37 0, transparent 45%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-gold" />
            Ils nous ont fait confiance
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-wine sm:text-4xl md:text-5xl">
            Ce que disent nos convives
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-gold/40 bg-white/70 px-5 py-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(googleRating)
                        ? "fill-gold text-gold"
                        : "fill-transparent text-gold/30"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-wine">{googleRating.toFixed(1)}/5</span>
            </div>
            <span className="text-xs text-ink/50 sm:text-sm">
              plus de {totalGoogleReviews.toLocaleString("fr-FR")} avis Google
            </span>
          </div>

          <p className="mt-5 text-ink/60">
            Une sélection de nos meilleurs avis, laissés par nos clients sur Google et TripAdvisor.
          </p>
        </motion.div>

        <div className="mt-14 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={17} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={21}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={19}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
