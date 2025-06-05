import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent")} role="banner">
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" 
           className="flex items-center space-x-2" 
           onClick={e => {
             e.preventDefault();
             scrollToTop();
           }} 
           aria-label="Kairos AI - Retour à l'accueil"
           title="Kairos AI - Automatisation acquisition client"
           itemScope
           itemType="https://schema.org/Organization">
          <img alt="Logo Kairos AI - Automatisation intelligente acquisition client" 
               src="/Kairos noir.svg" 
               className="h-7 sm:h-8 object-contain" 
               itemProp="logo"
               loading="eager"
               fetchPriority="high" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navigation principale">
          <a href="#" 
             className="nav-link" 
             onClick={e => {
               e.preventDefault();
               scrollToTop();
             }}
             title="Retour à l'accueil">
            Accueil
          </a>
          <a href="#features" 
             className="nav-link"
             title="Découvrir nos solutions d'automatisation">
            Solutions
          </a>
          <a href="#details" 
             className="nav-link"
             title="Nous contacter pour un audit gratuit">
            Contact
          </a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button className="md:hidden text-gray-700 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" 
                onClick={toggleMenu} 
                aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu">
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      {isMenuOpen && (
        <nav id="mobile-menu" 
             className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg" 
             role="navigation" 
             aria-label="Navigation mobile">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={e => {
                e.preventDefault();
                scrollToTop();
                setIsMenuOpen(false);
              }}
              title="Retour à l'accueil"
            >
              Accueil
            </a>
            <a
              href="#features"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              title="Découvrir nos solutions d'automatisation"
            >
              Solutions
            </a>
            <a
              href="#details"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              title="Nous contacter pour un audit gratuit"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>;
};
export default Navbar;