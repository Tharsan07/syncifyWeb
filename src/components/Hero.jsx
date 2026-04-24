import React from 'react';
import { ArrowRight, ShoppingBag, RefreshCw, Cloud } from 'lucide-react';
import FadeIn from './FadeIn';
import ProductUI from './ProductUI';

const Hero = () => {
  return (
    <section className="relative pb-20 lg:pt-10 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#F8FAFC] to-[#F8FAFC] -z-10"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary/20 text-darkGreen text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                A Shopify to Salesforce Connector App
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Sync Shopify with Salesforce <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">In Real Time</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                Sync orders, customers, products, & inventory between Shopify and Salesforce.
                <br /><br />
                <strong className="font-semibold text-slate-800">No manual exports. No data gaps.</strong> Just accurate, real-time information across every team.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <button className="bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-[0_8px_30px_rgb(79,166,79,0.3)] hover:shadow-[0_8px_30px_rgb(79,166,79,0.4)] hover:-translate-y-0.5 flex items-center gap-2 group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-sm text-slate-500 font-medium">
                  Free 7-day trial available
                  <span className="block text-slate-400 mt-0.5">No credit card required</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full lg:h-[600px] flex flex-col items-center justify-center perspective-1000">
            <ProductUI />
            
            {/* New Icon Flow Section */}
            <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6 w-full relative z-10">
              <FadeIn delay={0.5}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition-transform duration-300">
                    <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-[#95BF47]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-wide">Shopify</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition-transform duration-300">
                    <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-wide">Syncify</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition-transform duration-300">
                    <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-[#00A1E0]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-wide">Salesforce</span>
                </div>
              </FadeIn>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
