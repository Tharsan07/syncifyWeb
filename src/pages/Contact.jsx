import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Mail,
  ChevronRight,
  ArrowRight,
  Headset
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    shopifyUrl: '',
    salesforceEdition: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const salesforceEditions = [
    "Essentials",
    "Professional",
    "Enterprise",
    "Unlimited",
    "Other"
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#E1F5EE] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-darkGreen/10 border border-primary/20 text-darkGreen text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                Connect With Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-tight mb-6">
                Book a Demo
              </h1>
              <p className="text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed">
                See Syncify in action - live, with your questions answered. Our team will walk you through the product, show you how it fits your Shopify and Salesforce setup, and help you figure out which plan is right for your team.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* SECTION 3 - CONTACT FORM */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        {/* Background Patterns */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-4">
                Prefer to send us a message first?
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Fill in the form below and a member of our team will get back to you within one business day.
              </p>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#0F6E56]/5 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jane"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-darkGreen/20 focus:border-darkGreen transition-all font-medium text-[#111827]"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/20 focus:border-[#0F6E56] transition-all font-medium text-[#111827]"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/20 focus:border-[#0F6E56] transition-all font-medium text-[#111827]"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Acme Corp"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/20 focus:border-[#0F6E56] transition-all font-medium text-[#111827]"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Shopify Store URL (Optional)</label>
                    <input
                      type="text"
                      name="shopifyUrl"
                      placeholder="acme.myshopify.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/20 focus:border-[#0F6E56] transition-all font-medium text-[#111827]"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Salesforce Edition (Optional)</label>
                    <select
                      name="salesforceEdition"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/20 focus:border-[#0F6E56] transition-all font-medium text-[#111827] appearance-none"
                      onChange={handleChange}
                    >
                      <option value="">Select Edition</option>
                      {salesforceEditions.map(ed => <option key={ed} value={ed}>{ed}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your sync requirements..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6E56]/20 focus:border-[#0F6E56] transition-all font-medium text-[#111827] resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex flex-col items-center gap-6 pt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-darkGreen hover:bg-primary text-white px-12 py-5 rounded-full text-lg font-black transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
                  >
                    {isSubmitted ? 'Message Sent!' : 'Send Message'}
                    <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isSubmitted ? 'hidden' : ''}`} />
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 - DIRECT CONTACT DETAILS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full group text-center md:text-left">
                <div className="w-16 h-16 bg-lightGreen rounded-3xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-darkGreen" />
                </div>
                <h4 className="text-xl font-black text-[#111827] mb-4">Sales & Enquiries</h4>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed">Questions about pricing, bulk discounts, or enterprise features?</p>
                <a href="mailto:sales@laconfianzatech.com" className="inline-flex items-center gap-2 text-darkGreen font-black text-sm uppercase tracking-widest hover:underline">
                  Email Sales
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full group text-center md:text-left">
                <div className="w-16 h-16 bg-[#E1F5EE] rounded-3xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  <Headset className="w-8 h-8 text-[#0F6E56]" />
                </div>
                <h4 className="text-xl font-black text-[#111827] mb-4">Product Support</h4>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed">Already a customer and need technical help or setup guidance?</p>
                <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#0F6E56] font-black text-sm uppercase tracking-widest hover:underline">
                  Visit Help Center
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full group text-center md:text-left">
                <div className="w-16 h-16 bg-[#E1F5EE] rounded-3xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-[#0F6E56]" />
                </div>
                <h4 className="text-xl font-black text-[#111827] mb-4">Partnerships</h4>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed">Agencies and Salesforce consultancies looking to partner with us.</p>
                <a href="mailto:sales@laconfianzatech.com" className="inline-flex items-center gap-2 text-[#0F6E56] font-black text-sm uppercase tracking-widest hover:underline">
                  Partner with us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-100 text-center">
            <p className="text-gray-400 font-medium text-sm">
              For urgent queries, email us directly at <a href="mailto:sales@laconfianzatech.com" className="text-[#0F6E56] font-bold">sales@laconfianzatech.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
