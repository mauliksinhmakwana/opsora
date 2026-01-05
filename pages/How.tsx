
import React from 'react';
import { Search, PenTool, FastForward, HeartHandshake } from 'lucide-react';

const How: React.FC = () => {
  const steps = [
    {
      icon: <Search />,
      title: "1. Discovery",
      desc: "We analyze your existing workflows to identify bottlenecks and manual repetitive tasks."
    },
    {
      icon: <PenTool />,
      title: "2. Design",
      desc: "Our architects map out your automated pipeline and design custom AI response logic."
    },
    {
      icon: <FastForward />,
      title: "3. Deployment",
      desc: "We integrate the tools, build the bots, and launch them into your live ecosystem."
    },
    {
      icon: <HeartHandshake />,
      title: "4. Optimization",
      desc: "Monthly performance reviews and tweaks ensure your automation stays sharp and profitable."
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black mb-8">OUR PROCESS</h1>
        <p className="text-xl text-neutral-400 font-light">From manual chaos to automated clarity.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-black border-2 border-white/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-2xl">
                {/* Fix: Cast icon to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-neutral-500 group-hover:text-neutral-300 transition-colors leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 p-12 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
                <h2 className="text-4xl font-black mb-6">Ready to see it in action?</h2>
                <p className="text-neutral-400 text-lg mb-0 font-light leading-relaxed">
                    Seeing is believing. We can show you a live demo of how our WhatsApp bots handle complex conversations and update databases in real-time.
                </p>
            </div>
            <button 
                onClick={() => window.location.hash = '#/contact'}
                className="px-10 py-5 bg-white text-black font-black rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all"
            >
                Book a Demo Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default How;
