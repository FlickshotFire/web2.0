
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { useState } from "react";

const techCategories = [
  {
    title: "Frontend Development",
    color: "#61DAFB",
    icon: "🎨",
    technologies: [
      { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", proficiency: 95, years: 4 },
      { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", proficiency: 90, years: 3 },
      { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", proficiency: 88, years: 3 },
      { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", proficiency: 92, years: 5 },
      { name: "Vue.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg", proficiency: 85, years: 2 },
      { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg", proficiency: 93, years: 3 },
      { name: "Three.js", logo: "https://raw.githubusercontent.com/mrdoob/three.js/dev/files/icon.svg", proficiency: 80, years: 2 },
      { name: "Framer Motion", logo: "https://www.framer.com/images/favicons/favicon.svg", proficiency: 87, years: 2 }
    ]
  },
  {
    title: "Backend Development",
    color: "#68A063",
    icon: "⚡",
    technologies: [
      { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", proficiency: 90, years: 4 },
      { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", proficiency: 92, years: 5 },
      { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", proficiency: 88, years: 4 },
      { name: "Django", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", proficiency: 85, years: 3 },
      { name: "Flask", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", proficiency: 87, years: 3 },
      { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", proficiency: 83, years: 2 },
      { name: "GraphQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg", proficiency: 78, years: 2 },
      { name: "REST APIs", logo: "https://img.icons8.com/color/48/000000/api.png", proficiency: 93, years: 4 }
    ]
  },
  {
    title: "Database & Storage",
    color: "#F29111",
    icon: "🗄️",
    technologies: [
      { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", proficiency: 90, years: 4 },
      { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", proficiency: 85, years: 3 },
      { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", proficiency: 82, years: 3 },
      { name: "Redis", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg", proficiency: 80, years: 2 },
      { name: "Supabase", logo: "https://supabase.com/favicon/favicon-32x32.png", proficiency: 87, years: 2 },
      { name: "Firebase", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg", proficiency: 83, years: 3 }
    ]
  },
  {
    title: "AI & Machine Learning",
    color: "#FF6F00",
    icon: "🤖",
    technologies: [
      { name: "TensorFlow", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg", proficiency: 88, years: 3 },
      { name: "PyTorch", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg", proficiency: 85, years: 3 },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", proficiency: 90, years: 4 },
      { name: "OpenCV", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg", proficiency: 82, years: 2 },
      { name: "Pandas", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", proficiency: 93, years: 4 },
      { name: "NumPy", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", proficiency: 91, years: 4 }
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "#4285F4",
    icon: "☁️",
    technologies: [
      { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg", proficiency: 85, years: 3 },
      { name: "Google Cloud", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg", proficiency: 80, years: 2 },
      { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", proficiency: 87, years: 3 },
      { name: "Kubernetes", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg", proficiency: 75, years: 2 },
      { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", proficiency: 95, years: 5 },
      { name: "GitHub Actions", logo: "https://avatars.githubusercontent.com/u/44036562?s=48&v=4", proficiency: 82, years: 2 }
    ]
  },
  {
    title: "Mobile Development",
    color: "#34D399",
    icon: "📱",
    technologies: [
      { name: "React Native", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", proficiency: 85, years: 2 },
      { name: "Flutter", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg", proficiency: 78, years: 2 },
      { name: "Expo", logo: "https://static.expo.dev/static/brand/square-228x228.png", proficiency: 83, years: 2 }
    ]
  }
];

export default function Skills() {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 md:py-32 relative overflow-hidden" ref={elementRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black opacity-80" />
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-luxury-gold rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${50 + Math.random() * 50}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Technical Arsenal</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive toolkit of cutting-edge technologies, refined through years of innovation and premium project delivery.
          </motion.p>
        </div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {techCategories.map((category, index) => (
            <motion.button
              key={category.title}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === index
                  ? 'bg-luxury-gold text-black shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={selectedCategory === index ? { boxShadow: `0 0 20px ${category.color}40` } : {}}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Category Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {techCategories[selectedCategory].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateY: 10,
                  rotateX: 5
                }}
                style={{ perspective: "1000px" }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="relative"
              >
                <GlassCard className="p-4 md:p-6 text-center relative overflow-hidden group h-full">
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${techCategories[selectedCategory].color}20 0%, transparent 70%)`
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Tech Logo */}
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 relative"
                    animate={hoveredTech === tech.name ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain filter drop-shadow-lg"
                      style={{
                        filter: hoveredTech === tech.name 
                          ? `drop-shadow(0 0 10px ${techCategories[selectedCategory].color}80)` 
                          : 'drop-shadow(0 0 5px rgba(0,0,0,0.3))'
                      }}
                    />
                  </motion.div>

                  {/* Tech Name */}
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">
                    {tech.name}
                  </h3>

                  {/* Proficiency Bar */}
                  <div className="mb-2">
                    <div className="w-full bg-gray-700/50 rounded-full h-1.5 md:h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: techCategories[selectedCategory].color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        <motion.div
                          className="h-full bg-white/30 rounded-full"
                          animate={{
                            x: ["-100%", "100%"]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-400">{tech.proficiency}%</span>
                      <span className="text-xs text-gray-400">{tech.years}y</span>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: techCategories[selectedCategory].color }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.7, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlassCard className="p-6 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 via-luxury-platinum/10 to-luxury-gold/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="text-4xl md:text-6xl text-luxury-gold mb-4 md:mb-6"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 215, 0, 0.5)",
                    "0 0 20px rgba(255, 215, 0, 0.8)",
                    "0 0 10px rgba(255, 215, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                "
              </motion.div>
              
              <motion.blockquote 
                className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                The intersection of <span className="text-luxury-gold font-semibold">artificial intelligence</span> and <span className="text-luxury-platinum font-semibold">human creativity</span> is where the future is built. Every line of code is a step toward tomorrow's possibilities.
              </motion.blockquote>
              
              <motion.cite 
                className="text-luxury-gold font-bold text-lg md:text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                — Aman Bhardwaj
              </motion.cite>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
