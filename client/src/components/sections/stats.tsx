
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  {
    value: 15,
    label: "Projects Completed",
    suffix: "+",
    icon: "🚀",
    color: "#FFD700"
  },
  {
    value: 50,
    label: "Technologies Mastered",
    suffix: "+",
    icon: "⚡",
    color: "#FF6B6B"
  },
  {
    value: 100,
    label: "Hours of Coding Weekly",
    suffix: "+",
    icon: "💻",
    color: "#4ECDC4"
  },
  {
    value: 99,
    label: "Client Satisfaction",
    suffix: "%",
    icon: "⭐",
    color: "#A8E6CF"
  }
];

function CounterNumber({ value, duration = 2000, isVisible }: { value: number; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const startValue = 0;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        setCount(Math.floor(startValue + (value - startValue) * easedProgress));
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [value, duration, isVisible]);

  return <span>{count}</span>;
}

export default function Stats() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={elementRef}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">By The Numbers</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Metrics that showcase dedication, growth, and impact in the tech industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px" }}
              >
                <GlassCard className="p-6 text-center relative overflow-hidden group cursor-pointer">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Animated Counter */}
                  <motion.div
                    className="text-3xl md:text-4xl font-black mb-2"
                    style={{ color: stat.color }}
                    animate={{
                      textShadow: [
                        `0 0 10px ${stat.color}50`,
                        `0 0 20px ${stat.color}80`,
                        `0 0 10px ${stat.color}50`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CounterNumber value={stat.value} isVisible={isVisible} />
                    {stat.suffix}
                  </motion.div>

                  <p className="text-sm md:text-base text-gray-300 font-medium">
                    {stat.label}
                  </p>

                  {/* Decorative Pulse */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: stat.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
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
