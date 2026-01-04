export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'entrees' | 'plats' | 'desserts' | 'boissons'
  image: string
  allergens?: string[]
  isSignature?: boolean
  isPopular?: boolean
  isVegetarian?: boolean
}

export const menuData: MenuItem[] = [
  // ENTRÉES
  {
    id: 'foie-gras-figues',
    name: 'Foie Gras Poêlé aux Figues',
    description: 'Foie gras de canard poêlé, compotée de figues fraîches et pain d\'épices maison, réduction de porto millésimé',
    price: 38,
    category: 'entrees',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ef725cb2-29ac-4ddc-8e1f-bd7ccc555536.png',
    allergens: ['Gluten', 'Sulfites'],
    isSignature: true
  },
  {
    id: 'escargots-bourgogne',
    name: 'Escargots de Bourgogne',
    description: 'Douzaine d\'escargots de Bourgogne, beurre persillé à l\'ail et aux fines herbes, croûtons dorés',
    price: 24,
    category: 'entrees',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f321775a-6105-4bad-b486-b00e9f3847c2.png',
    allergens: ['Gluten', 'Mollusques'],
    isPopular: true
  },
  {
    id: 'veloute-champignons',
    name: 'Velouté de Champignons des Bois',
    description: 'Velouté onctueux aux cèpes et girolles, crème de truffe, croûtons aux herbes fraîches',
    price: 18,
    category: 'entrees',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/900cda69-1b68-403f-baec-8e8abea22c24.png',
    allergens: ['Lactose'],
    isVegetarian: true
  },
  {
    id: 'tartare-saumon',
    name: 'Tartare de Saumon Écossais',
    description: 'Saumon écossais fumé maison, avocat, câpres, aneth frais, toast de pain de seigle',
    price: 26,
    category: 'entrees',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a17b15ec-e83c-415a-b36d-a8c13e32d04a.png',
    allergens: ['Poisson', 'Gluten']
  },
  {
    id: 'salade-chevre-miel',
    name: 'Salade de Chèvre Chaud au Miel',
    description: 'Mesclun de saison, crottin de chèvre gratiné au miel de lavande, noix et vinaigrette balsamique',
    price: 16,
    category: 'entrees',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/68444e6f-f2ea-4a86-bdf9-1ae78b5ca78b.png',
    allergens: ['Lactose', 'Fruits à coque'],
    isVegetarian: true
  },

  // PLATS PRINCIPAUX
  {
    id: 'boeuf-charolais-truffes',
    name: 'Bœuf de Charolais aux Truffes',
    description: 'Filet de bœuf de Charolais, truffes noires du Périgord, légumes de saison et jus corsé aux échalotes',
    price: 52,
    category: 'plats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/254378e8-e68b-45f4-89ce-613003e4d1a9.png',
    isSignature: true,
    isPopular: true
  },
  {
    id: 'canard-confit-cerises',
    name: 'Confit de Canard aux Cerises',
    description: 'Cuisse de canard confite, sauce aux cerises noires, gratin dauphinois et haricots verts aux amandes',
    price: 34,
    category: 'plats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df1c9ff1-5bf4-4092-9b82-d8464792bb6e.png',
    allergens: ['Fruits à coque']
  },
  {
    id: 'sole-meuniere',
    name: 'Sole Meunière aux Câpres',
    description: 'Sole entière meunière, beurre noisette aux câpres, pommes de terre grenaille et épinards frais',
    price: 42,
    category: 'plats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c1c18cd-d654-4f83-9dd2-9599feaef359.png',
    allergens: ['Poisson', 'Lactose']
  },
  {
    id: 'agneau-provence',
    name: 'Carré d\'Agneau de Provence',
    description: 'Carré d\'agneau aux herbes de Provence, tian de légumes méditerranéens, jus au thym',
    price: 46,
    category: 'plats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3179a436-d4b6-43a2-af55-0ffbc806276f.png',
    isPopular: true
  },
  {
    id: 'risotto-champignons',
    name: 'Risotto aux Champignons Sauvages',
    description: 'Risotto crémeux aux champignons sauvages, parmesan vieilli 24 mois, huile de truffe blanche',
    price: 28,
    category: 'plats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7003afa7-59c1-4dc3-8e2c-cabfe94fc825.png',
    allergens: ['Lactose'],
    isVegetarian: true
  },
  {
    id: 'loup-fenouil',
    name: 'Loup de Mer au Fenouil',
    description: 'Filet de loup de mer, fondue de fenouil à l\'anis, beurre blanc et légumes croquants',
    price: 38,
    category: 'plats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c8c72e2e-5983-4bde-af9d-351cba592ad7.png',
    allergens: ['Poisson', 'Lactose']
  },

  // DESSERTS
  {
    id: 'souffle-grand-marnier',
    name: 'Soufflé au Grand Marnier',
    description: 'Soufflé chaud au Grand Marnier, glace vanille Bourbon et tuile aux amandes, coulis de fruits rouges',
    price: 18,
    category: 'desserts',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/22b13886-358a-4f7f-8cfc-f88e4cb6e14c.png',
    allergens: ['Œufs', 'Lactose', 'Fruits à coque', 'Alcool'],
    isSignature: true
  },
  {
    id: 'tarte-tatin',
    name: 'Tarte Tatin Maison',
    description: 'Tarte Tatin aux pommes caramélisées, glace cannelle et chantilly vanillée',
    price: 14,
    category: 'desserts',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ae8477f-8541-42ac-b9a6-82038f751f79.png',
    allergens: ['Gluten', 'Œufs', 'Lactose'],
    isPopular: true
  },
  {
    id: 'mousse-chocolat',
    name: 'Mousse au Chocolat Valrhona',
    description: 'Mousse légère au chocolat Valrhona 70%, crumble cacao et framboises fraîches',
    price: 16,
    category: 'desserts',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca1e9b00-db71-45cc-a040-90b76f76479b.png',
    allergens: ['Œufs', 'Lactose']
  },
  {
    id: 'mille-feuille',
    name: 'Mille-feuille à la Vanille',
    description: 'Mille-feuille traditionnel, crème pâtissière vanille Madagascar, glaçage fondant',
    price: 15,
    category: 'desserts',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3fa1cded-a302-4a76-8276-bedb072921d5.png',
    allergens: ['Gluten', 'Œufs', 'Lactose']
  },
  {
    id: 'creme-brulee',
    name: 'Crème Brûlée Lavande',
    description: 'Crème brûlée infusée à la lavande de Provence, sablé breton et fruits de saison',
    price: 13,
    category: 'desserts',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ccafe90e-e433-41db-bf4b-ca351caebadc.png',
    allergens: ['Œufs', 'Lactose', 'Gluten']
  },

  // BOISSONS
  {
    id: 'champagne-dom-perignon',
    name: 'Champagne Dom Pérignon 2015',
    description: 'Champagne d\'exception, bulles fines et persistantes, notes de fruits blancs et brioche',
    price: 280,
    category: 'boissons',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/321e7cd4-03f8-4d99-918f-7e2b9b7ab7c7.png',
    allergens: ['Sulfites']
  },
  {
    id: 'bordeaux-margaux',
    name: 'Château Margaux 2018',
    description: 'Grand cru classé de Bordeaux, tanins soyeux, arômes de fruits noirs et épices',
    price: 450,
    category: 'boissons',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fcc2b3ee-7fa0-4467-af8b-dde2ece3a9e6.png',
    allergens: ['Sulfites']
  },
  {
    id: 'bourgogne-blanc',
    name: 'Chablis Premier Cru 2020',
    description: 'Vin blanc de Bourgogne, minéralité exceptionnelle, notes d\'agrumes et fleurs blanches',
    price: 85,
    category: 'boissons',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0667a7a9-bb82-4b4c-9e0a-901b087f5a28.png',
    allergens: ['Sulfites']
  },
  {
    id: 'cocktail-signature',
    name: 'Le Jardin Gourmand',
    description: 'Cocktail signature à base de gin français, liqueur de violette, citron vert et thym frais',
    price: 16,
    category: 'boissons',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d68707da-d366-4c3a-9aec-ba74868c1742.png',
    allergens: ['Alcool']
  },
  {
    id: 'eau-perrier',
    name: 'Eau Pétillante Perrier',
    description: 'Eau minérale naturellement gazeuse, source de Vergèze',
    price: 6,
    category: 'boissons',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c4433d8-ab70-4993-b7fd-9c60a45d38ac.png'
  },
  {
    id: 'cafe-ethiopie',
    name: 'Café d\'Éthiopie',
    description: 'Café single origin d\'Éthiopie, torréfaction artisanale, notes florales et fruitées',
    price: 5,
    category: 'boissons',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ad401fd-4a18-40ef-9c96-e158f03a5ffc.png'
  }
]

export const categories = [
  { id: 'all', name: 'Tous les plats', count: menuData.length },
  { id: 'entrees', name: 'Entrées', count: menuData.filter(item => item.category === 'entrees').length },
  { id: 'plats', name: 'Plats principaux', count: menuData.filter(item => item.category === 'plats').length },
  { id: 'desserts', name: 'Desserts', count: menuData.filter(item => item.category === 'desserts').length },
  { id: 'boissons', name: 'Boissons', count: menuData.filter(item => item.category === 'boissons').length }
]