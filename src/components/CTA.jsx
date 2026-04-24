import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const CTA = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="bg-gradient-to-br from-primary via-emerald-600 to-teal-800 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Ready to keep your data in sync?
              </h2>
              <p className="text-lg md:text-xl text-emerald-50 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                Join hundreds of ecommerce brands that use Syncify to connect Shopify and Salesforce.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button className="bg-white hover:bg-slate-50 text-emerald-800 px-8 py-4 rounded-full text-base font-extrabold transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-emerald-900/30 hover:bg-emerald-900/50 backdrop-blur-md border border-emerald-400/30 text-white px-8 py-4 rounded-full text-base font-extrabold transition-all w-full sm:w-auto hover:-translate-y-1">
                  Free 7-day trial
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
