import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('kairos-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay to not interfere with initial page load
      setTimeout(() => setShowBanner(true), 1500);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    
    localStorage.setItem('kairos-cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('kairos-cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    
    localStorage.setItem('kairos-cookie-consent', JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Cannot disable essential cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      {showPreferences && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cookie-overlay"
          onClick={() => setShowPreferences(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {!showPreferences ? (
            /* Simple Banner */
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md cookie-banner">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <Cookie className="w-6 h-6 text-pulse-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      🍪 Nous utilisons des cookies
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience de navigation, 
                      analyser l'utilisation de notre site et personnaliser le contenu. 
                      Certains cookies sont essentiels au fonctionnement du site.
                    </p>
                    <Link 
                      to="/politique-de-confidentialite"
                      className="text-pulse-500 hover:text-pulse-600 text-sm underline mt-2 inline-block"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Gérer les préférences
                  </button>
                  
                  <button
                    onClick={handleRejectNonEssential}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
                  >
                    Refuser
                  </button>
                  
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 bg-pulse-500 hover:bg-pulse-600 text-white rounded-xl transition-colors text-sm font-medium shadow-md"
                    style={{ backgroundColor: '#FE5C02' }}
                  >
                    Accepter tout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Preferences Panel */
            <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-md cookie-banner relative max-w-4xl mx-auto">
              <button
                onClick={() => setShowPreferences(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <Shield className="w-6 h-6 text-pulse-500 mr-3" />
                  Gestion des cookies
                </h3>
                <p className="text-gray-600 mb-6">
                  Configurez vos préférences de cookies. Les cookies essentiels ne peuvent pas être désactivés.
                </p>
                
                <div className="space-y-6 mb-8">
                  {/* Essential Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">
                        Cookies essentiels
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nécessaires au fonctionnement du site (navigation, sécurité, formulaires).
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-pulse-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">
                        Cookies d'analyse
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.analytics 
                            ? 'bg-pulse-500 justify-end' 
                            : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">
                        Cookies marketing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Permettent de personnaliser les publicités et mesurer leur efficacité.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.marketing 
                            ? 'bg-pulse-500 justify-end' 
                            : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={handleRejectNonEssential}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
                  >
                    Essentiels uniquement
                  </button>
                  
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2 bg-pulse-500 hover:bg-pulse-600 text-white rounded-xl transition-colors text-sm font-medium shadow-md"
                    style={{ backgroundColor: '#FE5C02' }}
                  >
                    Sauvegarder les préférences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner; 