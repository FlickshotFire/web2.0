
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';

const currentProjects = [
  {
    id: "cp-01",
    title: "Project Nirvana",
    description: "Ed-tech platform based on the Indian Knowledge System (NEP 2020), offering curated content on research, history, philosophy, and 64 art forms. Includes a secure social media layer ensuring equal visibility and micro-earning opportunities (₹25–₹40/hr) for contributors.",
    status: "In Development",
    progress: 65,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Educational technology platform with Indian Knowledge System content",
    technologies: ["React.js", "Node.js", "MongoDB", "Blockchain", "Payment Gateway"],
    timeline: "Q3 2025",
    priority: "High",
    features: [
      "NEP 2020 compliant curriculum",
      "64 traditional art forms content",
      "Micro-earning ecosystem",
      "Secure social media layer"
    ]
  },
  {
    id: "cp-02",
    title: "Project Dex",
    description: "Decentralized WhatsApp-style messaging app with end-to-end encryption and blockchain-based peer-to-peer data distribution to ensure privacy and eliminate central points of failure.",
    status: "Prototyping",
    progress: 45,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Decentralized messaging application with blockchain security",
    technologies: ["React Native", "Blockchain", "WebRTC", "P2P Networks", "Cryptography"],
    timeline: "Q4 2025",
    priority: "High",
    features: [
      "End-to-end encryption",
      "Peer-to-peer data distribution",
      "No central servers",
      "Complete privacy protection"
    ]
  },
  {
    id: "cp-03",
    title: "Project Rec-Dt",
    description: "Video calling tool with dual-side local recording, enabling high-quality playback post-call at native camera resolution, regardless of real-time network quality.",
    status: "Research Phase",
    progress: 30,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Advanced video calling application with local recording capabilities",
    technologies: ["WebRTC", "JavaScript", "FFmpeg", "Video Compression", "Real-time Processing"],
    timeline: "Q1 2026",
    priority: "Medium",
    features: [
      "Dual-side local recording",
      "Native camera resolution",
      "Post-call high-quality playback",
      "Network quality independent"
    ]
  }
];

export default function CurrentProjects() {
  const { elementRef, isVisible } = useIntersectionObserver();
  

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "text-green-400 bg-green-400/20 border-green-400/40";
      case "Research Phase":
        return "text-blue-400 bg-blue-400/20 border-blue-400/40";
      case "Prototyping":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400/40";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/40";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-400 bg-red-400/20 border-red-400/40";
      case "Medium":
        return "text-orange-400 bg-orange-400/20 border-orange-400/40";
      case "Low":
        return "text-green-400 bg-green-400/20 border-green-400/40";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400/40";
    }
  };

  return (
    <section id="current-projects" className="py-16 md:py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 md:mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="text-gradient">Current Projects & Queue</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Cutting-edge innovations currently in development, pushing the boundaries
            of technology and setting new industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`section-enter ${isVisible ? "visible" : ""}`}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 4,
                  rotateX: 2
                }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
                className="relative group h-full"
              >

                <GlassCard className="p-4 sm:p-6 h-full relative overflow-hidden transition-all duration-300 group-hover:backdrop-blur-sm">
                  {/* Premium 3D hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-luxury-platinum/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Status and Priority Badges */}
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <motion.span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${getStatusColor(project.status)}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${getPriorityColor(project.priority)}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.priority} Priority
                    </motion.span>
                  </div>

                  <motion.img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 md:mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.h3
                    className="text-xl sm:text-2xl font-bold mb-2 md:mb-3 text-gradient"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-300 mb-3 md:mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-3 md:mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm font-bold text-luxury-gold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-luxury-gold to-luxury-platinum rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
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
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 md:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-xs rounded-md font-medium backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 215, 0, 0.2)",
                          borderColor: "rgba(255, 215, 0, 0.5)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-sm font-bold text-gray-400 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="text-xs text-gray-300 flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.3 + featureIndex * 0.1 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2 flex-shrink-0"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: featureIndex * 0.2
                            }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline and Action */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <span className="text-xs text-gray-400">Target:</span>
                      <span className="text-sm font-bold text-luxury-gold ml-1">{project.timeline}</span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        className="premium-button px-3 sm:px-4 py-2 rounded-lg text-sm font-bold w-full sm:w-auto"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </motion.div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-gold/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  />

                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-luxury-platinum/40 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  />
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="premium-button px-8 sm:px-12 py-4 sm:py-6 rounded-full transition-all duration-500 transform hover:scale-105 animate-glow font-bold text-lg sm:text-xl tracking-wide shadow-2xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
