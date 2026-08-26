import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const HOLD_MS = prefersReducedMotion ? 250 : 1700;
const FILL_DURATION = prefersReducedMotion ? 0 : 0.9;

const PageTransition = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), HOLD_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-wine-gradient"
          aria-hidden="true"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, #D4AF37 0, transparent 45%), radial-gradient(circle at 75% 75%, #D4AF37 0, transparent 45%)",
            }}
          />

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-gold/80 sm:text-xs"
            >
              Depuis Douala
            </motion.span>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="mt-4 h-px w-16 origin-center bg-gold-gradient sm:w-24"
            />

            <div className="relative mt-6 select-none">
              <span className="font-script text-7xl leading-none text-white/25 sm:text-8xl md:text-9xl">
                Le Fouquet
              </span>
              <motion.span
                initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: FILL_DURATION, delay: 0.5, ease: [0.45, 0, 0.2, 1] }}
                className="absolute inset-0 font-script text-7xl leading-none text-gold drop-shadow-[0_2px_20px_rgba(212,175,55,0.5)] sm:text-8xl md:text-9xl"
              >
                Le Fouquet
              </motion.span>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.85, ease: [0.65, 0, 0.35, 1] }}
              className="mt-6 flex w-40 origin-center items-center gap-3 sm:w-56"
            >
              <span className="h-px flex-1 bg-gold-gradient" />
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold-gradient" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.5em] text-cream/70"
            >
              Restaurant
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
