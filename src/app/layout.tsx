import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Le Jardin Gourmand - Restaurant Gastronomique Français',
  description: 'Découvrez Le Jardin Gourmand, restaurant gastronomique français proposant une cuisine traditionnelle revisitée avec des produits locaux de qualité. Réservez votre table dès maintenant.',
  keywords: 'restaurant français, gastronomie, cuisine traditionnelle, produits locaux, réservation restaurant, dîner romantique',
  authors: [{ name: 'Le Jardin Gourmand' }],
  openGraph: {
    title: 'Le Jardin Gourmand - Restaurant Gastronomique Français',
    description: 'Cuisine traditionnelle française revisitée avec des produits locaux de qualité',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Le Jardin Gourmand',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d2e0b34-06ea-41ac-8e80-9f1f6616549d.png',
        width: 1200,
        height: 630,
        alt: 'Le Jardin Gourmand - Restaurant Gastronomique Français'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Jardin Gourmand - Restaurant Gastronomique Français',
    description: 'Cuisine traditionnelle française revisitée avec des produits locaux de qualité'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-src 'self' https://maps.google.com;" />
        <link rel="canonical" href="https://lejardin-gourmand.fr" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Le Jardin Gourmand",
              "description": "Restaurant gastronomique français proposant une cuisine traditionnelle revisitée",
              "url": "https://lejardin-gourmand.fr",
              "telephone": "+33 1 42 34 56 78",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 Rue de la Gastronomie",
                "addressLocality": "Paris",
                "postalCode": "75001",
                "addressCountry": "FR"
              },
              "openingHours": [
                "Tu-Sa 12:00-14:30",
                "Tu-Sa 19:00-22:30"
              ],
              "servesCuisine": "French",
              "priceRange": "€€€",
              "acceptsReservations": true
            })
          }}
        />
      </head>
      <body className="font-inter antialiased bg-white text-gray-900">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="/" className="font-playfair text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors">
                  Le Jardin Gourmand
                </a>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                    Accueil
                  </a>
                  <a href="/menu" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                    Menu
                  </a>
                  <a href="/about" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                    À propos
                  </a>
                  <a href="/reservations" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                    Réservations
                  </a>
                  <a href="/gallery" className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
                    Galerie
                  </a>
                  <a href="/reservations" className="bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-amber-800 transition-colors">
                    Réserver
                  </a>
                </div>
              </div>
              
              <div className="md:hidden">
                <button id="mobile-menu-button" className="text-gray-700 hover:text-amber-700 focus:outline-none focus:text-amber-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div id="mobile-menu" className="md:hidden hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium">
                Accueil
              </a>
              <a href="/menu" className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium">
                Menu
              </a>
              <a href="/about" className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium">
                À propos
              </a>
              <a href="/reservations" className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium">
                Réservations
              </a>
              <a href="/gallery" className="text-gray-700 hover:text-amber-700 block px-3 py-2 text-base font-medium">
                Galerie
              </a>
              <a href="/reservations" className="bg-amber-700 text-white block px-3 py-2 rounded-full text-base font-medium hover:bg-amber-800 transition-colors mx-3 mt-4 text-center">
                Réserver
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-playfair text-2xl font-bold text-amber-400 mb-4">
                  Le Jardin Gourmand
                </h3>
                <p className="text-gray-300 mb-4">
                  Restaurant gastronomique français proposant une cuisine traditionnelle revisitée avec des produits locaux de qualité exceptionnelle.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.807 1.366 1.958 1.366 3.255s-.49 2.448-1.297 3.323c-.876.876-2.027 1.366-3.324 1.366z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p>15 Rue de la Gastronomie</p>
                  <p>75001 Paris, France</p>
                  <p>+33 1 42 34 56 78</p>
                  <p>contact@lejardin-gourmand.fr</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4">Horaires</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Mardi - Samedi</p>
                  <p>12h00 - 14h30</p>
                  <p>19h00 - 22h30</p>
                  <p className="text-amber-400">Fermé Dimanche & Lundi</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Le Jardin Gourmand. Tous droits réservés.</p>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
              }
            });
          `
        }} />
      </body>
    </html>
  )
}