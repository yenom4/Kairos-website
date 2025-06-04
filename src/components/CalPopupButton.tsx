import React, { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { toast } from 'sonner'; // Assurez-vous que toast est disponible ou gérez les erreurs autrement

interface CalPopupButtonProps {
  text?: string;
  /** For specific overrides or additional classes */
  className?: string; 
  calLink?: string;
  /** For shared base styling across different button types */
  baseClassName?: string; 
}

const CalPopupButton: React.FC<CalPopupButtonProps> = ({
  text = "Réserver un créneau",
  className = "", // For specific overrides
  baseClassName = "inline-flex items-center justify-center px-8 py-3 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white min-w-[260px] text-base",
  calLink = "gabriel-loree/30min"
}) => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({});
        cal("ui", {
          "styles": {"branding":{"brandColor":"#EA580C"}}, // Tailwind orange-600
          "hideEventTypeDetails": true,
          "layout": "month_view"
        });
      } catch (e) {
        console.error("Erreur lors de l'initialisation de Cal.com API:", e);
        // toast.error("Impossible de charger le module de réservation."); // Optionnel
      }
    })();
  }, []);

  // Specific classes for the solid orange button style
  const solidButtonClasses = "bg-orange-600 hover:bg-orange-700 text-white";

  return (
    <button
      data-cal-link={calLink}
      className={`${baseClassName} ${solidButtonClasses} ${className}`.trim()}
    >
      {text}
    </button>
  );
};

export default CalPopupButton; 