import React, { useRef } from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "L'équipe Kairos a vraiment pris le temps de comprendre nos processus. Leur solution d'automatisation est ultra pertinente : on a réduit nos coûts, nos pertes d'énergie et gagné un temps précieux.",
  author: "Pierre",
  role: "Section fonderie Gustave Eiffel",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Je faisais tout moi-même, et c'était épuisant. Grâce à Kairos, ma prospection tourne en automatique. J'ai enfin du temps pour mes clients, pour structurer mon offre et développer mon activité sereinement.",
  author: "Gaelle",
  role: "Auto-entrepreneuse",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
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

  return <section className="-mt-4 pt-0 pb-28 bg-white relative" id="testimonials">
      <motion.div 
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="flex items-center gap-4 mb-6" variants={itemVariants}>
          <div className="pulse-chip">
            <span>Témoignages</span>
          </div>
        </motion.div>
        
        <motion.h2 className="text-5xl font-display font-bold mb-12 text-left" variants={itemVariants}>Ils nous ont fait confiance</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard 
                content={testimonial.content} 
                author={testimonial.author} 
                role={testimonial.role} 
                gradient={testimonial.gradient} 
                backgroundImage={testimonial.backgroundImage} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>;
};

export default Testimonials;
