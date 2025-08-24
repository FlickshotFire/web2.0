
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, GraduationCap, PenTool } from "lucide-react";

export default function KnowledgeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
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
            <BookOpen className="w-8 h-8 text-luxury-gold" />
            <span className="text-luxury-gold font-mono text-lg">Knowledge Hub</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-gradient">Ideas</span>
            <br />
            <span className="text-white">& Insights</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A curated collection of thoughts, discoveries, and learning experiences. 
            Exploring the intersection of technology, innovation, and creative problem-solving.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: PenTool, title: "Articles", desc: "Technical insights & thoughts", count: "12+" },
            { icon: Lightbulb, title: "Ideas", desc: "Innovation concepts & visions", count: "25+" },
            { icon: GraduationCap, title: "Learning", desc: "Continuous growth journey", count: "50+" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-morphism p-6 rounded-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-3">{item.desc}</p>
              <span className="text-luxury-gold font-mono text-lg">{item.count}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
