
import { useEffect, useRef, useCallback } from "react";

interface Particle {
  element: HTMLDivElement | null;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  active: boolean;
}

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlePoolRef = useRef<Particle[]>([]);
  const activeParticlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const animationRef = useRef<number>();

  // Object pooling for better performance
  const createParticlePool = useCallback(() => {
    const pool: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      const element = document.createElement("div");
      element.className = "fixed pointer-events-none z-10 rounded-full";
      element.style.willChange = "transform, opacity";
      
      pool.push({
        element,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        life: 0,
        maxLife: 100,
        size: 2,
        hue: 45,
        active: false
      });
    }
    return pool;
  }, []);

  const getParticleFromPool = useCallback((): Particle | null => {
    const particle = particlePoolRef.current.find(p => !p.active);
    if (particle && containerRef.current) {
      particle.active = true;
      containerRef.current.appendChild(particle.element!);
      return particle;
    }
    return null;
  }, []);

  const returnParticleToPool = useCallback((particle: Particle) => {
    if (particle.active && particle.element && containerRef.current) {
      particle.active = false;
      if (containerRef.current.contains(particle.element)) {
        containerRef.current.removeChild(particle.element);
      }
      
      // Remove from active particles
      const index = activeParticlesRef.current.indexOf(particle);
      if (index > -1) {
        activeParticlesRef.current.splice(index, 1);
      }
    }
  }, []);

  const createParticle = useCallback((x?: number, y?: number, isMouseParticle = false) => {
    if (activeParticlesRef.current.length >= 10) return; // Reduced max particles
    
    const particle = getParticleFromPool();
    if (!particle) return;

    const size = isMouseParticle ? Math.random() * 3 + 1 : Math.random() * 2 + 1;
    const hue = 45; // Fixed golden hue for consistency
    const life = isMouseParticle ? 60 : Math.random() * 100 + 50;

    Object.assign(particle, {
      x: x ?? Math.random() * window.innerWidth,
      y: y ?? window.innerHeight + 10,
      vx: (Math.random() - 0.5) * (isMouseParticle ? 3 : 0.8),
      vy: isMouseParticle ? (Math.random() - 0.5) * 3 : -(Math.random() * 1.5 + 0.3),
      life,
      maxLife: life,
      size,
      hue
    });

    // Optimized styling
    if (particle.element) {
      const el = particle.element;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.8) 0%, transparent 70%)`;
      el.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 80%, 60%, 0.4)`;
    }

    activeParticlesRef.current.push(particle);
  }, [getParticleFromPool]);

  // Optimized animation loop
  const animate = useCallback(() => {
    const particles = activeParticlesRef.current;
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      if (!particle.active || !particle.element) continue;

      // Simple physics
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.02; // Gravity
      particle.vx *= 0.999; // Air resistance
      particle.vy *= 0.999;

      // Update life
      particle.life--;
      const lifeRatio = Math.max(0, particle.life / particle.maxLife);

      // Boundary check
      if (particle.x < 0 || particle.x > window.innerWidth || 
          particle.y > window.innerHeight + 50 || particle.life <= 0) {
        returnParticleToPool(particle);
        continue;
      }

      // Update visual properties
      const el = particle.element;
      el.style.left = `${particle.x - particle.size / 2}px`;
      el.style.top = `${particle.y - particle.size / 2}px`;
      el.style.opacity = lifeRatio.toString();
      el.style.transform = `scale(${lifeRatio})`;
    }

    // Create new particles occasionally
    if (mouseRef.current.isMoving && Math.random() < 0.2) {
      createParticle(
        mouseRef.current.x + (Math.random() - 0.5) * 30,
        mouseRef.current.y + (Math.random() - 0.5) * 30,
        true
      );
    }

    // Ambient particles
    if (Math.random() < 0.05) {
      createParticle();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [createParticle, returnParticleToPool]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
    mouseRef.current.isMoving = true;
    
    setTimeout(() => {
      mouseRef.current.isMoving = false;
    }, 100);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createParticle(
          e.clientX + (Math.random() - 0.5) * 40,
          e.clientY + (Math.random() - 0.5) * 40,
          true
        );
      }, i * 50);
    }
  }, [createParticle]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize particle pool
    particlePoolRef.current = createParticlePool();

    // Start with fewer particles
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick);
    
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      // Cleanup all particles
      activeParticlesRef.current.forEach(returnParticleToPool);
      particlePoolRef.current.forEach(particle => {
        if (particle.element) {
          particle.element.remove();
        }
      });
      
      activeParticlesRef.current = [];
      particlePoolRef.current = [];
    };
  }, [createParticle, animate, handleMouseMove, handleClick, createParticlePool, returnParticleToPool]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
