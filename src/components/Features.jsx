import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, RefreshCw, Layers, Globe, Sliders, AlertCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#F9FAFB] border-b border-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F5EE] border border-[#1D9E75]/10 text-[#0F6E56] text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              What Syncify Does
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">Make Shopify And Salesforce Work Like One System</h3>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              With Syncify, bridge the gap between your Ecommerce & CRM. Keep every record, order and customer perfectly in sync.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Real-Time Sync', icon: Zap, desc: 'Data updates instantly across both systems. No lag. No missed orders.' },
            { title: 'Bi-Directional Sync', icon: RefreshCw, desc: 'Changes in Shopify or Salesforce reflect automatically in the other.' },
            { title: 'Multi-Store Support', icon: Layers, desc: 'Run multiple Shopify stores into one Salesforce org without conflicts.' },
            { title: 'Multi-Currency Compatible', icon: Globe, desc: 'Handle global transactions without manual adjustments.' },
            { title: 'Custom Field Mapping', icon: Sliders, desc: 'Structure data exactly how your business needs it.' },
            { title: 'Error Monitoring & Logs', icon: AlertCircle, desc: 'Track every sync event. Failed syncs are logged automatically.' }
          ].map((feature, idx) => (
            <FadeIn key={idx} delay={0.05 * idx}>
              <div className="bg-white p-8 rounded-[2rem] border border-[#F9FAFB] hover:border-[#1D9E75]/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(15,110,86,0.12)] hover:-translate-y-1 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0F6E56]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 bg-[#F9FAFB] group-hover:bg-[#E1F5EE] rounded-2xl flex items-center justify-center mb-6 border border-[#F9FAFB] group-hover:border-[#1D9E75]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#6B7280] group-hover:text-[#0F6E56] transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[#111827] mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-[#6B7280] leading-relaxed text-sm font-medium">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link to="/features" className="inline-flex items-center text-[#0F6E56] font-bold hover:text-[#1D9E75] transition-colors group bg-white px-6 py-3 rounded-full border border-[#F9FAFB] shadow-sm hover:shadow-md">
              See all features <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Features;
