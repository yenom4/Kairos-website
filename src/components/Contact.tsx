import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import CalPopupButton from "./CalPopupButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    description: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
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

    // Demo form submission
    console.log("Form data submitted:", formData);
    toast.success("Message envoyé avec succès !");

    // Reset form
    setFormData({
      firstName: "",
      email: "",
      company: "",
      description: ""
    });
  };
  return <section id="details" className="w-full bg-white pt-12 sm:pt-16 md:pt-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <div className="pulse-chip animate-on-scroll">
            <span>Contact</span>
          </div>
          <div className="h-[1px] bg-gray-300 flex-grow animate-on-scroll"></div>
        </div>
        <div className="text-center pb-10 sm:pb-12 md:pb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900">
            On vous écoute. Et on agit.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant h-full flex flex-col">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Réservez un audit gratuit
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8 flex-grow flex flex-col" style={{
            backgroundColor: "#FFFFFF"
          }}>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
                  30 min pour transformer votre acquisition
                </h3>
                
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  Analysons ensemble votre acquisition client actuelle et identifions les automatisations prioritaires à fort impact pour votre entreprise.
                </p>
                <div className="space-y-2 mb-6">
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
                    <div key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 font-semibold">✓</span>
                      <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <p className="italic text-gray-700 text-sm sm:text-base mb-2">
                    💬 "Gabriel a identifié en 30 minutes des automatisations qui nous ont fait gagner une dizaine d'heures par semaine"
                  </p>
                  <p className="text-sm text-gray-600 text-right font-medium">
                    - Gaelle, Auto-entrepreneuse
                  </p>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <CalPopupButton className="w-full" />
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant h-full flex flex-col">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Nous contacter
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-8 flex-grow flex flex-col" style={{
            backgroundColor: "#FFFFFF"
          }}>
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <div className="flex-grow space-y-4 sm:space-y-6">
                  <div>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName} 
                      onChange={handleChange} 
                      placeholder="Prénom"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Adresse mail"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder="Entreprise"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement votre situation, vos problématiques et vos objectifs"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent min-h-[120px] sm:min-h-[150px] resize-y"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: '#FE5C02' }}
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
