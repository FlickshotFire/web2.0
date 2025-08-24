
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CommunityEvents() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const events = [
    {
      title: "Weekly Code Review",
      date: "Every Friday",
      time: "3:00 PM EST",
      location: "Virtual",
      attendees: "15-20",
      type: "recurring"
    },
    {
      title: "Tech Talk: AI in Development",
      date: "March 15, 2024",
      time: "7:00 PM EST",
      location: "Virtual",
      attendees: "50+",
      type: "special"
    },
    {
      title: "Community Hackathon",
      date: "March 22-24, 2024",
      time: "48 Hours",
      location: "Global",
      attendees: "100+",
      type: "major"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-luxury-black/50 to-transparent" ref={elementRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and networking opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-morphism p-6 rounded-2xl h-full hover:transform hover:scale-105 transition-all duration-300">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  event.type === 'major' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : event.type === 'special'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                }`}>
                  {event.type.toUpperCase()}
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-luxury-gold transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-luxury-gold to-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-luxury-gold transition-all duration-300">
                  Join Event
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
