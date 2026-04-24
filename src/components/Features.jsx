import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, RefreshCw, Layers, Globe, Sliders, AlertCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              What Syncify Does
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Everything you wish Shopify and Salesforce did natively</h3>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Syncify bridges the gap between your ecommerce store and your CRM and keeps every record, order, and customer perfectly in sync.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Real-Time Sync', icon: Zap, desc: 'Data moves the moment something changes in Shopify or Salesforce. No delays, no scheduled imports.' },
            { title: 'Bi-Directional Sync', icon: RefreshCw, desc: 'Updates flow both ways automatically. A change in Salesforce reflects in Shopify and vice versa.' },
            { title: 'Multi-Store Support', icon: Layers, desc: 'Manage multiple Shopify storefronts from a single Salesforce org. One dashboard, complete visibility.' },
            { title: 'Multi-Currency Compatible', icon: Globe, desc: 'Handle international transactions accurately. All currencies sync and reflect correctly in Salesforce.' },
            { title: 'Custom Field Mapping', icon: Sliders, desc: 'Map any Shopify field to any Salesforce field or custom object. Full control over how your data flows.' },
            { title: 'Error Monitoring & Logs', icon: AlertCircle, desc: 'Track every sync event. Get detailed alerts when something needs attention and resolve issues fast.' }
          ].map((feature, idx) => (
            <FadeIn key={idx} delay={0.05 * idx}>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(79,166,79,0.12)] hover:-translate-y-1 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 bg-slate-50 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:border-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link to="/features" className="inline-flex items-center text-primary font-bold hover:text-emerald-700 transition-colors group bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md">
              See all features <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Features;
