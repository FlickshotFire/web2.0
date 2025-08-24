
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";

export default function About() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`section-enter ${isVisible ? "visible" : ""}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm an innovative Full-Stack Developer with hands-on experience in AI, 
              Machine Learning, Cloud Computing, and Game Development. Currently pursuing 
              B.Tech in Computer Science and Engineering at Graphic Era Hill University.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I specialize in designing scalable, user-centric applications with 
              measurable performance improvements. My expertise spans from web-based 
              animation tools to AI-driven applications and decentralized systems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3
                  className="text-2xl font-bold text-luxury-gold mb-2"
                  data-testid="text-projects-count"
                >
                  5+
                </h3>
                <p className="text-gray-400">Projects Completed</p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3
                  className="text-2xl font-bold text-luxury-gold mb-2"
                  data-testid="text-experience-years"
                >
                  3+
                </h3>
                <p className="text-gray-400"> Months of Experience </p>
              </GlassCard>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Education</h3>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <p className="text-white font-semibold">B.Tech Computer Science & Engineering</p>
                <p className="text-gray-300">Graphic Era Hill University</p>
                <p className="text-gray-400 text-sm mt-2">
                  Concentrations: Full-stack Development, Intelligence and Modelling/Simulations
                </p>
              </div>
            </div>
          </div>

          <div
            className={`section-enter ${isVisible ? "visible" : ""} relative`}
          >
            <GlassCard className="p-4 md:p-8">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden border-4 border-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 shadow-2xl">
                  <img 
                    src="https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg" 
                    alt="Profile Picture - Aman Bhardwaj" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Decorative Frame Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-yellow-400 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-yellow-400 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-yellow-400 rounded-br-lg"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-300/20 blur-xl -z-10"></div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
