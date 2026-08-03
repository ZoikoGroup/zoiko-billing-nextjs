'use client';

import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const productLinks: FooterLink[] = [
  { label: 'Invoicing', href: '#invoicing' },
  { label: 'Charges and Billing Models', href: '#charges' },
  { label: 'Payments and Reconciliation', href: '#payments' },
  { label: 'Outstanding Balances', href: '#balances' },
  { label: 'Automation and Controls', href: '#automation' },
  { label: 'Reporting', href: '#reporting' },
  { label: 'Customer Portal', href: '#portal' },
  { label: 'Global Billing', href: '#global-billing' },
];

const solutionLinks: FooterLink[] = [
  { label: 'Professional Services', href: '#services' },
  { label: 'SaaS and Digital Services', href: '#saas' },
  { label: 'Agencies', href: '#agencies' },
  { label: 'Multi-Entity Businesses', href: '#multi-entity' },
  { label: 'Global Businesses', href: '#global' },
  { label: 'Enterprise Finance', href: '#enterprise' },
];

const developerLinks: FooterLink[] = [
  { label: 'API Documentation', href: '#api' },
  { label: 'Webhooks', href: '#webhooks' },
  { label: 'Sandbox', href: '#sandbox' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Developer Support', href: '#dev-support' },
  { label: 'System Status', href: '#system-status' },
];

const resourceLinks: FooterLink[] = [
  { label: 'Product Tour', href: '#tour' },
  { label: 'Help Center', href: '#help' },
  { label: 'Billing Guides', href: '#guides' },
  { label: 'Customer Stories', href: '#stories' },
  { label: 'Product Updates', href: '#updates' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Support', href: '#support' },
];

const companyLinks: FooterLink[] = [
  { label: 'About Zoiko Billing', href: '#about' },
  { label: 'Zoiko Tech', href: '#tech' },
  { label: 'Zoiko Group', href: '#group' },
  { label: 'Careers', href: '#careers' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks: FooterLink[] = [
  { label: 'Trust Center', href: '#trust' },
  { label: 'Security', href: '#security' },
  { label: 'Privacy Notice', href: '#privacy' },
  { label: 'Cookie Notice', href: '#cookies' },
  { label: 'Terms', href: '#terms' },
  { label: 'Acceptable Use', href: '#acceptable-use' },
  { label: 'Data Processing Addendum', href: '#dpa' },
  { label: 'Subprocessors', href: '#subprocessors' },
  { label: 'Accessibility', href: '#accessibility' },
  { label: 'Regional Terms', href: '#regional-terms' },
  { label: 'Do Not Sell or Share My Personal Information', href: '#privacy-choices' },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-sky-950 text-white font-['Segoe_UI',sans-serif] px-4 sm:px-8 md:px-12 lg:px-28 py-16 overflow-hidden border-t border-white/10">
      <div className="w-full max-w-[1220px] mx-auto flex flex-col gap-12">
        
        {/* Top Grid Row: Brand Block + Product, Solutions, Developer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/14">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4 pr-0 lg:pr-8">
            {/* Logo Badge Card */}
            <div className="w-36 h-16 bg-white rounded-[20px] p-3 flex items-center justify-center shrink-0 shadow-sm">
                            <img src="/images/zoikobilling-logo-svg 1.png" />

            </div>

            {/* Slogan */}
            <p className="text-emerald-300 text-sm font-normal leading-6 max-w-[280px]">
              One controlled billing record, from charge to payment.
            </p>

            {/* Preference Pill Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/16 text-emerald-300 text-[10px] font-normal font-['IBM_Plex_Mono',monospace] transition-colors cursor-pointer">
                Region / Language
              </button>
              <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/16 text-emerald-300 text-[10px] font-normal font-['IBM_Plex_Mono',monospace] transition-colors cursor-pointer">
                Cookie Preferences
              </button>
              <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/16 text-emerald-300 text-[10px] font-normal font-['IBM_Plex_Mono',monospace] transition-colors cursor-pointer">
                Privacy Choices
              </button>
              <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/16 text-emerald-300 text-[10px] font-normal font-['IBM_Plex_Mono',monospace] transition-colors cursor-pointer">
                Accessibility Feedback
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Product */}
            <div className="flex flex-col gap-3.5">
              <span className="text-slate-500 text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide">
                Product
              </span>
              <ul className="flex flex-col gap-1">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-300 hover:text-white text-sm font-normal leading-6 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="flex flex-col gap-3.5">
              <span className="text-slate-500 text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide">
                Solutions
              </span>
              <ul className="flex flex-col gap-1">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-300 hover:text-white text-sm font-normal leading-6 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers and Integrations */}
            <div className="flex flex-col gap-3.5">
              <span className="text-slate-500 text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide">
                Developers and Integrations
              </span>
              <ul className="flex flex-col gap-1">
                {developerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-300 hover:text-white text-sm font-normal leading-6 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Middle Grid Row: Resources, Company, Legal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-8 pb-12 border-b border-white/14">
          
          {/* Resources */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-slate-500 text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide">
              Resources
            </span>
            <ul className="flex flex-col gap-1">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 hover:text-white text-sm font-normal leading-6 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-slate-500 text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide">
              Company
            </span>
            <ul className="flex flex-col gap-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 hover:text-white text-sm font-normal leading-6 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Trust */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-slate-500 text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide">
              Legal and Trust
            </span>
            <ul className="flex flex-col gap-1">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-xs font-normal leading-5 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright + System Status Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <p className="text-slate-500 text-xs font-normal leading-5 max-w-[540px]">
            © 2026 Zoiko Billing. Zoiko Billing is a platform owned and operated by Zoiko Tech Inc, a Zoiko Group company. All rights reserved.
          </p>

          <div className="px-3.5 py-2 bg-white/5 rounded-full border border-white/16 flex items-center gap-2 shrink-0">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-emerald-300 text-xs font-normal font-['IBM_Plex_Mono',monospace]">
              All systems operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}