
import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CommunityHero() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Connect",
      description: "Network with like-minded individuals"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discuss",
      description: "Share ideas and get feedback"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Events",
      description: "Join workshops and meetups"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Grow",
      description: "Level up your skills together"
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
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.3)",
                "0 0 40px rgba(255, 215, 0, 0.6)",
                "0 0 20px rgba(255, 215, 0, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-8 h-8 text-luxury-gold" />
            <span className="text-luxury-gold font-mono text-lg">Community Hub</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8">
            <span className="text-gradient">Community</span>
            <br />
            <span className="text-white">Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
            Where creators, developers, and innovators come together. Join our vibrant 
            community to collaborate, learn, and build amazing things together.
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
                <div className="text-black">{feature.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
