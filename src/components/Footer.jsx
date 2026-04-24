import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Syncify.svg';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Use Cases', path: '/use-cases' },
      { name: 'Pricing', path: '/pricing' }
    ],
    company: [
      { name: 'About', path: '/pricing' }, // Assuming About is combined or placeholder
      { name: 'Contact', path: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms' }
    ]
  };

  return (
    <footer className="bg-white border-t border-[#F9FAFB] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Syncify Logo" className="w-10 h-10" />
              <span className="font-extrabold text-2xl text-[#111827] tracking-tight">Syncify</span>
            </div>
            <p className="text-[#6B7280] text-base font-medium max-w-xs mb-8 leading-relaxed">
              A Shopify to Salesforce Connector App. Keep your data moving without writing code.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#F9FAFB] border border-[#F9FAFB] flex items-center justify-center text-[#6B7280] hover:text-[#0F6E56] hover:border-[#0F6E56]/30 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#F9FAFB] border border-[#F9FAFB] flex items-center justify-center text-[#6B7280] hover:text-[#0F6E56] hover:border-[#0F6E56]/30 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-[#085041] mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-base font-medium text-[#6B7280] hover:text-[#0F6E56] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-[#085041] mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-base font-medium text-[#6B7280] hover:text-[#0F6E56] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-[#085041] mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-base font-medium text-[#6B7280] hover:text-[#0F6E56] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F9FAFB] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] font-medium text-sm">
            &copy; 2026 Syncify · getsyncify.in
          </p>
          <p className="text-[#6B7280] font-medium text-sm">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
