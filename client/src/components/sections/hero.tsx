import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0, 1 - scrollY / 300);
        scrollIndicatorRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

      {/* Enhanced 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Code Blocks with 3D transforms */}
        <motion.div
          className="absolute top-20 left-16 opacity-80 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, 5, 0],
            z: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <div className="bg-gray-800/70 backdrop-blur-lg border border-gray-600/60 rounded-xl p-4 shadow-2xl transform-gpu">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
            </div>
            <code className="text-sm text-gray-200 font-mono leading-relaxed">
              <span className="text-cyan-400">const</span>{" "}
              <span className="text-white">innovation</span> = () =&gt; {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-cyan-400">return</span>{" "}
              <span className="text-emerald-400">'ai + creativity'</span>;
              <br />
              {"}"};
            </code>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-20 opacity-75 hidden lg:block"
          animate={{
            y: [0, 20, 0],
            rotateX: [0, -8, 0],
            rotateY: [0, -5, 0],
            z: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <div className="bg-gray-800/70 backdrop-blur-lg border border-gray-600/60 rounded-xl p-4 shadow-2xl transform-gpu">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
            </div>
            <code className="text-sm text-gray-200 font-mono leading-relaxed">
              <span className="text-purple-400">async</span>{" "}
              <span className="text-blue-400">function</span>{" "}
              <span className="text-white">buildFuture</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-cyan-400">return await</span>{" "}
              <span className="text-emerald-400">'scalable_solutions'</span>;
              <br />
              {"}"}
            </code>
          </div>
        </motion.div>

        {/* 3D Geometric Shapes with depth */}
        <motion.div
          className="absolute top-32 right-32 w-20 h-20 border-2 border-yellow-400/40 rounded-2xl shadow-lg"
          animate={{
            rotate: [0, 360],
            rotateX: [0, 180, 360],
            rotateY: [0, 90, 180],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          className="absolute bottom-48 left-28 w-16 h-16 border-2 border-blue-400/40 rounded-full shadow-xl"
          animate={{
            y: [0, -25, 0],
            rotateZ: [0, 180, 360],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl shadow-lg"
          animate={{
            scale: [1, 1.6, 1],
            rotate: [0, 45, 90, 135, 180],
            opacity: [0.3, 0.7, 0.3],
            rotateX: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Additional 3D Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-6 h-6 bg-cyan-400/30 rounded-lg shadow-md hidden xl:block"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotateX: [0, 360],
            rotateY: [0, 180, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-8 h-8 border border-orange-400/40 transform rotate-45 shadow-lg hidden xl:block"
          animate={{
            rotate: [45, 225, 405],
            rotateX: [0, 90, 180],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full shadow-sm hidden lg:block"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Aman Bhardwaj
          </motion.h1>

          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full-Stack Developer & AI Engineer
          </motion.p>
        </motion.div>

        <motion.div 
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="mb-4">
            Innovative and results-driven developer specializing in{" "}
            <span className="text-yellow-400 font-semibold">AI & Machine Learning</span>,{" "}
            <span className="text-orange-400 font-semibold">Cloud Computing</span>, and{" "}
            <span className="text-yellow-300 font-semibold">scalable web applications</span>.
          </p>
          <p className="text-gray-500">
            Transforming complex challenges into elegant, user-centric solutions that drive performance improvements and optimize efficiency.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 165, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-testid="button-explore-work"
          >
            Explore My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-testid="button-connect"
          >
            Let's Connect
          </motion.button>

          {/* Added Link for Knowledge Hub */}
          <Link href="/knowledge-hub">
            <motion.button
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-knowledge-hub"
            >
              Knowledge Hub
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        data-testid="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-xs text-gray-500">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}