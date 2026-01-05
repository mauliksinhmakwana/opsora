
import React from 'react';

const WorkflowVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-video rounded-[3rem] border border-white/10 bg-white/[0.01] backdrop-blur-3xl overflow-hidden group shadow-[0_0_100px_rgba(255,255,255,0.02)]">
      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none z-20" />
      
      {/* Background Neural Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* The Dynamic Flow Engine */}
      <svg className="relative w-full h-full z-10" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
        {/* Animated Paths */}
        <g className="paths">
          <path id="path1" d="M150,225 Q300,100 400,225" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
          <path id="path2" d="M150,225 Q300,350 400,225" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
          <path id="path3" d="M400,225 Q550,100 650,225" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
          <path id="path4" d="M400,225 Q550,350 650,225" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="opacity-20" />
          
          {/* Animated Glowing Path Overlays */}
          <path d="M150,225 Q300,100 400,225" stroke="url(#liquidGradient)" strokeWidth="2" className="animate-path-flow" strokeLinecap="round" />
          <path d="M400,225 Q550,350 650,225" stroke="url(#liquidGradient)" strokeWidth="2" className="animate-path-flow-delayed" strokeLinecap="round" />
        </g>

        {/* Nodes */}
        <g className="nodes">
          {/* Central Engine Node */}
          <circle cx="400" cy="225" r="45" fill="black" stroke="white" strokeWidth="0.5" className="opacity-50" />
          <circle cx="400" cy="225" r="35" fill="white" className="animate-pulse-core opacity-80 shadow-white shadow-2xl" />
          <text x="400" y="230" textAnchor="middle" fill="black" className="text-[10px] font-black tracking-tighter uppercase pointer-events-none">OPSORA</text>
          
          {/* Peripheral Nodes */}
          <g className="node-group">
            <circle cx="150" cy="225" r="25" fill="black" stroke="white" strokeWidth="1" className="opacity-40" />
            <circle cx="150" cy="225" r="15" fill="white" className="opacity-20" />
            <circle cx="150" cy="225" r="5" fill="white" className="animate-ping" />
          </g>
          
          <g className="node-group">
            <circle cx="650" cy="225" r="25" fill="black" stroke="white" strokeWidth="1" className="opacity-40" />
            <circle cx="650" cy="225" r="15" fill="white" className="opacity-20" />
            <circle cx="650" cy="225" r="8" fill="white" className="animate-pulse" />
          </g>
        </g>

        {/* Definitions */}
        <defs>
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Info Panels (Glass cards inside the visual) */}
      <div className="absolute top-8 left-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hidden md:block animate-float">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest opacity-60">System Online</span>
        </div>
        <div className="mt-2 h-1 w-24 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-white w-2/3 animate-loading-bar" />
        </div>
      </div>

      <div className="absolute bottom-8 right-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hidden md:block animate-float-delayed">
        <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Processing Rate</p>
        <p className="text-xl font-black tracking-tighter">98.4<span className="text-sm opacity-50">ops/s</span></p>
      </div>

      <style>{`
        @keyframes path-flow {
          0% { stroke-dasharray: 0, 500; stroke-dashoffset: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dasharray: 500, 500; stroke-dashoffset: -500; opacity: 0; }
        }
        .animate-path-flow { animation: path-flow 4s infinite cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-path-flow-delayed { animation: path-flow 4s infinite cubic-bezier(0.4, 0, 0.2, 1) 2s; }
        
        @keyframes pulse-core {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; filter: blur(2px); }
        }
        .animate-pulse-core { animation: pulse-core 3s infinite ease-in-out; transform-origin: center; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float-delayed { animation: float 6s infinite ease-in-out 3s; }

        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar { animation: loading-bar 2s infinite linear; }
      `}</style>
    </div>
  );
};

export default WorkflowVisual;
