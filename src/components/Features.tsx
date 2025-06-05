import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}
const FeatureCard = ({
  icon,
  title,
  description,
  index
}: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return <div ref={cardRef} className={cn("feature-card glass-card opacity-0 p-4 sm:p-6 h-full flex flex-col", "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50", "transition-all duration-300")} style={{
    animationDelay: `${0.1 * index}s`
  }}>
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex-shrink-0">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base flex-grow">{description}</p>
    </div>;
};
const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" role="main" aria-labelledby="features-title">
      <motion.div 
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="text-center mb-10 sm:mb-16">
          <motion.div className="pulse-chip mx-auto mb-3 sm:mb-4" variants={itemVariants}>
            <span>Services</span>
          </motion.div>
          <motion.h2 id="features-title" className="section-title mb-3 sm:mb-4" variants={itemVariants} itemProp="name">
            De la prospection à la vente : <br className="hidden sm:block" />notre méthode
          </motion.h2>
          <motion.p className="section-subtitle mx-auto" variants={itemVariants} itemProp="description">
            Nous automatisons votre acquisition client de A à Z pour que vous vous concentriez sur l'essentiel : faire grandir votre entreprise.
          </motion.p>
        </header>
        
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          role="list"
          aria-label="Services d'automatisation Kairos AI"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <motion.article variants={itemVariants} role="listitem" itemScope itemType="https://schema.org/Service">
            <FeatureCard 
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
              </svg>} 
              title="Trouvez vos clients idéaux" 
              description="Nos systèmes trouvent automatiquement les entreprises qui ont besoin de vos services et récupèrent leurs contacts." 
              index={0} 
            />
            <meta itemProp="name" content="Prospection automatique de clients" />
            <meta itemProp="description" content="Automatisation de la recherche et qualification de prospects" />
          </motion.article>
          <motion.article variants={itemVariants} role="listitem" itemScope itemType="https://schema.org/Service">
            <FeatureCard 
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                <path d="M12 8V11M12 14H12.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" />
              </svg>} 
              title="Engagez automatiquement" 
              description="Vos prospects reçoivent des messages personnalisés et toute la conversation se gère automatiquement jusqu'au rendez-vous." 
              index={1} 
            />
            <meta itemProp="name" content="Engagement automatique de prospects" />
            <meta itemProp="description" content="Automatisation du nurturing et de la prise de rendez-vous" />
          </motion.article>
          <motion.article variants={itemVariants} role="listitem" itemScope itemType="https://schema.org/Service">
            <FeatureCard 
              icon={<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                <path d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z" />
              </svg>} 
              title="Convertissez plus efficacement" 
              description="Notre solution prépare vos arguments et docs stratégiques de vente et automatise le suivi et la relance jusqu'à la signature." 
              index={2} 
            />
            <meta itemProp="name" content="Conversion et suivi commercial automatisé" />
            <meta itemProp="description" content="Automatisation du processus de vente et de suivi clients" />
          </motion.article>
        </div>
      </motion.div>
    </section>;
};
export default Features;