import { Search, X } from "lucide-react";

const MenuSearch = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <div className="relative">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-wine/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex. Ndolè, Poulet DG, Mojito…"
        className="w-full rounded-full border border-wine/20 bg-white py-3.5 pl-12 pr-12 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Effacer la recherche"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-wine/40 hover:text-wine"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default MenuSearch;
