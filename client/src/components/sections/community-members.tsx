
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CommunityMembers() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const members = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Building the next generation of web applications",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Alex Chen",
      role: "AI/ML Engineer", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Passionate about machine learning and data science",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Maria Garcia",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Creating beautiful and intuitive user experiences",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Automating and scaling infrastructure for growth",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20" ref={elementRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Featured <span className="text-gradient">Members</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet some of our amazing community members who are making a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-morphism p-6 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-luxury-gold/20 group-hover:border-luxury-gold/50 transition-colors"
                  />
                  <div className="absolute inset-0 w-20 h-20 rounded-full mx-auto bg-gradient-to-r from-luxury-gold/20 to-yellow-400/20 group-hover:from-luxury-gold/30 group-hover:to-yellow-400/30 transition-all duration-300"></div>
                </div>

                <h3 className="text-lg font-bold mb-1 group-hover:text-luxury-gold transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-luxury-gold text-sm mb-3 font-medium">
                  {member.role}
                </p>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3">
                  <a 
                    href={member.social.github}
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-luxury-gold/20 transition-colors group/icon"
                  >
                    <Github className="w-4 h-4 text-gray-400 group-hover/icon:text-luxury-gold transition-colors" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-luxury-gold/20 transition-colors group/icon"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400 group-hover/icon:text-luxury-gold transition-colors" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-luxury-gold/20 transition-colors group/icon"
                  >
                    <Twitter className="w-4 h-4 text-gray-400 group-hover/icon:text-luxury-gold transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-luxury-gold to-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:from-yellow-400 hover:to-luxury-gold transition-all duration-300 transform hover:scale-105">
            Join Our Community
          </button>
        </motion.div>
      </div>
    </section>
  );
}
