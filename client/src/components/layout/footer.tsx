import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-luxury-gold border-opacity-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="text-3xl font-bold text-gradient mb-4">Aman Bhardwaj</div>
          <p className="text-gray-400">Crafting Premium Digital Experiences</p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="#"
            className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 transform hover:scale-110"
            data-testid="footer-linkedin"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 transform hover:scale-110"
            data-testid="footer-github"
          >
            <span className="sr-only">GitHub</span>
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 transform hover:scale-110"
            data-testid="footer-twitter"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 transform hover:scale-110"
            data-testid="footer-email"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © 2025 Aman Bhardwaj. All rights reserved. | Crafted with passion, Interest, Skills and love.
        </p>
      </div>
    </footer>
  );
}
