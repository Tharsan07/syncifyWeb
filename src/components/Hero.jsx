import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, RefreshCw, Cloud } from 'lucide-react';
import FadeIn from './FadeIn';
import ProductUI from './ProductUI';

const Hero = () => {
  return (
    <section className="relative pb-20 lg:pt-10 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-darkGreen/10 via-[#F9FAFB] to-[#F9FAFB] -z-10"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-darkGreen/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
                Sync Shopify with Salesforce <span className="text-transparent bg-clip-text bg-gradient-to-r from-darkGreen to-primary">In Real Time</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-[#6B7280] mb-10 leading-relaxed">
                Easily sync orders, customers, & products in minutes. No delays. No data gaps. No manual fixes.
                <br /><br />
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link to="/contact" className="bg-darkGreen hover:bg-primary text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-[0_8px_30px_rgba(22,101,52,0.3)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:-translate-y-0.5 flex items-center gap-2 group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full lg:h-[600px] flex flex-col items-center justify-center perspective-1000">
            <ProductUI />

            {/* New Icon Flow Section */}
            <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6 w-full relative z-10">
              <FadeIn delay={0.5}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-[#F9FAFB] hover:scale-105 transition-transform duration-300">
                    <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-[#95BF47]" />
                  </div>
                  <span className="text-xs font-semibold text-[#6B7280] tracking-wide">Shopify</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#6B7280]/40" />
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-[#F9FAFB] hover:scale-105 transition-transform duration-300">
                    <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-darkGreen" />
                  </div>
                  <span className="text-xs font-semibold text-[#6B7280] tracking-wide">Syncify</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#6B7280]/40" />
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-[#F9FAFB] hover:scale-105 transition-transform duration-300">
                    <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-[#00A1E0]" />
                  </div>
                  <span className="text-xs font-semibold text-[#6B7280] tracking-wide">Salesforce</span>
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
