import React from 'react';
import CalPopupButton from './CalPopupButton'; // Importer le composant pour le bouton Cal.com

const FinalCTASection = () => {
  // Classes de base partagées pour les deux boutons pour assurer la cohérence
  const baseSharedButtonClasses = 
    "inline-flex items-center justify-center text-center " +
    "px-8 py-3 text-base font-medium rounded-xl shadow-md hover:shadow-lg " +
    "transition-all duration-300 ease-in-out hover:scale-105 " +
    "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white " +
    "min-w-[270px]"; // Largeur minimale pour la symétrie, ajustable

  return (
    <section id="final-cta" className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="section-container px-4 sm:px-6 lg:px-8 mx-auto text-center">
        {
        /* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
          Vos concurrents automatisent déjà. Et vous ?
        </h2>
        {
        /* Sous-titre */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10">
          Nos clients génèrent maintenant plus de leads en dormant que vous en une semaine complète. La différence ? 30 minutes d'audit.
        </p>
        {
        /* Conteneur pour les boutons */}
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-6">
          {
          /* CTA 1: Bouton Cal.com */}
          <CalPopupButton 
            text="Réserver votre audit gratuit"
            baseClassName={baseSharedButtonClasses} // Appliquer les classes de base partagées
            // Les classes spécifiques (bg-orange-600 text-white) sont dans CalPopupButton
          />
          {
          /* CTA 2: Bouton "Nous contacter" (style outline) */}
          <a
            href="#details" // Lien vers la section contact
            className={`
              ${baseSharedButtonClasses}
              text-orange-600 border-2 border-orange-600 bg-transparent 
              hover:bg-orange-600 hover:text-white
            `.trim()}
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 