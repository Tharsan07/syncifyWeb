import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';

const Benefits = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-br from-[#E1F5EE]/50 to-white rounded-[2.5rem] p-10 md:p-16 border border-[#1D9E75]/20 shadow-xl shadow-[#0F6E56]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F6E56]/10 rounded-bl-[100px] -z-10"></div>

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F5EE] border border-[#1D9E75]/10 text-[#0F6E56] text-[11px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                Why Teams Choose Syncify
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight leading-tight">Stop Managing Data & Start Using It</h3>
              <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                Remove operational overhead, so your teams can focus on business revenue.

              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {[
                { title: 'Eliminate manual data entry', desc: 'No more CSV exports, copy-paste errors, or out-of-date spreadsheets.' },
                { title: 'Ensure data consistency across platforms', desc: 'One source of truth for your entire organisation.' },
                { title: 'Improve team productivity', desc: 'Less time chasing data, more time serving customers.' },
                { title: 'Deliver better customer experiences', desc: 'Accurate data means faster resolutions and stronger relationships.' },
                { title: 'Scale without operational friction', desc: 'Built to handle growing order volumes without slowing down.' },
                { title: 'Full visibility and control', desc: 'Custom field mapping and transparent error logs keep you in control.' }
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-5 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#0F6E56] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#0F6E56]/30 mt-0.5">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-[#111827] font-extrabold block text-lg tracking-tight mb-2">{benefit.title}</span>
                    <span className="text-[#6B7280] text-base font-medium leading-relaxed block">{benefit.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Benefits;
