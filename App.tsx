
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import ChatInterface from './components/ChatInterface';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import How from './pages/How';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import ServiceDetail from './pages/ServiceDetail';
import { MessageSquare, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash;
      if (!hash || hash === '#' || hash === '#/') {
        hash = '#/';
      }
      setCurrentPath(hash);
      
      // Standard scroll to top on page change, unless it's an internal anchor
      if (!hash.includes('#') || hash.split('#').length <= 2) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const fullPath = currentPath.split('?')[0];
    
    // Dynamic Service Routes
    if (fullPath.startsWith('#/service/')) {
      const serviceId = fullPath.replace('#/service/', '');
      return <ServiceDetail serviceId={serviceId} />;
    }

    // Mapping legal sub-routes to the Legal component
    if (fullPath.startsWith('#/legal') || 
        fullPath === '#/terms-of-use' || 
        fullPath === '#/privacy-policy' || 
        fullPath === '#/refund-policy' || 
        fullPath === '#/cookie-policy') {
      return <Legal />;
    }
    
    switch (fullPath) {
      case '#/':
      case '':
      case '#':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/solutions':
        return <Solutions />;
      case '#/pricing':
        return <Pricing />;
      case '#/how':
        return <How />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const navigateToContact = () => {
    window.location.hash = '#/contact';
  };

  return (
    <div className="min-h-screen text-white relative flex flex-col selection:bg-white/20 bg-black overflow-x-hidden">
      <StarBackground />
      
      <div className="relative z-10 flex flex-col flex-grow w-full">
        <Navbar onOpenContact={navigateToContact} />
        <main className="flex-grow w-full">
          <div key={currentPath.split('?')[0]} className="page-transition w-full">
            {renderPage()}
          </div>
        </main>
        <Footer />
      </div>

      {/* FIXED CHATBOT BUTTON */}
      <div className="fixed bottom-6 right-6 z-[300] sm:bottom-8 sm:right-8">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(255,255,255,0.05)] transition-all duration-500 group border border-white/10 ${isChatOpen ? 'bg-white text-black rotate-90 scale-110' : 'bg-black/60 text-white backdrop-blur-xl hover:scale-110 active:scale-90 hover:border-white/30'}`}
        >
          {isChatOpen ? <X className="w-6 h-6 sm:w-8 sm:h-8" /> : <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform" />}
        </button>
      </div>

      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-neutral-200 rounded-full blur-[180px]" />
      </div>
    </div>
  );
};

export default App;
