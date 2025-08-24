
import { motion } from "framer-motion";
import { Lightbulb, Zap, Rocket, Brain } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ideas = [
  {
    id: "01",
    title: "Neural Code Generation Platform",
    description: "An AI-powered platform that understands natural language requirements and generates production-ready code with built-in testing and documentation.",
    category: "AI Innovation",
    status: "Concept",
    impact: "High",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "02",
    title: "Quantum-Inspired Optimization Framework",
    description: "A development framework that uses quantum computing principles to solve complex optimization problems in distributed systems.",
    category: "Quantum Computing",
    status: "Research",
    impact: "Revolutionary",
    icon: Zap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "03",
    title: "Immersive Code Collaboration",
    description: "Virtual reality environment for collaborative coding where developers can manipulate code structures in 3D space and visualize data flow in real-time.",
    category: "VR/AR",
    status: "Prototype",
    impact: "Medium",
    icon: Rocket,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "04",
    title: "Self-Healing Infrastructure",
    description: "Autonomous cloud infrastructure that can predict, detect, and resolve issues before they impact users using advanced machine learning algorithms.",
    category: "DevOps",
    status: "Development",
    impact: "High",
    icon: Lightbulb,
    color: "from-orange-500 to-red-500"
  }
];

export default function Ideas() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="ideas" className="py-32 relative bg-gradient-to-br from-luxury-black via-gray-900 to-luxury-black" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Innovation Lab</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conceptual ideas and breakthrough innovations that could shape the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard className="p-8 h-full relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${idea.color}`}></div>
                
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${idea.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <idea.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-luxury-gold font-mono text-sm">{idea.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        idea.status === 'Concept' ? 'bg-blue-900 text-blue-300' :
                        idea.status === 'Research' ? 'bg-purple-900 text-purple-300' :
                        idea.status === 'Prototype' ? 'bg-green-900 text-green-300' :
                        'bg-orange-900 text-orange-300'
                      }`}>
                        {idea.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                      {idea.title}
                    </h3>
                    <span className="text-sm text-gray-400">{idea.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {idea.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Impact:</span>
                    <span className={`font-bold ${
                      idea.impact === 'High' ? 'text-orange-400' :
                      idea.impact === 'Revolutionary' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {idea.impact}
                    </span>
                  </div>
                  
                  <motion.div
                    className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(255, 215, 0, 0.4)",
                        "0 0 0 10px rgba(255, 215, 0, 0)",
                        "0 0 0 0 rgba(255, 215, 0, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Lightbulb className="w-4 h-4 text-luxury-gold" />
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
