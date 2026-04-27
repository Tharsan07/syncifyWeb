import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  UserCheck,
  Cookie,
  Clock,
  AlertCircle,
  Mail,
  Globe,
  Building2,
  ChevronRight,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  FileText,
  Server,
  Key,
  ShieldCheck
} from 'lucide-react';

const PolicyPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] selection:bg-[#0F6E56]/10 selection:text-[#0F6E56]">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-20 lg:pt-20 pb-16 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent -z-20" />

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#0F6E56 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E1F5EE] rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#1D9E75]/10 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-green-100 text-[#0F6E56] text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
            <Shield className="w-3.5 h-3.5" />
            LEGAL PAGE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#111827] mb-6 tracking-tight leading-[1.1]"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-8 text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Your privacy matters to us. Learn how Syncify collects, uses, protects, and manages your information across our website and platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-500 bg-white/70 backdrop-blur-md border border-white/80 w-fit mx-auto px-6 md:px-8 py-5 rounded-3xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#0F6E56]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Updated</span>
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

      {/* SECTION 2 — MAIN CONTENT LAYOUT */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24 relative z-10">
        <div className="space-y-16">
          {/* SECTION 1: Information We Collect */}
          <motion.section {...fadeUp} id="information-we-collect" className="scroll-mt-32 p-8 lg:p-12 bg-white border border-green-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] font-black text-2xl shadow-inner">01</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">Information We Collect</h2>
            </div>

            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 group hover:border-green-100 hover:bg-white transition-all duration-300">
                  <UserCheck className="w-8 h-8 text-[#0F6E56] mb-6" />
                  <h3 className="text-xl font-bold text-[#111827] mb-6">Information you provide directly</h3>
                  <ul className="space-y-4">
                    {[
                      'Account registration details: name, work email address, company name',
                      'Contact form submissions and demo booking information',
                      'Payment and billing information (we do not store card details)',
                      'Communications you send to us, including support requests'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 leading-relaxed text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#1D9E75] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 group hover:border-green-100 hover:bg-white transition-all duration-300">
                  <Eye className="w-8 h-8 text-[#0F6E56] mb-6" />
                  <h3 className="text-xl font-bold text-[#111827] mb-6">Information we collect automatically</h3>
                  <ul className="space-y-4">
                    {[
                      'Usage data: pages visited, features used, session duration, and navigation paths',
                      'Device and browser information: browser type, operating system, screen resolution, and IP address',
                      'Cookies and similar tracking technologies (see Section 6)'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-600 leading-relaxed text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#1D9E75] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#E1F5EE]/30 border border-green-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                <h3 className="text-xl font-bold text-[#111827] mb-6 flex items-center gap-3">
                  <Share2 className="w-6 h-6 text-[#0F6E56]" />
                  Information from third-party platforms
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  <div className="p-6 rounded-2xl bg-white/60 border border-white shadow-sm">
                    <div className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1D9E75]" /> Shopify
                    </div>
                    <p className="text-sm text-gray-600 leading-7">
                      Order data, customer data, product data, and inventory data, only as authorised by you during the Syncify setup process.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/60 border border-white shadow-sm">
                    <div className="font-bold text-[#111827] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1D9E75]" /> Salesforce
                    </div>
                    <p className="text-sm text-gray-600 leading-7">
                      Object data as defined by your field mapping configuration, only data you explicitly enable Syncify to access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#085041] text-white flex flex-col md:flex-row gap-8 items-center shadow-xl shadow-green-900/10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <Database className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Highlighted Note Card</h4>
                  <p className="text-green-50/80 leading-relaxed font-medium">
                    Syncify acts as a data processor on your behalf for Shopify and Salesforce data. You remain the data controller for your customers' information.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 2: How We Use Your Information */}
          <motion.section {...fadeUp} id="how-we-use" className="scroll-mt-32 p-8 lg:p-12 bg-white border border-green-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] font-black text-2xl shadow-inner">02</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">How We Use Your Information</h2>
            </div>

            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, including:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'To provide and maintain our Service',
                  'To process and sync data between Shopify and Salesforce',
                  'To provide customer support and troubleshoot issues',
                  'To send administrative information, such as service updates',
                  'To improve our services through usage analysis',
                  'To comply with legal obligations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-green-100 hover:bg-white transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:border-[#0F6E56]">
                      <CheckCircle2 className="w-5 h-5 text-[#0F6E56]" />
                    </div>
                    <span className="text-gray-700 font-bold text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-8 rounded-3xl bg-green-50 border border-green-100 border-dashed group transition-all">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-[#0F6E56]">
                    <Lock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F6E56] text-lg mb-2">Highlighted trust card</h4>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      We do not sell your personal data to third parties. We do not use your Shopify or Salesforce data for any purpose other than providing the Syncify sync service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 3: Data Storage and Security */}
          <motion.section {...fadeUp} id="data-security" className="scroll-mt-32 p-8 lg:p-12 bg-white border border-green-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] font-black text-2xl shadow-inner">03</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">Data Storage and Security</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all duration-500 shadow-sm">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] mb-2 tracking-tight">Zero External Storage</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Shopify and Salesforce data is not stored externally. Synchronization occurs in real-time, meaning your sensitive business data stays within your platforms.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all duration-500 shadow-sm">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] mb-2 tracking-tight">Encrypted Transmission</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      All sync data is protected by industry-standard TLS encryption during transit, ensuring that data is never exposed between endpoints.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all duration-500 shadow-sm">
                    <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] mb-2 tracking-tight">Access Controls</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Strict internal access controls and multi-factor authentication are enforced across our infrastructure to prevent unauthorised access.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all duration-500 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] mb-2 tracking-tight">Security Reviews</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We perform regular security audits and vulnerability assessments to maintain the highest standards of data integrity and protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 4: Data Sharing and Disclosure */}
          <motion.section {...fadeUp} id="data-sharing" className="scroll-mt-32 p-8 lg:p-10 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-bold text-xl shadow-inner">4</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">Data Sharing and Disclosure</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: 'Service Providers',
                  desc: 'We share data with trusted vendors who help us operate our service (e.g., cloud hosting, email delivery).'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Legal Requirements',
                  desc: 'We may disclose information if required by law or in response to valid requests by public authorities.'
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: 'Business Transfers',
                  desc: 'In the event of a merger or sale, your data may be transferred, subject to continued privacy protection.'
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-green-100 flex flex-col items-center text-center group hover:bg-green-50/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] mb-6 group-hover:scale-110 group-hover:bg-[#0F6E56] group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#111827] text-sm mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* SECTION 5: Your Rights */}
          <motion.section {...fadeUp} id="your-rights" className="scroll-mt-32 p-8 lg:p-12 bg-white border border-green-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] font-black text-2xl shadow-inner">05</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">Your Rights</h2>
            </div>

            <div className="space-y-10">
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the information we hold about you. You can also object to processing or request data portability.
              </p>

              <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#E1F5EE] to-[#c7eee0] border border-green-200 p-10 lg:p-12">
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                  <div className="max-w-md">
                    <h4 className="text-2xl font-bold text-[#085041] mb-4 tracking-tight">Exercise Your Rights</h4>
                    <p className="text-base text-[#0F6E56] mb-8 font-medium leading-relaxed">
                      To submit a request regarding your personal data, please contact our support team. We process all requests in a timely manner.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F6E56] text-white text-xs font-bold shadow-lg">
                        <Clock className="w-4 h-4" />
                        Response Time: Within 30 days
                      </div>
                    </div>
                  </div>
                  <a
                    href="mailto:sales@laconfianzatech.com"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-[#0F6E56] font-black hover:bg-green-50 transition-all shadow-xl shadow-green-900/5 group active:scale-95"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    sales@laconfianzatech.com
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 6: Cookies */}
          <motion.section {...fadeUp} id="cookies" className="scroll-mt-32 p-8 lg:p-10 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-bold text-xl shadow-inner">6</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">Cookies</h2>
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed text-base">
              We use cookies to enhance your experience, analyze site usage, and ensure our website works properly.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { title: 'Essential Cookies', desc: 'Necessary for basic site functionality and secure access.' },
                { title: 'Analytics Cookies', desc: 'Help us understand how visitors interact with the website.' },
                { title: 'Preference Cookies', desc: 'Remember your settings and choices for a personalized experience.' }
              ].map((pill, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white border border-green-100 hover:border-[#1D9E75] hover:bg-green-50/20 transition-all duration-500 text-center">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-sm">
                    <Cookie className="w-7 h-7" />
                  </div>
                  <h5 className="font-bold text-[#111827] text-sm mb-3 tracking-tight">{pill.title}</h5>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{pill.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex gap-4 items-center">
              <AlertCircle className="w-5 h-5 text-[#0F6E56] shrink-0" />
              <p className="text-sm text-gray-600">
                <span className="font-bold">Browser Settings:</span> You can manage your cookie preferences through your browser settings. Disabling certain cookies may impact site functionality.
              </p>
            </div>
          </motion.section>

          {/* SECTION 7: Data Retention */}
          <motion.section {...fadeUp} id="data-retention" className="scroll-mt-32 p-8 lg:p-12 bg-white border border-green-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] font-black text-2xl shadow-inner">07</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">Data Retention</h2>
            </div>

            <div className="relative pl-10 border-l-2 border-green-100 space-y-16 py-4">
              {[
                { title: 'Account info retained while active', desc: 'We maintain your account data as long as your subscription is active to ensure continuous service delivery.' },
                { title: 'Deleted or anonymised within 90 days after closure', desc: 'Once an account is terminated, identifying information is purged or Masked within a 90-day window.' },
                { title: 'Sync logs retained 90 days then deleted', desc: 'Platform sync logs are maintained for 90 days for troubleshooting and audit purposes before being permanently deleted.' }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full border-8 border-white bg-[#0F6E56] shadow-md group-hover:scale-125 transition-transform duration-300" />
                  <h4 className="font-bold text-[#111827] text-xl mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* SECTION 8: Children's Privacy */}
          <motion.section {...fadeUp} id="childrens-privacy" className="scroll-mt-32 p-8 lg:p-10 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-bold text-xl shadow-inner">8</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">Children's Privacy</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center p-8 lg:p-10 rounded-3xl bg-amber-50/20 border border-amber-100 group transition-all duration-500">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-amber-500 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-10 h-10" />
              </div>
              <p className="text-base text-gray-700 leading-8 font-medium text-center md:text-left">
                Our services are not intended for and should not be used by anyone under the age of 18. We do not knowingly collect personal information from children. If we discover such data, we delete it immediately.
              </p>
            </div>
          </motion.section>

          {/* SECTION 9: Changes to This Policy */}
          <motion.section {...fadeUp} id="policy-changes" className="scroll-mt-32 p-8 lg:p-10 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#0F6E56] font-bold text-xl shadow-inner">9</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827]">Changes to This Policy</h2>
            </div>

            <div className="p-8 rounded-3xl border-2 border-green-50 bg-white relative overflow-hidden group">
              <p className="text-gray-600 text-lg leading-9 font-medium relative z-10">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
            </div>
          </motion.section>

          {/* SECTION 10: Contact */}
          <motion.section {...fadeUp} id="contact" className="scroll-mt-32 p-8 lg:p-12 bg-white border border-green-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-500">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#0F6E56] font-black text-2xl shadow-inner">10</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">Contact</h2>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50/30 rounded-3xl border border-green-100 p-8 lg:p-12 relative overflow-hidden">
              <div className="grid gap-4 mb-12">
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-green-50 group hover:border-[#1D9E75] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1">Company</p>
                    <p className="text-base font-black text-[#111827]">La Confianza Technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-green-50 group hover:border-[#1D9E75] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1">Email</p>
                    <p className="text-base font-black text-[#111827]">sales@laconfianzatech.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-green-50 group hover:border-[#1D9E75] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-[#0F6E56] group-hover:bg-[#0F6E56] group-hover:text-white transition-all shadow-sm">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-1">Website</p>
                    <p className="text-base font-black text-[#111827]">getsyncify.in</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-5 bg-[#0F6E56] text-white font-black rounded-2xl hover:bg-[#085041] transition-all flex items-center justify-center gap-3 group shadow-xl active:scale-[0.98]">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.section>
        </div>
      </div>

      {/* BOTTOM CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-br from-[#085041] to-[#0F6E56] p-12 lg:p-24 text-center shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">Questions about your privacy?</h2>
            <p className="text-green-50/70 mb-12 text-lg lg:text-xl leading-relaxed font-medium">
              Our team is happy to help clarify how Syncify handles your data. We believe in transparency and building trust with every sync.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="mailto:sales@laconfianzatech.com"
                className="w-full sm:w-auto px-10 py-5 bg-white text-[#0F6E56] font-black rounded-2xl hover:bg-green-50 transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
              <button className="w-full sm:w-auto px-10 py-5 bg-[#1D9E75] text-white font-black rounded-2xl hover:bg-[#1D9E75]/90 transition-all border border-white/10 flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]">
                Book a Demo
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PolicyPage;
