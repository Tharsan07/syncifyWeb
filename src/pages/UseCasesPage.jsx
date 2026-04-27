import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Headphones,
  Settings,
  CheckCircle2,
  Zap,
  Code,
  Layers,
  ShoppingBag,
  Package,
  Store,
  Check,
  RefreshCw
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

const UseCasesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const salesBenefits = [
    "Order history, purchase frequency, and customer value sync directly to Salesforce.",
    "Identify upsell and cross-sell opportunities with no Shopify login requirement.",
    "New Shopify customers are automatically created as Leads or Contacts in Salesforce.",
    "Draft orders and quotes stay in sync reducing confusion between sales and fulfilment.",
    "Accurate pipeline data without a single manual data entry task."
  ];

  const supportBenefits = [
    "Full order details and shipping information visible directly in Salesforce cases.",
    "Refund and return data syncs automatically with no manual lookups in Shopify.",
    "Customer records are always up to date with the latest order snapshots.",
    "Reduce average handling time by eliminating system-switching mid-conversation.",
    "Support managers get accurate reporting on order-related case volume and resolution times."
  ];

  const operationsBenefits = [
    { title: "Automated Order Sync", desc: "From Shopify to Salesforce;zero manual intervention required." },
    { title: "Inventory Levels", desc: "Sync in real time so operations always knows what is in stock." },
    { title: "Multi-Store Ready", desc: "Multiple Shopify stores visible in a single Salesforce environment." },
    { title: "Error Monitoring", desc: "Dashboard surfaces sync issues before they become business problems." },
    { title: "Legacy Data Import", desc: "Bring legacy records into Salesforce in one clean batch." }
  ];

  const industries = [
    {
      title: "Direct-to-Consumer (D2C) Brands",
      icon: ShoppingBag,
      desc: "Connect your flagship storefront with your CRM to deliver personalized experiences at scale."
    },
    {
      title: "Subscription Commerce",
      icon: RefreshCw,
      desc: "Manage recurring revenue and customer lifecycles with perfectly synced subscription data."
    },
    {
      title: "B2B Wholesale",
      icon: Package,
      desc: "Handle bulk orders, custom pricing, and trade accounts with enterprise-grade synchronization."
    },
    {
      title: "Multi-Channel Retail",
      icon: Store,
      desc: "Unify data from multiple Shopify storefronts into a single Salesforce source of truth."
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#E1F5EE] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                  Built for every team that touches <span className="text-[#0F6E56]">ecommerce data</span>
                </h1>

                <div className="space-y-4 max-w-2xl">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    <strong>Syncify is more than an integration.</strong> It is a strategic business tool designed to unify your ecosystem.
                  </p>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    When your Shopify and Salesforce data is always in sync, every team in your organization gets better at their job.
                  </p>
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#0F6E56] hover:bg-[#085041] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:-translate-y-1 group">
                    Book a Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-8 pt-4">
                  {[
                    { icon: Zap, label: "Real Time Sync" },
                    { icon: Code, label: "No Code Setup" },
                    { icon: Layers, label: "Multi Store Ready" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#0F6E56]">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#E1F5EE]">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="relative">
              <FadeIn delay={0.2}>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0F6E56] flex items-center justify-center">
                          <RefreshCw className="w-6 h-6 text-white animate-spin-slow" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Sync</p>
                          <p className="text-base font-extrabold text-gray-900">Shopify &harr; Salesforce</p>
                        </div>
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] text-[10px] font-black uppercase tracking-widest border border-[#0F6E56]/10">
                        Live Now
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                              <ShoppingBag className="w-5 h-5 text-gray-400" />
                            </div>
                            <div>
                              <div className="h-2.5 w-24 bg-gray-100 rounded mb-2"></div>
                              <div className="h-2 w-16 bg-gray-50 rounded"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-[#0F6E56]">
                            <CheckCircle2 className="w-4 h-4" />
                            Synced
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E1F5EE] rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#0F6E56]/10 rounded-full blur-3xl -z-10"></div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - SALES TEAM USE CASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column */}
            <FadeIn>
              <div className="max-w-2xl space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] text-xs font-black tracking-widest uppercase border border-[#0F6E56]/10">
                    FOR SALES TEAMS
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                    Close more deals with real-time customer and order data
                  </h2>
                  <p className="text-lg text-gray-600 leading-8">
                    Your sales reps should not have to chase data. When Shopify and Salesforce are in sync, your team walks into every conversation with a complete picture of the customer.
                  </p>
                  <p className="text-lg text-gray-600 leading-8">
                    Purchase history, order frequency, and lifetime value are all readily available directly within Salesforce records.
                  </p>
                </div>
                
                <div className="space-y-5 pt-4">
                  {salesBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm group-hover:border-[#0F6E56] group-hover:bg-[#0F6E56] transition-all">
                        <Check className="w-3.5 h-3.5 text-[#0F6E56] group-hover:text-white transition-colors" strokeWidth={3} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed group-hover:text-[#111827] transition-colors">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Column */}
            <FadeIn delay={0.2}>
              <div className="w-full bg-[#0F6E56] rounded-3xl p-8 md:p-12 border border-[#0F6E56] shadow-xl shadow-[#0F6E56]/20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">Sales Outcome</h4>
                </div>
                <div className="space-y-6">
                  <p className="text-white text-lg font-medium leading-relaxed">
                    Sales teams report <strong>5x faster deal cycles</strong> and significantly higher confidence in their CRM data.
                  </p>
                  <p className="text-[#E1F5EE] text-lg font-medium leading-relaxed">
                    When reps trust the data, they use it—and that fundamentally transforms your results.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 - SUPPORT TEAM USE CASE */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column */}
            <FadeIn>
              <div className="max-w-2xl space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] text-xs font-black tracking-widest uppercase border border-[#0F6E56]/10">
                    FOR SUPPORT TEAMS
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                    Resolve customer issues faster with full order context
                  </h2>
                  <p className="text-lg text-gray-600 leading-8">
                    Stop putting customers on hold. Nothing slows a support interaction down like a rep who has to look up an order in another system.
                  </p>
                  <p className="text-lg text-gray-600 leading-8">
                    With Syncify, every Salesforce case is backed by live Shopify data, ensuring agents have everything they need immediately.
                  </p>
                </div>
                
                <div className="space-y-5 pt-4">
                  {supportBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm group-hover:border-[#0F6E56] group-hover:bg-[#0F6E56] transition-all">
                        <Check className="w-3.5 h-3.5 text-[#0F6E56] group-hover:text-white transition-colors" strokeWidth={3} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed group-hover:text-[#111827] transition-colors">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Column */}
            <FadeIn delay={0.2}>
              <div className="w-full bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-[#0F6E56]/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#E1F5EE] flex items-center justify-center">
                    <Headphones className="w-7 h-7 text-[#0F6E56]" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#111827] tracking-tight">Support Outcome</h4>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    First-contact resolution rates improve significantly when support agents have accurate, real-time order data.
                  </p>
                  <p className="text-[#0F6E56] text-lg font-bold leading-relaxed">
                    Customers spend less time repeating themselves and more time being heard.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 - OPERATIONS TEAM USE CASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column */}
            <FadeIn>
              <div className="max-w-2xl space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] text-xs font-black tracking-widest uppercase border border-[#0F6E56]/10">
                    FOR OPERATIONS TEAMS
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                    Eliminate manual data work and run a cleaner operation
                  </h2>
                  <p className="text-lg text-gray-600 leading-8">
                    Stop managing pipelines, start managing growth. Manual exports, CSV uploads, and scheduled syncs are sources of error and frustration.
                  </p>
                  <p className="text-lg text-gray-600 leading-8">
                    Syncify replaces manual tasks with automated, real-time data flow so your operations team can focus on what matters.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {operationsBenefits.map((benefit, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0F6E56]/30 transition-all group flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 group-hover:bg-[#E1F5EE] group-hover:border-[#0F6E56]/20 flex items-center justify-center transition-all flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-[#0F6E56] transition-colors" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-[#111827] mb-1">{benefit.title}</h5>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">{benefit.desc.replace(';', ' — ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Column */}
            <FadeIn delay={0.2}>
              <div className="w-full bg-[#085041] rounded-3xl p-8 md:p-12 border border-[#085041] shadow-xl shadow-[#085041]/20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">Operations Outcome</h4>
                </div>
                <div className="space-y-6">
                  <p className="text-white text-lg font-medium leading-relaxed">
                    Operations teams recover <strong>significant hours every week</strong> by eliminating manual sync processes.
                  </p>
                  <p className="text-[#E1F5EE] text-lg font-medium leading-relaxed">
                    This time is redirected towards process improvement, customer experience, and business growth.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 - INDUSTRY FIT */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] text-xs font-black tracking-widest uppercase border border-[#0F6E56]/10">
              SYNCIFY IS BUILT FOR
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Designed for ecommerce at every stage
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((item, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-[#E1F5EE] flex items-center justify-center mb-8 transition-colors">
                    <item.icon className="w-8 h-8 text-gray-400 group-hover:text-[#0F6E56] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-[#0F6E56] to-[#085041] rounded-[3rem] p-12 md:p-24 shadow-2xl shadow-[#0F6E56]/20 relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  See how Syncify works <br className="hidden md:block" /> for your team
                </h2>

                <p className="text-xl md:text-2xl text-[#E1F5EE] font-medium leading-relaxed max-w-3xl mx-auto">
                  Book a 30-minute demo and tell us about your team's setup. We'll show you exactly how Syncify fits into your workflow.
                </p>

                <div className="flex flex-col items-center gap-8">
                  <Link to="/contact" className="bg-white hover:bg-gray-100 text-[#085041] px-12 py-5 rounded-full text-xl font-black transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group">
                    Book a Demo
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-white/70 text-sm font-bold tracking-widest uppercase">
                    Personalized · 30 minutes · No commitment
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
