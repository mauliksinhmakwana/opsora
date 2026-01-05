
import React from 'react';
import { 
  MessageSquare, 
  Database, 
  Bell, 
  FileText, 
  Store, 
  Stethoscope, 
  GraduationCap, 
  UserCheck, 
  Clock, 
  TrendingUp, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

const Solutions: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = '#/contact';
  };

  const whatWeAutomate = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Enquiry Handling",
      desc: "Instant WhatsApp replies to new customer messages, ensuring a response within seconds."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Lead Capture",
      desc: "Customer details like name, phone, and query are saved automatically to your database."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Follow-ups & Reminders",
      desc: "Automatic follow-ups so enquiries don't go cold and appointments are never missed."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Daily Records",
      desc: "Enquiries organised in simple sheets for easy tracking and business performance analysis."
    }
  ];

  const whoIsThisFor = [
    { icon: <Stethoscope className="w-6 h-6" />, label: "Clinics" },
    { icon: <Store className="w-6 h-6" />, label: "Retail Stores" },
    { icon: <GraduationCap className="w-6 h-6" />, label: "Coaching Centres" },
    { icon: <UserCheck className="w-6 h-6" />, label: "Service Providers" }
  ];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "Reduces manual repetitive work" },
    { icon: <Clock className="w-5 h-5" />, text: "Improves response time significantly" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Increases chances of lead conversion" },
    { icon: <Cpu className="w-5 h-5" />, text: "Works 24/7 without extra staff" }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
      {/* Hero Intro */}
      <div className="text-center mb-24 animate-up">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase">Our Solutions</h1>
        <p className="text-lg md:text-2xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed">
          We help small businesses automate customer enquiries, follow-ups, and reminders on WhatsApp, 
          so you <span className="text-white font-medium">never miss a lead</span> and never waste time replying manually. 
          Our systems work quietly in the background while you focus on running your business.
        </p>
      </div>

      {/* What We Automate */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12 animate-up stagger-1">
          <div className="h-[1px] flex-grow bg-white/10" />
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/50">What We Automate</h2>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeAutomate.map((item, i) => (
            <div key={i} className={`animate-up stagger-${i + 1} p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 group`}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For & How It Helps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-start">
        {/* Who This Is For */}
        <section className="animate-up stagger-2 p-10 md:p-14 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Who This Is For</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {whoIsThisFor.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-white/40">{item.icon}</div>
                  <span className="text-sm font-bold tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1"><ArrowRight className="w-3 h-3" /></div>
                <p className="text-neutral-400 text-sm">Businesses getting daily WhatsApp enquiries</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1"><ArrowRight className="w-3 h-3" /></div>
                <p className="text-neutral-400 text-sm">Owners who want fewer calls and more conversions</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our System Helps */}
        <section className="animate-up stagger-3 p-10 md:p-14 rounded-[3rem] bg-white text-black relative shadow-2xl overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/[0.05] blur-[80px] rounded-full translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">How Our System Helps</h2>
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <span className="font-bold text-lg tracking-tight">{benefit.text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Our Approach & CTA */}
      <section className="animate-up stagger-4 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden text-center lg:text-left">
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/[0.03] blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" /> Professional Implementation
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">Our Approach</h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-8">
              We don't sell tools. We deliver <span className="text-white font-medium">business-ready automation</span> that is easy to use, 
              reliable, and maintained monthly. Setup is fast, support is clear, and everything is built to scale 
              as your business grows.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest">Simple Setup</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest">Clear Results</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest">No Complexity</span>
            </div>
          </div>
          
          <div className="shrink-0 flex flex-col items-center">
            <LiquidButton 
              className="px-12 py-6 text-sm font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(255,255,255,0.15)]"
              onClick={navigateToContact}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </LiquidButton>
            <p className="mt-6 text-[10px] text-neutral-500 font-black uppercase tracking-widest">
              Join 50+ businesses automating with Opsora
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
