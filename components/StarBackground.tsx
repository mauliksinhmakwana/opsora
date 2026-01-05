
import React, { useMemo } from 'react';

const StarBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => {
      const size = Math.random() * 1.5 + 0.5;
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#000]">
      {/* Neutral Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-white/[0.02] blur-[160px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/[0.01] blur-[160px] rounded-full" />
      
      {/* Static/Twinkling Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        <div className="shooting-star" style={{ top: '10%', left: '80%', animationDelay: '2s' }} />
        <div className="shooting-star" style={{ top: '30%', left: '95%', animationDelay: '8s' }} />
        <div className="shooting-star" style={{ top: '50%', left: '90%', animationDelay: '15s' }} />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes shooting {
          0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(0); opacity: 0; }
          10% { opacity: 1; scale(1); }
          30% { transform: translateX(-500px) translateY(500px) rotate(-45deg) scale(1); opacity: 0; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg) scale(0); opacity: 0; }
        }

        .shooting-star {
          position: absolute;
          width: 150px;
          height: 1px;
          background: linear-gradient(90deg, white, transparent);
          opacity: 0;
          animation: shooting 10s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
