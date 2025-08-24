
import { motion } from "framer-motion";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-theme');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300 border border-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: isDark 
            ? "linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)"
            : "linear-gradient(90deg, #ffd700 0%, #ff8c00 100%)"
        }}
        animate={{
          opacity: isDark ? 1 : 0.8
        }}
      />

      {/* Toggle circle */}
      <motion.div
        className="relative w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 0 : 32,
          backgroundColor: isDark ? "#ffffff" : "#1a1a2e"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* Icon */}
        <motion.span
          className="text-xs"
          animate={{
            rotate: isDark ? 0 : 180,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>

      {/* Animated stars for dark mode */}
      {isDark && (
        <>
          <motion.div
            className="absolute top-1 left-2 w-1 h-1 bg-yellow-300 rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-3 right-3 w-0.5 h-0.5 bg-yellow-300 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </>
      )}
    </motion.button>
  );
}
