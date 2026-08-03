import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Shared Interface for Footer Link Sections
interface FooterLinkGroup {
  title: string;
  links: string[];
}

const productLinks: FooterLinkGroup[] = [
  {
    title: 'Product',
    links: [
      'Platform Overview',
      'Customer Records',
      'Automation & Workflows',
      'Roles & Approvals',
      'Reporting & Analytics',
      'Pricing & Plans',
      'Zoiko Billing + Zoiko One',
    ],
  },
  {
    title: 'Billing operations',
    links: [
      'Invoices & Credit Notes',
      'Charges & Adjustments',
      'Billing Schedules',
      'Documents & Delivery',
      'Accounts Receivable',
      'Payments & Reconciliation',
      'Outstanding Balances',
    ],
  },
  {
    title: 'Solutions',
    links: [
      'Finance & Accounts Receivable',
      'Revenue Operations',
      'Small Businesses',
      'Professional Services',
      'Agencies',
      'SaaS & Digital Services',
      'Enterprise Organizations',
    ],
  },
  {
    title: 'Global billing',
    links: [
      'Global Billing Overview',
      'Multi-Currency Billing',
      'Multi-Entity Billing',
      'Localized Documents',
      'Entity-Level Controls',
      'Jurisdiction Availability',
      'Supported Languages',
    ],
  },
  {
    title: 'Integrations',
    links: [
      'Integrations Directory',
      'Payment Providers',
      'Accounting & ERP',
      'CRM Platforms',
      'Banking & Reconciliation',
      'Zoiko Ecosystem',
      'Integration Availability',
    ],
  },
  {
    title: 'Developers',
    links: [
      'API Overview',
      'API Documentation',
      'Authentication',
      'Webhooks',
      'Developer Sandbox',
      'SDKs & Examples',
      'Build an Integration',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Resource Center',
      'Billing Guides',
      'Templates',
      'Billing Glossary',
      'Reports & insights',
      'Customer Stories',
      'Webinar & Events',
      'Product Updates',
    ],
  },
  {
    title: 'Customer support',
    links: [
      'Help Center',
      'Documentation',
      'Contact Support',
      'Implementation Guidance',
      'Account Access',
      'Billing Support',
      'Integration Support',
      'Support Policy',
    ],
  },
  {
    title: 'Trust & Security',
    links: [
      'Security Overview',
      'Trust Center',
      'System Status',
      'Privacy & Data Governance',
      'Business Continuity',
      'Responsible Disclosure',
      'Security Advisories',
      'Accessibility',
    ],
  },
  {
    title: 'Company',
    links: [
      'About',
      'Why Zoiko Billing',
      'Zoiko Group',
      'Leadership',
      'Careers',
      'Newsroom',
      'Contact',
    ],
  },
  {
    title: 'Partners & Connect',
    links: [
      'Partner Program',
      'Technology Partners',
      'Become a Partner',
      'Submit an Integrations',
      'Partner Portal',
      'Sales Enquiries',
    ],
  },
  {
    title: 'Legal Corporate',
    links: [
      'Terms of User',
      'Privacy Policy',
      'Cookie Policy',
      'Acceptable Use Policy',
      'Data Processing Addendum',
      'Subprocessors',
      'Legal Notices',
      'Sitemap',
    ],
  },
];

export default function ZoikoBillingPage() {
  return (
    <div className="min-h-screen bg-sky-950 text-white font-sans selection:bg-cyan-500 selection:text-sky-950">
      
      {/* Hero Banner Section */}
      <section className="relative w-full bg-gradient-to-b from-cyan-500 to-blue-600 overflow-hidden py-16 md:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-4xl lg:text-4xl font-medium leading-tight tracking-wide font-sans">
              Billing clarity from invoice <br className="hidden sm:inline" />
              to payment.
            </div>
            <p className="!text-white text-lg sm:text-xl font-normal leading-relaxed max-w-2xl font-sans">
              Create invoices, manage charges, track payments, and maintain
              control over outstanding balances.
              <br />
              <br />
              Available as standalone SaaS or as an integrated component of
              Zoiko One.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                className="px-8 py-3.5 bg-white hover:bg-slate-100 text-blue-600 font-medium text-lg rounded-xl shadow-md transition-all focus:outline-none"
              >
                Create Account
              </button>
              <button
                type="button"
                className="px-6 py-3.5 border border-white hover:bg-white/10 text-white font-medium text-lg rounded-xl shadow-md transition-all focus:outline-none"
              >
                Book Demo
              </button>
              <button
                type="button"
                className="px-6 py-3.5 border border-white/50 hover:bg-white/10 text-white font-medium text-lg rounded-xl shadow-md transition-all focus:outline-none"
              >
                View Pricing
              </button>
            </div>
          </div>

          {/* Hero Image Right */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/images/Frame 23.png"
              alt="Zoiko Billing Interface Preview"
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-cover border border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Navigation Directory Links */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {productLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sky-300 text-sm font-semibold font-mono uppercase tracking-wider border-b border-sky-800/60 pb-2">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-slate-300 hover:text-white text-sm font-normal leading-relaxed transition-colors block py-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Headquarters Information */}
        <div className="border-t border-white/20 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="w-36 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md">
                <Link href="/" className="shrink-0" aria-label="Zoiko Billing Home">
          <Image
            src="/images/zoikobilling-logo-svg 1.png"
            alt="Zoiko Billing"
            width={132}
            height={40}
            priority
            className="h-auto w-[112px] sm:w-[122px]"
          />
        </Link>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-sm">
              Governed billing operations for invoices, charges, payments,
              reconciliation, and outstanding balances.
            </p>
          </div>

          {/* Headquarters Addresses */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-cyan-400 text-sm font-semibold font-mono uppercase tracking-wider">
                Headquarters
              </h4>
              <p className="text-neutral-300 text-base leading-relaxed">
                1401 21st Street, Suite R <br />
                Sacramento, California, <br />
                United States
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-cyan-400 text-sm font-semibold font-mono uppercase tracking-wider">
                European Headquarters
              </h4>
              <p className="text-neutral-300 text-base leading-relaxed">
                167-169 Great Portland Street 5th Floor, <br />
                London W1W 5PF United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer Banner */}
      <footer className="w-full bg-slate-900 border-t border-white/10 py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Top Line Corporate Notes */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-slate-400 text-sm">
            <span className="font-semibold text-slate-200">Zoiko Tech Inc.</span>
            <span>·</span>
            <span>Developer and operator of Zoiko Billing.</span>
            <span>·</span>
            <span>A Zoiko Group company.</span>
          </div>

          {/* Bottom Copyright & Legal Settings */}
          <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            <p className="text-center lg:text-left">
              © 2026 Zoiko Billing Inc. All rights reserved. Zoiko Billing is a
              product of Zoiko Tech Inc., part of Zoiko Group.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#privacy" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="#terms" className="hover:text-slate-200 transition-colors">
                Website Terms
              </a>
              <span>·</span>
              <a href="#cookies" className="hover:text-slate-200 transition-colors">
                Cookie Policy
              </a>
              <span>·</span>
              <button type="button" className="hover:text-slate-200 transition-colors">
                Cookie Settings
              </button>
              <span>·</span>
              <a href="#accessibility" className="hover:text-slate-200 transition-colors">
                Accessibility
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <span>Language:</span>
              <select className="bg-slate-800 text-slate-200 text-xs rounded-lg px-3 py-1.5 border border-white/15 focus:outline-none">
                <option>English (United States)</option>
              </select>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
