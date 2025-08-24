
import { motion } from "framer-motion";
import { Code, Coffee, Rocket, Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CommunityFeatures() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Reviews",
      description: "Get feedback on your projects from experienced developers",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Coffee Chats",
      description: "Informal conversations about tech, career, and life",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch Support",
      description: "Help bringing your ideas to life with community backing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mentorship",
      description: "Find mentors or become one to help others grow",
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20" ref={elementRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our community provides various ways to connect, learn, and grow together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-morphism p-8 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-luxury-gold transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
