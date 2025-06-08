import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import CalPopupButton from "./CalPopupButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    description: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation du format de l'email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez entrer une adresse mail valide.");
      return;
    }

    // Validation des champs obligatoires
    if (!formData.firstName || !formData.email || !formData.company || !formData.description) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsLoading(true);

    try {
      // Configuration EmailJS
      const serviceId = 'service_z5ljct4';
      const templateId = 'template_aom27is';
      const notificationTemplateId = 'template_oecjeu8';
      const publicKey = '4su8dhWcrgaNGb2tm';

      const templateParams = {
        from_name: formData.firstName,
        from_email: formData.email,
        company: formData.company,
        message: formData.description,
        to_name: 'Kairos AI',
      };

      // Premier envoi : email de confirmation au client
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Second envoi : notification avec les infos du formulaire à Gabriel
      await emailjs.send(serviceId, notificationTemplateId, templateParams, publicKey);
      
      toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");

      // Reset form
      setFormData({
        firstName: "",
        email: "",
        company: "",
        description: ""
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="details" className="w-full bg-white py-12 sm:py-16 md:py-20" role="region" aria-labelledby="contact-title">
      <div className="section-container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Chip and Bar */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <div className="pulse-chip">
            <span>Contact</span>
          </div>
          <div className="h-[1px] bg-gray-300 flex-grow" aria-hidden="true"></div>
        </div>
        
        {/* Titre principal centré */}
        <div className="text-center pb-10 sm:pb-12 md:pb-16">
          <h2 id="contact-title" className="text-4xl sm:text-5xl font-display font-bold text-gray-900">
            On vous écoute. Et on agit.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          
          {/* Left Card - Consultation Offer */}
          <article className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant h-full flex flex-col"
                   itemScope 
                   itemType="https://schema.org/Service">
            
            {/* Card Header with background image */}
            <header className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" 
                    style={{
                      backgroundImage: "url('/background-section3.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      willChange: "auto"
                    }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold" itemProp="name">
                Réservez un audit gratuit
              </h2>
            </header>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8 flex-grow flex flex-col" style={{
            backgroundColor: "#FFFFFF"
          }}>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 sm:mb-4" itemProp="headline">
                  30 min pour transformer votre acquisition
                </h3>
                
                <p className="text-gray-700 text-sm sm:text-base mb-4" itemProp="description">
                  Analysons ensemble votre acquisition client actuelle et identifions les automatisations prioritaires à fort impact pour votre entreprise.
                </p>
                <div className="space-y-2 mb-6" role="list" aria-label="Bénéfices de l'audit gratuit">
                  {[{
                    text: "Diagnostic complet de votre acquisition actuelle"
                  }, {
                    text: "Identification des automatisations prioritaires"
                  }, {
                    text: "Démonstration de solutions concrètes"
                  }, {
                    text: "Feuille de route personnalisée"
                  }, {
                    text: "Estimation du ROI et planning détaillé"
                  }].map((item, index) => (
                    <div key={index} className="flex items-start" role="listitem">
                      <span className="text-orange-500 mr-2 font-semibold" aria-hidden="true">✓</span>
                      <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"
                           itemScope 
                           itemType="https://schema.org/Review">
                  <p className="italic text-gray-700 text-sm sm:text-base mb-2" itemProp="reviewBody">
                    💬 "Gabriel a identifié en 30 minutes des automatisations qui nous ont fait gagner une dizaine d'heures par semaine"
                  </p>
                  <footer className="text-sm text-gray-600 text-right font-medium">
                    <cite>
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">- Gaelle</span>
                      </span>, Auto-entrepreneuse
                    </cite>
                  </footer>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </blockquote>
              </div>
              
              <div className="mt-auto pt-4">
                <CalPopupButton className="w-full" />
              </div>
            </div>
          </article>

          {/* Right Card - Contact Form */}
          <article className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant h-full flex flex-col">
            {/* Card Header with background image */}
            <header className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" 
                    style={{
                      backgroundImage: "url('/background-section1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      willChange: "auto"
                    }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Nous contacter
              </h2>
            </header>
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-8 flex-grow flex flex-col" style={{
            backgroundColor: "#FFFFFF"
          }}>
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <div className="flex-grow space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="firstName" className="sr-only">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Prénom"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                      required
                      aria-required="true"
                      aria-describedby="firstName-error"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="sr-only">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Adresse mail"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                      required
                      aria-required="true"
                      aria-describedby="email-error"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="sr-only">Entreprise *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Entreprise"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                      required
                      aria-required="true"
                      aria-describedby="company-error"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="sr-only">Description de votre projet *</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Décrivez brièvement votre situation, vos problématiques et vos objectifs"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent min-h-[120px] sm:min-h-[150px] resize-y"
                      required
                      aria-required="true"
                      aria-describedby="description-error"
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: isLoading ? '#FEB166' : '#FE5C02' }}
                    aria-label="Envoyer le formulaire de contact"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
