import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    title: "Project E4K - Browser Game Platform",
    company: "Jan 2025 – Apr 2025",
    description:
      "Browser-based game with data storage and retrieval using Supabase, integrated in-game purchase payment gateway, and optimized sprite management reducing game lag by 25%.",
    tags: ["JavaScript", "Phaser.js", "Supabase", "Payment Gateway"],
  },
  {
    year: "2024",
    title: "Project CRoG - AI Accounting Platform",
    company: "Aug 2024 – Dec 2024",
    description:
      "AI-driven web application for automated accounting, featuring ledger management, tax calculation, and financial forecasting with 87% accuracy in tax liability prediction based on 2024 Indian government policies.",
    tags: ["Python", "Flask", "Scikit-learn", "Random Forest Models"],
  },
  {
    year: "2023-2",
    title: "Project Cast - OS Emulation Platform",
    company: "Jun 2023 – Aug 2023",
    description:
      "Cross-platform web application enabling OS emulation (macOS, Windows, Linux, Android) using hardware-based para-virtualization with cloud integration for optimized performance and accessibility.",
    tags: ["JavaScript", "Node.js", "Para-virtualization", "Cloud Integration"],
  },
  {
    year: "2023-1",
    title: "Project Zero - AI Simulation",
    company: "Jan 2023 – May 2023",
    description:
      "Simulation modeling the Big Bang and human-like AI characters using reinforcement learning, N-body simulation, GANs, Genetic Algorithms, NEAT, and PSO to enable AI agents to mimic human behavior.",
    tags: ["Python", "TensorFlow", "Reinforcement Learning", "GANs"],
  },
  {
    year: "2022",
    title: "Project Tweak - Animation Platform",
    company: "Sep 2022 – Dec 2022",
    description:
      "Procreate-inspired web-based animation and drawing application with AI-driven stylus support, custom tool creation, flipbook animations, character rigging, and layer-based canvas management.",
    tags: ["JavaScript", "React.js", "Canvas API", "AI Motion Capture"],
  },
];

export default function Experience() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-32 relative" ref={elementRef}>
      <div className="premium-gradient absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Project Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of innovation and growth through hands-on projects that showcase 
            real-world application of cutting-edge technologies.
          </p>
        </div>

        {/* 3D Interactive Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.year}
                className={`section-enter ${
                  isVisible ? "visible" : ""
                } flex items-center relative`}
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-16 w-px h-32 bg-gradient-to-b from-luxury-gold to-transparent opacity-80"></div>

                {/* Year Badge */}
                <div className="w-16 h-16 glass-morphism rounded-full flex items-center justify-center mr-8 animate-glow">
                  <span className="text-luxury-gold font-bold text-sm" data-testid={`year-${experience.year}`}>
                    {experience.year}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="flex-1">
                  <GlassCard className="p-8 hover:bg-luxury-dark transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2 text-luxury-gold" data-testid={`title-${experience.year}`}>
                      {experience.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-4" data-testid={`company-${experience.year}`}>
                      {experience.company}
                    </p>
                    <p className="text-gray-400 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-luxury-gold/30 border border-luxury-gold/50 text-luxury-gold text-sm rounded-full font-medium backdrop-blur-sm shadow-lg"
                          data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}-${experience.year}`}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 215, 0, 0.4)",
                            borderColor: "rgba(255, 215, 0, 0.8)",
                            boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 mt-20">
        <p className="text-lg text-gray-400">
          © 2025 Crafted with passion, interest, skills, and love.
        </p>
      </footer>
    </section>
  );
}