
import React from 'react';
import { PricingPlan } from './types';
import { Bot, Zap, Layers, Database, MessageSquare, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Assist',
    price: '₹499',
    period: '/ month',
    description: 'Best for very small businesses starting with automation',
    features: [
      'Basic automation support',
      'Auto WhatsApp replies (info / FAQs)',
      '1 enquiry capture workflow',
      'Basic maintenance & monitoring',
      'No integrations',
      'Limited support'
    ]
  },
  {
    id: 'growth',
    name: 'Business Growth',
    price: '₹799',
    period: '/ month',
    description: 'Ideal for handling daily enquiries & follow-ups',
    isPopular: true,
    features: [
      'Smart chatbot with conditional replies',
      '2 automation workflows',
      'WhatsApp + Google Sheets integration',
      'Monthly maintenance',
      'One month free with 3-month commitment'
    ]
  },
  {
    id: 'pro',
    name: 'Business Automation Pro',
    price: '₹1,299',
    period: '/ month',
    description: 'For businesses serious about scale and automation',
    features: [
      'Complete automation system',
      'Advanced AI chatbot',
      '3–5 automation workflows',
      'Follow-ups & reminders system',
      'Priority support',
      'Monthly optimization',
      'One month free with 6-month commitment'
    ]
  }
];

export const SERVICES_DATA = {
  'ai-chatbots': {
    title: "AI CHATBOTS",
    subtitle: "Conversational Intelligence",
    description: "Our AI Chatbots are designed to handle complex customer enquiries using Natural Language Processing. They don't just follow scripts; they understand intent and drive results 24/7.",
    icon: <Bot className="w-12 h-12" />,
    features: [
      { title: "24/7 Availability", desc: "Never let a customer wait for a reply, regardless of the time.", icon: <Clock className="w-5 h-5" /> },
      { title: "Lead Qualification", desc: "Automatically filter high-value prospects before they reach your team.", icon: <ShieldCheck className="w-5 h-5" /> },
      { title: "Multi-Language", desc: "Speak your customer's language with automated translation layers.", icon: <MessageSquare className="w-5 h-5" /> },
      { title: "Instant Conversion", desc: "Book meetings and accept orders directly within the chat interface.", icon: <TrendingUp className="w-5 h-5" /> }
    ]
  },
  'workflow-engines': {
    title: "WORKFLOW ENGINES",
    subtitle: "Autonomous Logic",
    description: "Connect your entire business ecosystem. Our workflow engines automate the repetitive tasks between your apps, ensuring data flows where it needs to without human intervention.",
    icon: <Zap className="w-12 h-12" />,
    features: [
      { title: "App Orchestration", desc: "Connect HubSpot, Google Sheets, Slack, and more seamlessly.", icon: <Layers className="w-5 h-5" /> },
      { title: "Error Elimination", desc: "Remove manual data entry risks with 100% accurate autonomous logic.", icon: <ShieldCheck className="w-5 h-5" /> },
      { title: "Real-time Sync", desc: "Watch your systems update instantly as actions occur across platforms.", icon: <Zap className="w-5 h-5" /> },
      { title: "Scale with Ease", desc: "Handle 10x the volume without increasing your administrative staff.", icon: <TrendingUp className="w-5 h-5" /> }
    ]
  },
  'whatsapp-api': {
    title: "WHATSAPP API",
    subtitle: "High-Volume Communication",
    description: "Leverage the world's most popular messaging app for your business. We provide official API integration for broadcast, automated replies, and customer engagement at scale.",
    icon: <Layers className="w-12 h-12" />,
    features: [
      { title: "Official Integration", desc: "Secure your business with verified Meta WhatsApp API status.", icon: <ShieldCheck className="w-5 h-5" /> },
      { title: "Automated Broadcasts", desc: "Send updates and promotions to thousands with high open rates.", icon: <Zap className="w-5 h-5" /> },
      { title: "Rich Media Support", desc: "Share PDFs, images, and locations automatically in response to triggers.", icon: <MessageSquare className="w-5 h-5" /> },
      { title: "Interactive Buttons", desc: "Reduce user effort with quick-reply buttons and list menus.", icon: <TrendingUp className="w-5 h-5" /> }
    ]
  },
  'crm-sync': {
    title: "CRM SYNC",
    subtitle: "Unified Data Ecosystem",
    description: "Turn your communication channels into a goldmine of data. We ensure every interaction is captured, categorized, and stored in your CRM for perfect business intelligence.",
    icon: <Database className="w-12 h-12" />,
    features: [
      { title: "Centralized Leads", desc: "Capture enquiries from all channels directly into your CRM.", icon: <Database className="w-5 h-5" /> },
      { title: "Performance Tracking", desc: "Track conversion rates and response times with automated dashboards.", icon: <TrendingUp className="w-5 h-5" /> },
      { title: "Automated Categorization", desc: "Tag and segment leads based on their chat history automatically.", icon: <Layers className="w-5 h-5" /> },
      { title: "No Data Loss", desc: "Ensure every conversation is logged and searchable for your sales team.", icon: <ShieldCheck className="w-5 h-5" /> }
    ]
  }
};
