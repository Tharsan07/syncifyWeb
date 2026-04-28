import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Layers } from 'lucide-react';
import FadeIn from './FadeIn';

const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const SocialProof = () => {
  return (
    <section className="py-12 bg-white border-y border-[#F9FAFB]">
      <FadeIn className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          <div className="flex flex-col gap-2 shrink-0 text-center lg:text-left">
            <p className="text-xs font-extrabold text-[#6B7280] uppercase tracking-widest mb-1">
              Trusted by ecommerce brands<br className="hidden lg:block"/> and Salesforce teams worldwide
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <div className="flex items-center gap-2 text-[#111827] font-bold text-sm bg-[#F9FAFB] px-3 py-1.5 rounded-full border border-[#F9FAFB]">
                <svg className="w-4 h-4 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.332 5.06h-1.895l-1.04-3.324A1.002 1.002 0 0 0 15.445.98H8.555a1.001 1.001 0 0 0-.952.756L6.564 5.06H4.668a2.502 2.502 0 0 0-2.5 2.5v12.94a2.503 2.503 0 0 0 2.5 2.5h14.664a2.502 2.502 0 0 0 2.5-2.5V7.56a2.501 2.501 0 0 0-2.499-2.5h-.001Zm-3.83-2.08.784 2.5H7.714l.784-2.5h6.994ZM19.832 20.5a.5.5 0 0 1-.5.5H4.668a.5.5 0 0 1-.5-.5V7.56a.5.5 0 0 1 .5-.5h14.664a.5.5 0 0 1 .5.5v12.94Z"/></svg>
                Shopify Partner Ecosystem
              </div>
              <div className="flex items-center gap-2 text-[#111827] font-bold text-sm bg-[#F9FAFB] px-3 py-1.5 rounded-full border border-[#F9FAFB]">
                <Layers className="w-4 h-4 text-[#0F6E56]" />
                200+ Stores Actively Syncing
              </div>
            </div>
          </div>

          <div className="w-full h-px lg:w-px lg:h-16 bg-[#F9FAFB] lg:block shrink-0"></div>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-x-12 gap-y-8 w-full">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-extrabold text-[#111827] tracking-tight">
                <Counter value={12000} />+
              </div>
              <div className="text-[13px] font-bold text-[#6B7280] uppercase tracking-wide mt-1">Orders synced daily</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-extrabold text-[#111827] tracking-tight">
                <Counter value={200} />+
              </div>
              <div className="text-[13px] font-bold text-[#6B7280] uppercase tracking-wide mt-1">Active storefronts</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-4xl font-extrabold text-[#111827] tracking-tight">&lt; 15<span className="text-2xl text-[#6B7280]/50">–</span>20<span className="text-xl">m</span></div>
              <div className="text-[13px] font-bold text-[#6B7280] uppercase tracking-wide mt-1">Average sync speed</div>
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default SocialProof;
