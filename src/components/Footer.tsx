import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { trackConversion } from '../utils/analytics';

const Footer = () => {
  const location = useLocation();
  
  const socialMedia = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-lor%C3%A9e-12407a364/', imgSrc: '/Linkedin.svg' },
    { name: 'X', href: 'https://x.com/_kairos_AI_', imgSrc: '/X.svg' },
    { name: 'Instagram', href: '#', imgSrc: '/Instagram.svg' },
  ];

  const navLinks = [
    { href: '#features', label: 'Services' },
    { href: '#specifications', label: 'À propos' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#details', label: 'Contact' },
    { href: '#faq', label: 'FAQ' },
  ];

  // Détermine si on est sur la page d'accueil ou non
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-white text-black pt-6 pb-4 font-light" 
            role="contentinfo" 
            itemScope 
            itemType="https://schema.org/Organization">
      <div className="section-container mx-auto px-4 sm:px-6 lg:px-8 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 pt-0">
          
          {/* Colonne 1 (Gauche): Réseaux Sociaux et Copyright */}
          <div className="flex flex-col justify-between md:col-span-1">
            <div> {/* Conteneur pour les icônes sociales */}
              <nav aria-label="Réseaux sociaux Kairos AI">
                <div className="flex items-center space-x-4 mb-6">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={`Suivez Kairos AI sur ${social.name}`}
                      title={`Page ${social.name} de Kairos AI`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600 transition-colors duration-300"
                      itemProp="sameAs"
                    >
                      <img 
                        src={social.imgSrc} 
                        alt={`Logo ${social.name}`} 
                        className="h-6 w-6"
                        style={{ filter: 'grayscale(1) brightness(0)' }}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <p className="text-sm text-black">
              © 2025 <span itemProp="name">Kairos AI</span>. | Tous droits réservés.
            </p>
          </div>

          {/* Colonne 2 (Centre): Liens de navigation */}
          <div className="md:col-span-1 text-left"> 
            <nav aria-label="Navigation principale du site">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {isHomePage ? (
                      <a href={link.href} 
                         className="hover:text-gray-600 transition-colors duration-300 font-normal"
                         title={`Aller à la section ${link.label}`}>
                        {link.label}
                      </a>
                    ) : (
                      <Link to={`/${link.href}`} 
                         className="hover:text-gray-600 transition-colors duration-300 font-normal"
                         title={`Aller à la section ${link.label}`}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colonne 3 (Droite): Légal et Contact */}
          <div className="md:col-span-1 text-left md:text-right"> 
            <nav aria-label="Liens légaux et informations" className="mb-4">
              <Link 
                to="/politique-de-confidentialite" 
                className="block hover:text-gray-600 transition-colors duration-300 font-normal"
                title="Consulter notre politique de confidentialité">
                Politique de confidentialité
              </Link>
              <a href="#legal-mentions" 
                 className="block hover:text-gray-600 transition-colors duration-300 font-normal mt-1"
                 title="Consulter nos mentions légales">
                Mentions légales
              </a>
            </nav>
            <address itemScope itemType="https://schema.org/ContactPoint">
              <a href="mailto:contact@kairos-ai.fr" 
                 className="flex items-center md:justify-end hover:text-gray-600 transition-colors duration-300 text-sm not-italic"
                 itemProp="email"
                 aria-label="Envoyer un email à Kairos AI"
                 title="Contactez-nous par email"
                 onClick={() => trackConversion('email_click', 25, 'Footer email click')}>
                <Mail size={16} strokeWidth={1.5} className="mr-2" aria-hidden="true" />
                contact@kairos-ai.fr
              </a>
              <a href="tel:+33667098487" 
                 className="flex items-center md:justify-end hover:text-gray-600 transition-colors duration-300 text-sm mt-2 not-italic"
                 itemProp="telephone"
                 aria-label="Appeler Kairos AI"
                 title="Contactez-nous par téléphone"
                 onClick={() => trackConversion('phone_call', 50, 'Footer phone click')}>
                <Phone size={16} strokeWidth={1.5} className="mr-2" aria-hidden="true" />
                06 67 09 84 87
              </a>
              <meta itemProp="contactType" content="Customer Service" />
              <meta itemProp="areaServed" content="FR" />
              <meta itemProp="availableLanguage" content="French" />
            </address>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
