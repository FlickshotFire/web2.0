
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/glass-card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Link } from "wouter";

const articles = [
  {
    id: "01",
    title: "The Future of AI-Driven Development",
    excerpt: "Exploring how artificial intelligence is reshaping the way we approach software development, from code generation to automated testing and deployment strategies.",
    category: "AI & Development",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    views: "1.2k",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["AI", "Development", "Future Tech", "Automation"]
  },
  {
    id: "02",
    title: "Building Scalable Microservices Architecture",
    excerpt: "A deep dive into designing and implementing microservices that can handle millions of requests while maintaining system reliability and developer productivity.",
    category: "System Design",
    readTime: "12 min read",
    date: "Nov 28, 2024",
    views: "890",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Microservices", "Scalability", "Architecture", "DevOps"]
  },
  {
    id: "03",
    title: "WebGL and the Art of Interactive Experiences",
    excerpt: "Creating immersive web experiences using WebGL, Three.js, and modern browser APIs. From performance optimization to creating stunning visual effects.",
    category: "Frontend",
    readTime: "10 min read",
    date: "Nov 10, 2024",
    views: "1.5k",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["WebGL", "Three.js", "Interactive Design", "Performance"]
  }
];

export default function Articles() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="articles" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Latest Articles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth explorations of technology, development practices, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard className="overflow-hidden h-full group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-luxury-gold text-black px-3 py-1 rounded-full text-sm font-bold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-sm">
                    <Eye className="w-4 h-4" />
                    {article.views}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/article/${article.id}`}>
                    <Button 
                      className="w-full group/btn bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-300"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            className="px-8 py-4 bg-gradient-to-r from-luxury-gold to-yellow-400 text-black rounded-full font-bold text-lg hover:from-yellow-400 hover:to-luxury-gold transition-all duration-300"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
