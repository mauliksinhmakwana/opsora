
import React, { useState } from 'react';
import { SERVICES_DATA, PRICING_PLANS } from '../constants';
import { Send, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  const service = SERVICES_DATA[serviceId as keyof typeof SERVICES_DATA];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'growth',
    message: ''
  });

  if (!service) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Service Not Found</h1>
        <button onClick={() => window.location.hash = '#/'} className="mt-8 text-white underline font-bold uppercase tracking-widest text-xs">Back Home</button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
        <CheckCircle2 className="w-20 h-20 text-white mb-6 animate-bounce" />
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">TRANSFORMATION INITIATED</h1>
        <p className="text-neutral-400 text-lg max-w-lg mb-10">
          We've received your enquiry for {service.title}. One of our architects will contact you shortly to discuss your automation goals.
        </p>
        <button 
          onClick={() => window.location.hash = '#/'} 
          className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all active:scale-95"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-48 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
        
        {/* LEFT SIDE: SERVICE INFORMATION */}
        <div className="animate-up flex flex-col items-start">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-8 backdrop-blur-md">
            {service.icon && React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
            {service.subtitle}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-left">
            {service.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-neutral-700' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-xl text-left">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {service.features.map((feature, i) => (
              <div key={i} className="group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all text-left">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all">
                  {feature.icon}
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-2 text-white">{feature.title}</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT & FORM (Now with optimized contact bars) */}
        <div className="lg:sticky lg:top-32 animate-up stagger-1 w-full">
          <div className="p-8 md:p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 mb-10">
              <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Get a Custom Quote</h2>
              <p className="text-neutral-500 text-xs font-medium uppercase tracking-widest">Connect with an Opsora Architect</p>
            </div>

            {/* Optimized Vertical Contact Info Bars */}
            <div className="flex flex-col gap-4 mb-10 relative z-10">
              <a 
                href="https://wa.me/918401765505" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white hover:text-black transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 group-hover:text-black/50">WhatsApp Business</span>
                  <span className="text-base font-bold">+91 8401765505</span>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="mailto:mauliksinhmakwana@gmail.com"
                className="w-full flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white hover:text-black transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 group-hover:text-black/50">Direct Email</span>
                  <span className="text-sm font-bold truncate">mauliksinhmakwana@gmail.com</span>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 ml-4">Full Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-white/[0.03] border-b border-white/10 px-6 py-4 outline-none focus:border-white focus:bg-white/[0.06] transition-all text-sm font-light"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 ml-4">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@business.com"
                    className="w-full bg-white/[0.03] border-b border-white/10 px-6 py-4 outline-none focus:border-white focus:bg-white/[0.06] transition-all text-sm font-light"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 ml-4">Project Ambition</label>
                <textarea 
                  rows={3}
                  placeholder="Describe your current bottleneck..."
                  className="w-full bg-white/[0.03] border-b border-white/10 px-6 py-4 outline-none focus:border-white focus:bg-white/[0.06] transition-all text-sm font-light resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.05)] text-[10px]"
              >
                Initiate Integration <Send className="w-4 h-4" />
              </button>
              
              <p className="text-[8px] text-center text-neutral-600 uppercase tracking-[0.4em] font-black mt-4">
                Secure Protocol Active
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
