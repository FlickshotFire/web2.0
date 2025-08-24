import { useEffect, useState, useCallback } from "react";

interface CursorTrail {
  id: string;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<CursorTrail[]>([]);

  const updateCursor = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    // Add trail effect with unique IDs
    const speed = Math.sqrt((e.movementX || 0) ** 2 + (e.movementY || 0) ** 2);
    if (speed > 3) {
      setTrails(prev => {
        const newTrail: CursorTrail = {
          id: `trail-${Date.now()}-${Math.random()}`,
          x: e.clientX,
          y: e.clientY,
          opacity: 0.6,
          size: Math.min(speed * 0.5, 15)
        };

        return [...prev.slice(-4), newTrail]; // Keep only last 5 trails
      });
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    document.addEventListener("mousemove", updateCursor, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updateCursor, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  // Fade out trails
  useEffect(() => {
    if (trails.length === 0) return;

    const interval = setInterval(() => {
      setTrails(prev => prev.map(trail => ({
        ...trail,
        opacity: trail.opacity * 0.9,
        size: trail.size * 0.95
      })).filter(trail => trail.opacity > 0.1));
    }, 50);

    return () => clearInterval(interval);
  }, [trails.length]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effects with unique keys */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(255, 215, 0, ${trail.opacity}) 0%, transparent 70%)`,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            borderRadius: '50%',
            filter: 'blur(2px)',
            mixBlendMode: 'screen'
          }}
        />
      ))}

      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 215, 0, 0.2) 40%, transparent 70%)',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          filter: 'blur(6px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Center dot */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
          width: '2px',
          height: '2px',
          backgroundColor: '#FFD700',
          borderRadius: '50%',
          boxShadow: '0 0 4px rgba(255, 215, 0, 0.8)'
        }}
      />
    </>
  );
}