import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, Zap, RefreshCw, Layers, Globe, Sliders, AlertCircle, ShoppingCart, Users, Package, Activity, Wand2, Download, ShieldCheck, TrendingUp, Cpu, Cloud } from 'lucide-react';
import FadeIn from '../components/FadeIn';

// Feature Media Imports
import RealtimeImg from "../assets/features/realTimeSync.jpg";
import BidirectionalImg from "../assets/features/biDirectionalSync.jpg";
import MultiStoreImg from "../assets/features/multiStoreSync.jpg";
import OrderSyncImg from "../assets/features/automatedOrderSync.jpg";
import CustomerLoggingImg from "../assets/features/cuestomerInfo.jpg";
import InventoryImg from "../assets/features/inventoryManagement.jpg";
import MultiCurrencyImg from "../assets/features/multiCurrencySupport.jpg";
import FieldMappingImg from "../assets/features/fieldMapping.png";
import ErrorMonitoringImg from "../assets/features/errorMonitoring.jpg";
import WebhookImg from "../assets/features/webhook.jpg";
import NoCodeImg from "../assets/features/noCodeSetup.jpg";
import LegacyImportImg from "../assets/features/dataImport.png";

const featureGroups = [
  {
    category: "Core Sync Features",
    icon: RefreshCw,
    features: [
      {
        title: 'Real-Time Sync',
        icon: Zap,
        image: RealtimeImg,
        desc: 'The moment a customer places an order, updates their details, or a product changes in Shopify, Syncify pushes that data to Salesforce instantly. No waiting for a scheduled sync. No stale records. Your teams always work with the most current information available.',
        value: 'Always work with up-to-date information across every team.'
      },
      {
        title: 'Bi-Directional Sync',
        icon: RefreshCw,
        image: BidirectionalImg,
        desc: 'Most connectors only push data one way from Shopify to Salesforce. Syncify syncs in both directions. Update a customer record or order note in Salesforce and it reflects back in Shopify automatically. No team\'s work is ever overwritten or lost.'
      },
      {
        title: 'Multi-Store Sync',
        icon: Layers,
        image: MultiStoreImg,
        desc: 'Running more than one Shopify storefront? Syncify connects all of your stores to a single Salesforce organisation. Manage orders, customers, and products across every storefront from one unified view. No switching accounts, no duplicate setups.'
      }
    ]
  },
  {
    category: "Data & Automation",
    icon: Cpu,
    features: [
      {
        title: 'Automated Order Sync',
        icon: ShoppingCart,
        image: OrderSyncImg,
        desc: 'New order in Shopify? It appears in Salesforce automatically. Complete with customer details, line items, shipping information, payment status, and fulfilment data. No manual trigger. No webhook setup required. It simply works from the moment you enable sync.'
      },
      {
        title: 'Customer Info Logging',
        icon: Users,
        image: CustomerLoggingImg,
        desc: 'Syncify automatically creates or updates account and contact records in Salesforce. Name, email, phone, address, and purchase history, all synced and kept current without any manual data entry.'
      },
      {
        title: 'Inventory Management',
        icon: Package,
        image: InventoryImg,
        desc: 'Inventory levels are synced in real time between Shopify and Salesforce. Your operations and sales teams always have an accurate view of what\'s in stock.'
      },
      {
        title: 'Multi-Currency Support',
        icon: Globe,
        image: MultiCurrencyImg,
        desc: 'Sell internationally? Syncify handles multi-currency transactions with accuracy. All order values, refunds, and transaction amounts are synced and reflected in the correct currency in Salesforce. No manual conversions, no formatting errors.'
      }
    ]
  },
  {
    category: "Monitoring & Control",
    icon: ShieldCheck,
    features: [
      {
        title: 'Custom Field Mapping',
        icon: Sliders,
        image: FieldMappingImg,
        desc: 'Every business structures its data differently. Syncify\'s visual field mapping editor lets you define exactly which Shopify fields map to which Salesforce fields.'
      },
      {
        title: 'Error Monitoring & Sync Logs',
        icon: AlertCircle,
        image: ErrorMonitoringImg,
        desc: 'Every sync event is logged with a timestamp, the record affected, and the outcome. If something fails, you\'ll know exactly what happened, when it happened, and what needs attention. Resolve issues quickly without raising a support ticket.'
      },
      {
        title: 'Webhook-Based Data Flow',
        icon: Activity,
        image: WebhookImg,
        desc: 'Syncify uses Shopify\'s native webhook infrastructure to detect and act on events the moment they happen and not on a polling schedule. This means faster data delivery, lower latency, and a more reliable sync experience regardless of your store\'s order volume.'
      }
    ]
  },
  {
    category: "Setup & Scalability",
    icon: TrendingUp,
    features: [
      {
        title: 'No-Code Setup',
        icon: Wand2,
        image: NoCodeImg,
        desc: 'Syncify is designed to be configured by business users and not developers. The guided onboarding wizard, visual field mapper, and plain-language settings mean your team can have a full sync running in under 10 minutes, without writing a single line of code.'
      },
      {
        title: 'Legacy Data Import',
        icon: Download,
        image: LegacyImportImg,
        desc: 'Starting with an existing Shopify store? Syncify\'s one-click historical import brings all your past orders, customers, and products into Salesforce in one go, whether you have 1,000 or 1,000,000 records, the import handles it without performance issues.'
      }
    ]
  }
];

