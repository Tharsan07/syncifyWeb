import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Database, 
  Activity, 
  Gavel, 
  Calendar, 
  RefreshCcw, 
  Mail, 
  Building2, 
  Globe, 
  ArrowRight, 
  ExternalLink,
  CreditCard,
  Zap,
  Users,
  Clock,
  ShieldAlert,
  ChevronDown,
  Info
} from 'lucide-react';

const TermsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const sections = [
    { id: 'service', title: '1. The Service' },
    { id: 'account', title: '2. Account Registration' },
    { id: 'trial', title: '3. Free Trial' },
    { id: 'payment', title: '4. Subscriptions & Payment' },
    { id: 'acceptable-use', title: '5. Acceptable Use' },
    { id: 'data', title: '6. Your Data' },
    { id: 'ip', title: '7. Intellectual Property' },
    { id: 'availability', title: '8. Service Availability' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'termination', title: '10. Termination' },
    { id: 'modifications', title: '11. Modifications' },
    { id: 'law', title: '12. Governing Law' },
    { id: 'contact', title: '13. Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white selection:bg-[#0F6E56]/10 selection:text-[#0F6E56]">
      {/* SECTION 1 HERO */}
      <section className="relative overflow-hidden pt-24 lg:pt-28 pb-16 lg:pb-24 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent -z-20" />
        
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{ 
            backgroundImage: 'radial-gradient(#0F6E56 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        />

        {/* Floating blur shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E1F5EE] rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#1D9E75]/10 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-green-100 text-[#0F6E56] text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <Gavel className="w-3.5 h-3.5" />
            LEGAL PAGE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-[#111827] mb-6 tracking-tight leading-[1.1]"
          >
            Terms of Service
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            These Terms govern your access to and use of Syncify. Please review them carefully before using the service.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-500 bg-white/70 backdrop-blur-md border border-white/80 w-fit mx-auto px-6 md:px-8 py-5 rounded-3xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#0F6E56]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Effective</span>
                <span className="font-bold text-[#111827]">27/04/2026</span>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-[#0F6E56]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Company</span>
                <span className="font-bold text-[#111827]">La Confianza Technology</span>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#0F6E56]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Website</span>
                <span className="font-bold text-[#111827]">getsyncify.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        
        {/* Top Jump Links (Desktop) */}
        <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-16">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="px-4 py-2 rounded-full bg-white border border-green-100 text-sm font-semibold text-gray-600 hover:text-[#0F6E56] hover:border-[#0F6E56] hover:bg-green-50 transition-all shadow-sm"
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Mobile TOC Dropdown */}
        <div className="lg:hidden mb-12 sticky top-24 z-40">
          <div className="bg-white border border-green-100 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md bg-white/90">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full px-6 py-4 flex items-center justify-between transition-colors bg-white hover:bg-green-50"
            >
              <div className="flex items-center gap-3 text-[#111827] font-bold">
                <FileText className="w-5 h-5 text-[#0F6E56]" />
                <span>Jump to Section</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#0F6E56] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-green-50 overflow-hidden"
                >
                  <nav className="p-3 grid grid-cols-1 gap-1 max-h-60 overflow-y-auto">
                    {sections.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#0F6E56] transition-all"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-12">
          
          {/* Section 1 */}
          <motion.section {...fadeUp} id="service" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">01</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">The Service</h2>
            </div>
            <div className="space-y-6 text-gray-600 text-base leading-8">
              <p>
                Syncify provides a cloud-based data integration platform designed to synchronize data between Shopify and Salesforce. The Service includes software, applications, tools, and related documentation provided by La Confianza Technology.
              </p>
              <p>
                We reserve the right to modify, update, or discontinue the Service (in whole or in part) at any time. We will provide reasonable advance notice of any material changes that substantially degrade the functionality of the Service.
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section {...fadeUp} id="account" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">02</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Account Registration and Eligibility</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Must be at least 18 years old',
                'Must have valid Salesforce account and Shopify store',
                'Responsible for account credentials',
                'Responsible for account activity',
                'Must provide accurate information'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-transparent hover:border-green-100 hover:bg-white transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:border-[#0F6E56]">
                    <CheckCircle2 className="w-5 h-5 text-[#0F6E56]" />
                  </div>
                  <span className="text-gray-700 font-semibold text-base mt-1">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section {...fadeUp} id="trial" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">03</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Free Trial</h2>
            </div>
            <div className="bg-[#E1F5EE]/40 border border-[#1D9E75]/30 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-[#0F6E56]">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F6E56] mb-2">7-Day Risk-Free Trial</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  We offer a 7-day free trial for new users to evaluate the Service. No credit card is required to begin the trial. At the end of the trial period, your access will be suspended unless you upgrade to a paid subscription.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section {...fadeUp} id="payment" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">04</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Subscriptions and Payment</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Standard Card */}
              <div className="p-6 rounded-2xl bg-white border-2 border-gray-100 relative group hover:border-[#1D9E75] transition-all">
                <div className="mb-4">
                  <span className="text-gray-500 font-bold tracking-widest uppercase text-xs">Standard Plan</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[#111827]">$20</span>
                    <span className="text-gray-500 font-medium">/user/month</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium bg-gray-50 p-3 rounded-lg">
                  <Users className="w-4 h-4 text-[#0F6E56]" />
                  <span>Flexible licensing</span>
                </div>
              </div>

              {/* Pro Card */}
              <div className="p-6 rounded-2xl bg-[#0F6E56] text-white relative shadow-xl shadow-green-900/10">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Shield className="w-16 h-16" />
                </div>
                <div className="mb-4 relative z-10">
                  <span className="text-green-200 font-bold tracking-widest uppercase text-xs">Pro Plan</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">$30</span>
                    <span className="text-green-100 font-medium">/user/month</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white font-bold bg-white/10 backdrop-blur-md p-3 rounded-lg relative z-10 border border-white/20">
                  <Users className="w-4 h-4 text-green-300" />
                  <span>Minimum 12 licenses required</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-50/50 border border-blue-100">
              <CreditCard className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">AppExchange Billing Note</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All subscriptions and billing are processed directly through the Salesforce AppExchange. Your payment terms, cycles, and accepted payment methods are governed by Salesforce billing policies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5 */}
          <motion.section {...fadeUp} id="acceptable-use" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">05</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Acceptable Use</h2>
            </div>
            
            <p className="text-gray-600 text-base mb-6 font-medium">
              You agree not to engage in any of the following prohibited activities:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Reverse engineering or decompiling the Service',
                'Using the Service to transmit malicious code or viruses',
                'Attempting to bypass security mechanisms or rate limits',
                'Using the Service for illegal or unauthorized purposes',
                'Reselling or sublicensing the Service without permission',
                'Interfering with the performance of the Service'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/30 border border-red-100 hover:bg-red-50 transition-all">
                  <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section {...fadeUp} id="data" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-[#085041] text-white shadow-xl shadow-green-900/10 border border-[#0F6E56] relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-green-300 font-black text-xl border border-white/10">06</div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Your Data</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-md">
                  <Database className="w-10 h-10 text-green-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">You retain full ownership</h3>
                  <p className="text-green-50/80 leading-relaxed font-medium text-base">
                    You retain all rights, title, and ownership to the data you process through Syncify. We do not claim any intellectual property rights over your data. We use your data exclusively to provide the integration service as configured by you.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7 */}
          <motion.section {...fadeUp} id="ip" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">07</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Intellectual Property</h2>
            </div>
            <p className="text-gray-600 text-base leading-8 font-medium">
              Syncify, its logos, software, design, and all related intellectual property are the exclusive property of La Confianza Technology. You are granted a limited, non-exclusive, non-transferable right to use the Service during your subscription term. You may not copy, modify, distribute, sell, or lease any part of our Service.
            </p>
          </motion.section>

          {/* Section 8 */}
          <motion.section {...fadeUp} id="availability" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">08</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Service Availability</h2>
            </div>
            <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm text-[#0F6E56]">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-lg mb-2 text-center sm:text-left">Continuous Monitoring</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-center sm:text-left">
                  We strive to ensure maximum uptime for the Service. However, the Service may occasionally be unavailable for scheduled maintenance, updates, or technical emergencies. We will use commercially reasonable efforts to notify you of scheduled downtimes.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 9 */}
          <motion.section {...fadeUp} id="liability" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 font-black text-xl shadow-inner">09</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Limitation of Liability</h2>
            </div>
            <div className="flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-gray-500 shrink-0 mt-1" />
              <p className="text-gray-600 text-base leading-8 font-medium">
                To the maximum extent permitted by law, La Confianza Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising from your use of or inability to use the Service. In no event shall our total liability exceed the amount paid by you for the Service during the 12 months preceding the claim.
              </p>
            </div>
          </motion.section>

          {/* Section 10 */}
          <motion.section {...fadeUp} id="termination" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">10</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Termination</h2>
            </div>
            <div className="relative pl-8 border-l-2 border-green-100 space-y-12 py-2">
              {[
                { title: 'Cancel anytime', desc: 'You may cancel your subscription at any time through the Salesforce AppExchange or by contacting support.' },
                { title: 'End of billing cycle', desc: 'Cancellation will take effect at the end of your current paid billing cycle. No refunds will be provided for partial months.' },
                { title: 'Suspension for breach/fraud/non-payment', desc: 'We reserve the right to suspend or terminate your access immediately if you breach these terms or fail to pay applicable fees.' }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-[#0F6E56] shadow-sm" />
                  <h4 className="font-bold text-[#111827] text-lg mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 11 */}
          <motion.section {...fadeUp} id="modifications" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">11</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Modifications to Terms</h2>
            </div>
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
              <div className="px-4 py-2 bg-orange-100 text-orange-700 font-bold text-xs rounded-lg uppercase tracking-widest shrink-0">
                14 Days Notice
              </div>
              <p className="text-orange-900/80 font-medium text-sm leading-relaxed text-center md:text-left">
                We may modify these Terms occasionally. If we make material changes, we will notify you via email or platform notification at least 14 days before they become effective. Continued use of the Service constitutes acceptance of the modified Terms.
              </p>
            </div>
          </motion.section>

          {/* Section 12 */}
          <motion.section {...fadeUp} id="law" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">12</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Governing Law</h2>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#F9FAFB] border border-gray-100">
              <Gavel className="w-8 h-8 text-[#0F6E56] shrink-0" />
              <p className="text-gray-700 font-medium leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in India.
              </p>
            </div>
          </motion.section>

          {/* Section 13 */}
          <motion.section {...fadeUp} id="contact" className="scroll-mt-32 p-8 lg:p-10 rounded-2xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-black text-xl shadow-inner">13</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight">Contact</h2>
            </div>
            
            <div className="bg-gradient-to-br from-[#F9FAFB] to-green-50/50 rounded-2xl border border-green-100 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#111827] font-bold">
                  <Building2 className="w-5 h-5 text-[#0F6E56]" />
                  <span>La Confianza Technology</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href="mailto:sales@laconfianzatech.com" className="hover:text-[#0F6E56] transition-colors">sales@laconfianzatech.com</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <a href="https://getsyncify.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F6E56] transition-colors">getsyncify.in</a>
                </div>
              </div>
              <a 
                href="mailto:sales@laconfianzatech.com"
                className="px-8 py-4 bg-[#0F6E56] text-white font-bold rounded-xl hover:bg-[#085041] transition-all flex items-center gap-2 shadow-lg active:scale-95 w-full md:w-auto justify-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.section>

        </div>
      </div>

      {/* BOTTOM CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#085041] to-[#0F6E56] p-10 lg:p-16 text-center shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">Questions about these terms?</h2>
            <p className="text-green-50/80 mb-10 text-lg leading-relaxed font-medium">
              Our team is happy to help clarify billing, subscriptions, or legal questions about Syncify.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:sales@laconfianzatech.com"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F6E56] font-bold rounded-xl hover:bg-green-50 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#1D9E75] text-white font-bold rounded-xl hover:bg-[#1D9E75]/90 transition-all border border-white/10 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]">
                Book a Demo
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsPage;
