"use client"

import { useEffect, useRef, useState } from 'react'

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  const isVisible = (id: string) => visibleSections.has(id)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97a0952f-e7ec-4ef5-b28e-34f489739d01.png')`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Notre Histoire
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Depuis 1985, une passion familiale pour la gastronomie française
            </p>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section 
        id="histoire"
        ref={setSectionRef('histoire')}
        className={`py-20 transition-all duration-1000 ${
          isVisible('histoire') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
                Une Tradition Familiale
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En 1985, Pierre Dubois ouvre les portes du Jardin Gourmand avec un rêve simple : 
                partager sa passion pour la cuisine française authentique dans un cadre élégant et chaleureux.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fils de restaurateurs, Pierre a grandi dans les cuisines familiales de Provence, 
                apprenant les secrets de la gastronomie française auprès de sa grand-mère Marie, 
                cuisinière réputée dans son village natal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Après avoir perfectionné son art dans les plus grandes maisons parisiennes, 
                il décide de créer son propre établissement, alliant tradition et innovation 
                dans un esprit de convivialité et d'excellence.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">1985</div>
                  <div className="text-sm text-gray-600">Ouverture</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">2010</div>
                  <div className="text-sm text-gray-600">Étoile Michelin</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">39</div>
                  <div className="text-sm text-gray-600">Années d'excellence</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf178b55-1a17-4f3b-beab-68113572391c.png" 
                alt="Pierre Dubois lors de l'ouverture du restaurant en 1985"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-lg shadow-lg">
                <div className="font-playfair text-xl font-bold">1985</div>
                <div className="text-amber-100">L'aventure commence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Philosophie */}
      <section 
        id="philosophie"
        ref={setSectionRef('philosophie')}
        className={`py-20 bg-gray-50 transition-all duration-1000 delay-300 ${
          isVisible('philosophie') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Philosophie Culinaire
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Une cuisine qui respecte les traditions tout en embrassant l'innovation, 
              avec un engagement profond envers la qualité et la durabilité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Passion & Tradition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque recette puise ses racines dans la tradition française, 
                transmise de génération en génération avec amour et respect.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Produits Locaux
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous privilégions les producteurs locaux et les circuits courts 
                pour garantir fraîcheur, qualité et respect de l'environnement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Innovation Créative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Notre créativité s'exprime dans la réinterprétation moderne 
                des classiques, créant des expériences gustatives uniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section 
        id="equipe"
        ref={setSectionRef('equipe')}
        className={`py-20 transition-all duration-1000 delay-600 ${
          isVisible('equipe') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Équipe Passionnée
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe unie par la passion de l'excellence et l'amour du service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chef Pierre Dubois */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/765bd273-367f-41fa-badc-783e457f21af.png" 
                  alt="Pierre Dubois, Chef étoilé Michelin"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Pierre Dubois
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Chef Exécutif & Propriétaire</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Étoilé Michelin depuis 2010, Pierre dirige les cuisines avec passion et créativité, 
                perpétuant l'excellence culinaire française.
              </p>
            </div>

            {/* Sous-chef Marie Laurent */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b45bedef-7008-4cef-94a9-89c577d46e4d.png" 
                  alt="Marie Laurent, Sous-chef"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Marie Laurent
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Sous-chef</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diplômée de l'Institut Paul Bocuse, Marie apporte sa créativité 
                et son expertise technique à notre brigade culinaire.
              </p>
            </div>

            {/* Chef pâtissier Antoine Moreau */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bb069a6-24d5-4309-a96d-6094c3491668.png" 
                  alt="Antoine Moreau, Chef pâtissier"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Antoine Moreau
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Chef Pâtissier</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Artiste des desserts, Antoine crée des œuvres sucrées qui 
                subliment chaque repas par leur beauté et leurs saveurs.
              </p>
            </div>

            {/* Sommelier Jean-Claude Petit */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dbfd26dc-9310-4930-a840-73ea592162a0.png" 
                  alt="Jean-Claude Petit, Sommelier"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Jean-Claude Petit
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Sommelier</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert en vins français, Jean-Claude guide nos clients dans 
                la découverte d'accords mets et vins exceptionnels.
              </p>
            </div>

            {/* Maître d'hôtel Sophie Blanc */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1dad03d9-97ae-4527-abcc-1f3696c1c710.png'hôtel+service+restaurant+élégant+portrait" 
                  alt="Sophie Blanc, Maître d'hôtel"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Sophie Blanc
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Maître d'hôtel</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Garante de l'excellence du service, Sophie orchestre 
                l'accueil avec élégance et professionnalisme.
              </p>
            </div>

            {/* Chef de rang Thomas Durand */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c9cafd9-0660-4f45-8586-177cd40f8814.png" 
                  alt="Thomas Durand, Chef de rang"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Thomas Durand
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Chef de rang</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionné par l'art du service, Thomas veille au confort 
                et à la satisfaction de chaque convive.
              </p>
            </div>

            {/* Commis de cuisine Lucas Martin */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/814a1b51-f3de-45a8-99a4-1b565f162cc5.png" 
                  alt="Lucas Martin, Commis de cuisine"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Lucas Martin
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Commis de cuisine</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jeune talent prometteur, Lucas apporte sa fraîcheur 
                et son enthousiasme à notre équipe culinaire.
              </p>
            </div>

            {/* Responsable cave Émilie Rousseau */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c107470-58ee-4576-a453-1bce51c81916.png" 
                  alt="Émilie Rousseau, Responsable cave"
                  className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Émilie Rousseau
              </h3>
              <p className="text-amber-700 font-semibold mb-3">Responsable cave</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experte en œnologie, Émilie sélectionne et conserve 
                nos précieuses bouteilles avec un soin méticuleux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Récompenses */}
      <section 
        id="recompenses"
        ref={setSectionRef('recompenses')}
        className={`py-20 bg-gray-900 text-white transition-all duration-1000 delay-900 ${
          isVisible('recompenses') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Nos Récompenses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La reconnaissance de notre excellence par les plus prestigieuses institutions culinaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl text-amber-400 mb-4">★</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Étoile Michelin</h3>
              <p className="text-gray-300">Depuis 2010</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-amber-400 mb-4">🏆</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Gault & Millau</h3>
              <p className="text-gray-300">16/20 - 2024</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-amber-400 mb-4">🥇</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Prix Excellence</h3>
              <p className="text-gray-300">Wine Spectator 2023</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl text-amber-400 mb-4">👨‍🍳</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Maître Restaurateur</h3>
              <p className="text-gray-300">Titre officiel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rejoignez Notre Histoire
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Venez découvrir l'art de vivre à la française dans notre restaurant d'exception
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="/reservations" 
              className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Réserver votre table
            </a>
            <a 
              href="/menu" 
              className="inline-block border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 hover:text-white transition-colors duration-300"
            >
              Découvrir notre menu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}