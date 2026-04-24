import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-[3rem] bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] p-12 md:p-20 overflow-hidden shadow-2xl shadow-[#0F6E56]/20">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#085041]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Ready to keep your data in sync?
              </h2>
              <p className="text-lg md:text-xl text-[#E1F5EE] mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                Join hundreds of ecommerce brands that use Syncify to connect Shopify and Salesforce.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link to="/contact" className="bg-white hover:bg-[#F9FAFB] text-[#085041] px-8 py-4 rounded-full text-base font-extrabold transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/features" className="bg-[#085041]/30 hover:bg-[#085041]/50 backdrop-blur-md border border-[#1D9E75]/30 text-white px-8 py-4 rounded-full text-base font-extrabold transition-all w-full sm:w-auto hover:-translate-y-1 text-center">
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
