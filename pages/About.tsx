
import React from 'react';
import { Target, Users, Shield, Rocket, ArrowRight, Cpu, Zap, Eye } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

const About: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = '#/contact';
  };

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      desc: "Every workflow is engineered with mathematical accuracy. We eliminate the margin for human error."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      desc: "No black boxes. You see exactly how your data flows and how your automations think."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Scalability",
      desc: "We build for where you are going, not just where you are. Our systems grow as your lead volume explodes."
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center mb-32 animate-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Users className="w-4 h-4 text-white/60" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Meet Opsora Systems</span>
        </div>
        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
          Architecting <br />
          <span className="text-neutral-500">Autonomy.</span>
        </h1>
        <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
          Opsora Systems was founded on a single premise: <span className="text-white">Business owners should spend time on strategy, not manual entry.</span> We bridge the gap between high-level technology and small business reality.
        </p>
      </section>

      {/* Agency Story / Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40 items-center">
        <div className="space-y-8 animate-up stagger-1">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Our Mission</h2>
          <div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
            <p>
              In an era where AI is moving at lightning speed, many small businesses feel left behind. They get stuck in the "WhatsApp Trap"—manually replying to hundreds of messages, losing leads in the noise, and hitting a ceiling because they can't scale their own time.
            </p>
            <p>
              <span className="text-white font-medium">Opsora is the solution.</span> We don't just sell software; we build autonomous infrastructures. We act as your external CTO, implementing the exact workflows that turn a chaotic inbox into a predictable revenue machine.
            </p>
          </div>
          <div className="pt-4">
             <div className="flex items-center gap-4 p-6 rounded-3xl bg-white text-black font-black uppercase tracking-tighter">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                    <p className="text-sm">Trusted by 50+ Growing Entities</p>
                    <p className="text-[10px] opacity-60">Verified Operational Uptime: 99.9%</p>
                </div>
             </div>
          </div>
        </div>

        <div className="relative animate-up stagger-2">
           <div className="absolute -inset-10 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
           <div className="relative aspect-square rounded-[4rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-1 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="w-full h-full rounded-[3.8rem] bg-black flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center mb-8 animate-pulse">
                      <Cpu className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-4">The Opsora Engine</h3>
                  <p className="text-neutral-500 text-sm font-light">
                    Our proprietary implementation framework ensures that every chatbot we deploy is pre-optimized for conversion and every workflow is stress-tested before launch.
                  </p>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-40">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-grow bg-white/10" />
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-white/30">Our Core Principles</h2>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 animate-up stagger-1">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-white/40">
                    {v.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{v.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-12 md:p-24 rounded-[4rem] bg-white text-black relative overflow-hidden group text-center animate-up stagger-3 shadow-[0_50px_100px_rgba(255,255,255,0.1)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/[0.05] blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
          Ready to automate <br /> your legacy?
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-70">
          Join the elite circle of businesses that operate at 10x efficiency with zero extra staff.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <LiquidButton 
              className="bg-black text-white hover:bg-neutral-800 px-12 py-5"
              onClick={navigateToContact}
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </LiquidButton>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">
              Response within 24 hours guaranteed.
            </p>
        </div>
      </section>
    </div>
  );
};

export default About;
