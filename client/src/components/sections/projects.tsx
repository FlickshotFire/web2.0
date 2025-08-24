import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Project Tweak",
    description:
      "Procreate-inspired web-based animation and drawing application with AI-driven stylus support, custom tool creation, flipbook animations, character rigging, and layer-based canvas management.",
    image:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Creative digital art application interface with drawing tools and animation features",
    technologies: [
      "JavaScript",
      "React.js",
      "Canvas API",
      "AI Motion Capture",
      "Responsive UI/UX"
    ],
    stats: [
      { value: "AI-powered", label: "Stylus Support" },
      { value: "Real-time", label: "Animation" },
    ],
    period: "Sep 2022 – Dec 2022"
  },
  {
    id: "02",
    title: "Project Zero",
    description:
      "Simulation modeling the Big Bang and human-like AI characters using reinforcement learning, N-body simulation, GANs, Genetic Algorithms, NEAT, and PSO to enable AI agents to mimic human behavior.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "AI simulation visualization with neural networks and evolutionary algorithms",
    technologies: [
      "Python",
      "TensorFlow",
      "Reinforcement Learning",
      "GANs",
      "Genetic Algorithms"
    ],
    stats: [
      { value: "AI-driven", label: "Behavior" },
      { value: "Multi-algo", label: "Approach" },
    ],
    period: "Jan 2023 – May 2023"
  },
  {
    id: "03",
    title: "Project Cast",
    description:
      "Cross-platform web application enabling OS emulation (macOS, Windows, Linux, Android) using hardware-based para-virtualization with cloud integration for optimized performance and accessibility.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Virtual machine interface showing multiple operating systems running simultaneously",
    technologies: [
      "JavaScript",
      "Node.js",
      "Para-virtualization",
      "Cloud Integration",
      "WebRTC"
    ],
    stats: [
      { value: "4+", label: "OS Support" },
      { value: "Cloud", label: "Optimized" },
    ],
    period: "Jun 2023 – Aug 2023"
  },
  {
    id: "04",
    title: "Project CRoG",
    description:
      "AI-driven web application for automated accounting, featuring ledger management, tax calculation, and financial forecasting with 87% accuracy in tax liability prediction based on 2024 Indian government policies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "AI-powered accounting dashboard with financial analytics and tax calculation features",
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Random Forest Models",
      "Financial API Integration"
    ],
    stats: [
      { value: "87%", label: "Accuracy" },
      { value: "2024", label: "Tax Policies" },
      { value: "Real-time", label: "Processing" },
    ],
    period: "Aug 2024 – Dec 2024"
  },
  {
    id: "05",
    title: "Project E4K",
    description:
      "Browser-based game with data storage and retrieval using Supabase, integrated in-game purchase payment gateway, and optimized sprite management reducing game lag by 25%.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Browser-based game interface with payment integration and optimized performance",
    technologies: [
      "JavaScript",
      "Phaser.js",
      "Supabase",
      "Payment Gateway",
      "Responsive CSS"
    ],
    stats: [
      { value: "25%", label: "Lag Reduction" },
      { value: "Cross-device", label: "Compatible" },
    ],
    period: "Jan 2025 – Apr 2025"
  }
];

export default function Projects() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-16 md:py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 md:mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="text-gradient">Completed Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A showcase of innovative projects demonstrating expertise in AI,
            web development, game development, and cutting-edge technologies with real-world impact.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`section-enter ${isVisible ? "visible" : ""}`}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <motion.div
                  className={`${
                    index % 2 === 0
                      ? "order-2 lg:order-1"
                      : "order-1 lg:order-2"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    rotateX: 2
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: "1000px" }}
                >
                  <GlassCard className="p-4 sm:p-6 md:p-8 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-platinum/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-4 md:mb-6"
                      data-testid={`img-project-${project.id}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {project.stats.length > 0 && (
                      <div className={`grid ${project.stats.length === 2 ? 'grid-cols-2' : project.stats.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'} gap-3 md:gap-4`}>
                        {project.stats.map((stat, statIndex) => (
                          <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              className="text-lg sm:text-xl md:text-2xl font-bold text-luxury-gold"
                              data-testid={`stat-${stat.label.toLowerCase()}-${project.id}`}
                              animate={{
                                textShadow: [
                                  "0 0 10px rgba(255, 215, 0, 0.5)",
                                  "0 0 20px rgba(255, 215, 0, 0.8)",
                                  "0 0 10px rgba(255, 215, 0, 0.5)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-sm text-gray-400">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <motion.div
                      className="absolute -top-2 -left-2 w-8 h-8 bg-luxury-gold rounded-full opacity-20"
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />

                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-luxury-platinum rounded-full opacity-30"
                      animate={{
                        x: [0, 10, 0],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </GlassCard>
                </motion.div>

                <motion.div
                  className={`${
                    index % 2 === 0
                      ? "order-1 lg:order-2"
                      : "order-2 lg:order-1"
                  } px-4 sm:px-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <motion.span
                    className="text-luxury-gold font-mono text-xs sm:text-sm block mb-3 md:mb-4"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(255, 215, 0, 0.5)",
                        "0 0 15px rgba(255, 215, 0, 0.8)",
                        "0 0 5px rgba(255, 215, 0, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {project.id}
                  </motion.span>

                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 text-gradient"
                    data-testid={`title-project-${project.id}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-xs sm:text-sm text-luxury-gold mb-3 md:mb-4 font-medium"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {project.period}
                  </motion.p>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 md:mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-luxury-gold/20 border border-luxury-gold/40 text-luxury-gold text-xs sm:text-sm rounded-full font-medium backdrop-blur-sm"
                        data-testid={`tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${project.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 215, 0, 0.3)",
                          borderColor: "rgba(255, 215, 0, 0.7)",
                          boxShadow: "0 0 10px rgba(255, 215, 0, 0.4)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -10, rotateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ perspective: "1000px" }}
                      className="flex-1 sm:flex-none"
                    >
                      <Button
                        className="premium-button w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 font-bold text-sm md:text-base tracking-wide shadow-lg relative overflow-hidden"
                        data-testid={`button-demo-${project.id}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        View Project
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -10, rotateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ perspective: "1000px" }}
                      className="flex-1 sm:flex-none"
                    >
                      <Button
                        className="outline-button w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 font-bold text-sm md:text-base tracking-wide relative overflow-hidden"
                        data-testid={`button-code-${project.id}`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-l from-luxury-gold/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-600"
                          initial={{ x: "100%" }}
                          whileHover={{ x: "-100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        Technical Details
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}