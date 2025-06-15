'use client';

import { useEffect, useRef, useState } from 'react';

// Themes: Oak (endurance) and Lotus (ephemeral beauty), balance of forces
// Visualization: Particles that swirl between two centers - representing the duality of oak/lotus philosophy

const LotusOakSwirl = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Fixed canvas dimensions to maintain consistent animation size
    const width = canvas.width = 600;
    const height = canvas.height = 400;
    
    const PARTICLE_COUNT = 8000;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      angle: number;
      distance: number;
      phase: number;
      speed: number;
      swirl: number;
      center: number;
      life: number;
    }> = [];
    
    // Initialize particles with natural distribution
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 - 1, // Depth from -1 to 1
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 200,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
        swirl: Math.random() > 0.5 ? 1 : -1, // Some swirl clockwise, some counter
        center: Math.random() > 0.5 ? 0 : 1, // Which center to follow
        life: Math.random()
      });
    }
    
    let time = 0;
    let isRunning = true;
    
    function drawStaticPattern() {
      if (!ctx) return;
      
      // Clear canvas
      ctx.fillStyle = 'rgba(254, 254, 254, 1)';
      ctx.fillRect(0, 0, width, height);
      
      // Two centers - Oak (left, stable) and Lotus (right, flowing)
      const oakCenter = { x: width * 0.3, y: height * 0.5 };
      const lotusCenter = { x: width * 0.7, y: height * 0.5 };
      
      // Draw static pattern with balanced distribution
      particles.forEach(particle => {
        const center = particle.center === 0 ? oakCenter : lotusCenter;
        const isOak = particle.center === 0;
        
        // Position particles in stable spiral pattern
        const staticRadius = 60 + (particle.distance / 200) * 40;
        const staticX = center.x + Math.cos(particle.angle) * staticRadius;
        const staticY = center.y + Math.sin(particle.angle) * staticRadius * 0.6;
        
        // Set particle properties
        particle.x = staticX;
        particle.y = staticY;
        
        // Draw particle
        const size = isOak ? 0.8 : 0.6;
        const opacity = isOak ? 0.6 : 0.4;
        const color = isOak 
          ? `rgba(58, 95, 74, ${opacity})` // Oak sage
          : `rgba(168, 142, 136, ${opacity})`; // Lotus pink-gray
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
    }
    
    function animate() {
      if (!isRunning || !ctx) return;
      
      // Respect reduced motion preference
      if (reducedMotion) {
        // Show static particle pattern instead of animation
        drawStaticPattern();
        return;
      }
      
      time += 0.01;
      
      // Clear with subtle fade
      ctx.fillStyle = 'rgba(254, 254, 254, 0.08)';
      ctx.fillRect(0, 0, width, height);
      
      // Two centers - Oak (left, stable) and Lotus (right, flowing)
      const oakCenter = { x: width * 0.3, y: height * 0.5 };
      const lotusCenter = { x: width * 0.7, y: height * 0.5 };
      
      particles.forEach(particle => {
        // Choose center based on particle's affinity
        const center = particle.center === 0 ? oakCenter : lotusCenter;
        const isOak = particle.center === 0;
        
        // Update particle's orbital motion with swirling
        particle.angle += particle.speed * 0.02 * particle.swirl;
        
        // Oak particles: more stable, slower movement
        // Lotus particles: more fluid, faster movement
        const stabilityFactor = isOak ? 0.8 : 1.2;
        const flowFactor = isOak ? 0.5 : 1.0;
        
        // Create swirling motion around centers
        const swirlRadius = 60 + Math.sin(time * flowFactor + particle.phase) * 40;
        const targetX = center.x + Math.cos(particle.angle) * swirlRadius;
        const targetY = center.y + Math.sin(particle.angle) * swirlRadius * 0.6; // Elliptical
        
        // Add depth-based movement
        particle.z = Math.sin(time * 0.3 + particle.phase) * 0.8;
        const depthFactor = 0.5 + particle.z * 0.5;
        
        // Gentle movement toward target
        const attraction = 0.02 * stabilityFactor;
        particle.x += (targetX - particle.x) * attraction * depthFactor;
        particle.y += (targetY - particle.y) * attraction * depthFactor;
        
        // Add subtle organic flow between centers
        const bridgeForce = Math.sin(time * 0.1 + particle.phase) * 0.1;
        particle.x += bridgeForce * (particle.center === 0 ? 1 : -1);
        
        // Some particles occasionally switch allegiance (oak <-> lotus)
        if (Math.random() < 0.0001) {
          particle.center = 1 - particle.center;
        }
        
        // Draw particle with depth and center-based styling
        const baseSize = isOak ? 0.8 : 0.6; // Oak particles slightly larger (endurance)
        const size = baseSize + particle.z * 0.3;
        const baseOpacity = isOak ? 0.6 : 0.4; // Oak more solid, lotus more ethereal
        const opacity = Math.max(0.1, baseOpacity + particle.z * 0.3);
        
        // Color based on center - Oak (sage green), Lotus (soft pink)
        const color = isOak 
          ? `rgba(58, 95, 74, ${opacity})` // Oak sage
          : `rgba(168, 142, 136, ${opacity})`; // Lotus pink-gray
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, Math.max(0.2, size), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      particles.length = 0;
      time = 0;
    };
  }, [reducedMotion]);
  
  return (
    <div className="w-[600px] h-[400px] mx-auto bg-background max-w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-[600px] h-[400px] max-w-full max-h-full"
        aria-label={reducedMotion ? "Static lotus oak pattern" : "Animated lotus oak particles"}
        role="img"
      />
    </div>
  );
};

export default LotusOakSwirl;