import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-gray-800 hover:text-orange-500 focus:outline-none"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-orange-500 ml-4 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 ml-4 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm sm:text-base">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    id: 'q1',
    question: "Quelles tâches Kairos AI peut automatiser pour mon entreprise et quelles solutions apportez-vous ?",
    answer: "Nous automatisons la prospection, qualification des leads, réponses aux emails, nurturing personnalisé et préparation commerciale. Nous couvrons 70-90% de vos tâches répétitives d'acquisition client de bout en bout."
  },
  {
    id: 'q2',
    question: "Puis-je choisir d'automatiser seulement certains processus ?",
    answer: "Oui, notre offre est modulaire. Vous pouvez déployer chaque système individuellement, puis étendre progressivement selon vos besoins et résultats."
  },
  {
    id: 'q3',
    question: "Mes équipes vont-elles pouvoir utiliser le système sans compétences techniques ?",
    answer: "Absolument. Nos solutions sont conçues pour les utilisateurs métier, avec formation complète, documentation détaillée et support continu. L'interface est intuitive et ne nécessite aucune expertise technique."
  },
  {
    id: 'q4',
    question: "Les automatisations peuvent-elles s'adapter si mes processus évoluent ?",
    answer: "Oui, nos workflows sont entièrement personnalisables et évolutifs. Nous proposons une optimisation continue et adaptons les automatisations à l'évolution de vos processus commerciaux."
  },
  {
    id: 'q5',
    question: "Comment calculez-vous le ROI et en combien de temps puis-je l'atteindre ?",
    answer: "Nous mesurons l'augmentation des leads, l'amélioration des conversions et le temps économisé. Le ROI est généralement atteint en 2 à 4 mois."
  },
  {
    id: 'q6',
    question: "Comment fonctionne votre modèle tarifaire ?",
    answer: "Nous fonctionnons avec des frais d'installation uniques, puis des frais de maintenance mensuels . Nos tarifs dépendent de vos objectifs. Discutons ensemble de la solution la plus pertinente."
  },
  {
    id: 'q7',
    question: "Quel niveau d'accompagnement proposez-vous après l'implémentation ?",
    answer: "Nous assurons support technique continu, optimisations régulières et ajustements selon vos performances. Notre équipe reste disponible pour questions et améliorations du système."
  },
  {
    id: 'q8',
    question: "Comment garantissez-vous concrètement la sécurité et la confidentialité de mes données clients ?",
    answer: "Nos systèmes sont installés localement chez vous, conformes RGPD avec chiffrement des données et accès sécurisés. Vous gardez le contrôle total de vos données clients."
  }
];

const FAQSection = () => {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const handleQuestionClick = (id: string) => {
    setOpenQuestionId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-gray-50 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
      <div className="section-container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Chip and Bar */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <div className="pulse-chip animate-on-scroll">
            <span>FAQ</span>
          </div>
          <div className="h-[1px] bg-gray-300 flex-grow animate-on-scroll"></div>
        </div>

        {/* Titles */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
            On répond avant que vous demandiez
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services, notre méthode, et ce qu'on peut réellement automatiser pour vous.
          </p>
        </div>

        {/* Q&A Grid - Rétablissement des deux colonnes distinctes */}
        <div className="grid md:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16">
          <div> {/* Column 1 */}
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestionId === item.id}
                onClick={() => handleQuestionClick(item.id)}
              />
            ))}
          </div>
          <div> {/* Column 2 */}
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestionId === item.id}
                onClick={() => handleQuestionClick(item.id)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Vous avez d'autres questions ? Discutons-en !<br className="sm:hidden"/> Contactez-nous dès maintenant.
          </p>
          <a
            href="#details" // Lien vers la section contact (ID 'details')
            className={
              "inline-flex items-center justify-center group " +
              "px-8 py-4 text-base font-medium text-white " +
              "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 " +
              "rounded-xl shadow-lg hover:shadow-xl " +
              "transform transition-all duration-300 ease-in-out " +
              "hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
            }
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 