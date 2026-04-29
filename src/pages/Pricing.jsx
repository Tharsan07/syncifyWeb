import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  HelpCircle,
  Zap,
  ShieldCheck,
  CreditCard,
  Calendar,
  MessageSquare,
  ArrowRightLeft,
  Store,
  Users,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const standardFeatures = [
    "Real-time one-way sync from Shopify to Salesforce",
    "Automated order sync",
    "Customer and contact logging in Salesforce",
    "Product and inventory sync",
    "Custom field mapping editor",
    "Multi-store support",
    "Multi-currency support",
    "Error monitoring and sync logs",
    "No-code setup wizard",
    "One-click historical data import",
    "Webhook-based data flow",
    "Standard support",
    "Annual billing available on request",
    "Nonprofit discount available"
  ];

  const proFeatures = [
    "Full bi-directional sync ",
    "Salesforce to Shopify product and pricing updates",
    "Salesforce to Shopify customer record sync",
    "Advanced conflict resolution ",
    "Priority support with faster response times",
    "Dedicated onboarding assistance from the Syncify team"
  ];

  const comparisonCategories = [
    {
      title: "Sync Features",
      features: [
        { name: "Sync direction", standard: "One-way", pro: "Bi-directional" },
        { name: "Real-time sync", standard: true, pro: true },
        { name: "Automated order sync", standard: true, pro: true },
        { name: "Salesforce to Shopify sync", standard: false, pro: true },
        { name: "Conflict resolution", standard: false, pro: true },
        { name: "Webhook-based data flow", standard: true, pro: true }
      ]
    },
    {
      title: "Operations",
      features: [
        { name: "Customer / contact logging", standard: true, pro: true },
        { name: "Product and inventory sync", standard: true, pro: true },
        { name: "Custom field mapping", standard: true, pro: true },
        { name: "Multi-store support", standard: true, pro: true },
        { name: "Multi-currency support", standard: true, pro: true },
        { name: "Historical data import", standard: true, pro: true },
        { name: "Error monitoring and logs", standard: true, pro: true }
      ]
    },
    {
      title: "Support & Billing",
      features: [
        { name: "Priority support", standard: "Standard", pro: "Priority 24/7" },
        { name: "Dedicated onboarding", standard: false, pro: true },
        { name: "7-day free trial", standard: true, pro: true },
        { name: "Annual billing (on request)", standard: true, pro: true },
        { name: "Nonprofit discount", standard: true, pro: true },
        { name: "Minimum licenses", standard: "None", pro: "12 Licenses" },
        { name: "No-code setup wizard", standard: true, pro: true }
      ]
    }
  ];


  const faqs = [
    {
      q: "Is there a free trial?",
      a: "Yes. Both plans include a fully functional 7-day free trial. You do not need to provide any credit card details to get started. Simply connect your platforms and test the sync yourself."
    },
    {
      q: "What is the difference between one-way and bi-directional sync?",
      a: "The Standard plan (one-way) syncs data from Shopify to Salesforce. This is perfect for teams who use Salesforce primarily for reporting and sales visibility. The Pro plan (bi-directional) syncs in both directions, meaning updates in Salesforce reflect back in Shopify. This is essential for teams who manage products or customer data directly within Salesforce."
    },
    {
      q: "Why is there a minimum license requirement for Pro?",
      a: "Bi-directional sync is a powerful enterprise feature that requires specific Salesforce environment configurations. The 12-license minimum ensures we can provide the dedicated onboarding and technical assistance needed to set up a conflict-free, reliable bi-directional flow."
    },
    {
      q: "Can I upgrade from Standard to Pro later?",
      a: "Absolutely. You can start with Standard to handle your order flow and upgrade to Pro whenever your team is ready for full bi-directional management. Our team will assist with the transition and new mapping rules."
    },
    {
      q: "Are discounts available for nonprofits?",
      a: "Yes, we are proud to support organisations making a difference. We offer special discounted rates for registered nonprofits. Please reach out to our sales team with your documentation to get started."
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#E1F5EE] to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight mb-6">
              Simple, transparent pricing <br className="hidden md:block" /> & no surprises
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] mb-12 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your team's needs. Both plans include a free 7-day trial with no credit card required to get started.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: CreditCard, label: "No Credit Card Required" },
                { icon: Calendar, label: "Cancel Anytime" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-darkGreen/10 shadow-sm">
                  <badge.icon className="w-4 h-4 text-darkGreen" />
                  <span className="text-sm font-bold text-[#111827]">{badge.label}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-darkGreen hover:bg-primary text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1 group">
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - PRICING CARDS */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Standard Card */}
            <FadeIn direction="up" delay={0.1}>
              <div className="h-full bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 flex flex-col relative overflow-hidden group">
                <div className="mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-black tracking-widest uppercase mb-4">
                    Lowest Starting Price
                  </span>
                  <h3 className="text-2xl font-black text-[#111827] mb-2">Syncify Standard</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black text-[#111827]">$20</span>
                    <span className="text-[#6B7280] font-bold">USD / user / month</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 mb-6">
                    Includes a 7-day free trial with no credit card required.
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-lightGreen rounded-xl border border-darkGreen/10 mb-8">
                    <ArrowRight className="w-4 h-4 text-darkGreen" />
                    <span className="text-xs font-black text-darkGreen uppercase tracking-wider">Shopify to Salesforce (one-way)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {standardFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-lightGreen flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-darkGreen" strokeWidth={4} />
                      </div>
                      <span className="text-gray-600 text-sm font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-50 mt-auto flex flex-col gap-3">
                  <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-darkGreen hover:bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-md">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-lightGreen text-darkGreen px-8 py-4 rounded-xl text-lg font-bold transition-all border border-darkGreen mb-2">
                    Book a Demo
                  </Link>
                  <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                    See Standard in action before you commit
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Pro Card */}
            <FadeIn direction="up" delay={0.2}>
              <div className="h-full bg-white rounded-3xl border-2 border-darkGreen shadow-2xl p-8 md:p-10 flex flex-col relative overflow-hidden group">
                {/* Popular Badge Decoration */}
                <div className="absolute top-0 right-0">
                  <div className="bg-[#0F6E56] text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-2 rotate-45 translate-x-8 translate-y-4 shadow-lg">
                    Recommended
                  </div>
                </div>

                <div className="mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-darkGreen text-white text-xs font-black tracking-widest uppercase mb-4 shadow-md shadow-darkGreen/20">
                    Most Powerful
                  </span>
                  <h3 className="text-2xl font-black text-[#111827] mb-2">Syncify Pro</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black text-[#111827]">$30</span>
                    <span className="text-[#6B7280] font-bold">USD / user / month</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 mb-6">
                    Includes a 7-day free trial with no credit card required.
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-darkGreen to-primary rounded-xl shadow-lg mb-4">
                    <ArrowRightLeft className="w-4 h-4 text-white" />
                    <span className="text-xs font-black text-white uppercase tracking-wider">Shopify and Salesforce fully bi-directional</span>
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">
                    12 licenses required. Contact sales@laconfianzatech.com
                  </p>
                </div>

                <div className="space-y-6 mb-10 flex-grow">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Everything in Standard, plus:</p>
                    <div className="space-y-4">
                      {proFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-darkGreen flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-darkGreen/20">
                            <Check className="w-3 h-3 text-white" strokeWidth={4} />
                          </div>
                          <span className="text-gray-900 text-sm font-bold leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-50 mt-auto flex flex-col gap-3">
                  <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-[#0F6E56] hover:bg-[#085041] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-md">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-green-50 text-[#0F6E56] px-8 py-4 rounded-xl text-lg font-bold transition-all border border-[#0F6E56] mb-2 group">
                    Book a Demo
                  </Link>
                  <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Talk to our team about Pro
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 - COMPARISON TABLE REDESIGN */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
              Compare plans in detail
            </h2>
            <p className="text-gray-600 font-medium">Everything you need to scale your sync operations.</p>
          </FadeIn>

          <div className="space-y-10">
            {/* Header for Desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4 sticky top-20 z-30 bg-gray-50 py-4 px-6">
              <div className="col-span-6"></div>
              <div className="col-span-3 text-center text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Standard</div>
              <div className="col-span-3 text-center text-xs font-black text-[#0F6E56] uppercase tracking-[0.2em]">Syncify Pro</div>
            </div>

            {comparisonCategories.map((category, catIdx) => (
              <FadeIn key={catIdx} delay={catIdx * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100">
                    <h3 className="text-sm font-black text-[#111827] uppercase tracking-widest">{category.title}</h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {category.features.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-3 hover:bg-gray-50 transition-colors group">
                        <div className="md:col-span-6 text-sm font-medium text-gray-700">{row.name}</div>

                        {/* Standard Value */}
                        <div className="md:col-span-3 flex justify-center md:justify-center">
                          <div className="md:hidden text-[10px] font-black text-gray-400 uppercase tracking-widest mr-4">Standard:</div>
                          {typeof row.standard === "boolean" ? (
                            row.standard ? (
                              <Check className="w-4 h-4 text-[#0F6E56]" strokeWidth={3} />
                            ) : (
                              <X className="w-4 h-4 text-gray-200" strokeWidth={3} />
                            )
                          ) : (
                            <span className="text-xs font-bold text-gray-500">{row.standard}</span>
                          )}
                        </div>

                        {/* Pro Value */}
                        <div className="md:col-span-3 flex justify-center md:justify-center bg-green-50/30 md:bg-transparent py-2 md:py-0 rounded-lg">
                          <div className="md:hidden text-[10px] font-black text-[#0F6E56] uppercase tracking-widest mr-4">Pro:</div>
                          {typeof row.pro === "boolean" ? (
                            row.pro ? (
                              <Check className="w-4 h-4 text-darkGreen" strokeWidth={3} />
                            ) : (
                              <X className="w-4 h-4 text-gray-200" strokeWidth={3} />
                            )
                          ) : (
                            <span className="text-xs font-black text-darkGreen">{row.pro}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>


      {/* SECTION 4 - FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
              Common questions
            </h2>
            <p className="text-[#6B7280] text-lg font-medium">Everything you need to know about our plans.</p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all shadow-sm hover:shadow-md">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                    >
                      <span className="font-bold text-[#111827] text-lg pr-4 group-hover:text-[#0F6E56] transition-colors">{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-all ${isOpen ? 'bg-[#E1F5EE] rotate-180' : ''}`}>
                        <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#0F6E56]' : 'text-[#6B7280]'}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-8 pb-8 pt-0">
                            <p className="text-[#6B7280] text-base leading-relaxed font-medium">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - ENTERPRISE CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-[#E1F5EE] to-white rounded-[3rem] p-12 md:p-20 border border-[#0F6E56]/10 shadow-2xl shadow-[#0F6E56]/5 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-[#0F6E56]/10">
                  <MessageSquare className="w-8 h-8 text-[#0F6E56]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">
                  Need a custom arrangement?
                </h2>
                <p className="text-lg md:text-xl text-[#6B7280] mb-12 font-medium leading-relaxed">
                  For large enterprises, agencies managing multiple clients, or organisations with specific compliance or volume requirements, we are happy to discuss a custom arrangement. Get in touch and we will work out a solution that fits.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <a href="mailto:sales@laconfianzatech.com" className="bg-[#111827] hover:bg-[#085041] text-white px-10 py-5 rounded-full text-lg font-extrabold transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group">
                    Contact Sales
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-gray-400 text-sm font-black uppercase tracking-[0.2em]">
                    Email us at sales@laconfianzatech.com
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
