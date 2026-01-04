"use client"

import { useState, useEffect } from 'react'
import { menuData, categories, MenuItem } from '@/lib/menu-data'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuData)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      let filtered = menuData

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => item.category === selectedCategory)
      }

      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }

      setFilteredItems(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedCategory, searchTerm])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be9531aa-51a5-431c-ac77-469bd2e1357b.png')`
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              Notre Menu
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Découvrez notre carte gastronomique française, créée avec passion par notre chef étoilé
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtres et Recherche */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Rechercher un plat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-amber-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-amber-50 hover:border-amber-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-6">
          <p className="text-gray-600">
            {isLoading ? 'Chargement...' : `${filteredItems.length} plat${filteredItems.length > 1 ? 's' : ''} trouvé${filteredItems.length > 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Grille des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loading
            [...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300" />
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-3" />
                  <div className="h-4 bg-gray-300 rounded mb-2" />
                  <div className="h-4 bg-gray-300 rounded mb-4 w-3/4" />
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-300 rounded w-16" />
                    <div className="h-6 bg-gray-300 rounded w-20" />
                  </div>
                </div>
              </div>
            ))
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.isSignature && (
                      <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Signature
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Populaire
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Végétarien
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.allergens && item.allergens.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">Allergènes :</p>
                      <div className="flex flex-wrap gap-1">
                        {item.allergens.map((allergen) => (
                          <span key={allergen} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-700">
                      {item.price}€
                    </span>
                    <span className="text-sm text-gray-500 capitalize">
                      {item.category === 'entrees' ? 'Entrée' : 
                       item.category === 'plats' ? 'Plat principal' :
                       item.category === 'desserts' ? 'Dessert' : 'Boisson'}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun plat trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>

        {/* Section Menu Dégustation */}
        <section className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Menu Dégustation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Laissez-vous guider par notre chef pour un voyage culinaire exceptionnel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold text-amber-700 mb-4">
                Menu Découverte - 5 Services
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Amuse-bouche de saison</li>
                <li>• Entrée signature du chef</li>
                <li>• Poisson ou viande au choix</li>
                <li>• Fromage affiné</li>
                <li>• Dessert gourmand</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900">85€</span>
                <span className="text-sm text-gray-600">par personne</span>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold text-amber-400 mb-4">
                Menu Prestige - 7 Services
              </h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Amuse-bouche et mignardises</li>
                <li>• Foie gras aux figues</li>
                <li>• Poisson noble de saison</li>
                <li>• Bœuf de Charolais aux truffes</li>
                <li>• Sélection de fromages</li>
                <li>• Pré-dessert</li>
                <li>• Dessert signature</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-amber-400">125€</span>
                <span className="text-sm text-gray-400">par personne</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Accord mets et vins disponible (+35€ par personne)
            </p>
            <a 
              href="/reservations" 
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-800 transition-colors duration-300"
            >
              Réserver un menu dégustation
            </a>
          </div>
        </section>

        {/* Section Informations */}
        <section className="mt-12 bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
              <div className="text-gray-700 font-semibold mb-1">Produits Locaux</div>
              <div className="text-sm text-gray-600">Sélectionnés avec soin</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">★</div>
              <div className="text-gray-700 font-semibold mb-1">Étoile Michelin</div>
              <div className="text-sm text-gray-600">Depuis 2010</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">24h</div>
              <div className="text-gray-700 font-semibold mb-1">Préparation</div>
              <div className="text-sm text-gray-600">Fraîcheur garantie</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}