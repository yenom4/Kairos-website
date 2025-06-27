import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield, Mail, Phone, ArrowUp, Clock, Lock, Eye, FileText, Users, Globe, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CookieBanner from "@/components/CookieBanner";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Table des matières
  const tableOfContents = [
    { id: 'introduction', title: '1. Introduction et Champ d\'Application', icon: FileText },
    { id: 'responsable-traitement', title: '2. Responsable du Traitement', icon: Users },
    { id: 'donnees-collectees', title: '3. Catégories de Données Collectées', icon: Eye },
    { id: 'finalites-bases', title: '4. Finalités et Bases Légales', icon: Users },
    { id: 'cookies', title: '5. Cookies et Technologies de Suivi', icon: Eye },
    { id: 'partage-donnees', title: '6. Partage et Transfert des Données', icon: Globe },
    { id: 'conservation', title: '7. Durée de Conservation', icon: Clock },
    { id: 'droits-utilisateurs', title: '8. Droits des Utilisateurs (RGPD)', icon: Shield },
    { id: 'securite', title: '9. Sécurité des Données', icon: Lock },
    { id: 'donnees-mineurs', title: '10. Données des Mineurs', icon: Shield },
    { id: 'modifications', title: '11. Modifications de la Politique', icon: FileText },
    { id: 'reclamations', title: '12. Réclamations et Recours', icon: Mail },
    { id: 'contact', title: '13. Contact et Informations', icon: Mail },
  ];

  // SEO structured data
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Politique de Confidentialité - Kairos AI",
      "description": "Politique de confidentialité et de protection des données personnelles de Kairos AI. Transparence totale sur la collecte, l'utilisation et la protection de vos informations.",
      "url": "https://www.kairos-ai.fr/politique-de-confidentialite",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Kairos AI",
        "url": "https://www.kairos-ai.fr"
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15",
      "author": {
        "@type": "Organization",
        "name": "Kairos AI"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://www.kairos-ai.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Politique de Confidentialité",
          "item": "https://www.kairos-ai.fr/politique-de-confidentialite"
        }
      ]
    }
  ];

  // Gestion du scroll pour la navigation sticky et le bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => item.id);
      const scrollPosition = window.scrollY + 150;

      // Déterminer la section active
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Afficher/masquer le bouton retour en haut
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Politique de Confidentialité | Kairos AI - Protection des Données Personnelles"
        description="Politique de confidentialité et de protection des données personnelles de Kairos AI. Transparence totale sur la collecte, l'utilisation et la protection de vos informations RGPD."
        keywords="politique confidentialité, protection données personnelles, RGPD, Kairos AI, privacy policy, données personnelles, consentement, droits utilisateurs"
        canonicalUrl="https://www.kairos-ai.fr/politique-de-confidentialite"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav aria-label="Fil d'Ariane" className="flex items-center space-x-2 text-sm">
              <Link 
                to="/" 
                className="flex items-center text-gray-500 hover:text-pulse-600 transition-colors"
                aria-label="Retour à l'accueil"
              >
                <Home className="w-4 h-4 mr-1" />
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium">Politique de Confidentialité</span>
            </nav>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pulse-50 to-white py-16">
          <div className="absolute inset-0 bg-[url('/Header-background.webp')] bg-cover bg-center opacity-5"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Chip */}
              <div className="flex justify-center mb-8">
                <div className="pulse-chip inline-flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Protection des données</span>
                </div>
              </div>
              
              {/* Titre principal */}
              <h1 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
                Politique de Confidentialité
              </h1>
              
              {/* Sous-titre */}
              <p className="section-subtitle text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Kairos AI s'engage à protéger vos données personnelles avec la plus grande transparence
              </p>
              
              {/* Date de mise à jour */}
              <div className="flex justify-center">
                <div className="inline-flex items-center text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Dernière mise à jour : 08 juin 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Table des matières - Desktop Sticky */}
            <aside className="lg:w-1/4">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl shadow-elegant p-6 mb-8">
                  <h2 className="text-lg font-semibold mb-4 text-gray-900">
                    Table des matières
                  </h2>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "flex items-center w-full text-left p-3 rounded-lg transition-all duration-200 text-sm",
                            activeSection === item.id
                              ? "bg-pulse-100 text-pulse-700 border-l-4 border-pulse-500"
                              : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                          )}
                        >
                          <IconComponent className="w-4 h-4 mr-3 flex-shrink-0" />
                          <span className="font-medium">{item.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Informations de contact rapide */}
                <div className="bg-pulse-50 border border-pulse-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-pulse-900 mb-4 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact DPO
                  </h3>
                  <div className="space-y-3 text-sm">
                    <a 
                      href="mailto:privacy@kairos-ai.fr" 
                      className="flex items-center text-pulse-700 hover:text-pulse-800 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      privacy@kairos-ai.fr
                    </a>
                    <a 
                      href="tel:+33667098487" 
                      className="flex items-center text-pulse-700 hover:text-pulse-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      06 67 09 84 87
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contenu principal */}
            <main className="lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
                <div className="p-8 md:p-12 prose prose-lg max-w-none">

                  {/* Section 1: Introduction et Champ d'Application */}
                  <section id="introduction" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-pulse-500" />
                      1. Introduction et Champ d'Application
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Notre Engagement</h3>
                    <div className="bg-pulse-50 border-l-4 border-pulse-500 p-6 rounded-r-lg mb-6">
                      <p className="text-gray-800 leading-relaxed">
                        <strong>Kairos AI</strong> s'engage fermement à protéger la vie privée et les données personnelles de tous les utilisateurs de ses services. 
                        En tant qu'agence spécialisée dans l'automatisation par intelligence artificielle, nous comprenons l'importance cruciale de la confidentialité 
                        des données dans l'écosystème numérique actuel.
                      </p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cette politique de confidentialité détaille de manière transparente comment nous collectons, utilisons, protégeons et partageons 
                      vos informations personnelles lorsque vous :
                    </p>
                    
                    <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                      <li>Naviguez sur notre site web kairos-ai.fr</li>
                      <li>Utilisez nos services d'automatisation d'acquisition client</li>
                      <li>Communiquez avec notre équipe</li>
                      <li>Participez à nos événements ou formations</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Acceptation des Conditions</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      En utilisant notre site web ou nos services, vous reconnaissez avoir lu, compris et accepté cette politique de confidentialité. 
                      Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser nos services.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Note importante :</strong> Cette politique s'applique uniquement aux données collectées par Kairos AI et ne couvre pas 
                        les pratiques de sites tiers vers lesquels nous pourrions diriger des liens.
                      </p>
                    </div>
                  </section>

                  {/* Section 2: Responsable du Traitement */}
                  <section id="responsable-traitement" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-pulse-500" />
                      2. Responsable du Traitement des Données
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-4">Kairos AI</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>Statut :</strong> Auto-entreprise</p>
                          <p><strong>Téléphone :</strong> 06 67 09 84 87</p>
                          <p><strong>Email :</strong> contact@kairos-ai.fr</p>
                        </div>
                      </div>
                      
                      <div className="bg-pulse-50 border border-pulse-200 p-6 rounded-lg">
                        <h3 className="font-semibold text-pulse-900 mb-4">Responsable de la Protection des Données</h3>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Email :</strong>
                            <a href="mailto:privacy@kairos-ai.fr" className="text-pulse-700 hover:text-pulse-800 ml-2">
                              privacy@kairos-ai.fr
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      En tant que responsable du traitement, Kairos AI détermine les finalités et les moyens du traitement de vos données personnelles 
                      et s'engage à respecter l'ensemble de la réglementation applicable en matière de protection des données.
                    </p>
                  </section>

                  {/* Section 3: Catégories de Données Collectées */}
                  <section id="donnees-collectees" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Eye className="w-6 h-6 mr-3 text-pulse-500" />
                      3. Catégories de Données Collectées
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 Données Collectées Directement</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Informations d'identification et de contact :</h4>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                          <li>Nom et prénom</li>
                          <li>Adresse email professionnelle</li>
                          <li>Numéro de téléphone</li>
                          <li>Fonction et poste occupé</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-green-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Informations sur votre entreprise :</h4>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                          <li>Dénomination sociale</li>
                          <li>Secteur d'activité</li>
                          <li>Taille de l'entreprise (nombre d'employés)</li>
                          <li>Site web de l'entreprise</li>
                          <li>Adresse de l'entreprise</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Données de projet et besoins :</h4>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                          <li>Description des défis d'acquisition client</li>
                          <li>Objectifs d'automatisation souhaités</li>
                          <li>Budget prévisionnel pour nos services</li>
                          <li>Processus commerciaux actuels</li>
                          <li>Outils et technologies utilisés</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-orange-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Communications :</h4>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                          <li>Messages envoyés via nos formulaires de contact</li>
                          <li>Correspondances par email</li>
                          <li>Enregistrements d'appels téléphoniques (avec votre consentement préalable)</li>
                          <li>Participations à nos webinaires et événements</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 Données Collectées Automatiquement</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">Données techniques de navigation</h4>
                        <ul className="text-sm text-blue-800 space-y-2">
                          <li>• Adresse IP et localisation géographique approximative</li>
                          <li>• Type et version du navigateur utilisé</li>
                          <li>• Système d'exploitation</li>
                          <li>• Résolution d'écran et taille de la fenêtre</li>
                          <li>• Langue du navigateur</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-3">Données de comportement sur le site</h4>
                        <ul className="text-sm text-green-800 space-y-2">
                          <li>• Pages visitées et durée de consultation</li>
                          <li>• Chemin de navigation et séquences de pages</li>
                          <li>• Source de trafic (moteur de recherche, lien direct, réseaux sociaux)</li>
                          <li>• Actions effectuées (téléchargements, clics sur liens)</li>
                          <li>• Temps passé sur chaque page</li>
                          <li>• Taux de rebond et de conversion</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-purple-900 mb-2">Données de performance</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Temps de chargement des pages</li>
                        <li>• Erreurs techniques rencontrées</li>
                        <li>• Interactions avec les éléments du site</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">3.3 Données Collectées via des Tiers</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-pulse-300 pl-4">
                        <h4 className="font-semibold text-gray-800">Réseaux sociaux professionnels :</h4>
                        <p className="text-gray-700 text-sm">
                          Informations publiques de profil LinkedIn lors de connexions ou interactions, données d'engagement sur nos contenus partagés
                        </p>
                      </div>
                      <div className="border-l-4 border-pulse-300 pl-4">
                        <h4 className="font-semibold text-gray-800">Partenaires commerciaux :</h4>
                        <p className="text-gray-700 text-sm">
                          Recommandations et références clients (avec consentement), données de participation à des événements communs
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Finalités et Bases Légales du Traitement */}
                  <section id="finalites-bases" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-pulse-500" />
                      4. Finalités et Bases Légales du Traitement
                    </h2>
                    
                    <div className="space-y-8">
                      {/* 4.1 Exécution de nos Services */}
                      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">4.1 Exécution de nos Services d'Automatisation IA</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-800 mb-2">Finalités :</h4>
                          <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                            <li>Analyse de vos besoins en automatisation d'acquisition client</li>
                            <li>Conception et déploiement de solutions d'automatisation personnalisées</li>
                            <li>Support technique et maintenance de nos systèmes</li>
                            <li>Formation de vos équipes aux outils déployés</li>
                            <li>Suivi des performances et optimisation continue</li>
                          </ul>
                        </div>
                        <p className="text-blue-800 text-sm">
                          <strong>Base légale :</strong> Exécution du contrat de prestation de services
                        </p>
                      </div>

                      {/* 4.2 Communication et Marketing */}
                      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-green-900 mb-4">4.2 Communication et Marketing</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-green-800 mb-2">Finalités :</h4>
                          <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                            <li>Envoi de newsletters sur l'actualité de l'IA et de l'automatisation</li>
                            <li>Partage d'insights et de bonnes pratiques sectorielles</li>
                            <li>Invitations à nos webinaires et événements</li>
                            <li>Présentation de nos nouveaux services et fonctionnalités</li>
                            <li>Campagnes de retargeting personnalisées</li>
                          </ul>
                        </div>
                        <p className="text-green-800 text-sm">
                          <strong>Base légale :</strong> Consentement (pour les newsletters) et intérêt légitime (pour la prospection B2B)
                        </p>
                      </div>

                      {/* 4.3 Amélioration de nos Services */}
                      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-purple-900 mb-4">4.3 Amélioration de nos Services</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-purple-800 mb-2">Finalités :</h4>
                          <ul className="list-disc pl-6 text-purple-700 space-y-1 text-sm">
                            <li>Analyse de l'utilisation de notre site web et de nos outils</li>
                            <li>Développement de nouvelles fonctionnalités d'automatisation</li>
                            <li>Optimisation de l'expérience utilisateur</li>
                            <li>Tests A/B sur nos interfaces et processus</li>
                            <li>Recherche et développement en intelligence artificielle</li>
                          </ul>
                        </div>
                        <p className="text-purple-800 text-sm">
                          <strong>Base légale :</strong> Intérêt légitime
                        </p>
                      </div>

                      {/* 4.4 Obligations Légales */}
                      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-orange-900 mb-4">4.4 Obligations Légales et Comptables</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-orange-800 mb-2">Finalités :</h4>
                          <ul className="list-disc pl-6 text-orange-700 space-y-1 text-sm">
                            <li>Respect des obligations comptables et fiscales</li>
                            <li>Conservation des documents contractuels</li>
                            <li>Réponse aux demandes des autorités compétentes</li>
                            <li>Gestion des litiges et réclamations</li>
                          </ul>
                        </div>
                        <p className="text-orange-800 text-sm">
                          <strong>Base légale :</strong> Obligation légale
                        </p>
                      </div>

                      {/* 4.5 Sécurité */}
                      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-red-900 mb-4">4.5 Sécurité et Prévention des Fraudes</h3>
                        <div className="mb-4">
                          <h4 className="font-semibold text-red-800 mb-2">Finalités :</h4>
                          <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                            <li>Protection de nos systèmes contre les cyberattaques</li>
                            <li>Détection et prévention des usages frauduleux</li>
                            <li>Maintien de la sécurité de nos infrastructures IA</li>
                          </ul>
                        </div>
                        <p className="text-red-800 text-sm">
                          <strong>Base légale :</strong> Intérêt légitime
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Cookies et Technologies de Suivi */}
                  <section id="cookies" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Eye className="w-6 h-6 mr-3 text-pulse-500" />
                      5. Cookies et Technologies de Suivi
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Types de Cookies Utilisés</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-3">Cookies Essentiels (obligatoires)</h4>
                        <ul className="text-sm text-green-800 space-y-2 mb-3">
                          <li>• Gestion des sessions utilisateur</li>
                          <li>• Sécurité et authentification</li>
                          <li>• Préférences linguistiques</li>
                          <li>• Fonctionnement du panier de services</li>
                        </ul>
                        <p className="text-xs text-green-700 font-medium">Durée : Session ou 24h maximum</p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">Cookies Analytiques</h4>
                        <ul className="text-sm text-blue-800 space-y-2 mb-3">
                          <li>• Google Analytics 4 pour l'analyse d'audience</li>
                          <li>• Mesure des performances du site</li>
                          <li>• Compréhension des parcours utilisateur</li>
                        </ul>
                        <p className="text-xs text-blue-700 font-medium">Durée : 14 mois maximum</p>
                      </div>
                      
                      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-3">Cookies de Personnalisation</h4>
                        <ul className="text-sm text-purple-800 space-y-2 mb-3">
                          <li>• Mémorisation de vos préférences d'affichage</li>
                          <li>• Personnalisation du contenu selon vos intérêts</li>
                          <li>• Amélioration de l'expérience utilisateur</li>
                        </ul>
                        <p className="text-xs text-purple-700 font-medium">Durée : 12 mois</p>
                      </div>
                      
                      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-3">Cookies Marketing et Publicitaires</h4>
                        <ul className="text-sm text-orange-800 space-y-2 mb-3">
                          <li>• Suivi des campagnes publicitaires</li>
                          <li>• Retargeting sur les réseaux sociaux</li>
                          <li>• Mesure de l'efficacité de nos campagnes</li>
                        </ul>
                        <p className="text-xs text-orange-700 font-medium">Durée : 6 mois maximum</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">5.2 Gestion de vos Préférences Cookies</h3>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                      <p className="text-yellow-800 mb-4">
                        Vous pouvez gérer vos préférences de cookies à tout moment :
                      </p>
                      <ul className="list-disc pl-6 text-yellow-700 space-y-2 text-sm">
                        <li>Via le bandeau de consentement lors de votre première visite</li>
                        <li>Dans les paramètres de votre navigateur web</li>
                        <li>Via notre centre de préférences : [Lien vers le gestionnaire de cookies]</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <p className="text-red-800 text-sm">
                        <strong>Important :</strong> La désactivation de certains cookies peut affecter le bon fonctionnement 
                        de notre site et la qualité de votre expérience utilisateur.
                      </p>
                    </div>
                  </section>

                  {/* Section 6: Partage et Transfert des Données */}
                  <section id="partage-donnees" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-pulse-500" />
                      6. Partage et Transfert des Données
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Destinataires des Données</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Sous-traitants techniques :</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Hébergeur web : Hostinger</li>
                          <li>• Service d'envoi d'emails : Google workspace</li>
                          <li>• Plateforme CRM : Airtable</li>
                          <li>• Outils d'automatisation : n8n et solutions associées</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-green-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Partenaires commerciaux :</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Uniquement dans le cadre de projets conjoints et avec votre consentement explicite</li>
                          <li>• Partenaires technologiques pour l'intégration de solutions complémentaires</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Autorités compétentes :</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• En cas d'obligation légale ou de demande judiciaire</li>
                          <li>• Pour la protection de nos droits et intérêts légitimes</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">6.2 Transferts Hors Union Européenne</h3>
                    
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                      <p className="text-blue-800 mb-4">
                        Certains de nos prestataires peuvent être situés en dehors de l'Union européenne. Dans ces cas :
                      </p>
                      <ul className="list-disc pl-6 text-blue-700 space-y-2 text-sm">
                        <li>Nous nous assurons que le pays bénéficie d'une décision d'adéquation de la Commission européenne, ou</li>
                        <li>Nous mettons en place des garanties appropriées (clauses contractuelles types, certifications)</li>
                        <li>Nous obtenons votre consentement explicite lorsque requis</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 text-sm">
                        <strong>Pays concernés :</strong> États-Unis (pour certains services cloud avec garanties Privacy Shield successeur)
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">6.3 Engagement de Non-Vente</h3>
                    
                    <div className="bg-pulse-50 border-l-4 border-pulse-500 p-6 rounded-r-lg">
                      <p className="text-gray-800 leading-relaxed">
                        <strong>Kairos AI s'engage formellement à ne jamais vendre, louer ou échanger vos données personnelles 
                        à des fins commerciales avec des tiers.</strong>
                      </p>
                    </div>
                  </section>

                  {/* Section 7: Conservation */}
                  <section id="conservation" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Clock className="w-6 h-6 mr-3 text-pulse-500" />
                      7. Durée de Conservation
                    </h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 p-3 text-left font-semibold">Type de données</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Durée de conservation</th>
                            <th className="border border-gray-300 p-3 text-left font-semibold">Justification</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3">Données prospects</td>
                            <td className="border border-gray-300 p-3">3 ans sans interaction</td>
                            <td className="border border-gray-300 p-3">Intérêt légitime commercial</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Données clients</td>
                            <td className="border border-gray-300 p-3">5 ans après fin du contrat</td>
                            <td className="border border-gray-300 p-3">Obligations comptables</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3">Données techniques</td>
                            <td className="border border-gray-300 p-3">13 mois maximum</td>
                            <td className="border border-gray-300 p-3">Recommandations CNIL</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3">Données marketing</td>
                            <td className="border border-gray-300 p-3">3 ans ou retrait du consentement</td>
                            <td className="border border-gray-300 p-3">Durée de validité du consentement</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Section 8: Sécurité */}
                  <section id="securite" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Lock className="w-6 h-6 mr-3 text-pulse-500" />
                      9. Sécurité des Données
                    </h2>
                    
                    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                      <p className="text-green-800">
                        <strong>Engagement sécurité :</strong> Nous mettons en œuvre toutes les mesures techniques 
                        et organisationnelles appropriées pour assurer un niveau de sécurité adapté au risque.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mesures techniques</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <Lock className="w-4 h-4 mr-2 text-green-600" />
                            Chiffrement SSL/TLS
                          </li>
                          <li className="flex items-center">
                            <Lock className="w-4 h-4 mr-2 text-green-600" />
                            Sauvegardes régulières
                          </li>
                          <li className="flex items-center">
                            <Lock className="w-4 h-4 mr-2 text-green-600" />
                            Contrôles d'accès
                          </li>
                          <li className="flex items-center">
                            <Lock className="w-4 h-4 mr-2 text-green-600" />
                            Monitoring 24/7
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mesures organisationnelles</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-blue-600" />
                            Formation du personnel
                          </li>
                          <li className="flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-blue-600" />
                            Politique de confidentialité
                          </li>
                          <li className="flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-blue-600" />
                            Audits réguliers
                          </li>
                          <li className="flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-blue-600" />
                            Plan de continuité
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 9: Droits des utilisateurs */}
                  <section id="droits-utilisateurs" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Shield className="w-6 h-6 mr-3 text-pulse-500" />
                      8. Droits des Utilisateurs (RGPD)
                    </h2>
                    
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                      <p className="text-blue-800">
                        <strong>Vos droits RGPD :</strong> Vous disposez de droits sur vos données personnelles 
                        que vous pouvez exercer à tout moment en nous contactant.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-400 pl-4">
                          <h4 className="font-semibold text-gray-800">Droit d'accès</h4>
                          <p className="text-sm text-gray-700">Obtenir une copie de vos données</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-4">
                          <h4 className="font-semibold text-gray-800">Droit de rectification</h4>
                          <p className="text-sm text-gray-700">Corriger vos données inexactes</p>
                        </div>
                        <div className="border-l-4 border-red-400 pl-4">
                          <h4 className="font-semibold text-gray-800">Droit d'effacement</h4>
                          <p className="text-sm text-gray-700">Supprimer vos données (droit à l'oubli)</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="border-l-4 border-yellow-400 pl-4">
                          <h4 className="font-semibold text-gray-800">Droit à la limitation</h4>
                          <p className="text-sm text-gray-700">Limiter le traitement de vos données</p>
                        </div>
                        <div className="border-l-4 border-purple-400 pl-4">
                          <h4 className="font-semibold text-gray-800">Droit à la portabilité</h4>
                          <p className="text-sm text-gray-700">Récupérer vos données dans un format lisible</p>
                        </div>
                        <div className="border-l-4 border-gray-400 pl-4">
                          <h4 className="font-semibold text-gray-800">Droit d'opposition</h4>
                          <p className="text-sm text-gray-700">Vous opposer au traitement</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Comment exercer vos droits ?</h4>
                      <p className="text-gray-700 mb-4">
                        Pour exercer vos droits, contactez notre DPO par email ou courrier postal. 
                        Nous vous répondrons dans un délai maximum d'1 mois.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          to="/#details" 
                          className="flex items-center justify-center bg-pulse-500 hover:bg-pulse-600 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contacter le DPO
                        </Link>
                        <p className="text-sm text-gray-600 self-center">
                          Délai de réponse : <strong>1 mois maximum</strong>
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 10: Modifications */}
                  <section id="modifications" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-pulse-500" />
                      11. Modifications de la Politique
                    </h2>
                    
                    <p className="text-gray-700 mb-4">
                      Cette politique de confidentialité peut être modifiée pour refléter les évolutions 
                      de nos services ou les changements réglementaires.
                    </p>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <p className="text-yellow-800">
                        <strong>Notification :</strong> Toute modification significative vous sera notifiée 
                        par email ou via une notification sur notre site web.
                      </p>
                    </div>
                  </section>

                  {/* Section 11: Contact */}
                  <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Mail className="w-6 h-6 mr-3 text-pulse-500" />
                      13. Contact et Informations
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-pulse-50 border border-pulse-200 p-6 rounded-lg">
                        <h3 className="font-semibold text-pulse-900 mb-4">Délégué à la Protection des Données</h3>
                        <div className="space-y-3 text-sm">
                          <p>
                            <strong>Email :</strong>
                            <a href="mailto:privacy@kairos-ai.fr" className="text-pulse-700 hover:text-pulse-800 ml-2">
                              privacy@kairos-ai.fr
                            </a>
                          </p>
                          <p>
                            <strong>Téléphone :</strong>
                            <a href="tel:+33667098487" className="text-pulse-700 hover:text-pulse-800 ml-2">
                              06 67 09 84 87
                            </a>
                          </p>
                          <p>
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-4">Autorité de contrôle</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés)</p>
                          <p>3 Place de Fontenoy - TSA 80715</p>
                          <p>75334 PARIS CEDEX 07</p>
                          <p>
                            Site web : 
                            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">
                              www.cnil.fr
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
                      <p className="text-blue-800 mb-4">
                        <strong>Une question sur cette politique de confidentialité ?</strong>
                      </p>
                      <p className="text-blue-700 text-sm mb-4">
                        Notre équipe est à votre disposition pour toute question relative à la protection 
                        de vos données personnelles.
                      </p>
                      <Link 
                        to="/#details" 
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Nous contacter
                      </Link>
                    </div>
                  </section>

                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Bouton retour en haut */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-pulse-500 hover:bg-pulse-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
            aria-label="Retour en haut de la page"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <Footer />
      </div>

      <CookieBanner />
    </>
  );
};

export default PrivacyPolicy; 