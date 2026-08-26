# Le Fouquet — Site Web

Site vitrine du restaurant **Le Fouquet** (Akwa, Douala), construit avec React + TypeScript + Tailwind CSS (client) et Node.js/Express (API de réservation).

## Structure

```
client/   → App React (Vite + TypeScript + Tailwind, shadcn-style /components/ui)
server/   → API Express (reçoit les réservations, les stocke dans server/data/reservations.json)
```

## Démarrage

```bash
npm run install:all   # installe les dépendances du client et du serveur
npm run dev            # lance le client (http://localhost:5173) et l'API (http://localhost:5000) ensemble
```

Le client proxifie automatiquement `/api/*` vers le serveur Express en développement (voir `client/vite.config.ts`).

## Build de production

```bash
npm run build           # build le client dans client/dist
cd server && npm start  # lance l'API en production
```

Servez `client/dist` avec votre hébergeur statique préféré (Netlify, Vercel, Nginx…) et pointez `/api` vers votre instance du serveur Express.

⚠️ Le site utilise le routage côté client (React Router) : configurez votre hébergeur pour rediriger toutes les routes inconnues vers `index.html` (SPA fallback), sinon `/menu` renverra une 404 en rechargement direct.

## Pages

- **`/`** — Accueil : hero, avis clients, à propos, aperçu du menu, galerie, contact.
- **`/menu`** — Carte complète façon catalogue (recherche, catégories, sélection de plats) + formulaire de réservation qui inclut la sélection en cours.

## Contenu

- **Avis clients** : sélection de 12 avis authentiques du restaurant (Google, TripAdvisor, Pages Jaunes) dans `client/src/data/reviews.ts`.
- **Menu complet** : toute la carte (entrées, plats, poissons, garnitures, ndolè & porc, desserts, boissons, cocktails, champagnes), transcrite du PDF officiel, dans `client/src/data/menu.ts`.
- **Menu mis en avant (accueil)** : `client/src/data/restaurant.ts` + le PDF complet dans `client/public/menu-le-fouquet.pdf`.
- **Photos** : `client/public/images/`.
- **Réservation** : le formulaire (`MenuReservation.tsx`, page `/menu`) envoie un `POST /api/reservation` avec, si l'utilisateur a composé une sélection, un champ `preOrder` (plats, quantités, total) — stocké côté serveur dans `server/data/reservations.json`.

## Personnalisation rapide

- Couleurs (or, bordeaux, crème) : `client/tailwind.config.js`
- Coordonnées, horaires, lien Google Maps : `client/src/data/restaurant.ts`
- Avis mis en avant : `client/src/data/reviews.ts`
- Carte complète (plats, prix, catégories) : `client/src/data/menu.ts`
