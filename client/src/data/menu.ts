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
  note?: string;
  groups: MenuGroup[];
}

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Nos Entrées",
    subtitle: "Appetizers",
    groups: [
      {
        label: "Entrées Froides",
        items: [
          { id: "omelette-simple", name: "Omelette simple", nameEn: "Plain omelette", price: 3000, image: "/images/omelette-simple.jpg", featured: true },
          { id: "omelette-garnie", name: "Omelette garnie", nameEn: "Garnished omelette", price: 3500, image: "/images/omelette-garnie.jpg", featured: true },
          { id: "salade-fouquet", name: "Salade du Fouquet", nameEn: "Fouquet salad", description: "Maïs doux, carotte, laitue, thon, œuf dur", price: 3000, image: "/images/salade-fouquet.jpg", featured: true },
          { id: "salade-mixte", name: "Salade mixte", nameEn: "Mixed salad", description: "Avocat, tomate, laitue, oignon, œuf dur", price: 3000, image: "/images/salade-mixte.jpg", featured: true },
          { id: "avocat-vinaigrette", name: "Avocat vinaigrette", nameEn: "Avocado vinaigrette", description: "Avocat, tomate, laitue", price: 3000, image: "/images/avocat-vinaigrette.jpg", featured: true },
          { id: "salade-chef", name: "Salade du chef", nameEn: "Chef salad", description: "Avocat, tomate, oignon, thon, œuf dur, laitue", price: 4000, image: "/images/salade-chef.jpg", featured: true },
          { id: "cocktail-crevettes", name: "Cocktail de crevettes", nameEn: "Shrimps cocktail", description: "Crevette, tomate, oignon, œuf dur", price: 5500, image: "/images/cocktail-de-crevette.jpg", featured: true },
          { id: "avocat-crevettes", name: "Avocat crevettes", nameEn: "Shrimps avocado", description: "Avocat, crevettes, tomate, oignon, œuf dur", price: 5500, image: "/images/avocat-crevette.jpg", featured: true },
        ],
      },
      {
        label: "Entrées Chaudes",
        items: [
          { id: "sauce-poisson", name: "Sauce de poisson", nameEn: "Fish soup", price: 5500, image: "/images/sauce-de-poisson.jpg", featured: true },
          { id: "crevettes-ail", name: "Crevettes à l'ail", nameEn: "Garlic shrimps", price: 6000, image: "/images/crevette-ail.jpg", featured: true },
          { id: "crevettes-pastis", name: "Crevettes sautées au pastis", nameEn: "Flambeed shrimps with pastis", price: 6000, image: "/images/crevettes-pastis.jpg", featured: true },
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
          { id: "fruits-saison", name: "Fruits de saison", nameEn: "Season fruits", price: 1500, image: "/images/fruits-saison.jpg", featured: true },
          { id: "salade-fruits", name: "Salade de fruits", nameEn: "Fruits salad", price: 1500, image: "/images/salade-de-fruits.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "plats",
    title: "Plats de Résistance",
    subtitle: "Main courses",
    note: "Servi avec une garniture au choix.",
    groups: [
      {
        label: "Plats à Base de Poulet",
        items: [
          { id: "poulet-dg", name: "Poulet DG", nameEn: "Chicken DG", price: 5500, priceLabel: "5 500 / 10 000", image: "/images/poulet-dg.jpg", featured: true },
          { id: "poulet-braise", name: "Poulet braisé", nameEn: "Grilled chicken", price: 5000, priceLabel: "5 000 / 9 000", image: "/images/poulet-braise.jpg", featured: true },
          { id: "poulet-poele", name: "Poulet poêlé", nameEn: "Fried chicken", price: 5500, priceLabel: "5 500 / 10 000" },
          { id: "poulet-sauce-forestiere", name: "Poulet sauce forestière", nameEn: "Chicken in mushroom sauce", price: 5000 },
          { id: "poulet-sauce-creme", name: "Poulet sauce crème", nameEn: "Chicken in cream sauce", price: 4500 },
          { id: "poulet-basquaise", name: "Poulet basquaise", nameEn: "Basquaise chicken", price: 3500 },
        ],
      },
      {
        label: "Pâtes & Riz",
        items: [
          { id: "spaghetti-bolognaise", name: "Spaghetti bolognaise", nameEn: "Spaghetti bolognese", price: 6500, image: "/images/spaghetti-bolognaise.jpg", featured: true },
          { id: "spaghetti-carbonara", name: "Spaghetti carbonara", nameEn: "Carbonara spaghetti", price: 6500, image: "/images/spaghetti-carbonara.jpg", featured: true },
          { id: "riz-saute-poisson-fume", name: "Riz sauté poisson fumé", nameEn: "Fried rice with smoked fish", price: 5000, image: "/images/riz-saute-poisson-fume.jpg", featured: true },
          { id: "riz-saute-viande", name: "Riz sauté viande", nameEn: "Fried rice with beef", price: 5000, image: "/images/riz-saute-viande.jpg", featured: true },
          { id: "riz-saute-poulet", name: "Riz sauté poulet", nameEn: "Fried rice with chicken", price: 5000, image: "/images/riz-saute-poulet.jpg", featured: true },
        ],
      },
      {
        label: "Spécialités au Porc",
        items: [
          { id: "porc-grille", name: "Porc grillé", nameEn: "Grilled pork", price: 3000 },
          { id: "porc-basquaise", name: "Porc basquaise", nameEn: "Basquaise pork", price: 3500 },
          { id: "porc-creole", name: "Porc créole", nameEn: "Creole pork", price: 3500 },
          { id: "porc-poele", name: "Porc poêlé", nameEn: "Fried pork", price: 3500 },
          { id: "porc-saute-ail", name: "Porc sauté à l'ail", nameEn: "Garlic sautéed pork", price: 4000 },
          { id: "roti-porc", name: "Rôti de porc", nameEn: "Roast pork", price: 3500, image: "/images/porc-roti-plantain.jpg", featured: true },
          { id: "porc-fume", name: "Porc fumé", nameEn: "Smoked pork", price: 4000 },
          { id: "porc-creme-champignons", name: "Porc crème champignons", nameEn: "Pork, cream & mushrooms", price: 5000 },
          { id: "cote-porc-dijonnaise", name: "Côte de porc à la dijonnaise", nameEn: "Dijon pork chop", price: 5000, image: "/images/cote-de-porc.jpg", featured: true },
          { id: "porc-fume-creme", name: "Porc fumé crème", nameEn: "Smoked pork in cream", price: 5500 },
          { id: "porc-fume-creme-champignons", name: "Porc fumé crème champignons", nameEn: "Smoked pork, cream & mushrooms", price: 6000 },
        ],
      },
    ],
  },
  {
    id: "grillades",
    title: "Viandes & Grillades",
    subtitle: "Meat & grill",
    groups: [
      {
        items: [
          { id: "brochettes-boeuf", name: "Brochettes de bœuf", nameEn: "Beef skewers", price: 4000, image: "/images/brochette-de-boeuf.jpg", featured: true },
          { id: "emince-boeuf", name: "Émincé de bœuf", nameEn: "Minced beef", price: 4500 },
          { id: "steak-grille", name: "Steak grillé", nameEn: "Grilled steak", price: 4500, image: "/images/steak-grille.jpg", featured: true },
          { id: "viande-creme", name: "Viande crème", nameEn: "Cream sauce with meat", price: 4500 },
          { id: "viande-basquaise", name: "Viande basquaise", nameEn: "Basquaise beef", price: 3000 },
          { id: "steak-poivre-penja", name: "Steak au poivre de Penja", nameEn: "Steak with Penja white pepper", price: 6000, image: "/images/steak-poivre-penja.jpg", featured: true },
          { id: "steak-champignons", name: "Steak aux champignons", nameEn: "Mushroom steak with cream", price: 6500, image: "/images/steak-champignon.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "specialites-africaines",
    title: "Spécialités Africaines",
    subtitle: "African specialities",
    groups: [
      {
        items: [
          { id: "tripe-fouquet", name: "Tripe Fouquet", nameEn: "Fouquet tripe", price: 3500 },
          { id: "gombo-viande-boeuf", name: "Gombo viande de bœuf", nameEn: "Okro soup with beef", price: 3500 },
          { id: "pistache-viande-boeuf", name: "Pistache viande de bœuf", nameEn: "Egusi stew with beef", price: 3500 },
          { id: "legumes-sautes-viande", name: "Légumes sautés viande", nameEn: "Stewed vegetables with beef", price: 3500 },
          { id: "legumes-pistache-poisson-fume", name: "Légumes pistache poisson fumé", nameEn: "Vegetables & egusi with smoked fish", price: 4000 },
          { id: "gombo-pistache-porc-fume", name: "Gombo pistache porc fumé", nameEn: "Okro & egusi soup with smoked pork", price: 5000 },
          { id: "gombo-morue", name: "Gombo morue", nameEn: "Okro soup with cod", price: 6500 },
          { id: "gombo-pistache-viande", name: "Gombo pistache viande", nameEn: "Okro & egusi with beef", price: 7000 },
          { id: "legumes-pistache-bar", name: "Légumes pistache bar", nameEn: "Vegetables & egusi with bar fish", price: 7000 },
          { id: "gombo-pistache-bar", name: "Gombo pistache bar", nameEn: "Okro & peanut with bar fish", price: 7000 },
          { id: "gombo-royal", name: "Gombo royal", nameEn: "Royal okro", price: 15000, image: "/images/gombo-royal.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "poissons",
    title: "Poissons & Fruits de Mer",
    subtitle: "Fish & seafood",
    groups: [
      {
        items: [
          { id: "bar-poele-barbecue", name: "Bar poêlé sauce barbecue", nameEn: "Fried bar with BBQ sauce", price: 6500, image: "/images/bar-poele.jpg", featured: true },
          { id: "bar-basquaise", name: "Bar basquaise", nameEn: "Basquaise-style bar fish", price: 6500 },
          { id: "bar-creme", name: "Bar crème", nameEn: "Bar in cream", price: 7000 },
          { id: "bar-creme-champignons", name: "Bar crème champignons", nameEn: "Bar with mushroom cream", price: 7500 },
          { id: "sole-poelee", name: "Sole poêlée", nameEn: "Fried sole with barbecue sauce", price: null, priceLabel: "Selon arrivage" },
          { id: "crevettes-sautees-ail", name: "Crevettes sautées à l'ail", nameEn: "Garlic shrimps", price: 6500 },
          { id: "crevettes-creme", name: "Crevettes crème", nameEn: "Creamy shrimps", price: 7000, image: "/images/frites-sauce-crevette.png", featured: true },
          { id: "gambas-grillees", name: "Gambas grillées", nameEn: "Grilled prawns", price: 8500 },
          { id: "gambas-ail", name: "Gambas à l'ail", nameEn: "Garlic prawns in cream", price: 10000, image: "/images/gambas-ail.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "ndole",
    title: "Ndolè",
    subtitle: "Plats traditionnels camerounais",
    note: "Ndolè Royal · pour la table",
    groups: [
      {
        items: [
          { id: "ndole-viande", name: "Ndolè viande", price: 3000 },
          { id: "ndole-viande-fumee", name: "Ndolè viande fumée", price: 3500, image: "/images/riz-ndole-miondo.jpg", featured: true },
          { id: "ndole-poisson-fume", name: "Ndolè poisson fumé", price: 3500 },
          { id: "ndole-poulet", name: "Ndolè poulet", price: 3500 },
          { id: "ndole-porc", name: "Ndolè porc", price: 3500, image: "/images/riz-ndole-plantain.jpg", featured: true },
          { id: "ndole-porc-fume", name: "Ndolè porc fumé", price: 4500, image: "/images/ndole-porc-fume.jpg", featured: true },
          { id: "ndole-morue", name: "Ndolè morue", price: 5500 },
          { id: "ndole-crevettes", name: "Ndolè crevettes", price: 5500 },
          { id: "ndole-bar", name: "Ndolè bar", price: 7500 },
          { id: "ndole-gambas", name: "Ndolè gambas", price: 9000 },
          { id: "ndole-royal", name: "Ndolè royal", nameEn: "Royal Ndolè", description: "Pour la table entière", price: 15000, image: "/images/ndole-royal.jpg", featured: true },
        ],
      },
    ],
  },
  {
    id: "garnitures",
    title: "Nos Garnitures",
    subtitle: "Our complements",
    note: "Chaque plat de résistance est servi avec une garniture au choix.",
    groups: [
      {
        items: [
          { id: "jardiniere-legumes", name: "Jardinière de légumes", nameEn: "Mixed vegetables", price: 2000, image: "/images/la-jardiniere.jpg", featured: true },
          { id: "riz-cantonais", name: "Riz cantonais", nameEn: "Fried rice", price: 2000 },
          { id: "riz-parfume", name: "Riz parfumé", nameEn: "Aromatic rice", price: 2000 },
          { id: "riz-blanc", name: "Riz blanc", nameEn: "White rice", price: 2000, image: "/images/riz-blanc.jpg", featured: true },
          { id: "riz-curry", name: "Riz curry", nameEn: "Curry rice", price: 2000 },
          { id: "miondo", name: "Miondo", nameEn: "Cassava sticks", price: 2000 },
          { id: "plantain-tape", name: "Plantain tapé", nameEn: "Smashed plantains", price: 2000 },
          { id: "plantain-frit", name: "Plantain frit", nameEn: "Fried plantain", price: 2000 },
          { id: "couscous-mais-manioc", name: "Couscous maïs et manioc", nameEn: "Cassava & corn fufu", price: 2000 },
          { id: "haricots-verts", name: "Haricots verts", nameEn: "Green beans", price: 2000 },
          { id: "frites", name: "Frites de pomme de terre", nameEn: "French fries", price: 2000 },
          { id: "supplement", name: "Supplément", nameEn: "Extra portion", price: 500 },
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
        label: "Sans Alcool",
        items: [
          { id: "eau-minerale", name: "Eau minérale", nameEn: "Mineral water", price: 1000 },
          { id: "perrier", name: "Perrier", price: 2500 },
          { id: "jus-naturels", name: "Jus naturels", description: "Ananas, goyave, passion, gingembre, cassis", price: 2000 },
          { id: "menthe-eau", name: "Menthe à l'eau", price: 1500 },
          { id: "menthe-lait", name: "Menthe au lait", price: 1500 },
          { id: "diabolo-menthe", name: "Diabolo menthe", price: 2000 },
          { id: "malta", name: "Malta", price: 1500 },
          { id: "coca-1l", name: "Coca-Cola (light · zéro) 1 L", price: 2500 },
          { id: "red-bull", name: "Red Bull", price: 2500 },
        ],
      },
      {
        label: "Boissons Chaudes",
        items: [
          { id: "the", name: "Thé", nameEn: "Tea", price: 1500 },
          { id: "cafe-expresso", name: "Café expresso", price: 1500 },
          { id: "gingembre-chaud", name: "Gingembre chaud", price: 2000 },
          { id: "grog", name: "Grog", price: 4000 },
        ],
      },
      {
        label: "Bières Locales",
        items: [
          { id: "castel", name: "Castel", price: 1500 },
          { id: "mutzig", name: "Mutzig", price: 1500 },
          { id: "kadji", name: "Kadji", price: 1500 },
          { id: "guinness", name: "Guinness", price: 1500 },
          { id: "guinness-smooth", name: "Guinness Smooth", price: 1500 },
          { id: "beaufort-light", name: "Beaufort Light", price: 1500 },
          { id: "beaufort-ordinaire", name: "Beaufort Ordinaire", price: 1500 },
          { id: "isenbeck", name: "Isenbeck", price: 1500 },
          { id: "top-brasseries", name: "Top Brasseries", price: 1500 },
          { id: "chill", name: "Chill", price: 1500 },
          { id: "ice-black-pineapple", name: "Ice Black / Pineapple", price: 1500 },
        ],
      },
      {
        label: "Premium & Importées",
        items: [
          { id: "amstel", name: "Amstel", price: 1500 },
          { id: "harp", name: "Harp", price: 1500 },
          { id: "heineken", name: "Heineken", price: 2000 },
          { id: "1664", name: "1664", price: 2000 },
          { id: "vk", name: "VK", price: 2000 },
          { id: "desperados", name: "Desperados", price: 2500 },
          { id: "corona", name: "Corona", price: 2500 },
        ],
      },
    ],
  },
  {
    id: "vins",
    title: "Nos Vins",
    subtitle: "Wine list · à la bouteille",
    groups: [
      {
        label: "Hauts Médocs",
        items: [
          { id: "chateau-barreyres", name: "Château Barreyres", price: 30000 },
          { id: "chateau-giscours", name: "Château Giscours", price: 35000 },
          { id: "edmond-de-rothschild", name: "Edmond de Rothschild", price: 30000 },
          { id: "chateau-arcins", name: "Château d'Arcins", price: 30000 },
          { id: "chateau-ferdande", name: "Château Ferdande", price: 35000 },
        ],
      },
      {
        label: "Bordeaux",
        items: [
          { id: "chateau-la-ribiere", name: "Château La Ribière", price: 20000 },
          { id: "le-beau-ruisseau", name: "Le Beau Ruisseau", price: 20000 },
          { id: "merlay", name: "Merlay", price: 25000 },
        ],
      },
      {
        label: "Blanc Moelleux",
        items: [
          { id: "calvet", name: "Calvet", price: 18000 },
          { id: "cotes-de-bergerac", name: "Côtes de Bergerac", price: 18000 },
          { id: "monbazillac", name: "Monbazillac", price: 20000 },
          { id: "santa-vieja", name: "Santa Vieja", price: 20000 },
        ],
      },
      {
        label: "Vins Rosés",
        items: [
          { id: "cabernet-anjou", name: "Cabernet d'Anjou", price: 16000 },
          { id: "rose-pamplemousse", name: "Rosé pamplemousse", price: 16000 },
        ],
      },
      {
        label: "Vins Mousseux",
        items: [
          { id: "kraemer", name: "Kraemer", price: 30000 },
          { id: "bois-royale-rouge", name: "Bois Royale rouge", price: 15000 },
          { id: "bois-royale-blanc", name: "Bois Royale blanc", price: 15000 },
          { id: "gasquet-rouge", name: "Gasquet rouge", price: 13500 },
          { id: "gasquet-blanc", name: "Gasquet blanc", price: 13500 },
        ],
      },
      {
        label: "Au Verre",
        items: [
          {
            id: "domaine-olivier-benoit",
            name: "Domaine Olivier Benoît",
            description: "Blanc & rouge moelleux — bouteille 12 000, verre 3 000 / 3 500",
            price: 12000,
            priceLabel: "12 000 (bout.) · 3 000 / 3 500 (verre)",
          },
          {
            id: "bois-royale-verre",
            name: "Bois Royale",
            description: "Rouge & blanc — bouteille 15 000, verre 4 000",
            price: 15000,
            priceLabel: "15 000 (bout.) · 4 000 (verre)",
          },
        ],
      },
    ],
  },
  {
    id: "aperitif-digestif",
    title: "Apéritif & Digestif",
    subtitle: "Verre · Bouteille",
    groups: [
      {
        label: "Whiskies",
        items: [
          { id: "jb-verre", name: "J&B (verre)", price: 2000 },
          { id: "jb-bouteille", name: "J&B (bouteille)", price: 25000, image: "/images/jb.jpg", featured: true },
          { id: "ballantines-verre", name: "Ballantine's (verre)", price: 2000 },
          { id: "ballantines-bouteille", name: "Ballantine's (bouteille)", price: 25000 },
          { id: "red-label-verre", name: "Red Label (verre)", price: 2000 },
          { id: "red-label-bouteille", name: "Red Label (bouteille)", price: 25000, image: "/images/red-label.jpg", featured: true },
          { id: "clan-campbell-verre", name: "Clan Campbell (verre)", price: 2000 },
          { id: "clan-campbell-bouteille", name: "Clan Campbell (bouteille)", price: 25000, image: "/images/clan-campbell.jpg", featured: true },
          { id: "jack-daniels-verre", name: "Jack Daniel's (verre)", price: 3000 },
          { id: "jack-daniels-bouteille", name: "Jack Daniel's (bouteille)", price: 40000 },
          { id: "jack-honey-verre", name: "Jack Honey (verre)", price: 3000 },
          { id: "jack-honey-bouteille", name: "Jack Honey (bouteille)", price: 40000 },
          { id: "black-label-verre", name: "Black Label (verre)", price: 3000 },
          { id: "black-label-bouteille", name: "Black Label (bouteille)", price: 40000 },
          { id: "chivas-verre", name: "Chivas (verre)", price: 3000 },
          { id: "chivas-bouteille", name: "Chivas (bouteille)", price: 40000 },
          { id: "chivas-18-verre", name: "Chivas 18 ans (verre)", price: 9000 },
          { id: "chivas-18-bouteille", name: "Chivas 18 ans (bouteille)", price: 90000 },
          { id: "double-black-verre", name: "Double Black (verre)", price: 5000 },
          { id: "double-black-bouteille", name: "Double Black (bouteille)", price: 65000 },
          { id: "green-label-verre", name: "Green Label (verre)", price: 7000 },
          { id: "green-label-bouteille", name: "Green Label (bouteille)", price: 75000 },
          { id: "gold-label-verre", name: "Gold Label (verre)", price: 8000 },
          { id: "gold-label-bouteille", name: "Gold Label (bouteille)", price: 80000 },
          { id: "platinum-verre", name: "Platinum (verre)", price: 9000 },
          { id: "platinum-bouteille", name: "Platinum (bouteille)", price: 90000 },
          { id: "blue-label-verre", name: "Blue Label (verre)", price: 15000 },
          { id: "blue-label-bouteille", name: "Blue Label (bouteille)", price: 200000 },
          { id: "cardhu-verre", name: "Cardhu (verre)", price: 5500 },
          { id: "cardhu-bouteille", name: "Cardhu (bouteille)", price: 65000 },
          { id: "dimple-15-verre", name: "Dimple 15 ans (verre)", price: 6500 },
          { id: "dimple-15-bouteille", name: "Dimple 15 ans (bouteille)", price: 55000 },
          { id: "explorers-collection-verre", name: "Explorer's Collection (verre)", price: 5500 },
          { id: "explorers-collection-bouteille", name: "Explorer's Collection (bouteille)", price: 65000 },
          { id: "glenfiddich-12-verre", name: "Glenfiddich 12 ans (verre)", price: 4500 },
          { id: "glenfiddich-12-bouteille", name: "Glenfiddich 12 ans (bouteille)", price: 45000 },
          { id: "glenfiddich-15-verre", name: "Glenfiddich 15 ans (verre)", price: 5500 },
          { id: "glenfiddich-15-bouteille", name: "Glenfiddich 15 ans (bouteille)", price: 65000 },
          { id: "glenfiddich-18-verre", name: "Glenfiddich 18 ans (verre)", price: 9000 },
          { id: "glenfiddich-18-bouteille", name: "Glenfiddich 18 ans (bouteille)", price: 90000 },
          { id: "monkey-shoulder-verre", name: "Monkey Shoulder (verre)", price: 5000 },
          { id: "monkey-shoulder-bouteille", name: "Monkey Shoulder (bouteille)", price: 55000 },
          { id: "hennessy-verre", name: "Hennessy (verre)", price: 5000 },
          { id: "hennessy-bouteille", name: "Hennessy (bouteille)", price: 55000 },
        ],
      },
      {
        label: "Cognacs",
        items: [
          { id: "remy-martin-verre", name: "Rémy Martin (verre)", price: 6000 },
          { id: "remy-martin-bouteille", name: "Rémy Martin (bouteille)", price: 70000 },
          { id: "cognac-xo-verre", name: "Cognac XO (verre)", price: 20000 },
          { id: "cognac-xo-bouteille", name: "Cognac XO (bouteille)", price: 250000 },
          { id: "baileys-verre", name: "Baileys (verre)", price: 2000 },
          { id: "baileys-bouteille", name: "Baileys (bouteille)", price: 25000 },
        ],
      },
      {
        label: "Rhums & Vodkas",
        items: [
          { id: "rhum-saint-james-verre", name: "Rhum Saint James (verre)", price: 2000 },
          { id: "rhum-saint-james-bouteille", name: "Rhum Saint James (bouteille)", price: 25000, image: "/images/saint-james.jpg", featured: true },
          { id: "gordons-gin-verre", name: "Gordon's Gin (verre)", price: 2000 },
          { id: "gordons-gin-bouteille", name: "Gordon's Gin (bouteille)", price: 25000 },
          { id: "vodka-bleue-verre", name: "Vodka Bleue (verre)", price: 3500 },
          { id: "vodka-bleue-bouteille", name: "Vodka Bleue (bouteille)", price: 40000 },
          { id: "vodka-absolut-verre", name: "Vodka Absolut (verre)", price: 4000 },
          { id: "vodka-absolut-bouteille", name: "Vodka Absolut (bouteille)", price: 40000 },
          { id: "cointreau-verre", name: "Cointreau (verre)", price: 5000 },
          { id: "cointreau-bouteille", name: "Cointreau (bouteille)", price: 65000 },
          { id: "grand-marnier-verre", name: "Grand Marnier (verre)", price: 5000 },
          { id: "grand-marnier-bouteille", name: "Grand Marnier (bouteille)", price: 65000 },
          { id: "belvedere-verre", name: "Belvédère (verre)", price: 5500 },
          { id: "belvedere-bouteille", name: "Belvédère (bouteille)", price: 60000 },
        ],
      },
    ],
  },
  {
    id: "champagnes",
    title: "Nos Champagnes",
    subtitle: "À la bouteille",
    groups: [
      {
        items: [
          { id: "laurent-perrier", name: "Laurent Perrier", price: 50000 },
          { id: "mumm", name: "Mumm", price: 60000 },
          { id: "moet-chandon", name: "Moët & Chandon", price: 60500 },
          { id: "veuve-clicquot", name: "Veuve Clicquot", price: 80000 },
          { id: "ruinart-brut", name: "Ruinart Brut", price: 80000 },
          { id: "ruinart-blanc", name: "Ruinart Blanc de Blancs", price: 120000 },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    title: "Nos Cocktails",
    subtitle: "Tous à 5 000 FCFA",
    groups: [
      {
        items: [
          { id: "pina-colada", name: "Piña Colada", description: "Crème coco · lait coco · ananas · crème fraîche · rhum blanc · Malibu", price: 5000, image: "/images/pina-colada.jpg", featured: true },
          { id: "caresse", name: "Caresse", description: "Jus d'orange · jus d'ananas · jus de citron · sucre de canne · sirop grenadine", price: 5000, image: "/images/caresse-antillaise.jpg", featured: true },
          { id: "blue-lagoon", name: "Blue Lagoon", description: "Vodka · blue curaçao · citron · limonade", price: 5000, image: "/images/blue-lagoon.jpg", featured: true },
          { id: "colada-fraise", name: "Colada Fraise", description: "Lait coco · crème coco · sucre de canne · sirop fraise", price: 5000, image: "/images/colada-fraise.jpg", featured: true },
          { id: "mojito", name: "Mojito", description: "Rhum blanc · sucre · soda · menthe", price: 5000, image: "/images/mojito.jpg", featured: true },
          { id: "cuba-libre", name: "Cuba Libre", description: "Rhum brun · jus de citron · coca", price: 5000, image: "/images/cuba-libre.jpg", featured: true },
          { id: "tequila-sunrise", name: "Tequila sunrise", price: 5000, image: "/images/tequila-sunrise.jpg", featured: true },
          { id: "gin-fizz", name: "Gin fizz", price: 5000, image: "/images/gin-fizz.jpg", featured: true },
          { id: "americano", name: "Americano", price: 5000, image: "/images/americano.jpg", featured: true },
          { id: "tequila-paf", name: "Tequila paf", price: 5000, image: "/images/tequila-paf.jpg", featured: true },
          { id: "diabolo", name: "Diabolo", price: 2500, image: "/images/diabolo.jpg", featured: true },
          { id: "menthe-lait-cocktail", name: "Menthe lait", price: 2000, image: "/images/menthe-lait.jpg", featured: true },
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
