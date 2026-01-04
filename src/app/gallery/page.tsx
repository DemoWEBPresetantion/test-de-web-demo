"use client"

import { useState, useEffect } from 'react'
import { reviewsData, averageRating, totalReviews } from '@/lib/reviews-data'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Images de la galerie
  const galleryImages = [
    {
      id: 'restaurant-interior-1',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efff1444-27f5-4cfa-bd95-b5911e5717d1.png',
      alt: 'Salle principale du restaurant avec ambiance élégante et tables dressées',
      category: 'Intérieur'
    },
    {
      id: 'restaurant-interior-2',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1d9c0a8-2b3e-47f2-a0d5-25dde9dcc656.png',
      alt: 'Salon privé avec décoration raffinée et lumière tamisée',
      category: 'Intérieur'
    },
    {
      id: 'kitchen-1',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83ca713e-27a8-44d8-a15c-1764a3606bcc.png',
      alt: 'Cuisine professionnelle avec le chef Pierre Dubois préparant des plats gastronomiques',
      category: 'Cuisine'
    },
    {
      id: 'dish-foie-gras',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6f156924-b08c-48bd-8ef0-4731cce45994.png',
      alt: 'Foie gras poêlé aux figues avec présentation gastronomique élégante',
      category: 'Plats'
    },
    {
      id: 'dish-beef',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c576622-de8f-4538-bf37-72a78783d1a6.png',
      alt: 'Bœuf de Charolais aux truffes noires, plat signature du chef étoilé',
      category: 'Plats'
    },
    {
      id: 'dish-dessert',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ed9c19d-9e27-428c-9527-4edfcb353b2a.png',
      alt: 'Soufflé au Grand Marnier, dessert signature avec présentation spectaculaire',
      category: 'Desserts'
    },
    {
      id: 'wine-cellar',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f6b4afec-9d07-46f8-a764-62101695d72f.png',
      alt: 'Cave à vins avec collection de bouteilles prestigieuses et ambiance feutrée',
      category: 'Cave'
    },
    {
      id: 'terrace',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99a4f4c0-bce2-459d-a7ad-8bd38b652b81.png',
      alt: 'Terrasse du restaurant avec jardin et tables extérieur entourées de végétation',
      category: 'Extérieur'
    },
    {
      id: 'bar-area',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6e72f18-c1ac-4260-81e7-675255583ccc.png',
      alt: 'Espace bar avec cocktails signature et ambiance lounge élégante',
      category: 'Bar'
    },
    {
      id: 'chef-team',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02b9003c-9e4a-4ca8-9f70-82a63b396b0a.png',
      alt: 'Équipe de cuisine avec le chef Pierre Dubois et sa brigade culinaire',
      category: 'Équipe'
    },
    {
      id: 'table-setting',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38e052c9-2a48-4da5-8e6c-c013c0359d73.png',
      alt: 'Table dressée pour service gastronomique avec vaisselle fine et cristal',
      category: 'Service'
    },
    {
      id: 'romantic-dinner',
      src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/689af6f2-5302-41e8-832c-9554c5cc8624.png',
      alt: 'Table romantique pour deux avec bougies et ambiance intime',
      category: 'Ambiance'
    }
  ]

  const categories = ['Tous', 'Intérieur', 'Cuisine', 'Plats', 'Desserts', 'Cave', 'Extérieur', 'Bar', 'Équipe', 'Service', 'Ambiance']
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filteredImages = selectedCategory === 'Tous' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Carrousel automatique pour les avis
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % reviewsData.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextReview = () => {
    setCurrentReviewIndex(prev => (prev + 1) % reviewsData.length)
    setIsAutoPlay(false)
  }

  const prevReview = () => {
    setCurrentReviewIndex(prev => (prev - 1 + reviewsData.length) % reviewsData.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a74a8ef1-0c77-4d56-bbb9-3163763c549b.png')`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Galerie & Avis
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Découvrez l'univers du Jardin Gourmand à travers nos images et les témoignages de nos clients
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Galerie Photos */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Galerie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plongez dans l'atmosphère unique de notre restaurant gastronomique
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grille d'images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Avis Clients */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Avis de nos Clients
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-gray-600">
                <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
                <span className="ml-2">sur 5 ({totalReviews} avis)</span>
              </div>
            </div>
          </div>

          {/* Carrousel d'avis */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 min-h-[300px] flex flex-col justify-center">
              <div className="text-center mb-6">
                <img
                  src={reviewsData[currentReviewIndex].avatar}
                  alt={`Portrait de ${reviewsData[currentReviewIndex].name}`}
                  className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(reviewsData[currentReviewIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic text-center mb-6 leading-relaxed">
                "{reviewsData[currentReviewIndex].comment}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {reviewsData[currentReviewIndex].name}
                </div>
                <div className="text-amber-700 font-medium">
                  {reviewsData[currentReviewIndex].occasion}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(reviewsData[currentReviewIndex].date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                {reviewsData[currentReviewIndex].verified && (
                  <div className="inline-flex items-center mt-2 text-green-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Avis vérifié
                  </div>
                )}
              </div>
            </div>

            {/* Contrôles du carrousel */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviewsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentReviewIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReviewIndex ? 'bg-amber-700' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Contrôle auto-play */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`text-sm px-4 py-2 rounded-full transition-colors duration-300 ${
                  isAutoPlay 
                    ? 'bg-amber-700 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAutoPlay ? 'Pause' : 'Lecture automatique'}
              </button>
            </div>
          </div>

          {/* Statistiques des avis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">{totalReviews}</div>
              <div className="text-gray-600">Avis clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">{averageRating.toFixed(1)}/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
              <div className="text-gray-600">Recommandations</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rejoignez nos Clients Satisfaits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Vivez à votre tour une expérience gastronomique exceptionnelle au Jardin Gourmand
          </p>
          <a 
            href="/reservations" 
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
          >
            Réserver votre table
          </a>
        </section>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}