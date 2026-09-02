import React from 'react';
import Image from 'next/image';
/* eslint-disable @next/next/no-html-link-for-pages */
// Shared Interface for Footer Link Sections
interface FooterLinkGroup {
  title: string;
  links: FooterLinkItem[];
}

interface FooterLinkItem {
  label: string;
  href: string;
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Product',
    links: [
      { label: 'Platform Overview', href: '/platform-overview' },
      { label: 'Customer Records', href: '/customer-records' },
      { label: 'Automation & Workflows', href: '/automation' },
      { label: 'Roles & Approvals', href: '/roles-and-approvals' },
      { label: 'Reporting & Analytics', href: '/reporting-and-analytics' },
      { label: 'Pricing & Plans', href: '/pricing-and-plans' },
      { label: 'Zoiko Billing + Zoiko One', href: '/zoiko-billing-plus-zoiko-one' },
    ],
  },
  {
    title: 'Billing operations',
    links: [
      { label: 'Invoices & Credit Notes', href: '/invoices' },
      { label: 'Charges & Adjustments', href: '/charges-and-adjustments' },
      { label: 'Billing Schedules', href: '/billing-schedules' },
      { label: 'Documents & Delivery', href: '/documents-and-delivery' },
      { label: 'Accounts Receivable', href: '/accounts-receivable' },
      { label: 'Payments & Reconciliation', href: '/payments-and-reconcilliation' },
      { label: 'Outstanding Balances', href: '/outstanding-balances' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Finance & Accounts Receivable', href: '/finance-and-account-receivable' },
      { label: 'Revenue Operations', href: '/revenue-operations' },
      { label: 'Small Businesses', href: '/small-businesses' },
      { label: 'Professional Services', href: '/professional-services' },
      { label: 'Agencies', href: '/agencies' },
      { label: 'SaaS & Digital Services', href: '/saas-and-digital-services' },
      { label: 'Enterprise Organizations', href: '/enterprise-organizations' },
    ],
  },
  {
    title: 'Global billing',
    links: [
      { label: 'Global Billing Overview', href: '/global-billing' },
      { label: 'Multi-Currency Billing', href: '/multi-currency' },
      { label: 'Multi-Entity Billing', href: '/multi-entity-billing' },
      { label: 'Localized Documents', href: '/localized-documents' },
      { label: 'Entity-Level Controls', href: '/entity-level-controls' },
      { label: 'Jurisdiction Availability', href: '/jurisdiction-availability' },
      { label: 'Supported Languages', href: '/supported-languages' },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { label: 'Integrations Directory', href: '/integrations-directory' },
      { label: 'Payment Providers', href: '/payment-providers' },
      { label: 'Accounting & ERP', href: '/accounting-and-erp' },
      { label: 'CRM Platforms', href: '/crm-platforms' },
      { label: 'Banking & Reconciliation', href: '/banking-and-reconciliation' },
      { label: 'Zoiko Ecosystem', href: '/ecosystem' },
      { label: 'Integration Availability', href: '/integration-availability' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API Overview', href: '/developers-api-overview' },
      { label: 'API Documentation', href: '/developers-api-documentation' },
      { label: 'Authentication', href: '/developers-authentication' },
      { label: 'Webhooks', href: '/developers-webhooks' },
      { label: 'Developer Sandbox', href: '/developer-sandbox' },
      { label: 'SDKs & Examples', href: '/sdks-and-examples' },
      { label: 'Build an Integration', href: '/developers-build-an-integration' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resource Center', href: '/resource-center' },
      { label: 'Billing Guides', href: '/billing-guides' },
      { label: 'Templates', href: '/templates' },
      { label: 'Billing Glossary', href: '/billing-glossary' },
      { label: 'Reports & insights', href: '#' },
      { label: 'Customer Stories', href: '#' },
      { label: 'Webinar & Events', href: '#' },
      { label: 'Product Updates', href: '#' },
    ],
  },
  {
    title: 'Customer support',
    links: [
      { label: 'Help Center', href: '/help-center' },
      { label: 'Documentation', href: '#' },
      { label: 'Contact Support', href: '/contact-support' },
      { label: 'Implementation Guidance', href: '/implementation-guidance' },
      { label: 'Account Access', href: '/account-access' },
      { label: 'Billing Support', href: '/billing-support' },
      { label: 'Integration Support', href: '/integration-support' },
      { label: 'Support Policy', href: '#' },
    ],
  },
  {
    title: 'Trust & Security',
    links: [
      { label: 'Security Overview', href: '/security-overview' },
      { label: 'Trust Center', href: '/trust-center' },
      { label: 'System Status', href: 'system-status' },
      { label: 'Privacy & Data Governance', href: '/privacy-and-data-governance' },
      { label: 'Business Continuity', href: '#' },
      { label: 'Responsible Disclosure', href: '/responsible-disclosure' },
      { label: 'Security Advisories', href: '/security-advisories' },
      { label: 'Accessibility', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Why Zoiko Billing', href: '/why-zoiko-billing' },
      { label: 'Zoiko Group', href: '/zoiko-group' },
      { label: 'Leadership', href: '#' },
      { label: 'Careers', href: '/careers' },
      { label: 'Newsroom', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Partners & Connect',
    links: [
      { label: 'Partner Program', href: '/partner-programme' },
      { label: 'Technology Partners', href: '#' },
      { label: 'Become a Partner', href: '/become-a-partner' },
      { label: 'Submit an Integrations', href: '#' },
      { label: 'Partner Portal', href: '/partner-portal' },
      { label: 'Sales Enquiries', href: '#' },
    ],
  },
  {
    title: 'Legal Corporate',
    links: [
      { label: 'Terms of User', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Acceptable Use Policy', href: '#' },
      { label: 'Data Processing Addendum', href: '#' },
      { label: 'Subprocessors', href: '#' },
      { label: 'Legal Notices', href: '#' },
      { label: 'Sitemap', href: '#' },
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
              <a
                href="/create-account"
                className="px-8 py-3.5 bg-white hover:bg-slate-100 !text-slate-950 font-medium text-lg rounded-xl shadow-md transition-all focus:outline-none"
              >
                Create Account
              </a>
              <a
                href="/book-demo"
                className="px-6 py-3.5 border border-white hover:bg-white/10 !text-white font-medium text-lg rounded-xl shadow-md transition-all focus:outline-none"
              >
                Book Demo
              </a>
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
          {footerLinkGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sky-300 text-sm font-semibold font-mono uppercase tracking-wider border-b border-sky-800/60 pb-2">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`block py-0.5 text-sm font-normal leading-relaxed transition-colors ${
                        link.label === 'Platform Overview'
                          ? 'text-white hover:text-cyan-300'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {link.label}
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
                <a href="/" className="shrink-0" aria-label="Zoiko Billing Home">
          <Image
            src="/images/zoikobilling-logo-svg 1.png"
            alt="Zoiko Billing"
            width={132}
            height={40}
            priority
            className="h-auto w-[112px] sm:w-[122px]"
          />
        </a>
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
