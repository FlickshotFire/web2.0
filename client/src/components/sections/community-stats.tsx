
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CommunityStats() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Built" },
    { number: "100+", label: "Events Hosted" },
    { number: "25+", label: "Countries" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-luxury-black/50" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black text-luxury-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
