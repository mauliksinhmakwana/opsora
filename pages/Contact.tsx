
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, MessageSquare } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    plan: 'growth',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const plan = params.get('plan');
    if (plan) {
      setFormData(prev => ({ ...prev, plan }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend or a service like EmailJS.
    // The requirement specified sending to mauliksinhmakwana@gmail.com
    setSubmitted(true);
    
    // Construct mailto for real-world fallback
    const subject = `New Lead: ${formData.plan} Plan Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ABusiness: ${formData.business}%0D%0APlan: ${formData.plan}%0D%0AMessage: ${formData.message}`;
    // window.location.href = `mailto:mauliksinhmakwana@gmail.com?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
        <CheckCircle2 className="w-20 h-20 text-white mb-6 animate-bounce" />
        <h1 className="text-4xl font-black mb-4">REQUEST RECEIVED</h1>
        <p className="text-neutral-400 text-lg max-w-lg mb-10">
          Thank you for choosing Opsora Systems. Our specialists will reach out to you within 24 hours to begin your automation journey.
        </p>
        <button 
          onClick={() => window.location.hash = '/'} 
          className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="animate-up">
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">LET'S START <br /> BUILDING.</h1>
        <p className="text-xl text-neutral-400 font-light mb-12 leading-relaxed">
          Fill out the form and our automation lead will prepare a custom demonstration for your business.
        </p>
        
        <div className="space-y-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <Phone className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">WhatsApp Us</h4>
                      <p className="text-xl font-bold tracking-tight text-white">+91 8401765505</p>
                  </div>
              </div>
              <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <Mail className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Email Directly</h4>
                      <p className="text-xl font-bold tracking-tight text-white">mauliksinhmakwana@gmail.com</p>
                  </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            {/* Benefit Items */}
            <div className="space-y-8">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-xl font-bold opacity-30">01</span>
                    </div>
                    <div>
                        <h4 className="font-bold">24-hour turnaround</h4>
                        <p className="text-sm text-neutral-500">Fast response to all business enquiries.</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-xl font-bold opacity-30">02</span>
                    </div>
                    <div>
                        <h4 className="font-bold">Expert consultation</h4>
                        <p className="text-sm text-neutral-500">Direct access to workflow architects.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="p-10 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl animate-up stagger-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Your Name</label>
            <input 
              required
              type="text" 
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="you@company.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Business Name</label>
            <input 
              required
              type="text" 
              placeholder="Company Inc."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all"
              value={formData.business}
              onChange={e => setFormData({...formData, business: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Select Plan</label>
            <div className="relative">
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all appearance-none cursor-pointer"
                value={formData.plan}
                onChange={e => setFormData({...formData, plan: e.target.value})}
              >
                {PRICING_PLANS.map(plan => (
                  <option key={plan.id} value={plan.id} className="bg-black text-white">{plan.name}</option>
                ))}
                <option value="custom" className="bg-black text-white">Custom Solution</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                <Send className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest opacity-50 ml-2">Tell us about your needs</label>
            <textarea 
              rows={4}
              placeholder="What would you like to automate?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white focus:bg-white/10 transition-all resize-none"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            Submit Request <Send className="w-5 h-5" />
          </button>
          
          <p className="text-[10px] text-center text-neutral-600 uppercase tracking-widest font-black pt-4">
            Secure submission protocol active
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