const comparisonData = [
  { scenario: 'New order placed in Shopify', without: 'Manually exported and entered into Salesforce', with: 'Automatically synced to Salesforce in under 20 -30 mins' },
  { scenario: 'Customer record updated in Salesforce', without: 'Change stays in Salesforce only Shopify remains out of date', with: 'Reflected back in Shopify instantly (Pro plan)' },
  { scenario: 'Multiple Shopify stores', without: 'Managed separately with no unified view', with: 'All stores connected to one Salesforce' },
  { scenario: 'International order in foreign currency', without: 'Requires manual currency conversion and re-entry', with: 'Synced with correct currency data automatically' },
  { scenario: 'Sync failure', without: 'No visibility when discovered by accident or customer complaint', with: 'Logged and resolvable from the dashboard' },
  { scenario: 'New team member onboarding', without: 'Weeks of training on manual data processes', with: 'Syncify handles the data, they focus on the work' }
];

const FeaturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#E1F5EE] to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-6">
                  Every feature you need to stay in sync
                </h1>
                <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                  Syncify is purpose-built for ecommerce teams that run on Salesforce. Every feature is designed to eliminate data friction, improve visibility, and keep your platforms aligned  without any manual effort.
                </p>
                <Link to="/contact" className="bg-[#0F6E56] hover:bg-[#1D9E75] text-white px-8 py-3.5 rounded-full text-base font-bold transition-colors inline-flex items-center gap-2 group">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 bg-[#E1F5EE] rounded-full border border-[#1D9E75]/10 flex items-center justify-center">
                  <RefreshCw className="w-16 h-16 text-[#0F6E56] opacity-80" strokeWidth={1.5} />
                </div>
                <div className="absolute top-2 -left-2 w-12 h-12 bg-white rounded-full shadow-sm border border-[#F9FAFB] flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-[#1D9E75]" />
                </div>
                <div className="absolute bottom-4 -right-2 w-12 h-12 bg-white rounded-full shadow-sm border border-[#F9FAFB] flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section className="py-12 border-b border-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F5EE] border border-[#1D9E75]/10 text-[#0F6E56] text-xs font-bold tracking-widest uppercase mb-6">
              Built for Shopify
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-6 tracking-tight">
              The complete Shopify-Salesforce sync toolkit
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Most integration tools give you a basic one-way data push and call it done. Syncify gives you full control <strong className="text-[#111827] font-semibold">bi-directional sync, custom field mapping, multi-store management, and transparent monitoring</strong>everything your team needs to run on accurate data, every day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - FEATURES DISPLAY (GROUPED SECTIONS WITH ALTERNATING LAYOUT) */}
      <div className="bg-white">
        {featureGroups.map((group, gIdx) => (
          <div key={gIdx} className="pt-20 pb-8 border-b-8 border-[#F9FAFB] last:border-0">
            <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
              <FadeIn>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E1F5EE] text-[#0F6E56] mb-6 border border-[#1D9E75]/10 shadow-sm">
                  <group.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                  {group.category}
                </h2>
              </FadeIn>
            </div>

            <div>
              {group.features.map((feature, fIdx) => {
                const isEven = fIdx % 2 === 0;
                return (
                  <section key={fIdx} className="py-16 border-b border-[#F9FAFB] last:border-0">
                    <div className="max-w-6xl mx-auto px-6">
                      <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                        {/* TEXT SIDE */}
                        <div className="flex-1 w-full">
                          <FadeIn delay={0.1}>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E1F5EE] border border-[#1D9E75]/10 text-[#0F6E56] text-[10px] font-bold tracking-widest uppercase mb-5">
                              Feature
                            </div>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-6 tracking-tight">
                              {feature.title}
                            </h3>
                            <p className="text-lg text-[#6B7280] leading-relaxed max-w-xl mb-6">
                              {feature.desc.split('. ').map((sentence, sIdx, arr) => (
                                <React.Fragment key={sIdx}>
                                  {sentence}{sIdx !== arr.length - 1 ? '.' : ''}
                                  <br className="hidden md:block" /><br className="hidden md:block" />
                                </React.Fragment>
                              ))}
                            </p>

                            {feature.value && (
                              <div>
                                <p className="text-[#0F6E56] font-bold text-base bg-[#E1F5EE]/50 inline-block px-4 py-2 rounded-lg border border-[#1D9E75]/10">
                                  ✨ {feature.value}
                                </p>
                              </div>
                            )}
                          </FadeIn>
                        </div>

                        {/* VISUAL SIDE */}
                        <div className="flex-1 w-full flex justify-center">
                          <FadeIn delay={0.2} className="w-full">
                            <div className="w-full h-full min-h-[320px] bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden group relative p-0">
                              {feature.image ? (
                                <img
                                  src={feature.image}
                                  alt={feature.title}
                                  className="w-full h-full object-cover rounded-3xl transition duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#F9FAFB]">
                                  <div className="absolute inset-0 bg-gradient-to-tr from-white to-[#E1F5EE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                  <feature.icon className="w-24 h-24 text-[#0F6E56] opacity-90 transform group-hover:scale-105 transition-transform duration-500 relative z-10" strokeWidth={1} />
                                  <div className="mt-8 text-sm font-semibold text-[#6B7280] uppercase tracking-widest relative z-10">
                                    {feature.title}
                                  </div>
                                </div>
                              )}
                            </div>
                          </FadeIn>
                        </div>

                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 4 - COMPARISON */}
      <section className="py-16 bg-white border-t border-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight">
                How work changes with Syncify
              </h2>
            </div>

            <div className="space-y-6">
              {comparisonData.map((row, idx) => (
                <FadeIn key={idx}>
                  <div className="bg-[#F9FAFB] rounded-xl p-6 md:p-8 border border-[#F9FAFB]">
                    <h4 className="text-lg font-bold text-[#111827] mb-6 pb-4 border-b border-[#F9FAFB]">{row.scenario}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                      {/* Without Syncify */}
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider block mb-1">Without Syncify</span>
                          <p className="text-[#6B7280] font-medium leading-relaxed">{row.without}</p>
                        </div>
                      </div>

                      {/* With Syncify */}
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#0F6E56] flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <div>
                          <span className="text-xs font-bold text-[#085041] uppercase tracking-wider block mb-1">With Syncify</span>
                          <p className="text-[#0F6E56] font-bold leading-relaxed">{row.with}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 - FINAL CTA */}
      <section className="py-16 bg-white border-t border-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="bg-[#E1F5EE] rounded-3xl p-10 md:p-16 border border-[#1D9E75]/10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4 tracking-tight">
                See every feature working
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 max-w-xl mx-auto">
                Our team will walk you through Syncify's full feature set and answer your technical questions.
              </p>
              <Link to="/contact" className="bg-[#0F6E56] hover:bg-[#1D9E75] text-white px-8 py-3.5 rounded-full text-base font-bold transition-colors inline-flex items-center gap-2 group">
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
