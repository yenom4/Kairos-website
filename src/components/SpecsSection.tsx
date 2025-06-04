import React, { useState, useEffect, useRef, useCallback } from 'react';

const TEXT_CONTENT = "Kairos AI automatise votre acquisition client de A à Z, pas pour vous remplacer mais pour amplifier vos capacités. En gérant les tâches répétitives, nous libérons votre équipe pour qu'elle se concentre sur ce qu'elle fait de mieux : créer de la valeur et développer votre entreprise.";
const BASE_OPACITY = 0.05;
const INITIAL_VISIBLE_WORDS = 0;
const ANIMATION_SCROLL_HEIGHT = 1600; // Encore augmenté pour une animation plus lente
const PIN_START_OFFSET_VH = 0; // Changé à 0 pour que le pinning commence quand le haut de la section atteint le haut de la fenêtre
const POST_ANIMATION_PIN_DELAY_PX = 300; // Délai de scroll en pixels après la fin de l'animation des mots

const SpecsSection = () => {
  const words = TEXT_CONTENT.split(' ');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleWordsCount, setVisibleWordsCount] = useState(INITIAL_VISIBLE_WORDS);
  const [isIntersecting, setIsIntersecting] = useState(false);
  // animationTriggeredRef n'est plus utilisé ici, l'état isIntersecting suffit
  // pour conditionner l'écouteur de scroll.

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Réinitialiser si la section sort complètement de la vue
          setVisibleWordsCount(INITIAL_VISIBLE_WORDS);
        }
      },
      {
        threshold: 0.01, // Déclencher très tôt pour que handleScroll soit prêt
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []); // Empty dependency array - observer setup once

  const handleScroll = useCallback(() => {
    const sectionElement = sectionRef.current;
    if (!isIntersecting || !sectionElement) {
      // Ne rien faire si la section n'est pas visible ou n'existe pas
      return;
    }

    const currentScrollY = window.scrollY;
    const sectionTopDocumentOffset = sectionElement.offsetTop;

    // Valeur de 'top' de l'élément sticky, convertie en pixels
    const stickyTopInPx = (PIN_START_OFFSET_VH / 100) * window.innerHeight;

    // Le point de scroll Y (par rapport au document) où l'élément sticky
    // atteint sa position 'top' et où l'animation (progress=0) doit commencer.
    const animationEffectiveStartScrollY = sectionTopDocumentOffset - stickyTopInPx;

    // Distance scrollée DANS la zone d'animation (après que le sticky a atteint son top)
    const scrolledDistance = currentScrollY - animationEffectiveStartScrollY;

    let progress = 0;
    if (scrolledDistance >= 0 && scrolledDistance <= ANIMATION_SCROLL_HEIGHT) {
      // L'animation progresse seulement si on est dans la zone de scroll définie
      progress = scrolledDistance / ANIMATION_SCROLL_HEIGHT;
    } else if (scrolledDistance > ANIMATION_SCROLL_HEIGHT) {
      // Si on a scrollé au-delà, l'animation est terminée
      progress = 1;
    } else {
      // Si on est avant le début, l'animation n'a pas commencé
      progress = 0;
    }
    
    const wordsToAnimate = words.length;
    const currentVisibleWords = Math.floor(progress * wordsToAnimate);
    
    setVisibleWordsCount(currentVisibleWords);

  }, [isIntersecting, words.length]); // Dependencies for useCallback

  useEffect(() => {
    // On attache/détache l'écouteur de scroll en fonction de isIntersecting
    if (isIntersecting) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isIntersecting, handleScroll]); // Re-run if isIntersecting or handleScroll changes

  // Calcul de la hauteur de la section parente pour l'effet sticky
  // Hauteur visible de l'élément sticky (100vh - offset) + la distance de scroll de l'animation
  const sectionHeight = `calc((100vh - ${PIN_START_OFFSET_VH}vh) + ${ANIMATION_SCROLL_HEIGHT}px + ${POST_ANIMATION_PIN_DELAY_PX}px)`;

  return (
    <section
      ref={sectionRef}
      id="specifications"
      className="w-full bg-white" // py- enlevé, géré par le sticky wrapper ou son contenu
      style={{
        height: sectionHeight,
        // position: 'relative', // Peut aider dans certains contextes sticky complexes
      }}
    >
      <div // Sticky Wrapper
        style={{
          position: 'sticky',
          top: `${PIN_START_OFFSET_VH}vh`,
          width: '100%',
          // height: `calc(100vh - ${PIN_START_OFFSET_VH}vh)`, // Hauteur pour occuper l'espace visible restant
          // overflow: 'hidden', // Pour éviter que le contenu interne ne déborde s'il est plus grand
        }}
      >
        {/* Contenu original de la section */}
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center gap-4 mb-4 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="pulse-chip">
                <span>Notre mission</span>
              </div>
            </div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
          <div className="max-w-5xl pl-4 sm:pl-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold leading-snug mb-8 sm:mb-12">
              <span className="block py-[50px]">
                {words.map((word, index) => {
                  const targetOpacity = index < visibleWordsCount ? 1 : BASE_OPACITY;
                  return (
                    <span
                      key={index}
                      style={{
                        opacity: targetOpacity,
                        transition: 'opacity 0.6s ease-out',
                        display: 'inline',
                        willChange: 'opacity',
                        color: 'black',
                        marginRight: '0.10em',
                      }}
                    >
                      {word + ' '}
                    </span>
                  );
                })}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;