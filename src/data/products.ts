import moringa from "@/assets/product-moringa.jpg";
import baobab from "@/assets/product-baobab.jpg";
import hibiscus from "@/assets/product-hibiscus.jpg";
import dattier from "@/assets/product-dattier.jpg";
import toloucouna from "@/assets/product-toloucouna.jpg";

import ingMoringa from "@/assets/ing-moringa.jpg";
import ingBaobab from "@/assets/ing-baobab.jpg";
import ingHibiscus from "@/assets/ing-hibiscus.jpg";
import ingDattier from "@/assets/ing-dattier.jpg";
import ingToloucouna from "@/assets/ing-toloucouna.jpg";
import gammeGelee from "@/assets/gamme-gelee.png.asset.json";
import gammeCheveux from "@/assets/gamme-cheveux.png.asset.json";
import serumVisage from "@/assets/serum-visage.png.asset.json";
import gelsMoussant from "@/assets/gels-moussant.png.asset.json";
import karite from "@/assets/karite.png.asset.json";
import soinsDouchesAll from "@/assets/soins-douches-all.png.asset.json";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  baseline: string;
  category: "Visage" | "Corps" | "Cheveux";
  price: number;
  bottle: string;
  bottleScene: string;
  ingredient: string;
  ingredientName: string;
  description: string;
  benefits: { title: string; text: string }[];
  ritual: { step: string; title: string; text: string }[];
  actifs: string[];
  inci: string;
  conseils: string;
  accent: string;
  keyIngredients: { name: string; latin: string; image: string; benefits: string[]; articleSlug: string }[];
};

const base = {
  conseils:
    "Appliquez quelques gouttes matin et soir sur peau propre. Chauffez le produit entre vos paumes puis massez délicatement le visage, le cou et le décolleté en mouvements ascendants.",
  inci:
    "Aqua, Glycerin, Caprylic/Capric Triglyceride, Squalane, Tocopherol, Sodium Hyaluronate, Citrus Aurantium Dulcis Oil, Citral.",
  ritual: [
    { step: "01", title: "Préparer", text: "Sur peau nettoyée et tonifiée, déposez 3 à 4 gouttes au creux de la main." },
    { step: "02", title: "Activer", text: "Réchauffez la gelée entre vos paumes pour libérer ses actifs et son parfum." },
    { step: "03", title: "Sublimer", text: "Massez le visage en mouvements ascendants. Laissez la peau respirer une minute." },
  ],
};

