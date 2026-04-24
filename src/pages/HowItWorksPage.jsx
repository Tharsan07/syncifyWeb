import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Sliders, Zap, Link as LinkIcon, Database, ArrowRightLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const steps = [
  {
    num: "1",
    title: "Connect Your Shopify Store",
    desc: "Authorise your Shopify store from within Syncify. No API keys to manage manually. If you have multiple Shopify stores, connect them all. Syncify supports multi-store from the same setup screen.",
    happens: "Syncify connects to your Shopify store and reads your data schema, products, orders, customers, and more."
  },
  {
    num: "2",
    title: "Configure Your Field Mapping",
    desc: "Use Syncify's visual field mapping editor to define how your Shopify data maps to Salesforce objects. Choose which fields sync, in which direction, and to which Salesforce records like accounts, contacts, orders, opportunities, or custom objects. Save when ready.",
    happens: "Syncify saves your mapping rules and prepares to apply them on every sync event."
  },
  {
    num: "3",
    title: "Enable Sync and Monitor",
    desc: "Flip the sync switch. Syncify immediately begins syncing data in real time using Shopify. Head to the dashboard to watch orders, customers, and products flowing into Salesforce. All sync events are logged into successes and errors, so you always have full visibility.",
    happens: "Your Shopify and Salesforce data is now live and in sync. All future changes are handled automatically."
  }
];

const mappedObjects = [
  { shopify: "Orders", salesforce: "Order / Opportunity" },
  { shopify: "Customers", salesforce: "Account + Contact" },
  { shopify: "Products & Variants", salesforce: "Products + Price Books" },
  { shopify: "Inventory Levels", salesforce: "Custom Object / Product fields" },
  { shopify: "Refunds", salesforce: "Credit Notes / Custom Object" },
  { shopify: "Shipping & Fulfilment", salesforce: "Order fields / Custom Object" },
  { shopify: "Draft Orders", salesforce: "Draft Order / Quote" },
  { shopify: "Collections", salesforce: "Product Categories" }
];

const faqs = [
  { q: "Do I need to know how to code to set up Syncify?", a: "No. Syncify is designed for non-technical users. The setup wizard guides you through every step with clear instructions. No code, no API keys, no developer required." },
  { q: "How long does the initial sync take?", a: "Real-time sync begins immediately after you enable it. For first-time historical imports, small stores sync in minutes and larger stores with 10,000+ orders may take a few hours for the initial import, after which all new data syncs in real time." },
  { q: "Does Syncify sync historical data or only new orders going forward?", a: "Both. You can use Syncify's one-click historical import to bring all past orders, customers, and products into Salesforce. Once complete, real-time sync takes over and handles everything going forward automatically." },
  { q: "What Salesforce objects does Syncify support?", a: "Syncify supports Orders, Accounts, Contacts, Products, Price Books, Opportunities, Draft Orders, Refunds, and Inventory. Custom Salesforce objects are also supported through the field mapping editor." },
  { q: "What happens if a sync fails?", a: "Syncify logs every sync event including failures with a timestamp, the record affected, and the reason for the failure. You can retry failed syncs directly from the dashboard." },
  { q: "Is my data secure?", a: "All data is transferred over encrypted connections. Syncify never stores your Shopify or Salesforce credentials." },
  { q: "Can I connect to more than one Shopify store?", a: "Yes. Syncify supports multi-store connections. You can link multiple Shopify storefronts to a single Salesforce org and manage them all from one place. Each store's data is clearly attributed within Salesforce." },
  { q: "What is the difference between Standard and Pro?", a: "The Standard plan syncs data from Shopify to Salesforce. The Pro plan includes full bi-directional sync meaning changes made in Salesforce are automatically reflected back in Shopify. See the Pricing page for a full comparison." }
];

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Sync Shopify to Salesforce in under 10 minutes
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Syncify is built for business teams, not IT departments. There is no code to write, no API to configure, and no developer ticket to raise. Just a straightforward setup that gets your platforms talking to each other in a faster way.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button className="bg-primary hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full text-base font-bold transition-colors inline-flex items-center gap-2 group shadow-md">
                    Book a Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-sm text-slate-500 font-medium">We'll walk you through the entire setup live.</span>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-green-100/50 rounded-full flex items-center justify-center border border-green-200">
                  <ArrowRightLeft className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
                <div className="absolute top-4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-500" />
                </div>
                <div className="absolute bottom-4 -right-6 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                  <Sliders className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2 - STEP-BY-STEP */}
      <section className="py-24 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-100 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                THE SETUP PROCESS
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Four steps to a fully connected stack
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-20 right-20 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <FadeIn key={idx} delay={0.1 * idx} className="flex">
                  <div className="bg-green-50/40 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full flex flex-col h-full">
                    <div className="w-12 h-12 bg-white border border-green-200 text-primary rounded-full flex items-center justify-center text-xl font-extrabold mb-6 shadow-sm">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">Step {step.num} — {step.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow">
                      {step.desc}
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 mt-auto">
                      <p className="text-sm font-semibold text-slate-800 mb-1">What happens:</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.happens}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHAT GETS SYNCED */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-100 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                DATA OBJECTS COVERED
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-2 bg-slate-50 border-b border-gray-200 p-4 px-6 md:px-10">
                <div className="text-xs font-bold text-slate-500 tracking-widest uppercase">Shopify Object</div>
                <div className="text-xs font-bold text-slate-500 tracking-widest uppercase">Salesforce Object</div>
              </div>
              <div className="divide-y divide-gray-100">
                {mappedObjects.map((obj, idx) => (
                  <div key={idx} className="grid grid-cols-2 p-4 px-6 md:px-10 hover:bg-slate-50/50 transition-colors">
                    <div className="font-semibold text-slate-800 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary opacity-70" />
                      {obj.shopify}
                    </div>
                    <div className="font-medium text-slate-600 flex items-center">
                      <ArrowRight className="w-3 h-3 text-gray-300 mr-3 hidden sm:block" />
                      {obj.salesforce}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 - FAQ */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 border border-green-200 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                FREQUENTLY ASKED QUESTIONS
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all shadow-sm">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-bold text-slate-900 text-lg pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 - FINAL CTA */}
      <section className="py-24 bg-green-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Still have questions? Let's walk through it together.
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Book a 30-minute demo and our team will show you exactly how Syncify works with your Shopify store and Salesforce setup.
            </p>
            <div className="flex flex-col items-center gap-4">
              <button className="bg-primary hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full text-base font-bold transition-colors inline-flex items-center gap-2 shadow-md hover:-translate-y-0.5">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium flex-wrap">
                <span>30 minutes</span>
                <span>·</span>
                <span>No commitment</span>
                <span>·</span>
                <span>Bring your questions</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;
