import React from 'react';
import { motion } from 'framer-motion';
import CalPopupButton from './CalPopupButton'; // Importer le composant pour le bouton Cal.com

const FinalCTASection = () => {
  // Classes de base partagées pour les deux boutons pour assurer la cohérence
  const baseSharedButtonClasses = 
    "inline-flex items-center justify-center text-center " +
    "px-8 py-3 text-base font-medium rounded-xl shadow-md hover:shadow-lg " +
    "transition-all duration-300 ease-in-out hover:scale-105 " +
    "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white " +
    "min-w-[270px]"; // Largeur minimale pour la symétrie, ajustable

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="final-cta" className="w-full bg-white py-12 sm:py-16 md:py-20">
      <motion.div 
        className="section-container px-4 sm:px-6 lg:px-8 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Titre */}
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6" variants={itemVariants}>
          Vos concurrents automatisent déjà. Et vous ?
        </motion.h2>
        
        {/* Sous-titre */}
        <motion.p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10" variants={itemVariants}>
          Nos clients génèrent maintenant plus de leads en dormant que vous en une semaine complète. La différence ? 30 minutes d'audit.
        </motion.p>
        
        {/* Conteneur pour les boutons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-6"
          variants={buttonContainerVariants}
        >
          {/* CTA 1: Bouton Cal.com */}
          <motion.div variants={buttonVariants}>
            <CalPopupButton 
              text="Réserver votre audit gratuit"
              baseClassName={baseSharedButtonClasses} // Appliquer les classes de base partagées
              // Les classes spécifiques (bg-orange-600 text-white) sont dans CalPopupButton
            />
          </motion.div>
          
          {/* CTA 2: Bouton "Nous contacter" (style outline) */}
          <motion.a
            href="#details" // Lien vers la section contact
            className={`
              ${baseSharedButtonClasses}
              text-orange-600 border-2 border-orange-600 bg-transparent 
              hover:bg-orange-600 hover:text-white
            `.trim()}
            variants={buttonVariants}
          >
            Nous contacter
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTASection; 