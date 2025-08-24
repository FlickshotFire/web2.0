import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Simple geometric shapes with basic animations */}

      {/* Large circle */}
      <motion.div
        className="absolute top-24 right-32 w-24 h-24 rounded-full opacity-10"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Rectangle */}
      <motion.div
        className="absolute top-1/3 left-20 w-16 h-10 rounded-lg opacity-10"
        animate={{
          rotate: [0, 5, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.3) 0%, rgba(255, 215, 0, 0.2) 100%)',
        }}
      />

      {/* Triangle */}
      <motion.div
        className="absolute bottom-40 right-40 w-12 h-12 opacity-15"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.2) 100%)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />

      {/* Small floating dots */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-400/20"
          animate={{
            y: [0, -15 - (i * 2), 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            width: `${3 + (i % 2)}px`,
            height: `${3 + (i % 2)}px`,
            left: `${15 + (i * 12)}%`,
            top: `${25 + (i * 8)}%`,
          }}
        />
      ))}
    </div>
  );
}