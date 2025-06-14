import React from 'react';
import { ArrowRight } from 'lucide-react'; // Pour l'icône du bouton
import { motion } from "framer-motion";

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-4 sm:gap-6 items-start">
    <div className="text-5xl sm:text-6xl font-bold text-orange-500 mt-1 sm:mt-0">
      {number}
    </div>
    <div className="flex-grow pt-1">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900 font-display">
        {title}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base">
        {description}
      </p>
    </div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Audit stratégique',
      description: "Nous analysons votre situation actuelle et concevons ensemble la solution d'automatisation parfaitement adaptée à vos besoins.",
    },
    {
      number: '02',
      title: 'Développement collaboratif',
      description: "Nous créons votre système d'automatisation avec des validations régulières pour garantir sa parfaite efficacité.",
    },
    {
      number: '03',
      title: 'Déploiement et accompagnement',
      description: 'Nous intégrons tout dans vos processus et accompagnons vos équipes pour une adoption réussie et durable.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id="process" 
      className="pt-12 sm:pt-16 md:pt-20 pb-0 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-container">
        {/* Barre horizontale en haut */}
        <motion.div className="h-[1px] bg-gray-300 w-full mb-8 sm:mb-12" variants={itemVariants}></motion.div>

        {/* En-tête de la section */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div className="pulse-chip mx-auto mb-3 sm:mb-4" variants={itemVariants}>
            <span>Processus</span>
          </motion.div>
          <motion.h2 className="section-title mb-3 sm:mb-4" variants={itemVariants}>
            Notre processus en 3 étapes simples
          </motion.h2>
          <motion.p className="section-subtitle mx-auto max-w-2xl" variants={itemVariants}>
            Une approche structurée qui vous garantit des résultats mesurables dès les premiers mois
          </motion.p>
        </div>

        {/* Étapes du processus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div className="text-center" variants={itemVariants}>
          <a
            href="#details"
            className={
              "inline-flex items-center justify-center group " +
              "px-8 py-4 text-base font-medium text-white " +
              "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 " +
              "rounded-xl shadow-lg hover:shadow-xl " +
              "transform transition-all duration-300 ease-in-out " +
              "hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
            }
          >
            Réserver un audit gratuit
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection; 