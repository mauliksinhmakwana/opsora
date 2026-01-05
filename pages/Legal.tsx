
import React, { useEffect } from 'react';

const Legal: React.FC = () => {
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      let targetId = '';

      if (hash === '#/terms-of-use') targetId = 'terms';
      else if (hash === '#/privacy-policy') targetId = 'privacy';
      else if (hash === '#/refund-policy') targetId = 'refund';
      else if (hash === '#/cookie-policy') targetId = 'cookies';
      else if (hash.includes('#')) targetId = hash.split('#').pop() || '';

      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            const yOffset = -120;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto space-y-24">
      <div className="text-center animate-up">
        <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter">Legal Center</h1>
        <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px] font-black">Opsora Systems Operational Protocols</p>
      </div>

      <section id="terms" className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl animate-up stagger-1 scroll-mt-32">
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Terms of Service</h2>
        <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
          <p className="font-light text-xs uppercase tracking-widest">Effective Date: October 2023</p>
          <p>By using our automation and chatbot services, you agree to these Terms of Service. Our services are provided on a subscription basis and are designed to automate customer enquiries, follow-ups, and related workflows using third-party platforms such as WhatsApp and automation tools.</p>
          <h3 className="text-white text-xl font-bold uppercase tracking-tight">1. Service Provisions</h3>
          <p>Opsora Systems provides digital automation consultancy and implementation. All services are governed by individual Service Agreements signed between Opsora Systems and the client.</p>
        </div>
      </section>

      <section id="privacy" className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl animate-up stagger-2 scroll-mt-32">
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Privacy Policy</h2>
        <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
          <p>We respect your privacy and are committed to protecting the information you share with us. When you contact us or use our automation services, we may collect basic business information such as name, phone number, email address, and messages required to provide WhatsApp automation.</p>
          <p>We do not sell, rent, or misuse your data. Information is shared only with trusted platforms strictly for service operation.</p>
        </div>
      </section>

      <section id="refund" className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl animate-up stagger-3 scroll-mt-32">
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Refund & Cancellation</h2>
        <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
          <p>Our services are offered on a subscription basis and involve time, platform usage, and automation setup. Due to the nature of digital services, payments once made are <span className="text-white font-bold underline">non-refundable</span>.</p>
          <p>You may cancel your subscription at any time by notifying us before the next billing cycle. Once cancelled, your service will remain active until the end of the current paid period.</p>
        </div>
      </section>

      <section id="cookies" className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl animate-up stagger-4 scroll-mt-32">
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-white">Cookie Policy</h2>
        <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
          <p>We use cookies to enhance your experience and analyze our traffic. Essential cookies are used for security and lead form integrity.</p>
          <p>Performance analytics help us understand how users interact with our "Visualizing Efficiency" components.</p>
        </div>
      </section>
    </div>
  );
};

export default Legal;
