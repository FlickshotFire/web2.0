
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const achievements = [
  {
    id: "cert-01",
    title: "Full Stack Development",
    issuer: "Meta",
    date: "2024",
    icon: "🏆",
    color: "#FFD700",
    description: "Advanced certification in modern web development",
    skills: ["React", "Node.js", "APIs", "Databases"]
  },
  {
    id: "cert-02",
    title: "AI/ML Specialization",
    issuer: "Stanford University",
    date: "2023",
    icon: "🤖",
    color: "#FF6B6B",
    description: "Deep learning and neural networks mastery",
    skills: ["TensorFlow", "PyTorch", "Deep Learning", "Computer Vision"]
  },
  {
    id: "cert-03",
    title: "Cloud Architecture",
    issuer: "AWS",
    date: "2024",
    icon: "☁️",
    color: "#4ECDC4",
    description: "Professional cloud solutions architect",
    skills: ["AWS", "Docker", "Kubernetes", "DevOps"]
  },
  {
    id: "cert-04",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "2023",
    icon: "🔒",
    color: "#A8E6CF",
    description: "Security best practices and implementation",
    skills: ["Security", "Encryption", "Risk Assessment", "Compliance"]
  }
];

export default function Achievements() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="achievements" className="py-16 md:py-32 relative overflow-hidden" ref={elementRef}>
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Achievements & Certifications</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional certifications and achievements that demonstrate expertise
            and commitment to continuous learning in cutting-edge technologies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`section-enter ${isVisible ? "visible" : ""}`}
              initial={{ opacity: 0, y: 100, rotateY: -15 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  z: 50
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
                className="h-full"
              >
                <GlassCard className="p-6 h-full relative overflow-hidden group cursor-pointer">
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${achievement.color}20 0%, transparent 70%)`
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    className="text-5xl mb-4 relative z-10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {achievement.icon}
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold mb-2 text-white relative z-10"
                    style={{ color: achievement.color }}
                  >
                    {achievement.title}
                  </motion.h3>

                  <motion.p className="text-sm text-gray-400 mb-1 relative z-10">
                    {achievement.issuer}
                  </motion.p>

                  <motion.p className="text-xs text-gray-500 mb-3 relative z-10">
                    {achievement.date}
                  </motion.p>

                  <motion.p className="text-sm text-gray-300 mb-4 relative z-10">
                    {achievement.description}
                  </motion.p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {achievement.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-full border backdrop-blur-sm"
                        style={{
                          backgroundColor: `${achievement.color}20`,
                          borderColor: `${achievement.color}40`,
                          color: achievement.color
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-60"
                    style={{ backgroundColor: achievement.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