export const products: Product[] = [
  {
    slug: "moringa",
    name: "Moringa",
    tagline: "Gelée d'huile purifiante",
    baseline: "Purifiant & revitalisant",
    category: "Visage",
    price: 29.9,
    bottle: moringa,
    bottleScene: ingMoringa,
    ingredient: ingMoringa,
    ingredientName: "Moringa Oleifera",
    description:
      "Riche en antioxydants et en vitamines A, C et E, la gelée Moringa protège la peau des agressions extérieures et revitalise les tissus en profondeur. Sa texture fondante laisse un fini lumineux, jamais gras.",
    benefits: [
      { title: "Protège", text: "Antioxydants qui neutralisent les radicaux libres." },
      { title: "Revitalise", text: "Tonifie la peau et lui redonne de l'éclat." },
      { title: "Purifie", text: "Aide à clarifier le teint sans agresser." },
    ],
    actifs: ["Huile de Moringa Oleifera", "Vitamine E naturelle", "Squalane végétal"],
    accent: "oklch(0.45 0.09 145)",
    keyIngredients: [
      { name: "Moringa", latin: "Moringa Oleifera", image: ingMoringa, benefits: ["Antioxydant puissant", "Riche en vitamines A, C, E", "Revitalise la peau"], articleSlug: "moringa-arbre-de-vie" },
      { name: "Squalane végétal", latin: "Olea Europaea", image: ingDattier, benefits: ["Hydrate en profondeur", "Texture non grasse", "Compatible peaux sensibles"], articleSlug: "squalane-secret-hydratation" },
    ],
    ...base,
  },
  {
    slug: "baobab",
    name: "Baobab",
    tagline: "Gelée d'huile nourrissante",
    baseline: "Nourrissant & régénérant",
    category: "Corps",
    price: 29.9,
    bottle: baobab,
    bottleScene: ingBaobab,
    ingredient: ingBaobab,
    ingredientName: "Adansonia Digitata",
    description:
      "Source d'acides gras essentiels (oméga 3, 6 et 9), l'huile de baobab nourrit intensément les peaux sèches et régénère les tissus. Une formule fondante pour une peau visiblement plus souple.",
    benefits: [
      { title: "Nourrit", text: "Apport profond en acides gras essentiels." },
      { title: "Régénère", text: "Soutient le renouvellement cellulaire." },
      { title: "Assouplit", text: "Restaure le confort et la souplesse." },
    ],
    actifs: ["Huile de Baobab vierge", "Acides gras oméga 3-6-9", "Vitamines A & D"],
    accent: "oklch(0.55 0.12 60)",
    keyIngredients: [
      { name: "Baobab", latin: "Adansonia Digitata", image: ingBaobab, benefits: ["Oméga 3-6-9", "Régénère les tissus", "Restaure la souplesse"], articleSlug: "baobab-arbre-millenaire" },
      { name: "Vitamine E", latin: "Tocopherol", image: ingMoringa, benefits: ["Antioxydant", "Protège la barrière cutanée", "Préserve la jeunesse"], articleSlug: "vitamine-e-bouclier" },
    ],
    ...base,
  },
  {
    slug: "hibiscus",
    name: "Hibiscus",
    tagline: "Gelée d'huile éclat",
    baseline: "Éclat & tonifiant",
    category: "Visage",
    price: 29.9,
    bottle: hibiscus,
    bottleScene: ingHibiscus,
    ingredient: ingHibiscus,
    ingredientName: "Hibiscus Sabdariffa",
    description:
      "Illumine le teint et favorise l'élasticité de la peau. Surnommé « botox végétal », l'hibiscus est riche en AHA naturels qui exfolient en douceur pour révéler un grain de peau lissé.",
    benefits: [
      { title: "Illumine", text: "Révèle un teint frais et lumineux." },
      { title: "Tonifie", text: "Raffermit et redessine les contours." },
      { title: "Lisse", text: "Affine le grain de peau jour après jour." },
    ],
    actifs: ["Extrait d'Hibiscus", "AHA naturels", "Polyphénols"],
    accent: "oklch(0.5 0.18 20)",
    keyIngredients: [
      { name: "Hibiscus", latin: "Hibiscus Sabdariffa", image: ingHibiscus, benefits: ["AHA naturels", "Lisse le grain de peau", "Botox végétal"], articleSlug: "hibiscus-botox-vegetal" },
      { name: "Polyphénols", latin: "Phenolic compounds", image: ingDattier, benefits: ["Anti-oxydant", "Protège du stress oxydatif", "Soutient l'éclat"], articleSlug: "polyphenols-bouclier-anti-age" },
    ],
    ...base,
  },
  {
    slug: "dattier-du-desert",
    name: "Dattier du désert",
    tagline: "Gelée d'huile réparatrice",
    baseline: "Réparateur & protecteur",
    category: "Cheveux",
    price: 29.9,
    bottle: dattier,
    bottleScene: ingDattier,
    ingredient: ingDattier,
    ingredientName: "Balanites Aegyptiaca",
    description:
      "Riche en acides gras essentiels, idéal pour les peaux sèches et fragilisées. Le dattier du désert répare le film hydrolipidique et protège la peau des agressions climatiques.",
    benefits: [
      { title: "Répare", text: "Restaure les peaux fragilisées." },
      { title: "Protège", text: "Renforce la barrière cutanée." },
      { title: "Apaise", text: "Calme les inconforts et tiraillements." },
    ],
    actifs: ["Huile de dattier du désert", "Acides gras essentiels", "Stérols végétaux"],
    accent: "oklch(0.55 0.14 65)",
    keyIngredients: [
      { name: "Dattier du désert", latin: "Balanites Aegyptiaca", image: ingDattier, benefits: ["Répare le film hydrolipidique", "Protège des agressions", "Apaise"], articleSlug: "dattier-tresor-du-desert" },
      { name: "Stérols végétaux", latin: "Phytostérols", image: ingBaobab, benefits: ["Renforce la barrière cutanée", "Action anti-inflammatoire", "Confort durable"], articleSlug: "phytosterols-barriere-cutanee" },
    ],
    ...base,
  },
  {
    slug: "toloucouna",
    name: "Toloucouna",
    tagline: "Gelée d'huile apaisante",
    baseline: "Apaisant & adoucissant",
    category: "Corps",
    price: 29.9,
    bottle: toloucouna,
    bottleScene: ingToloucouna,
    ingredient: ingToloucouna,
    ingredientName: "Carapa Procera",
    description:
      "Apaise les irritations et laisse la peau douce et confortable. Une formule reconnue pour son action apaisante sur les peaux sensibles et réactives.",
    benefits: [
      { title: "Apaise", text: "Calme les rougeurs et inconforts." },
      { title: "Adoucit", text: "Laisse un fini soyeux et confortable." },
      { title: "Hydrate", text: "Préserve l'hydratation au long cours." },
    ],
    actifs: ["Huile de Toloucouna", "Acides gras essentiels", "Antioxydants naturels"],
    accent: "oklch(0.45 0.15 25)",
    keyIngredients: [
      { name: "Toloucouna", latin: "Carapa Procera", image: ingToloucouna, benefits: ["Apaise les irritations", "Reconnu pour les peaux sensibles", "Adoucit"], articleSlug: "toloucouna-apaisant-naturel" },
      { name: "Acides gras essentiels", latin: "EFA", image: ingMoringa, benefits: ["Nourrit en profondeur", "Restaure la souplesse", "Confort longue durée"], articleSlug: "acides-gras-essentiels-peau" },
    ],
    ...base,
  },
  {
    slug: "serum-baobab-papaye",
    name: "Baobab & Papaye",
    tagline: "Sérum visage",
    baseline: "Peaux grasses & éclat net",
    category: "Visage",
    price: 34.9,
    bottle: serumVisage.url,
    bottleScene: serumVisage.url,
    ingredient: serumVisage.url,
    ingredientName: "Baobab & Papaya",
    description:
      "Un sérum visage léger pensé pour les peaux grasses, qui associe la nutrition du baobab à la fraîcheur fruitée de la papaye pour lisser, équilibrer et illuminer.",
    benefits: [
      { title: "Équilibre", text: "Aide à réguler l'excès de sébum sans dessécher." },
      { title: "Lisse", text: "Affine visiblement le grain de peau." },
      { title: "Réveille", text: "Apporte un éclat net et reposé au teint." },
    ],
    actifs: ["Huile de Baobab", "Extrait de Papaye", "Complexe botanique équilibrant"],
    accent: "oklch(0.72 0.14 55)",
    keyIngredients: [
      { name: "Papaye", latin: "Carica Papaya", image: serumVisage.url, benefits: ["Éclat naturel", "Action lissante", "Sensibilité respectée"], articleSlug: "rituel-soir-amyrel" },
      { name: "Baobab", latin: "Adansonia Digitata", image: ingBaobab, benefits: ["Nutrition ciblée", "Souplesse retrouvée", "Confort durable"], articleSlug: "baobab-arbre-millenaire" },
    ],
    ...base,
  },
  {
    slug: "marula-nettoyant-visage",
    name: "Marula Nettoyant",
    tagline: "Nettoyant visage",
    baseline: "Nettoie & apaise",
    category: "Visage",
    price: 24.9,
    bottle: gelsMoussant.url,
    bottleScene: gelsMoussant.url,
    ingredient: gelsMoussant.url,
    ingredientName: "Marula",
    description:
      "Un gel nettoyant visage à la marula qui élimine les impuretés en douceur tout en respectant l'équilibre naturel de la peau.",
    benefits: [
      { title: "Nettoie", text: "Retire impuretés et pollution du quotidien." },
      { title: "Apaise", text: "Laisse la peau confortable après rinçage." },
      { title: "Prépare", text: "Prépare idéalement la peau aux soins suivants." },
    ],
    actifs: ["Huile de Marula", "Base lavante douce", "Actifs apaisants"],
    accent: "oklch(0.71 0.09 170)",
    keyIngredients: [
      { name: "Marula", latin: "Sclerocarya Birrea", image: gelsMoussant.url, benefits: ["Douceur", "Confort", "Nettoyage respectueux"], articleSlug: "rituel-soir-amyrel" },
      { name: "Actifs lavants doux", latin: "Gentle surfactants", image: gelsMoussant.url, benefits: ["Mousse légère", "Pas d'effet décapant", "Usage quotidien"], articleSlug: "rituel-soir-amyrel" },
    ],
    ...base,
  },
  {
    slug: "mousse-nettoyante-marula",
    name: "Mousse Marula",
    tagline: "Mousse nettoyante",
    baseline: "Mousse fine & fraîcheur",
    category: "Visage",
    price: 24.9,
    bottle: gelsMoussant.url,
    bottleScene: gelsMoussant.url,
    ingredient: gelsMoussant.url,
    ingredientName: "Marula",
    description:
      "Une mousse nettoyante aérienne qui enveloppe la peau d'une sensation de pureté douce et sensorielle.",
    benefits: [
      { title: "Purifie", text: "Élimine délicatement l'excès de sébum." },
      { title: "Rafraîchit", text: "Laisse une sensation de peau nette instantanée." },
      { title: "Adoucit", text: "Respecte les peaux normales à sensibles." },
    ],
    actifs: ["Marula", "Mousse végétale", "Agents hydratants"],
    accent: "oklch(0.69 0.08 175)",
    keyIngredients: [
      { name: "Marula", latin: "Sclerocarya Birrea", image: gelsMoussant.url, benefits: ["Confort", "Souplesse", "Sensation soyeuse"], articleSlug: "rituel-soir-amyrel" },
      { name: "Agents hydratants", latin: "Humectants", image: gelsMoussant.url, benefits: ["Évite les tiraillements", "Peau douce", "Nettoyage équilibré"], articleSlug: "rituel-soir-amyrel" },
    ],
    ...base,
  },
  {
    slug: "gel-douche-karite",
    name: "Karité Douche",
    tagline: "Soin douche nourrissant",
    baseline: "Nourrissant & confort",
    category: "Corps",
    price: 27.9,
    bottle: karite.url,
    bottleScene: karite.url,
    ingredient: karite.url,
    ingredientName: "Shea Butter",
    description:
      "Un soin douche nourrissant enrichi au karité pour nettoyer sans dessécher et envelopper la peau d'un confort durable.",
    benefits: [
      { title: "Nourrit", text: "Préserve le confort dès la douche." },
      { title: "Assouplit", text: "Laisse la peau souple et satinée." },
      { title: "Protège", text: "Aide à renforcer la barrière cutanée." },
    ],
    actifs: ["Beurre de Karité", "Agents relipidants", "Base nettoyante douce"],
    accent: "oklch(0.78 0.16 65)",
    keyIngredients: [
      { name: "Karité", latin: "Butyrospermum Parkii", image: karite.url, benefits: ["Nutrition intense", "Souplesse", "Protection"], articleSlug: "rituel-soir-amyrel" },
      { name: "Agents relipidants", latin: "Lipid boosters", image: karite.url, benefits: ["Confort immédiat", "Peau nourrie", "Fini doux"], articleSlug: "rituel-soir-amyrel" },
    ],
    ...base,
  },
  {
    slug: "baume-corps-karite",
    name: "Baume Karité",
    tagline: "Baume fondant corps",
    baseline: "Fondant & réparateur",
    category: "Corps",
    price: 31.9,
    bottle: karite.url,
    bottleScene: karite.url,
    ingredient: karite.url,
    ingredientName: "Shea Butter",
    description:
      "Un baume corps généreux et fondant qui nourrit intensément les zones sèches et laisse un voile de douceur sur la peau.",
    benefits: [
      { title: "Répare", text: "Apaise les sécheresses marquées." },
      { title: "Enveloppe", text: "Texture baume riche sans lourdeur." },
      { title: "Sublime", text: "La peau paraît plus lisse et plus uniforme." },
    ],
    actifs: ["Beurre de Karité", "Huiles végétales", "Complexe fondant"],
    accent: "oklch(0.79 0.17 67)",
    keyIngredients: [
      { name: "Karité", latin: "Butyrospermum Parkii", image: karite.url, benefits: ["Nutrition", "Réparation", "Barrière protectrice"], articleSlug: "rituel-soir-amyrel" },
      { name: "Huiles végétales", latin: "Botanical oils", image: karite.url, benefits: ["Souplesse", "Éclat", "Confort longue durée"], articleSlug: "rituel-soir-amyrel" },
    ],
    ...base,
  },
  {
    slug: "shampoing-dattier-du-desert",
    name: "Shampoing Dattier",
    tagline: "Shampoing démêlant 2 en 1",
    baseline: "Cheveux doux & disciplinés",
    category: "Cheveux",
    price: 28.9,
    bottle: gammeCheveux.url,
    bottleScene: gammeCheveux.url,
    ingredient: gammeCheveux.url,
    ingredientName: "Desert Date",
    description:
      "Un shampoing démêlant 2 en 1 au dattier du désert qui nettoie la fibre, facilite le coiffage et laisse les cheveux souples et lumineux.",
    benefits: [
      { title: "Démêle", text: "Facilite le passage des doigts et du peigne." },
      { title: "Nettoie", text: "Purifie le cuir chevelu sans l'agresser." },
      { title: "Lisse", text: "Réduit les frisottis et améliore la douceur." },
    ],
    actifs: ["Dattier du désert", "Agents gainants", "Base lavante douce"],
    accent: "oklch(0.76 0.14 70)",
    keyIngredients: [
      { name: "Dattier du désert", latin: "Balanites Aegyptiaca", image: gammeCheveux.url, benefits: ["Nutrition capillaire", "Souplesse", "Brillance"], articleSlug: "dattier-tresor-du-desert" },
      { name: "Agents gainants", latin: "Conditioning complex", image: gammeCheveux.url, benefits: ["Démêlage", "Cheveu discipliné", "Toucher doux"], articleSlug: "rituel-soir-amyrel" },
    ],
    ...base,
  },
  {
    slug: "soins-douche-collection",
    name: "Collection Douche",
    tagline: "Les soins douche Amyrel",
    baseline: "Rituel corps complet",
    category: "Corps",
    price: 39.9,
    bottle: soinsDouchesAll.url,
    bottleScene: soinsDouchesAll.url,
    ingredient: soinsDouchesAll.url,
    ingredientName: "Collection corps",
    description:
      "Une collection de soins douche inspirée des plantes africaines : nourrissants, apaisants, purifiants et relaxants, pour transformer la douche en rituel.",
    benefits: [
      { title: "Varie", text: "Une réponse pour chaque humeur et chaque besoin peau." },
      { title: "Embellit", text: "Des textures sensorielles et une signature Amyrel cohérente." },
      { title: "Invite", text: "Parfaite pour découvrir toute la gamme corps." },
    ],
    actifs: ["Karité", "Neem", "Moringa", "Baobab", "Bissap", "Toloucouna"],
    accent: "oklch(0.68 0.1 80)",
    keyIngredients: [
      { name: "Neem", latin: "Azadirachta Indica", image: soinsDouchesAll.url, benefits: ["Purifie", "Équilibre", "Fraîcheur"], articleSlug: "rituel-soir-amyrel" },
      { name: "Bissap", latin: "Hibiscus Sabdariffa", image: soinsDouchesAll.url, benefits: ["Douceur", "Éclat", "Tonus"], articleSlug: "hibiscus-botox-vegetal" },
    ],
    ...base,
  },
  {
    slug: "collection-gelees",
    name: "Les Gelées Amyrel",
    tagline: "Collection signature",
    baseline: "L'iconique rituel Amyrel",
    category: "Visage",
    price: 42.9,
    bottle: gammeGelee.url,
    bottleScene: gammeGelee.url,
    ingredient: gammeGelee.url,
    ingredientName: "Gelées d'huile",
    description:
      "La collection iconique Amyrel réunie dans une mise en scène signature : moringa, baobab, hibiscus, toloucouna et dattier du désert.",
    benefits: [
      { title: "Découvre", text: "Permet de visualiser toute l'univers gelée d'huile." },
      { title: "Compare", text: "Aide à choisir l'actif le plus adapté à son besoin." },
      { title: "Rayonne", text: "Met en avant l'esthétique propre à Amyrel." },
    ],
    actifs: ["Moringa", "Baobab", "Hibiscus", "Toloucouna", "Dattier du désert"],
    accent: "oklch(0.68 0.08 92)",
    keyIngredients: [
      { name: "Collection botanique", latin: "Signature Amyrel", image: gammeGelee.url, benefits: ["Vision d'ensemble", "Choix facilité", "Univers premium"], articleSlug: "rituel-soir-amyrel" },
      { name: "Actifs africains", latin: "Botanical actives", image: gammeGelee.url, benefits: ["Naturalité", "Identité locale", "Beauté clean"], articleSlug: "moringa-arbre-de-vie" },
    ],
    ...base,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const categories = ["Visage", "Corps", "Cheveux"] as const;
export type Category = (typeof categories)[number];