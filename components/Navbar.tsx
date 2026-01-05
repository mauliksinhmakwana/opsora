
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Bot, Zap, Layers, Database } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const serviceLinks = [
    { name: 'AI Chatbots', href: '#/service/ai-chatbots', icon: <Bot className="w-4 h-4" />, desc: 'Automated enquiry handling' },
    { name: 'Workflow Engines', href: '#/service/workflow-engines', icon: <Zap className="w-4 h-4" />, desc: 'Autonomous business logic' },
    { name: 'WhatsApp API', href: '#/service/whatsapp-api', icon: <Layers className="w-4 h-4" />, desc: 'Scalable mobile automation' },
    { name: 'CRM Sync', href: '#/service/crm-sync', icon: <Database className="w-4 h-4" />, desc: 'Data-driven efficiency' },
  ];

  const mainLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Pricing', href: '#/pricing' },
    { name: 'Process', href: '#/how' },
  ];

  const handleNavigate = (href: string) => {
    window.location.hash = href;
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 rounded-[2.5rem] md:rounded-full border border-white/10 backdrop-blur-3xl transition-all ${isScrolled ? 'bg-black/40 shadow-2xl shadow-white/5 border-white/20' : 'bg-white/[0.03]'}`}>
          <button 
            onClick={() => handleNavigate('#/')} 
            className="flex items-baseline gap-1.5 group transition-all"
          >
            <span className="font-['Outfit'] font-[900] text-2xl uppercase tracking-tighter text-white group-hover:tracking-normal transition-all duration-500">
              OPSORA
            </span>
            <span className="font-['Outfit'] font-light text-[10px] uppercase tracking-[0.4em] text-white/40">
              Systems
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavigate('#/')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors"
            >
              Home
            </button>
            
            {/* SERVICES DROPDOWN (Desktop) */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${isServicesOpen ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
              >
                Services <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${isServicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="w-64 bg-black/90 border border-white/10 backdrop-blur-3xl rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="space-y-1">
                    {serviceLinks.map((service, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(service.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 text-left group transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                          {service.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-white">{service.name}</p>
                          <p className="text-[8px] text-neutral-500 uppercase tracking-tighter mt-0.5">{service.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.slice(1).map(link => (
              <button 
                key={link.name} 
                onClick={() => handleNavigate(link.href)}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <button 
              onClick={onOpenContact} 
              className="px-7 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
            >
              Contact
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors" 
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE BAR (DRAWER) */}
      <div className={`md:hidden fixed inset-0 z-[200] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer Content */}
        <div className={`absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-black border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-8 border-b border-white/5">
            <span className="font-['Outfit'] font-[900] text-xl uppercase tracking-tighter text-white">MENU</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-grow overflow-y-auto px-8 py-10 space-y-8">
            <button 
              className="w-full text-left text-3xl font-black uppercase tracking-tighter text-neutral-400 hover:text-white"
              onClick={() => handleNavigate('#/')}
            >
              Home
            </button>

            {/* Mobile Services Accordion */}
            <div>
              <button 
                className={`w-full flex items-center justify-between text-left text-3xl font-black uppercase tracking-tighter transition-colors ${isMobileServicesOpen ? 'text-white' : 'text-neutral-400'}`}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`space-y-5 pt-6 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {serviceLinks.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNavigate(service.href)}
                    className="w-full flex items-center gap-4 text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      {/* Fix: Cast icon to React.ReactElement<any> to allow 'className' prop in cloneElement */}
                      {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black uppercase tracking-widest text-white">{service.name}</span>
                      <span className="text-[10px] text-neutral-500 font-medium">{service.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {mainLinks.slice(1).map(link => (
              <button 
                key={link.name} 
                className="w-full text-left text-3xl font-black uppercase tracking-tighter text-neutral-400 hover:text-white transition-colors"
                onClick={() => handleNavigate(link.href)}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-8 border-t border-white/5">
            <button 
              onClick={() => { onOpenContact(); setIsOpen(false); }} 
              className="w-full py-5 bg-white text-black text-center rounded-2xl text-[12px] font-black uppercase tracking-[0.3em] hover:bg-neutral-200 active:scale-[0.98] transition-all"
            >
              Get Started
            </button>
            <p className="mt-6 text-center text-[10px] text-neutral-600 font-black uppercase tracking-widest">
              Opsora Systems &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
