export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price: number | null; // null = variable price ("selon arrivage")
  priceLabel?: string; // display override, e.g. "Selon arrivage"
  image?: string;
  featured?: boolean;
}

export interface MenuGroup {
  label?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  groups: MenuGroup[];
}

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Nos Entrées",
    subtitle: "Appetizers",
    groups: [
      {
        items: [
          { id: "salade-fouquet", name: "Salade du Fouquet", nameEn: "Fouquet salad", description: "Maïs doux, carotte, laitue, thon, œuf dur", price: 3000, image: "/images/salade.jpg" },
          { id: "salade-composee", name: "Salade composée", nameEn: "Mixed salad", description: "Avocat, tomate, laitue, oignon, œuf dur", price: 2500 },
          { id: "salade-chef", name: "Salade du chef", nameEn: "Chef salad", description: "Avocat, tomate, oignon, thon, œuf dur, laitue", price: 3000 },
          { id: "avocat-vinaigrette", name: "Avocat vinaigrette", nameEn: "Avocado vinaigrette", description: "Avocat, tomate, laitue", price: 2500 },
          { id: "sauce-poisson", name: "Sauce de poisson", nameEn: "Fish soup", description: "Bouillon relevé, poisson frais du jour", price: 3000 },
          { id: "cocktail-crevettes", name: "Cocktail de crevettes", nameEn: "Shrimp cocktail", description: "Crevette, tomate, œuf dur", price: 4500 },
          { id: "avocat-crevette", name: "Avocat crevette", nameEn: "Avocado & shrimps", description: "Avocat, crevette, tomate, œuf dur", price: 4500 },
          { id: "crevettes-ail", name: "Crevettes à l'ail", nameEn: "Garlic shrimps", description: "Sautées à l'ail et au beurre", price: 4500 },
          { id: "crevettes-pastis", name: "Crevettes sautées au pastis", nameEn: "Shrimps flambéed in pastis", description: "Flambées en salle, crème légère", price: 5000 },
        ],
      },
    ],
  },
  {
    id: "plats",
    title: "Plats de Résistance",
    subtitle: "Main courses — viandes & volailles",
    groups: [
      {
        label: "Bœuf",
        items: [
          { id: "steak-grille", name: "Steak grillé", nameEn: "Grilled steak", price: 4000 },
          { id: "steak-poivre-penja", name: "Steak au poivre de Penja", nameEn: "Steak, Penja white pepper", price: 5000 },
          { id: "steak-champignon", name: "Steak au champignon", nameEn: "Mushroom steak, fresh cream", price: 5500, image: "/images/steak-champignon.jpg" },
          { id: "brochettes-boeuf", name: "Brochettes de bœuf", nameEn: "Beef skewers", price: 3500 },
          { id: "emincés-boeuf", name: "Émincés de bœuf", nameEn: "Sliced beef", price: 4000 },
          { id: "viande-creme", name: "Viande crème", nameEn: "Beef in cream sauce", price: 3500 },
          { id: "tripe-fouquet", name: "Tripe Fouquet", nameEn: "Fouquet tripe", price: 3000 },
          { id: "gombo-boeuf", name: "Gombo viande de bœuf", nameEn: "Okro soup with beef", price: 3000 },
          { id: "pistache-boeuf", name: "Pistache viande de bœuf", nameEn: "Egusi stew with beef", price: 3000 },
          { id: "legumes-viande", name: "Légumes sautés viande", nameEn: "Stewed vegetables with beef", price: 3000 },
        ],
      },
      {
        label: "Volailles",
        items: [
          { id: "poulet-dg-demi", name: "Poulet DG (demi)", nameEn: "Chicken DG (half)", price: 5000, image: "/images/poulet-dg.jpg", featured: true },
          { id: "poulet-dg-entier", name: "Poulet DG (entier)", nameEn: "Chicken DG (whole)", price: 9000, image: "/images/poulet-dg.jpg", featured: true },
          { id: "poulet-braise", name: "Poulet braisé", nameEn: "Braised chicken", price: 5000 },
          { id: "poulet-poele-demi", name: "Poulet poêlé (demi)", nameEn: "Fried chicken, barbecue sauce (half)", price: 5000 },
          { id: "poulet-poele-entier", name: "Poulet poêlé (entier)", nameEn: "Fried chicken, barbecue sauce (whole)", price: 9500 },
          { id: "poulet-basquaise", name: "Poulet basquaise", nameEn: "Basquaise chicken", price: 2500 },
          { id: "poulet-forestiere", name: "Poulet à la sauce forestière", nameEn: "Chicken in mushroom sauce", price: 4000 },
        ],
      },
      {
        label: "Pâtes",
        items: [
          { id: "spaghetti-bolognaise", name: "Spaghetti bolognaise", nameEn: "Spaghetti bolognese", price: 5000 },
          { id: "spaghetti-carbonara", name: "Spaghetti carbonara", nameEn: "Carbonara spaghetti", price: 5500 },
        ],
      },
    ],
  },
  {
    id: "poissons",
    title: "Poissons & Crustacés",
    subtitle: "Fish & seafood",
    groups: [
      {
        items: [
          { id: "bar-poele-demi", name: "Bar poêlé (demi)", nameEn: "Fried bar fish, barbecue sauce (half)", price: 4000 },
          { id: "bar-poele-entier", name: "Bar poêlé (entier)", nameEn: "Fried bar fish, barbecue sauce (whole)", price: 5000 },
          { id: "bar-basquaise-demi", name: "Bar basquaise (demi)", nameEn: "Basquaise bar fish (half)", price: 4000 },
          { id: "bar-basquaise-entier", name: "Bar basquaise (entier)", nameEn: "Basquaise bar fish (whole)", price: 5000 },
          { id: "bar-creme", name: "Bar crème", nameEn: "Bar fish in cream", price: 6000 },
          { id: "gombo-pistache-bar", name: "Gombo pistache bar", nameEn: "Okro & egusi soup with bar fish", price: 5500 },
          { id: "sole-poelee", name: "Sole poêlée", nameEn: "Fried sole, barbecue sauce", price: null, priceLabel: "Selon arrivage" },
          { id: "gombo-poisson-fume", name: "Gombo poisson fumé", nameEn: "Okro soup with smoked fish", price: 3200 },
          { id: "legumes-pistache-poisson-fume", name: "Légumes pistache poisson fumé", nameEn: "Vegetables & egusi, smoked fish", price: 3200 },
          { id: "riz-saute-poisson-fume", name: "Riz sauté poisson fumé", nameEn: "Fried rice with smoked fish", price: 5500 },
          { id: "crevettes-provencales", name: "Crevettes provençales", nameEn: "Provençal shrimps", price: 5500 },
          { id: "gambas-grillees", name: "Gambas grillées", nameEn: "Grilled prawns", price: 8500 },
          { id: "gambas-ail", name: "Gambas à l'ail", nameEn: "Prawns with garlic & cream", price: 9500 },
        ],
      },
    ],
  },
  {
    id: "garnitures",
    title: "Nos Garnitures",
    subtitle: "Our complements",
    groups: [
      {
        items: [
          { id: "jardiniere-legumes", name: "Jardinière de légumes", nameEn: "Mixed vegetables", price: 1500 },
          { id: "riz-parfume", name: "Riz parfumé", nameEn: "Aromatic rice", price: 1500 },
          { id: "pommes-vapeur", name: "Pommes vapeur", nameEn: "Boiled potatoes", price: 1500 },
          { id: "plantain-tape", name: "Plantain tapé", nameEn: "Smashed plantains", price: 1500 },
          { id: "couscous-manioc-mais", name: "Couscous manioc / maïs", nameEn: "Cassava or corn fufu", price: 1500 },
          { id: "riz-cantonais", name: "Riz cantonais", nameEn: "Fried rice", price: 2000 },
          { id: "riz-curry", name: "Riz curry", nameEn: "Curry rice", price: 1500 },
          { id: "haricots-verts", name: "Haricots verts", nameEn: "Green beans", price: 1500 },
          { id: "miondo", name: "Miondo", nameEn: "Cassava sticks", price: 1500 },
          { id: "supplement", name: "Supplément", nameEn: "Extra portion", price: 500 },
        ],
      },
    ],
  },
  {
    id: "ndole-porc",
    title: "Ndolè & Porc",
    subtitle: "Signature dishes",
    groups: [
      {
        items: [
          { id: "ndole-royal", name: "Ndolè Royal", nameEn: "Royal Ndolè", description: "Crevettes, gambas, viande fumée & morue — la table entière", price: 15000, image: "/images/couscous-ndole.jpg", featured: true },
        ],
      },
      {
        label: "Ndolè",
        items: [
          { id: "ndole-crevettes", name: "Ndolè crevettes", nameEn: "Ndolè with shrimps", price: 5500 },
          { id: "ndole-morue", name: "Ndolè morue", nameEn: "Ndolè with cod", price: 5500 },
          { id: "ndole-poisson-fume", name: "Ndolè poisson fumé", nameEn: "Ndolè with smoked fish", price: 3500 },
          { id: "ndole-viande-fumee", name: "Ndolè viande fumée", nameEn: "Ndolè with smoked meat", price: 3500 },
          { id: "ndole-plantain", name: "Ndolè Plantain", nameEn: "Ndolè, pork & fried plantains", description: "Porc fondant, ndolè maison et plantains frits dorés à point", price: 7000, image: "/images/ndole-porc-plantains.jpg", featured: true },
        ],
      },
      {
        label: "Porc",
        items: [
          { id: "cote-porc-dijonnaise", name: "Côte de porc dijonnaise", nameEn: "Dijon pork chop", price: 4000 },
          { id: "roti-porc", name: "Rôti de porc", nameEn: "Roast pork", price: 5000 },
          { id: "porc-poele", name: "Porc poêlé", nameEn: "Fried pork, barbecue sauce", price: 3500 },
          { id: "porc-basquaise", name: "Porc basquaise", nameEn: "Basquaise pork", price: 3000 },
          { id: "porc-creole", name: "Porc créole", nameEn: "Creole pork", price: 3000 },
          { id: "porc-creme", name: "Porc crème", nameEn: "Pork in cream", price: 4500 },
          { id: "porc-creme-champignons", name: "Porc crème champignons", nameEn: "Pork, cream & mushrooms", price: 5000 },
          { id: "porc-fume-creme", name: "Porc fumé crème", nameEn: "Smoked pork in cream", price: 4500 },
          { id: "gombo-pistache-porc-fume", name: "Gombo pistache porc fumé", nameEn: "Okro & egusi, smoked pork", price: 5000 },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "Nos Desserts",
    subtitle: "Desserts",
    groups: [
      {
        items: [
          { id: "fruits-saison", name: "Fruits de saison", nameEn: "Seasonal fruits", price: 1000 },
          { id: "salade-fruits", name: "Salade de fruits", nameEn: "Fruit salad", price: 2000 },
        ],
      },
    ],
  },
  {
    id: "boissons",
    title: "Nos Boissons",
    subtitle: "Drinks",
    groups: [
      {
        items: [
          { id: "eau-minerale", name: "Eau minérale", nameEn: "Mineral water", price: 1000 },
          { id: "perrier", name: "Perrier", price: 2500 },
          { id: "jus-naturels", name: "Jus naturels", nameEn: "Fresh juices", description: "Ananas, goyave, passion, gingembre, cassis", price: 1500 },
          { id: "menthe-eau", name: "Menthe à l'eau", price: 1500 },
          { id: "coca-1l", name: "Coca, light, zéro — 1 L", price: 2500 },
          { id: "malta", name: "Malta", price: 2500 },
          { id: "tops-brasseries", name: "Tops brasseries", price: 2500 },
          { id: "red-bull", name: "Red Bull", price: 2500 },
        ],
      },
      {
        label: "Bières & Brasseries",
        items: [
          { id: "castel", name: "Castel", price: 1500 },
          { id: "beaufort-light", name: "Beaufort Light", price: 1500 },
          { id: "mutzig", name: "Mutzig", price: 1500 },
          { id: "beaufort-ordinaire", name: "Beaufort Ordinaire", price: 1500 },
          { id: "isenbeck", name: "Isenbeck", price: 1500 },
          { id: "kadji-beer", name: "Kadji Beer", price: 1500 },
          { id: "amstel", name: "Amstel", price: 1500 },
          { id: "heineken", name: "Heineken", price: 1500 },
          { id: "guinness", name: "Guinness", price: 1500 },
          { id: "harp", name: "Harp", price: 1500 },
          { id: "guinness-smooth", name: "Guinness Smooth", price: 1500 },
          { id: "1664", name: "1664", price: 1500 },
          { id: "ice-black-pineapple", name: "Ice Black / Pineapple", price: 1500 },
          { id: "chill", name: "Chill", price: 1500 },
        ],
      },
      {
        label: "Boissons Chaudes",
        items: [
          { id: "the", name: "Thé", nameEn: "Tea", price: 1000 },
          { id: "gingembre-chaud", name: "Gingembre chaud", nameEn: "Hot ginger", price: 2000 },
          { id: "cafe-expresso", name: "Café expresso", price: 1500 },
          { id: "grog", name: "Grog", price: 4000 },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    title: "Nos Cocktails",
    subtitle: "Cocktails",
    groups: [
      {
        items: [
          { id: "mojito", name: "Mojito", description: "Rhum, jus de citron, feuilles de menthe", price: 5000, image: "/images/cocktail-1.jpg" },
          { id: "tequila-sunrise", name: "Tequila sunrise", description: "Tequila, jus d'orange, grenadine", price: 5000, image: "/images/cocktail-2.jpg" },
          { id: "cuba-libre", name: "Cuba libre", description: "Rhum brun, jus de citron, coca", price: 5000, image: "/images/cocktail-3.jpg" },
          { id: "spring-boks", name: "Spring Boks", description: "Get 27, Bailey's", price: 5000 },
          { id: "gin-fizz", name: "Gin fizz", description: "Gin, jus de citron, sucre de canne", price: 5000 },
          { id: "americano", name: "Americano", description: "Gin, campari, martini rouge", price: 5000 },
          { id: "tequila-paf", name: "Tequila paf", price: 3500 },
          { id: "diabolo-menthe", name: "Diabolo menthe", price: 2000 },
          { id: "menthe-lait", name: "Menthe au lait", price: 1500 },
        ],
      },
    ],
  },
  {
    id: "champagnes",
    title: "Nos Champagnes",
    subtitle: "Champagne — à la bouteille",
    groups: [
      {
        items: [
          { id: "ruinart-blanc", name: "Ruinart Blanc de Blancs", price: 120000 },
          { id: "ruinart-brut", name: "Ruinart Brut", price: 80000 },
          { id: "veuve-clicquot", name: "Veuve Clicquot", price: 70000 },
          { id: "moet-chandon", name: "Moët & Chandon", price: 60000 },
          { id: "laurent-perrier", name: "Laurent Perrier", price: 50000 },
          { id: "mumm", name: "Mumm", price: 50000 },
        ],
      },
    ],
  },
];

export const allMenuItems: MenuItem[] = menu.flatMap((cat) =>
  cat.groups.flatMap((g) => g.items)
);

export function formatXAF(price: number) {
  return `${price.toLocaleString("fr-FR")} XAF`;
}
