
import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-white/5 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
        <div className="md:col-span-2 space-y-8">
          <a href="#/" className="flex items-baseline gap-2 group">
            <span className="font-['Outfit'] font-[900] text-3xl uppercase tracking-tighter text-white">
              OPSORA
            </span>
            <span className="font-['Outfit'] font-light text-xs uppercase tracking-[0.4em] text-white/40">
              Systems
            </span>
          </a>
          <p className="text-neutral-500 max-w-sm leading-relaxed text-lg font-light">
            The premium automation agency for B2B businesses looking to scale operations with AI-powered chatbots and hyper-efficient workflows.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
          <ul className="space-y-5 text-neutral-500 text-sm font-medium">
            <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#/solutions" className="hover:text-white transition-colors">Solutions</a></li>
            <li><a href="#/pricing" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#/how" className="hover:text-white transition-colors">Our Process</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-white mb-8 uppercase tracking-[0.3em] text-[10px]">Legal</h4>
          <ul className="space-y-5 text-neutral-500 text-sm font-medium">
            <li><a href="#/terms-of-use" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#/refund-policy" className="hover:text-white transition-colors">Refund & Cancellation</a></li>
            <li><a href="#/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] text-neutral-600 font-black tracking-[0.3em] uppercase">
        <p>&copy; {new Date().getFullYear()} Opsora Systems. Engineered for Scalability.</p>
        <p className="mt-4 md:mt-0">Premium B2B Automation</p>
      </div>
    </footer>
  );
};

export default Footer;
