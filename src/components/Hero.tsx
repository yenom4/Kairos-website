import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    fetch('/loop-header.lottie').then(response => response.json()).then(data => setLottieData(data)).catch(error => console.error("Error loading Lottie animation:", error));
  }, []);
  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  return <main className="overflow-hidden relative bg-cover" id="hero" role="banner" style={{
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
  }}>
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full" aria-hidden="true"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <header className="w-full lg:w-1/2">
            <div className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.1s"
          }} role="banner">
              <span>Kairos AI</span>
            </div>
            
            <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" style={{
            animationDelay: "0.3s"
          }} itemProp="headline">
              Le bon moment pour<br className="hidden sm:inline" />optimiser votre croissance
            </h1>
            
            <p style={{
            animationDelay: "0.5s"
          }} className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 text-base sm:text-lg text-left font-normal" itemProp="description">
              Automatisez votre acquisition client : moins d'effort, plus de temps
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
            animationDelay: "0.7s"
          }} role="navigation" aria-label="Actions principales">
              <a href="#details" 
                 className="flex items-center justify-center group w-full sm:w-auto text-center" 
                 style={{
                   backgroundColor: '#FE5C02',
                   borderRadius: '1440px',
                   boxSizing: 'border-box',
                   color: '#FFFFFF',
                   cursor: 'pointer',
                   fontSize: '14px',
                   lineHeight: '20px',
                   padding: '16px 24px',
                   border: '1px solid white'
                 }}
                 aria-label="Contacter Kairos AI pour automatiser votre acquisition client"
                 title="Contactez-nous pour démarrer l'automatisation de votre acquisition client">
                Nous contacter
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </header>
          
          <aside className="w-full lg:w-1/2 relative mt-6 lg:mt-0" role="img" aria-label="Illustration Kairos AI - Automatisation intelligente">
            {lottieData ? <div className="relative z-10 animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
                <LottieAnimation 
                  animationPath={lottieData} 
                  className="w-full h-auto max-w-lg mx-auto" 
                  loop={true} 
                  autoplay={true} 
                />
              </div> : <div className="relative">
                {/* Glass container with backdrop blur effect */}
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  {/* Inner container with padding for the image */}
                  <div className="p-6 sm:p-8 relative">
                    {/* Halo effect - positioned behind the image */}
                    <div className="absolute inset-6 sm:inset-8 rounded-xl" aria-hidden="true">
                      <div className="w-full h-full rounded-xl" style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 107, 53, 0.25) 0%, rgba(255, 138, 101, 0.2) 30%, rgba(255, 107, 53, 0.15) 50%, transparent 70%)',
                    filter: 'blur(12px)',
                    transform: 'scale(1.1)'
                  }}></div>
                    </div>
                    
                    {/* Statue image with subtle glow */}
                    <div className="relative">
                      <img ref={imageRef} 
                           src="/hero-statue.png" 
                           alt="Statue classique représentant l'excellence et la sophistication de l'automatisation Kairos AI" 
                           title="Kairos AI - Excellence en automatisation d'acquisition client"
                           className="w-full h-auto object-contain transition-transform duration-500 ease-out rounded-xl relative z-10" 
                           style={{
                             transformStyle: 'preserve-3d',
                             maxHeight: '500px',
                             filter: 'drop-shadow(0 0 15px rgba(255, 107, 53, 0.3))'
                           }}
                           loading="eager"
                           fetchPriority="high"
                           decoding="async"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" />
                    </div>
                  </div>
                  
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" aria-hidden="true"></div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none" aria-hidden="true"></div>
                </div>
              </div>}
          </aside>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05" aria-hidden="true"></div>
    </main>;
};
export default Hero;