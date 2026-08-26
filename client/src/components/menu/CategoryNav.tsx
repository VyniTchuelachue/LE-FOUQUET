import { menu } from "@/data/menu";

const CategoryNav = ({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="sticky top-[64px] z-30 border-b border-gold/20 bg-cream/95 backdrop-blur-sm">
      <div className="container">
        <div className="scrollbar-none flex gap-2 overflow-x-auto py-3">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                active === cat.id
                  ? "border-wine bg-wine text-cream"
                  : "border-wine/20 text-wine/70 hover:bg-wine/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
