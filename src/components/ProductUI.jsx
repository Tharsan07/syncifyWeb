import React from 'react';
import FadeIn from './FadeIn';
import Hero_Dashboard from '../assets/Hero_Dashboard.png';

const ProductUI = () => {
  return (
    <FadeIn delay={0.4} className="w-full relative z-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-emerald-400/20 rounded-[2.5rem] blur-3xl -z-10 transform scale-95"></div>

      <img
        src={Hero_Dashboard}
        alt="Syncify Dashboard"
        className="w-full rounded-2xl shadow-xl border border-gray-200 transition-transform duration-500 hover:scale-[1.02]"
      />
    </FadeIn>
  );
};

export default ProductUI;
