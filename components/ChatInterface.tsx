
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot } from 'lucide-react';

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Hello! I'm Opsora AI. Need help automating your workflow?" }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const currentInput = input;
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: `Got it. We can definitely help automate "${currentInput}". Should I show you our Pricing or connect you with a Human?` }]);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-10 z-[250] w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] bg-black/95 border border-white/20 rounded-[2rem] backdrop-blur-3xl shadow-[0_10px_40px_-10px_rgba(255,255,255,0.15)] flex flex-col overflow-hidden animate-chat-in ring-1 ring-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.03]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-lg">
            <Bot className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="font-black text-[11px] uppercase tracking-tighter text-white">Opsora AI</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Active</p>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="p-1.5 hover:bg-white/10 rounded-full text-white/30 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-grow p-4 overflow-y-auto space-y-3 scroll-smooth scrollbar-hide"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-[12px] leading-relaxed font-medium ${
              m.role === 'user' 
                ? 'bg-white text-black rounded-tr-none shadow-md' 
                : 'bg-white/10 text-white border border-white/5 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-white/[0.02]">
        <div className="relative flex items-center gap-2">
          <input 
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-grow bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-[12px] text-white outline-none focus:border-white/40 focus:bg-white/10 transition-all placeholder:text-neutral-600"
            placeholder="Ask anything..."
          />
          <button 
            type="submit" 
            disabled={!input.trim()}
            className="p-2 bg-white text-black rounded-xl hover:scale-110 active:scale-95 transition-all disabled:opacity-30 disabled:scale-100"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(15px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-chat-in { animation: chat-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ChatInterface;
