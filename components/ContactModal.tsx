
import React from 'react';
import { X, Send, Mail, Clock, Globe, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 md:p-10 backdrop-blur-3xl">
      <div 
        className="absolute inset-0 bg-black/80" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(255,255,255,0.08)] animate-modal-in max-h-[95vh] flex flex-col">
        {/* Close Button - More Prominent */}
        <button 
          onClick={onClose}
          className="absolute top-6 md:top-10 right-6 md:right-10 text-white/40 hover:text-white transition-all z-50 hover:rotate-90 p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10"
        >
          <X className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <div className="flex flex-col lg:flex-row overflow-y-auto lg:overflow-visible">
          {/* Sidebar - Strategy Context */}
          <div className="lg:w-[38%] p-8 md:p-16 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle light effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-8 md:mb-12 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    <Globe className="w-8 h-8 md:w-11 md:h-11 text-black" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-10 uppercase tracking-tighter leading-[0.9] text-white">
                  Let's build <br /> 
                  <span className="text-neutral-600">the future</span> <br />
                  <span className="text-neutral-600">together.</span>
                </h2>
                <p className="text-base md:text-xl text-neutral-400 font-light mb-10 md:mb-16 leading-relaxed max-w-sm">
                  Partner with Opsora to deploy custom AI agents and autonomous workflows that scale your business.
                </p>
            </div>
            
            <div className="space-y-5 md:space-y-8 relative z-10">
              <div className="flex items-start gap-5 p-5 md:p-7 rounded-[2rem] bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-white/70" />
                </div>
                <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-neutral-500 mb-1">Direct Access</p>
                    <p className="text-sm md:text-lg font-bold text-white tracking-tight">mauliksinhmakwana@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-5 md:p-7 rounded-[2rem] bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-white/70" />
                </div>
                <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-neutral-500 mb-1">Response Time</p>
                    <p className="text-sm md:text-lg font-bold text-white tracking-tight">Within 12-24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Project Intake */}
          <div className="lg:w-[62%] p-8 md:p-20 bg-black relative">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/[0.015] blur-[150px] rounded-full pointer-events-none" />
            
            <form className="space-y-8 md:space-y-12 relative z-10 max-w-2xl mx-auto" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Strategy session requested! We will be in touch shortly.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-500 ml-4">Full Identity</label>
                  <input required className="w-full bg-white/[0.03] border-b border-white/10 px-4 py-4 md:py-5 outline-none focus:border-white focus:bg-white/[0.05] transition-all text-sm md:text-base font-light placeholder:text-neutral-700" placeholder="e.g. Alexander Pierce" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-500 ml-4">Corporate Email</label>
                  <input required type="email" className="w-full bg-white/[0.03] border-b border-white/10 px-4 py-4 md:py-5 outline-none focus:border-white focus:bg-white/[0.05] transition-all text-sm md:text-base font-light placeholder:text-neutral-700" placeholder="alex@company.tech" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-500 ml-4">Automation Path</label>
                <div className="relative">
                    <select className="w-full bg-white/[0.03] border-b border-white/10 px-4 py-4 md:py-5 outline-none focus:border-white focus:bg-white/[0.05] transition-all appearance-none text-sm md:text-base font-light cursor-pointer">
                      <option value="" className="bg-black">Choose your starting point...</option>
                      {PRICING_PLANS.map(p => <option key={p.id} value={p.id} className="bg-black">{p.name} — {p.price}</option>)}
                      <option value="custom" className="bg-black">Custom Enterprise Architecture</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                        <ArrowRightIcon />
                    </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-500 ml-4">Project Ambition</label>
                <textarea rows={4} className="w-full bg-white/[0.03] border-b border-white/10 px-4 py-4 md:py-6 outline-none focus:border-white focus:bg-white/[0.05] transition-all resize-none text-sm md:text-base font-light placeholder:text-neutral-700" placeholder="Briefly describe the operational bottlenecks you wish to solve..."></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="group w-full py-6 md:py-8 bg-white text-black font-black uppercase tracking-[0.3em] rounded-2xl md:rounded-3xl flex items-center justify-center gap-4 hover:bg-neutral-200 transition-all hover:scale-[1.01] active:scale-[0.98] shadow-[0_20px_50px_rgba(255,255,255,0.1)] text-xs md:text-sm">
                    Initiate Transformation <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center mt-6 text-[10px] text-neutral-600 uppercase tracking-widest font-black">Secure Data Processing Protocol Active</p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.97) translateY(40px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in { animation: modal-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default ContactModal;
