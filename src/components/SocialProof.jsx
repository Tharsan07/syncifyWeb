import React from 'react';
import { Layers } from 'lucide-react';
import FadeIn from './FadeIn';

const SocialProof = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          <div className="flex flex-col gap-2 shrink-0 text-center lg:text-left">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1">
              Trusted by ecommerce brands<br className="hidden lg:block"/> and Salesforce teams worldwide
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <svg className="w-4 h-4 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.332 5.06h-1.895l-1.04-3.324A1.002 1.002 0 0 0 15.445.98H8.555a1.001 1.001 0 0 0-.952.756L6.564 5.06H4.668a2.502 2.502 0 0 0-2.5 2.5v12.94a2.503 2.503 0 0 0 2.5 2.5h14.664a2.502 2.502 0 0 0 2.5-2.5V7.56a2.501 2.501 0 0 0-2.499-2.5h-.001Zm-3.83-2.08.784 2.5H7.714l.784-2.5h6.994ZM19.832 20.5a.5.5 0 0 1-.5.5H4.668a.5.5 0 0 1-.5-.5V7.56a.5.5 0 0 1 .5-.5h14.664a.5.5 0 0 1 .5.5v12.94Z"/></svg>
                Shopify Partner Ecosystem
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <Layers className="w-4 h-4 text-primary" />
                200+ Stores Actively Syncing
              </div>
            </div>
          </div>

          <div className="w-full h-px lg:w-px lg:h-16 bg-slate-100 lg:block shrink-0"></div>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-x-12 gap-y-8 w-full">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-extrabold text-slate-900 tracking-tight">12,000+</div>
              <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wide mt-1">Orders synced daily</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-extrabold text-slate-900 tracking-tight">200+</div>
              <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wide mt-1">Active storefronts</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-extrabold text-slate-900 tracking-tight">&lt; 15<span className="text-2xl text-slate-400">–</span>20<span className="text-xl">m</span></div>
              <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wide mt-1">Average sync speed</div>
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default SocialProof;
