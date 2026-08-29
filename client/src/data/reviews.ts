export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
}

// Curated from Le Fouquet's genuine public reviews (Google, TripAdvisor, Pages Jaunes).
export const reviews: Review[] = [
  {
    name: "Nathalie Pascale T.",
    role: "Cliente régulière",
    rating: 5,
    text: "Toujours une expérience formidable pour mon palais. Je ne les recommanderai jamais assez.",
  },
  {
    name: "Leslie Thomas M.",
    role: "Visiteuse — premier séjour au Cameroun",
    rating: 5,
    text: "First time in Cameroon and must say the food here is excellent. We enjoyed every dish. Will definitely be back.",
  },
  {
    name: "Jonas Obi",
    role: "Habitué",
    rating: 5,
    text: "Being a regular here, its taste lets you know that anytime you take a leave and return, it's like yesterday.",
  },
  {
    name: "Amungwa Azeh",
    role: "Dîner en amoureux",
    rating: 5,
    text: "Food was served and it was great. It's neat and quiet — great for a romantic dinner.",
  },
  {
    name: "Blaise B. Mengnjoh",
    role: "Client",
    rating: 5,
    text: "The best restaurant for you. Provides you with a great variety of options, all delicious.",
  },
  {
    name: "Aude N.",
    role: "Avis Google",
    rating: 5,
    text: "Parfait 👍🏾 Service impeccable. J'ai pris une sauce aux champignons, elle était magnifique 🤩.",
  },
  {
    name: "wtchate",
    role: "Boston, USA — via TripAdvisor",
    rating: 5,
    text: "The food here is just excellent, with a focus on local fusion cuisine. Customer service, food quality and price make Le Fouquet the best dining experience in Douala in my opinion.",
  },
  {
    name: "Glenn Faison",
    role: "Client",
    rating: 4,
    text: "Expect top quality food and value for your money. Price ranges are moderate here.",
  },
  {
    name: "Tobechukwu A. Okeke",
    role: "Sortie entre amis",
    rating: 4,
    text: "Warm ambience and busy in the evenings. A really nice place to be.",
  },
  {
    name: "Asah Frank",
    role: "Client",
    rating: 4,
    text: "Food is good — a real crowd favourite. Worth the visit for the taste alone.",
  },
  {
    name: "Roely",
    role: "Habituée — via TripAdvisor",
    rating: 4,
    text: "Well located and generous with what's on the plate. Various dishes on the menu, all yummy — you'll be more than satisfied with the taste.",
  },
  {
    name: "Achu Daisy",
    role: "Cliente",
    rating: 4,
    text: "Great food, authentic flavours — one of Akwa's classic tables.",
  },
];

export const googleRating = 3.7;
export const totalGoogleReviews = 1135;
