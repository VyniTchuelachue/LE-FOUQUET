/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          deep: "#C9A227",
          light: "#E4C567",
        },
        wine: {
          DEFAULT: "#7A1F1F",
          dark: "#5A1616",
          light: "#93302F",
        },
        cream: {
          DEFAULT: "#F5F0E6",
          dark: "#EAE1CC",
        },
        ink: "#1B1310",
      },
      fontFamily: {
        script: ["'Great Vibes'", "cursive"],
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "wine-gradient": "linear-gradient(135deg, #5A1616 0%, #7A1F1F 55%, #93302F 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #D4AF37 50%, #E4C567 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212, 175, 55, 0.45)",
        wine: "0 8px 30px -8px rgba(122, 31, 31, 0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
