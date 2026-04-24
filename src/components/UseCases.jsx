import React from 'react';
import { Target, Headset, Cog } from 'lucide-react';
import FadeIn from './FadeIn';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-[#F8FAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              Who It's For
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Built for every team that touches customer data</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Whether you're in sales, support, or operations Syncify gives your team the accurate, real-time information they need to do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { team: 'Sales Teams', icon: Target, desc: 'Close more deals with real-time customer data. When a customer places an order in Shopify, Syncify instantly updates their Salesforce record giving your reps complete visibility into order history, purchase frequency, and customer value.' },
              { team: 'Support Teams', icon: Headset, desc: 'Resolve customer issues faster with full order context. Every case in Salesforce is backed by live Shopify data order status, shipping, refunds, and more right at your agent\'s fingertips.' },
              { team: 'Operations Teams', icon: Cog, desc: 'Eliminate manual processes and data silos. Syncify replaces error-prone CSV exports with automated, real-time data flow so your team can focus on growth, not data hygiene.' }
            ].map((uc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-primary/10 group-hover:border-primary/20 flex items-center justify-center flex-shrink-0 transition-colors mb-6">
                  <uc.icon className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-2xl mb-4 tracking-tight">{uc.team}</h4>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  <strong className="text-slate-900 block mb-2">{uc.desc.split('.')[0]}.</strong>{uc.desc.substring(uc.desc.indexOf('.') + 1).trim()}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default UseCases;
