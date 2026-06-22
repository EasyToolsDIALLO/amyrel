import ingMoringa from "@/assets/ing-moringa.jpg";
import ingBaobab from "@/assets/ing-baobab.jpg";
import ingHibiscus from "@/assets/ing-hibiscus.jpg";
import ingDattier from "@/assets/ing-dattier.jpg";
import ingToloucouna from "@/assets/ing-toloucouna.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: "Ingrédient" | "Rituel" | "Engagement";
  readingTime: string;
  content: string[];
  productSlug?: string;
};

export const articles: Article[] = [
  {
    slug: "moringa-arbre-de-vie",
    title: "Le Moringa, l'arbre de vie",
    excerpt: "Surnommé l'arbre miracle, le moringa concentre une richesse nutritive rare au cœur de ses graines.",
    image: ingMoringa,
    category: "Ingrédient",
    readingTime: "5 min",
    productSlug: "moringa",
    content: [
      "Originaire d'Afrique de l'Ouest, le moringa est cultivé depuis des millénaires pour ses vertus nutritionnelles et cosmétiques.",
      "Son huile, extraite à froid de ses graines, est exceptionnellement riche en antioxydants, en vitamines A, C et E et en acides gras essentiels.",
      "Dans nos gelées d'huile, le moringa agit comme un véritable bouclier contre les agressions extérieures : pollution, UV, stress oxydatif.",
      "Ses propriétés purifiantes en font un actif idéal pour les peaux mixtes à grasses, en quête de fraîcheur et d'équilibre.",
    ],
  },
  {
    slug: "baobab-arbre-millenaire",
    title: "Baobab, l'arbre millénaire au cœur tendre",
    excerpt: "Géant des savanes africaines, le baobab cache dans ses fruits une huile précieuse aux mille vertus.",
    image: ingBaobab,
    category: "Ingrédient",
    readingTime: "4 min",
    productSlug: "baobab",
    content: [
      "Le baobab peut vivre plus de 2000 ans. Son fruit, le pain de singe, donne une huile végétale d'une richesse nutritive remarquable.",
      "Composée à plus de 70% d'acides gras insaturés (oméga 3, 6 et 9), elle nourrit en profondeur les peaux les plus sèches.",
      "Idéale pour les peaux matures, l'huile de baobab favorise la régénération cellulaire et restaure le confort cutané.",
    ],
  },
  {
    slug: "hibiscus-botox-vegetal",
    title: "Hibiscus, le botox végétal d'Afrique",
    excerpt: "Ses AHA naturels lissent le grain de peau et révèlent un teint lumineux.",
    image: ingHibiscus,
    category: "Ingrédient",
    readingTime: "6 min",
    productSlug: "hibiscus",
    content: [
      "L'hibiscus sabdariffa, ou bissap, est riche en acides organiques qui agissent comme un peeling enzymatique très doux.",
      "Ses pigments anthocyanes apportent éclat et tonicité au teint.",
      "À utiliser dans une routine du soir pour réveiller la peau au matin.",
    ],
  },
  {
    slug: "dattier-tresor-du-desert",
    title: "Dattier du désert, le trésor des dunes",
    excerpt: "Connu sous le nom de Balanites, il résiste aux conditions les plus extrêmes — et il protège votre peau de la même manière.",
    image: ingDattier,
    category: "Ingrédient",
    readingTime: "5 min",
    productSlug: "dattier-du-desert",
    content: [
      "Le Balanites aegyptiaca pousse au cœur du Sahel. Son huile précieuse répare le film hydrolipidique et protège la peau du froid sec.",
      "Riche en stérols et en acides gras essentiels, c'est l'alliée des peaux fragilisées par les changements climatiques.",
    ],
  },
  {
    slug: "toloucouna-apaisant-naturel",
    title: "Toloucouna, l'huile qui apaise",
    excerpt: "Reconnue depuis des générations pour son action apaisante sur les peaux les plus sensibles.",
    image: ingToloucouna,
    category: "Ingrédient",
    readingTime: "4 min",
    productSlug: "toloucouna",
    content: [
      "L'huile de Carapa procera, ou toloucouna, est issue d'un arbre des forêts d'Afrique de l'Ouest.",
      "Riche en acides gras essentiels et en antioxydants, elle calme les rougeurs et adoucit la peau en profondeur.",
    ],
  },
  {
    slug: "rituel-soir-amyrel",
    title: "Le rituel beauté du soir Amyrel",
    excerpt: "Trois gestes simples pour transformer votre peau pendant la nuit.",
    image: ingHibiscus,
    category: "Rituel",
    readingTime: "3 min",
    content: [
      "Démaquillez avec une huile végétale chauffée entre les mains.",
      "Appliquez votre gelée d'huile en mouvements ascendants, en partant du décolleté vers le visage.",
      "Terminez par 30 secondes de respiration consciente pour ancrer le geste dans la routine.",
    ],
  },
  {
    slug: "squalane-secret-hydratation",
    title: "Squalane végétal, le secret d'une hydratation légère",
    excerpt: "Un actif apprécié pour sa compatibilité avec toutes les peaux et son toucher soyeux sans fini gras.",
    image: ingDattier,
    category: "Ingrédient",
    readingTime: "4 min",
    content: [
      "Le squalane végétal mime les lipides naturellement présents dans la peau, ce qui en fait un actif biomimétique de choix.",
      "Il adoucit, hydrate et renforce le confort cutané sans jamais alourdir les textures.",
    ],
  },
  {
    slug: "vitamine-e-bouclier",
    title: "Vitamine E, le bouclier antioxydant",
    excerpt: "Une alliée majeure pour protéger les formules et défendre la peau face au stress oxydatif.",
    image: ingMoringa,
    category: "Ingrédient",
    readingTime: "3 min",
    content: [
      "La vitamine E est reconnue pour son rôle protecteur contre les radicaux libres.",
      "Elle soutient la barrière cutanée et participe à préserver la souplesse et l'éclat de la peau.",
    ],
  },
  {
    slug: "polyphenols-bouclier-anti-age",
    title: "Polyphénols, le bouclier éclat anti-âge",
    excerpt: "Ces composés végétaux participent à protéger la peau et à préserver sa luminosité au quotidien.",
    image: ingHibiscus,
    category: "Ingrédient",
    readingTime: "4 min",
    content: [
      "Présents dans de nombreuses plantes, les polyphénols sont précieux pour limiter l'impact du stress oxydatif.",
      "Ils accompagnent les routines éclat en aidant la peau à conserver une apparence fraîche et uniforme.",
    ],
  },
  {
    slug: "phytosterols-barriere-cutanee",
    title: "Phytostérols, soutien naturel de la barrière cutanée",
    excerpt: "Ils renforcent le confort de la peau et accompagnent les rituels destinés aux peaux fragilisées.",
    image: ingBaobab,
    category: "Ingrédient",
    readingTime: "4 min",
    content: [
      "Les phytostérols végétaux sont appréciés pour leur action apaisante et protectrice.",
      "Ils contribuent à réduire l'inconfort et à soutenir une barrière cutanée plus résistante.",
    ],
  },
  {
    slug: "acides-gras-essentiels-peau",
    title: "Pourquoi les acides gras essentiels sont si précieux pour la peau",
    excerpt: "Oméga 3, 6 et 9 jouent un rôle clé dans la nutrition, la souplesse et le confort durable.",
    image: ingToloucouna,
    category: "Ingrédient",
    readingTime: "5 min",
    content: [
      "Les acides gras essentiels sont indispensables au bon équilibre du film hydrolipidique.",
      "Ils apportent nutrition, élasticité et confort aux peaux sèches, sensibles ou en manque de souplesse.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);