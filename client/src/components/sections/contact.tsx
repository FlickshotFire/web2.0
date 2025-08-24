
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 relative" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-20 section-enter ${isVisible ? "visible" : ""}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Let's Create Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss how we can build
            something extraordinary together with cutting-edge technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className={`section-enter ${isVisible ? "visible" : ""}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full bg-transparent border border-luxury-gold border-opacity-30 rounded-lg px-6 py-4 focus:border-luxury-gold focus:outline-none transition-colors duration-300 text-white placeholder:text-gray-500"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full bg-transparent border border-luxury-gold border-opacity-30 rounded-lg px-6 py-4 focus:border-luxury-gold focus:outline-none transition-colors duration-300 text-white placeholder:text-gray-500"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full bg-transparent border border-luxury-gold border-opacity-30 rounded-lg px-6 py-4 focus:border-luxury-gold focus:outline-none transition-colors duration-300 text-white placeholder:text-gray-500"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <Textarea
                    rows={6}
                    placeholder="Your Message"
                    required
                    className="w-full bg-transparent border border-luxury-gold border-opacity-30 rounded-lg px-6 py-4 focus:border-luxury-gold focus:outline-none transition-colors duration-300 resize-none text-white placeholder:text-gray-500"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-morphism py-4 rounded-lg hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500 transform hover:scale-105 animate-glow font-semibold bg-transparent border-0"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`section-enter ${isVisible ? "visible" : ""} space-y-8`}>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-luxury-gold">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white" data-testid="text-email">
                        aman71204@hotmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <p className="text-white" data-testid="text-linkedin">
                        /in/aman-bhardwaj
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center">
                      <Github className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <p className="text-white" data-testid="text-github">
                        /aman-bhardwaj
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white" data-testid="text-location">
                        Dehradun, India
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Developer workspace image */}
              <GlassCard className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern developer workspace with multiple monitors and coding environment"
                  className="w-full h-48 object-cover rounded-xl"
                  data-testid="img-workspace-contact"
                />
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
