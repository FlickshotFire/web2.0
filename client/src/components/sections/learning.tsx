
import { motion } from "framer-motion";
import { BookOpen, Award, Target, TrendingUp, Code, Users } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const learningCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    items: [
      { name: "Advanced TypeScript Patterns", progress: 85, type: "Course" },
      { name: "Distributed Systems Design", progress: 70, type: "Study" },
      { name: "Machine Learning Fundamentals", progress: 92, type: "Certification" },
      { name: "Cloud Architecture on AWS", progress: 78, type: "Course" }
    ],
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: [
      { name: "Technical Leadership", progress: 80, type: "Workshop" },
      { name: "System Design Communication", progress: 75, type: "Practice" },
      { name: "Cross-team Collaboration", progress: 88, type: "Experience" },
      { name: "Mentoring & Coaching", progress: 70, type: "Active" }
    ],
    color: "from-green-500 to-teal-500"
  }
];

const achievements = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    type: "Certification",
    icon: Award
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "Nov 2024",
    type: "Course",
    icon: BookOpen
  },
  {
    title: "System Design Interview",
    issuer: "Educative.io",
    date: "Oct 2024",
    type: "Course",
    icon: Target
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "Sep 2024",
    type: "Specialization",
    icon: TrendingUp
  }
];

export default function Learning() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="learning" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Continuous Learning</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Staying at the forefront of technology through continuous education, certifications, and hands-on practice.
          </p>
        </div>

        {/* Learning Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {learningCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <GlassCard className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{item.type}</span>
                          <span className="text-luxury-gold font-bold">{item.progress}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${item.progress}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className={`section-enter ${isVisible ? "visible" : ""}`}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Recent Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassCard className="p-6 text-center group">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-luxury-gold/20 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-6 h-6 text-luxury-gold" />
                  </motion.div>
                  
                  <h4 className="font-bold mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">{achievement.issuer}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs bg-gray-800 px-2 py-1 rounded">{achievement.type}</span>
                    <span className="text-xs text-luxury-gold">{achievement.date}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
