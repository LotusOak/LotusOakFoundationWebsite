import { useEffect, useRef } from 'react';

// Themes: Oak (endurance) and Lotus (ephemeral beauty), balance of forces
// Visualization: Particles that swirl between two centers - representing the duality of oak/lotus philosophy

const LotusOakSwirl = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 600;
    const height = canvas.height = 400;
    
    const PARTICLE_COUNT = 8000;
    const particles = [];
    
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
    
    function animate() {
      if (!isRunning) return;
      
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
  }, []);
  
  return (
    <div style={{
      width: '600px',
      height: '400px',
      margin: 'auto',
      backgroundColor: '#fefefe',
      borderTop: '1px solid #e5e5e5',
      borderBottom: '1px solid #e5e5e5'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '600px',
          height: '400px'
        }}
      />
    </div>
  );
};

export default LotusOakSwirl;