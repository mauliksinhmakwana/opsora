
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, HelpCircle, AlertCircle } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

const Pricing: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 animate-up">
        <h1 className="text-5xl md:text-7xl font-black mb-8">FAIR PRICING</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
          Choose a plan that fits your business stage. No hidden fees, just pure efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
        {PRICING_PLANS.map((plan, idx) => (
          <div 
            key={plan.id}
            className={`flex flex-col p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 hover:shadow-2xl animate-up stagger-${idx + 1} ${plan.isPopular ? 'bg-white/10 border-white/40 scale-105 z-10 shadow-[0_0_50px_rgba(255,255,255,0.05)]' : 'bg-white/5 border-white/10 text-white shadow-xl'}`}
          >
            {plan.isPopular && (
              <span className="bg-white text-black px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase self-start mb-6">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-black mb-2 tracking-tighter">{plan.name}</h2>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-black">{plan.price}</span>
              <span className="text-sm text-neutral-500">{plan.period}</span>
            </div>
            <p className="text-sm mb-10 leading-relaxed text-neutral-400">
              {plan.description}
            </p>

            <div className="flex-grow">
              <h4 className="text-xs font-black uppercase tracking-widest mb-6 opacity-50">What's included:</h4>
              <ul className="space-y-5">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 mt-0.5 text-white/80" />
                    <span className="text-sm font-medium text-neutral-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <LiquidButton 
              variant={plan.isPopular ? 'primary' : 'outline'}
              className="mt-12 w-full"
              onClick={() => window.location.hash = `/contact?plan=${plan.id}`}
            >
              Get Started Now
            </LiquidButton>
          </div>
        ))}
      </div>

      {/* Refund & Cancellation Disclaimer - NEW ADDITION */}
      <div className="animate-up stagger-4 max-w-4xl mx-auto p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md mb-32">
        <div className="flex items-start gap-5">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
            <AlertCircle className="w-5 h-5 text-white/60" />
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-3">Refund & Cancellation Policy</h4>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Our services are offered on a subscription basis and involve time, platform usage, and automation setup. Due to the nature of digital services, payments once made are <span className="text-white">non-refundable</span>. This includes monthly subscriptions, discounted plans, and any promotional offers. You may cancel your subscription at any time by notifying us before the next billing cycle. 
              <a href="#/legal#refund" className="ml-2 text-white hover:underline font-medium">Read full policy →</a>
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section with glass styling */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How long does setup take?", a: "Most automations are live within 48 to 72 hours." },
            { q: "Can I cancel anytime?", a: "Yes, our monthly plans are flexible. Long term commitments get discounts." },
            { q: "Do you offer custom integrations?", a: "Absolutely. Contact us for custom API development." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-start gap-4 mb-2">
                <HelpCircle className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <h4 className="font-bold text-lg">{item.q}</h4>
              </div>
              <p className="pl-9 text-neutral-400 font-light text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
