"use client"

import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section avec Parallaxe */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d681fa96-311a-414a-948a-d9ae7cf9a829.png')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Le Jardin Gourmand
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Une expérience gastronomique française authentique où tradition et innovation se rencontrent dans un cadre élégant et chaleureux
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in-delay-2">
            <a 
              href="/reservations" 
              className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Réserver maintenant
            </a>
            <a 
              href="/menu" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Découvrir le menu
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
                L'Art de la Gastronomie Française
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis 1985, Le Jardin Gourmand perpétue la tradition culinaire française avec passion et excellence. Notre chef étoilé, Pierre Dubois, revisite les grands classiques avec des produits locaux d'exception.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chaque plat raconte une histoire, chaque saveur éveille les sens. Venez découvrir une cuisine où l'authenticité rencontre la créativité dans un cadre raffiné et accueillant.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">39</div>
                  <div className="text-sm text-gray-600">Années d'excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">★</div>
                  <div className="text-sm text-gray-600">Étoile Michelin</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">100%</div>
                  <div className="text-sm text-gray-600">Produits locaux</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df81e822-8be9-4d78-baab-6fe5249ae02f.png" 
                alt="Chef Pierre Dubois préparant un plat signature dans sa cuisine"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white p-6 rounded-lg shadow-lg">
                <div className="font-playfair text-2xl font-bold">Chef Pierre Dubois</div>
                <div className="text-amber-100">Étoilé Michelin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Plats Populaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Plats Signature
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos créations les plus appréciées, véritables symphonies de saveurs qui font la renommée de notre table
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8fb79382-e044-4eca-b4e9-6f8de908ae17.png'épices+maison+elegant+presentation" 
                  alt="Foie gras poêlé aux figues et pain d'épices maison"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Signature
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  Foie Gras Poêlé aux Figues
                </h3>
                <p className="text-gray-600 mb-4">
                  Foie gras de canard poêlé, compotée de figues fraîches et pain d'épices maison, réduction de porto millésimé
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-700">38€</span>
                  <span className="text-sm text-gray-500">Entrée</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ce2c7cc-631e-4339-a2dc-1f8227ab5c6e.png" 
                  alt="Bœuf de Charolais aux truffes noires et légumes de saison"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  Bœuf de Charolais aux Truffes
                </h3>
                <p className="text-gray-600 mb-4">
                  Filet de bœuf de Charolais, truffes noires du Périgord, légumes de saison et jus corsé aux échalotes
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-700">52€</span>
                  <span className="text-sm text-gray-500">Plat principal</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54d331d9-5ed7-440f-8e71-527f6d7246a0.png" 
                  alt="Soufflé au Grand Marnier avec glace vanille Bourbon"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Spécialité
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  Soufflé au Grand Marnier
                </h3>
                <p className="text-gray-600 mb-4">
                  Soufflé chaud au Grand Marnier, glace vanille Bourbon et tuile aux amandes, coulis de fruits rouges
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-700">18€</span>
                  <span className="text-sm text-gray-500">Dessert</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/menu" 
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Voir le menu complet
            </a>
          </div>
        </div>
      </section>

      {/* Section Promotions */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e74e5d54-1afe-4566-8f77-d7eb765ff2b8.png" 
                alt="Table romantique dressée avec bougies et vin dans un restaurant français élégant"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
                Offres Spéciales
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-playfair text-2xl font-bold text-amber-700 mb-2">
                    Menu Dégustation 7 Services
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Voyage culinaire exceptionnel avec accord mets et vins sélectionnés par notre sommelier
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">125€</span>
                    <span className="text-sm text-gray-500 line-through">150€</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-playfair text-2xl font-bold text-amber-700 mb-2">
                    Dîner Romantique
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Menu 3 services pour deux personnes avec champagne de bienvenue et pétales de roses
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">180€</span>
                    <span className="text-sm text-amber-600">Pour 2 personnes</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="/reservations" 
                className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
              >
                Réserver une offre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Leurs expériences témoignent de notre engagement envers l'excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Une expérience culinaire absolument exceptionnelle. Chaque plat était une œuvre d'art, tant visuellement que gustativement. Le service était impeccable."
              </p>
              <div className="font-semibold text-gray-900">Marie Dubois</div>
              <div className="text-sm text-gray-500">Cliente fidèle depuis 5 ans</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Le Jardin Gourmand a rendu notre anniversaire de mariage inoubliable. L'ambiance, la cuisine, tout était parfait. Nous recommandons vivement !"
              </p>
              <div className="font-semibold text-gray-900">Jean-Pierre Martin</div>
              <div className="text-sm text-gray-500">Dîner d'anniversaire</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Un restaurant qui mérite amplement sa réputation. La créativité du chef et la qualité des produits font de chaque visite un moment d'exception."
              </p>
              <div className="font-semibold text-gray-900">Sophie Leroy</div>
              <div className="text-sm text-gray-500">Critique gastronomique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Réservez votre table dès aujourd'hui
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Vivez une expérience gastronomique inoubliable dans le cadre élégant du Jardin Gourmand
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="/reservations" 
              className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Réserver maintenant
            </a>
            <a 
              href="tel:+33142345678" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  )
}