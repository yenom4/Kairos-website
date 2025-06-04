import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialMedia = [
    { name: 'LinkedIn', href: '#', imgSrc: '/Linkedin.svg' },
    { name: 'X', href: '#', imgSrc: '/X.svg' },
    { name: 'Instagram', href: '#', imgSrc: '/Instagram.svg' },
  ];

  const navLinks = [
    { href: '#features', label: 'Services' },
    { href: '#about', label: 'À propos' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#details', label: 'Contact' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <footer className="bg-white text-black pt-0 pb-4 font-light">
      <div className="section-container mx-auto px-4 sm:px-6 lg:px-8 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 pt-0">
          
          {/* Colonne 1 (Gauche): Réseaux Sociaux et Copyright */}
          <div className="flex flex-col justify-between md:col-span-1">
            <div> {/* Conteneur pour les icônes sociales */}
              <div className="flex items-center space-x-4 mb-6">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    <img 
                      src={social.imgSrc} 
                      alt={`${social.name} logo`} 
                      className="h-6 w-6"
                      style={{ filter: 'grayscale(1) brightness(0)' }}
                    />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-sm text-black">
              © 2025 Kairos AI. | Tous droits réservés.
            </p>
          </div>

          {/* Colonne 2 (Centre): Liens de navigation */}
          <div className="md:col-span-1 text-left"> 
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-gray-600 transition-colors duration-300 font-normal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 (Droite): Légal et Contact */}
          <div className="md:col-span-1 text-left md:text-right"> 
            <div className="mb-4">
              <a href="#privacy-policy" className="block hover:text-gray-600 transition-colors duration-300 font-normal">
                Politique de confidentialité
              </a>
              <a href="#legal-mentions" className="block hover:text-gray-600 transition-colors duration-300 font-normal mt-1">
                Mentions légales
              </a>
            </div>
            <div>
              <a href="mailto:contact@kairos-ai.fr" className="flex items-center md:justify-end hover:text-gray-600 transition-colors duration-300 text-sm">
                <Mail size={16} strokeWidth={1.5} className="mr-2" />
                contact@kairos-ai.fr
              </a>
              <a href="tel:0667098487" className="flex items-center md:justify-end hover:text-gray-600 transition-colors duration-300 text-sm mt-2">
                <Phone size={16} strokeWidth={1.5} className="mr-2" />
                06 67 09 84 87
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
