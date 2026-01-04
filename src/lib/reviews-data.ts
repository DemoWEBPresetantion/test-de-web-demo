export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  avatar: string
  verified: boolean
  occasion?: string
}

export const reviewsData: Review[] = [
  {
    id: 'review-1',
    name: 'Marie Dubois',
    rating: 5,
    comment: 'Une expérience culinaire absolument exceptionnelle. Chaque plat était une œuvre d\'art, tant visuellement que gustativement. Le service était impeccable et l\'ambiance parfaite pour notre anniversaire de mariage.',
    date: '2024-01-15',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3058e112-ee98-4b12-a6a3-6ebabb93590b.png',
    verified: true,
    occasion: 'Anniversaire de mariage'
  },
  {
    id: 'review-2',
    name: 'Jean-Pierre Martin',
    rating: 5,
    comment: 'Le Jardin Gourmand a rendu notre anniversaire de mariage inoubliable. L\'ambiance, la cuisine, tout était parfait. Le foie gras aux figues était divin et le service d\'une qualité remarquable.',
    date: '2024-01-08',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d6bc5ca8-ffd5-4fe0-bd14-ada447ab370c.png',
    verified: true,
    occasion: 'Dîner romantique'
  },
  {
    id: 'review-3',
    name: 'Sophie Leroy',
    rating: 5,
    comment: 'Un restaurant qui mérite amplement sa réputation. La créativité du chef et la qualité des produits font de chaque visite un moment d\'exception. Le menu dégustation est un voyage culinaire extraordinaire.',
    date: '2024-01-03',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f281ab09-27b8-473d-909c-524e6e7a77cc.png',
    verified: true,
    occasion: 'Critique gastronomique'
  },
  {
    id: 'review-4',
    name: 'Antoine Rousseau',
    rating: 5,
    comment: 'Excellent restaurant gastronomique ! Le bœuf de Charolais aux truffes était cuit à la perfection. L\'équipe est professionnelle et attentionnée. Une adresse incontournable à Paris.',
    date: '2023-12-28',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7399b0b4-dc07-4498-b565-3e683a4cff0c.png',
    verified: true,
    occasion: 'Repas d\'affaires'
  },
  {
    id: 'review-5',
    name: 'Isabelle Moreau',
    rating: 5,
    comment: 'Quelle découverte ! Nous avons passé une soirée magique. Le soufflé au Grand Marnier était spectaculaire et le service irréprochable. Nous reviendrons certainement très bientôt.',
    date: '2023-12-20',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/236e8eaf-e17e-423e-b11e-14dae4a12a5a.png',
    verified: true,
    occasion: 'Découverte'
  },
  {
    id: 'review-6',
    name: 'François Dubois',
    rating: 5,
    comment: 'Un cadre élégant, une cuisine raffinée et un service de grande qualité. Le menu dégustation avec accord mets et vins était parfaitement orchestré. Une expérience gastronomique mémorable.',
    date: '2023-12-15',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bed8a783-c02c-46e8-a75a-ee770b917a4e.png',
    verified: true,
    occasion: 'Menu dégustation'
  },
  {
    id: 'review-7',
    name: 'Catherine Blanc',
    rating: 5,
    comment: 'Tout était parfait de l\'accueil au dessert. La sole meunière était exceptionnelle et le personnel très attentionné. L\'ambiance feutrée est idéale pour un dîner en amoureux.',
    date: '2023-12-10',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ef6d87b1-7662-4ca7-857e-74da4e2a9b63.png',
    verified: true,
    occasion: 'Dîner romantique'
  },
  {
    id: 'review-8',
    name: 'Philippe Garnier',
    rating: 5,
    comment: 'Restaurant d\'exception ! La qualité des produits est remarquable et la présentation des plats soignée. Le confit de canard aux cerises était délicieux. Service professionnel et chaleureux.',
    date: '2023-12-05',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c932d01f-d51f-44df-b4ac-1da0eeede5b4.png',
    verified: true,
    occasion: 'Dîner entre amis'
  }
]

export const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length
export const totalReviews = reviewsData.length