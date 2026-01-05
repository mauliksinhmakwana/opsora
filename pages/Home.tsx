
import React from 'react';
import LiquidButton from '../components/LiquidButton';
import WorkflowVisual from '../components/WorkflowVisual';
import { PRICING_PLANS } from '../constants';
import { ArrowRight, Bot, Zap, Shield, BarChart3, Search, PenTool, FastForward, Sparkles, Cpu, Layers, CheckCircle, Globe, Activity } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div className="flex flex-col gap-16 md:gap-32 pt-28 md:pt-40 pb-20 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto text-center w-full">
        <div className="animate-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Zap className="w-3 md:w-4 h-3 md:h-4 text-white" />
          <span className="text-[10px] md:text-xs font-medium tracking-wide uppercase text-white/80">Premium B2B Automation Agency</span>
        </div>
        <h1 className="animate-up stagger-1 text-5xl md:text-9xl font-black tracking-tighter mb-8 leading-[1]">
          AUTOMATE YOUR <br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">BUSINESS GROWTH</span>
        </h1>
        <p className="animate-up stagger-2 text-base md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4">
          Opsora Systems builds high-performance Chatbots and Workflow Automations that handle your enquiries while you sleep.
        </p>
        <div className="animate-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
          <LiquidButton className="w-full sm:w-auto px-10 py-4" onClick={() => navigate('#/pricing')}>
            View Plans <ArrowRight className="w-4 h-4" />
          </LiquidButton>
          <LiquidButton variant="outline" className="w-full sm:w-auto px-10 py-4" onClick={() => navigate('#/solutions')}>
            Our Solutions
          </LiquidButton>
        </div>
      </section>

      {/* NEW: About Summary Section with Liquid Effects */}
      <section className="relative px-6 max-w-7xl mx-auto w-full py-24 overflow-visible">
        {/* Animated Background Blobs for "Liquid" feel */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] animate-liquid-flow pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] animate-liquid-flow-delayed pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 backdrop-blur-md">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[1]">
              Architects of <br />
              <span className="text-neutral-500 hover:text-white transition-colors duration-700 cursor-default">Autonomous Efficiency.</span>
            </h2>
            <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
              Opsora Systems is a high-end B2B agency specializing in building the digital backbone for modern enterprises. We don't just "install" tools; we engineer custom AI ecosystems.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="group p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Globe className="w-6 h-6 mb-4 text-white/40 group-hover:text-white group-hover:rotate-12 transition-all" />
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Global Logic</h4>
                <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-300">Workflows designed to scale across borders and platforms.</p>
              </div>
              <div className="group p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Activity className="w-6 h-6 mb-4 text-white/40 group-hover:text-white group-hover:scale-110 transition-all" />
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Real-time</h4>
                <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-300">Instant lead processing and automated data synchronization.</p>
              </div>
            </div>
          </div>

          <div className="relative group flex justify-center lg:justify-end animate-up stagger-2">
            {/* Liquid Glass Container */}
            <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-all duration-1000 animate-pulse" />
            <div className="relative p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:border-white/30 group-hover:shadow-white/5">
              {/* Internal Moving Gradient (Liquid Glass Shine) */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.05] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group/item transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-white/20">
                    <Bot className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-neutral-500">Expertise 01</p>
                    <p className="text-lg font-bold uppercase tracking-tight group-hover/item:text-white transition-colors">AI Chatbot Design</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group/item transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-neutral-500">Expertise 02</p>
                    <p className="text-lg font-bold uppercase tracking-tight group-hover/item:text-white transition-colors">Workflow Logic</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group/item transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-md">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-neutral-500">Expertise 03</p>
                    <p className="text-lg font-bold uppercase tracking-tight group-hover/item:text-white transition-colors">API Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes liquid-flow {
            0%, 100% { transform: translate(-20px, -20px) scale(1); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
            33% { transform: translate(30px, 10px) scale(1.1); border-radius: 60% 40% 30% 70% / 50% 60% 40% 60%; }
            66% { transform: translate(-10px, 40px) scale(0.9); border-radius: 30% 60% 70% 40% / 50% 30% 60% 40%; }
          }
          .animate-liquid-flow { animation: liquid-flow 15s infinite ease-in-out; }
          .animate-liquid-flow-delayed { animation: liquid-flow 18s infinite ease-in-out reverse; }
        `}</style>
      </section>

      {/* PRICING PLANS */}
      <section className="px-6 max-w-7xl mx-auto text-center py-6 md:py-12 w-full">
        <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Investment Plans</h2>
            <p className="text-sm md:text-lg text-neutral-500 font-light">Transparent tiers for every business scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={plan.id} 
              className={`animate-up stagger-${idx + 1} relative p-8 md:p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 flex flex-col text-white ${plan.isPopular ? 'bg-white/10 border-white/30 shadow-[0_30px_60px_-15px_rgba(255,255,255,0.05)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] uppercase font-bold px-5 py-2 rounded-full tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-black mb-2 tracking-tight uppercase">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-sm text-neutral-400 font-medium">{plan.period}</span>
              </div>
              <ul className="text-left space-y-4 mb-12 flex-grow">
                {plan.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                    <span className="text-neutral-300 font-light leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
              <LiquidButton 
                variant={plan.isPopular ? 'primary' : 'outline'}
                className="w-full text-sm font-black tracking-widest uppercase py-5"
                onClick={() => navigate(`#/contact?plan=${plan.id}`)}
              >
                Get Started
              </LiquidButton>
            </div>
          ))}
        </div>
      </section>

      {/* Chatbot Visual Detail Section */}
      <section className="px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="order-2 lg:order-1 relative group w-full">
            <div className="absolute -inset-10 bg-white/5 blur-[120px] rounded-full group-hover:bg-white/10 transition-all duration-1000" />
            <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] md:rounded-[4rem] shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                <div className="bg-black/95 backdrop-blur-3xl rounded-[2.9rem] md:rounded-[3.9rem] p-8 md:p-12 border border-white/5">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-white/5">
                            <Bot className="w-7 h-7 md:w-9 md:h-9 text-black" />
                        </div>
                        <div>
                            <h4 className="font-black text-lg md:text-xl uppercase tracking-tighter">Opsora Architect</h4>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-black">Active Intelligence</p>
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        <div className="bg-white/5 p-5 md:p-6 rounded-3xl rounded-tl-none border border-white/5 text-sm md:text-base font-light leading-relaxed max-w-[90%]">
                            Hi! Can you tell me more about your pricing for the Pro plan?
                        </div>
                        <div className="bg-white text-black p-5 md:p-6 rounded-3xl rounded-tr-none text-sm md:text-base ml-auto max-w-[90%] font-black shadow-xl leading-relaxed">
                            Absolutely! The Pro plan is ₹1,299/mo and includes 5 workflows. Would you like a demo?
                        </div>
                        <div className="flex gap-3 pl-4">
                           <div className="w-2.5 h-2.5 rounded-full bg-white/30 animate-bounce" />
                           <div className="w-2.5 h-2.5 rounded-full bg-white/30 animate-bounce [animation-delay:0.2s]" />
                           <div className="w-2.5 h-2.5 rounded-full bg-white/30 animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8 lg:pl-16 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                <Sparkles className="w-4 h-4" /> Digital Employees
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] uppercase">
                AI CHATBOTS THAT <br /> <span className="text-neutral-500">ACTUALLY</span> UNDERSTAND.
            </h2>
            <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our bots aren't just FAQ lists. They use conditional logic and natural language processing to qualify leads, book meetings, and handle complex queries 24/7.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left max-w-lg mx-auto lg:mx-0">
                {[
                    'Multi-Language Support',
                    'WhatsApp API Integration',
                    'User Intent Detection',
                    'Auto Calendar Booking'
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm group">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-bold tracking-tight text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* Autonomous Workflows Section */}
      <section className="px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-8 lg:pr-16 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                <Layers className="w-4 h-4" /> Enterprise Architecture
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] uppercase">
                AUTONOMOUS <br /> <span className="text-neutral-500">WORKFLOW</span> ENGINES.
            </h2>
            <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                We bridge the gap between your applications. From CRM updates to automated invoice generation, eliminate human error and manual entry.
            </p>
            <div className="space-y-5 text-left max-w-xl mx-auto lg:mx-0">
                <div className="p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-md hover:bg-white/[0.06] transition-all cursor-default">
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight">CRM Synchronization</h4>
                    <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light">Automatically update HubSpot or custom databases the moment an enquiry is captured.</p>
                </div>
                <div className="p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-md hover:bg-white/[0.06] transition-all cursor-default">
                    <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Real-time Notifications</h4>
                    <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light">Instant Slack or SMS alerts based on the detected intent of incoming leads.</p>
                </div>
            </div>
        </div>
        <div className="relative group w-full">
            <div className="absolute -inset-10 bg-white/5 blur-[120px] rounded-full group-hover:bg-white/10 transition-all duration-1000" />
            <div className="grid grid-cols-2 gap-6 relative">
                <div className="animate-up stagger-1 p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center group/card hover:bg-white/10 hover:border-white/30 transition-all duration-500">
                    <Cpu className="w-10 h-10 md:w-16 md:h-16 mb-6 opacity-30 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Connect</span>
                </div>
                <div className="animate-up stagger-2 p-8 md:p-12 rounded-[2.5rem] bg-white text-black flex flex-col items-center justify-center text-center translate-y-12 shadow-2xl shadow-white/20 group/card hover:scale-[1.05] transition-all duration-500">
                    <Zap className="w-10 h-10 md:w-16 md:h-16 mb-6" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Trigger</span>
                </div>
                <div className="animate-up stagger-3 p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center group/card hover:bg-white/10 hover:border-white/30 transition-all duration-500">
                    <BarChart3 className="w-10 h-10 md:w-16 md:h-16 mb-6 opacity-30 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Analyze</span>
                </div>
                <div className="animate-up stagger-4 p-8 md:p-12 rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center text-center translate-y-12 group/card hover:bg-white/20 hover:border-white/40 transition-all duration-500">
                    <Shield className="w-10 h-10 md:w-16 md:h-16 mb-6 opacity-30 group-hover/card:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">Protect</span>
                </div>
            </div>
        </div>
      </section>

      {/* Visualizing Efficiency */}
      <section className="px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center py-12 md:py-24">
        <div className="order-2 lg:order-1 flex items-center justify-center w-full relative">
             <WorkflowVisual />
             <div className="absolute -z-10 w-[120%] h-[120%] bg-white/[0.01] blur-[100px] rounded-full" />
        </div>
        <div className="order-1 lg:order-2 space-y-8 lg:pl-16 text-center lg:text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 self-center lg:self-start">
                <BarChart3 className="w-4 h-4" /> System Transparency
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] uppercase">
                VISUALIZING <br /> <span className="text-neutral-500">OPERATIONAL</span> EFFICIENCY.
            </h2>
            <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Observe precisely how your logic triggers complex outcomes. Our interactive flow maps provide absolute clarity on your digital operations.
            </p>
            <div className="pt-6 flex justify-center lg:justify-start">
                <LiquidButton variant="outline" className="px-10 py-4 text-sm font-black uppercase tracking-widest" onClick={() => navigate('#/how')}>
                    Our Full Process <ArrowRight className="w-4 h-4" />
                </LiquidButton>
            </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 py-24 md:py-48 bg-white/[0.01] border-y border-white/5 relative overflow-hidden w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter">Our Workflow</h2>
            <p className="text-lg md:text-2xl text-neutral-500 font-light">Precision engineering for your business backend.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {[
                { icon: Search, label: 'Discovery', num: '01', text: 'We dive deep into your manual operations to pinpoint exactly where time and capital are leaking.' },
                { icon: PenTool, label: 'Design', num: '02', text: 'Our architects craft custom logic flows and visual workflows that speak your business\'s unique language.' },
                { icon: FastForward, label: 'Deploy', num: '03', text: 'Integration is seamless. We launch into your environment and monitor performance in real-time.' }
            ].map((item, idx) => (
                <div key={idx} className="group relative p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl transition-all duration-700 hover:bg-white hover:text-black hover:-translate-y-4 shadow-2xl w-full">
                    <div className="text-8xl md:text-9xl font-black opacity-[0.03] absolute top-8 right-12 group-hover:opacity-10 transition-opacity">{item.num}</div>
                    <item.icon className="w-12 h-12 md:w-16 md:h-16 mb-10 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-3xl font-black mb-5 tracking-tight uppercase">{item.label}</h4>
                    <p className="text-base md:text-lg text-neutral-400 group-hover:text-black font-medium leading-relaxed">
                        {item.text}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
