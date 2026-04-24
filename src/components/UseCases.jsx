import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Headset, Cog, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-[#F9FAFB] border-b border-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F6E56]/10 border border-[#1D9E75]/20 text-[#0F6E56] text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              Who It's For
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight leading-tight">Built for every team that touches customer data</h3>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              Whether you're in sales, support, or operations Syncify gives your team the accurate, real-time information they need to do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { team: 'Sales Teams', icon: Target, desc: 'Close more deals with real-time customer data. When a customer places an order in Shopify, Syncify instantly updates their Salesforce record giving your reps complete visibility into order history, purchase frequency, and customer value.' },
              { team: 'Support Teams', icon: Headset, desc: 'Resolve customer issues faster with full order context. Every case in Salesforce is backed by live Shopify data order status, shipping, refunds, and more right at your agent\'s fingertips.' },
              { team: 'Operations Teams', icon: Cog, desc: 'Eliminate manual processes and data silos. Syncify replaces error-prone CSV exports with automated, real-time data flow so your team can focus on growth, not data hygiene.' }
            ].map((uc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-[#F9FAFB] hover:border-[#1D9E75]/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#F9FAFB] border border-[#F9FAFB] group-hover:bg-[#E1F5EE] group-hover:border-[#1D9E75]/20 flex items-center justify-center flex-shrink-0 transition-colors mb-6">
                  <uc.icon className="w-6 h-6 text-[#6B7280] group-hover:text-[#0F6E56] transition-colors" />
                </div>
                <h4 className="font-extrabold text-[#111827] text-2xl mb-4 tracking-tight">{uc.team}</h4>
                <p className="text-[#6B7280] text-base leading-relaxed font-medium mb-8">
                  <strong className="text-[#111827] block mb-2">{uc.desc.split('.')[0]}.</strong>{uc.desc.substring(uc.desc.indexOf('.') + 1).trim()}
                </p>
                <div className="mt-auto">
                  <Link to="/use-cases" className="inline-flex items-center text-sm font-bold text-[#0F6E56] hover:text-[#1D9E75] transition-colors group/link">
                    See Use Case
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default UseCases;
