import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Link2, Sliders, Zap, Activity } from 'lucide-react';
import FadeIn from './FadeIn';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#F9FAFB] relative overflow-hidden z-0 border-b border-[#F9FAFB]">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0F6E56]/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#1D9E75]/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1D9E75]/20 text-[#0F6E56] text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              How It Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#111827]">Up and running in under 10 minutes</h3>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              No complicated configuration. Syncify is built exclusively for business teams to handle.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-[#0F6E56]/30 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {[
              { step: '1', icon: Link2, title: 'Connect', desc: 'Install Syncify and authenticate your Shopify store. Done in two clicks.' },
              { step: '2', icon: Sliders, title: 'Configure', desc: 'Use the visual field mapping editor to define exactly which data you want to sync and how it maps to Salesforce objects.' },
              { step: '3', icon: Zap, title: 'Enable', desc: 'Turn on real-time sync. Syncify immediately begins syncing your orders, customers, products, and inventory.' },
              { step: '4', icon: Activity, title: 'Monitor', desc: 'Watch sync activity in the dashboard. Review logs, resolve any errors, and scale with confidence.' }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} className="flex h-full">
                <div className="bg-[#E1F5EE]/40 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all w-full flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white border-2 border-[#1D9E75]/20 text-[#0F6E56] rounded-full flex items-center justify-center text-2xl font-extrabold mb-6 shadow-sm relative group-hover:scale-105 transition-transform">
                    <item.icon className="w-6 h-6 absolute opacity-10" />
                    <span className="relative z-10">{item.step}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-[#111827] tracking-tight">{item.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-20 bg-gradient-to-r from-[#E1F5EE]/50 to-white rounded-[2.5rem] p-10 flex flex-col sm:flex-row items-center justify-between border border-[#1D9E75]/20 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F6E56 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
            <div className="mb-8 sm:mb-0 text-center sm:text-left relative z-10">
              <h4 className="text-2xl font-extrabold mb-2 text-[#111827] tracking-tight">See Syncify in action</h4>
              <p className="text-[#6B7280] font-medium">Live, with your questions answered</p>
            </div>
            <Link to="/contact" className="bg-[#0F6E56] hover:bg-[#1D9E75] text-white px-8 py-4 rounded-full text-base font-extrabold transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-[0_8px_30px_rgba(15,110,86,0.3)] hover:-translate-y-0.5 relative z-10">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book a Demo
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HowItWorks;