import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <UseCases />
      <Benefits />
      <CTA />
    </>
  );
};

export default Home;
