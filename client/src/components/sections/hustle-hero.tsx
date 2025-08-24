
import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Target, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function HustleHero() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Articles & Insights",
      description: "Deep dives into technology, development, and industry trends"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Ideas & Innovation",
      description: "Creative concepts and breakthrough thinking"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Learning Journey",
      description: "Continuous education and skill development"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Extra-Curricular",
      description: "Projects and activities beyond the code"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20" ref={elementRef}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8">
            <span className="text-gradient">Hustle</span>
            <br />
            <span className="text-white">Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Where ideas meet execution. A curated collection of articles, insights, 
            learning experiences, and creative pursuits that fuel innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-luxury-gold to-yellow-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-black">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
