'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import ProductDropdown from './product-dropdown';
import SolutionsDropdown from './solutions-dropdown';
import GlobalBillingDropdown from './global-billing-dropdown';
import IntegrationsDropdown from './integrations-dropdown';
import ResourcesDropdown from './resources-dropdown';
import CompanyDropdown from './company-dropdown'

type DropdownKey = 'product' | 'solutions' | 'global-billing' | 'integrations' | 'resources' | 'company';

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownKey;
}

const navItems: NavItem[] = [
  { label: 'Product', href: '/about#overview', dropdown: 'product' },
  { label: 'Solutions', href: '#solutions', dropdown: 'solutions' },
  { label: 'Global Billing', href: '#global-billing', dropdown: 'global-billing' },
  { label: 'Integrations', href: '#integrations', dropdown: 'integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources', dropdown: 'resources' },
  { label: 'Company', href: '#company', dropdown: 'company' },
];

interface HeaderNavigationProps {
  onSignIn?: () => void;
  onBookDemo?: () => void;
  onCreateAccount?: () => void;
}

export default function HeaderNavigation({
  onSignIn,
  onBookDemo,
  onCreateAccount,
}: HeaderNavigationProps) {
  const pathname = usePathname();

  return (
    <HeaderNavigationInner
      key={pathname}
      onSignIn={onSignIn}
      onBookDemo={onBookDemo}
      onCreateAccount={onCreateAccount}
    />
  );
}

function HeaderNavigationInner({
  onSignIn,
  onBookDemo,
  onCreateAccount,
}: HeaderNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<DropdownKey | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mountedDropdown, setMountedDropdown] = useState<DropdownKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownShellWidth =
    mountedDropdown === 'global-billing'
      ? 'w-[min(80rem,calc(100vw-24px))]'
      : 'w-[min(64rem,calc(100vw-24px))]';

  const openDropdown = (menu: DropdownKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    setMountedDropdown(menu);
    setActiveDropdown(menu);
  };

  const clearDropdownTimers = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const closeDropdown = () => {
    clearDropdownTimers();

    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;

      hideTimerRef.current = setTimeout(() => {
        setMountedDropdown(null);
        hideTimerRef.current = null;
      }, 220);
    }, 120);
  };

  const closeDropdownImmediately = () => {
    clearDropdownTimers();
    setActiveDropdown(null);
    setMountedDropdown(null);
  };

  const handleLinkSelection = (event: MouseEvent<HTMLElement>) => {
    const target = event.target;

    if (!(target instanceof Element) || !target.closest('a')) {
      return;
    }

    closeDropdownImmediately();
    setMobileMenuOpen(false);
    setMobileExpandedDropdown(null);
  };

  const toggleMobileDropdown = (menu: DropdownKey) => {
    setMobileExpandedDropdown((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    return () => {
      clearDropdownTimers();
    };
  }, []);

  const renderDropdown = (key: DropdownKey) => {
    switch (key) {
      case 'product':
        return <ProductDropdown />;
      case 'solutions':
        return <SolutionsDropdown />;
      case 'global-billing':
        return <GlobalBillingDropdown />;
      case 'integrations':
        return <IntegrationsDropdown />;
      case 'resources':
        return <ResourcesDropdown />;
      case 'company':
        return <CompanyDropdown />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white text-slate-900 shadow-[0_1px_0_rgba(15,23,42,0.02)] dark:border-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="relative mx-auto flex h-20 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
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

        <nav
          className="hidden flex-1 items-center justify-center gap-5 lg:flex"
          aria-label="Main Navigation"
          onClickCapture={handleLinkSelection}
        >
          {navItems.map((item) => {
            if (item.dropdown) {
              const dropdown = item.dropdown;

              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => openDropdown(dropdown)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={item.href}
                    onFocus={() => openDropdown(dropdown)}
                    className="inline-flex cursor-default items-center gap-1 whitespace-nowrap text-[13px] font-normal text-slate-700 transition-colors hover:text-sky-600 dark:text-gray-300 dark:hover:text-blue-400"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === dropdown}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 dark:text-gray-500 ${
                        activeDropdown === dropdown ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-normal text-slate-700 transition-colors hover:text-sky-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            href="/sign-in"
            onClick={onSignIn}
            className="min-h-10 shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-normal !text-slate-700 transition-colors hover:!text-sky-600 dark:!text-gray-300 dark:hover:!text-blue-400"
          >
            Sign In
          </Link>
          <Link
            href="/book-demo"
            onClick={onBookDemo}
            className="min-h-10 shrink-0 whitespace-nowrap rounded-xl border border-slate-900 px-3 py-2 text-[13px] font-normal !text-slate-900 transition-colors hover:bg-slate-50 dark:border-gray-300 dark:!text-gray-100 dark:hover:bg-gray-800"
          >
            Book a Demo
          </Link>
          <Link
            href="/create-account"
            onClick={onCreateAccount}
            className="min-h-10 shrink-0 whitespace-nowrap rounded-xl border border-blue-600 bg-blue-600 px-3 py-2 text-[13px] font-normal !text-white transition-colors hover:bg-blue-500"
          >
            Create Account
          </Link>
        </div>

        <div className="ml-auto flex items-center lg:hidden">
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((prev) => {
                if (prev) {
                  setMobileExpandedDropdown(null);
                }
                return !prev;
              })
            }
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-slate-800 transition-colors hover:text-blue-600 dark:text-gray-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mountedDropdown && (
          <div
            className={`fixed inset-x-0 top-20 bottom-0 z-40 hidden bg-slate-900/50 backdrop-blur-sm transition-opacity duration-200 lg:block ${
              activeDropdown === mountedDropdown ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={closeDropdown}
            onClick={closeDropdownImmediately}
            aria-hidden="true"
          />
        )}

        {mountedDropdown && (
          <div
            className={`absolute left-1/2 top-full z-50 hidden ${dropdownShellWidth} -translate-x-1/2 -translate-y-2 px-0 lg:block`}
            onMouseEnter={() => openDropdown(mountedDropdown)}
            onMouseLeave={closeDropdown}
            onClickCapture={handleLinkSelection}
          >
            <div className="pt-2">
              <div
                className={`origin-top transition-[opacity,transform] duration-200 ease-out ${
                  activeDropdown === mountedDropdown
                    ? 'translate-y-0 scale-100 opacity-100'
                    : '-translate-y-2 scale-[0.985] opacity-0'
                }`}
              >
                {renderDropdown(mountedDropdown)}
              </div>
            </div>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div
          className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-6 shadow-xl sm:px-6 dark:border-gray-800 dark:bg-gray-900 lg:hidden"
          onClickCapture={handleLinkSelection}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-100 dark:border-gray-800">
                <div className="flex items-center justify-between py-3">
                  <Link
                    href={item.href}
                    className="text-[15px] font-medium text-slate-800 transition-colors hover:text-blue-600 dark:text-gray-200"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={mobileExpandedDropdown === item.dropdown}
                      onClick={() => toggleMobileDropdown(item.dropdown as DropdownKey)}
                      className="p-1 text-gray-500 dark:text-gray-400"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileExpandedDropdown === item.dropdown ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.dropdown && mobileExpandedDropdown === item.dropdown && (
                  <div className="-mx-4 mb-3 overflow-x-auto pb-3 sm:-mx-6">
                    <div className="min-w-[640px] px-4 sm:px-6">{renderDropdown(item.dropdown)}</div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-4 dark:border-gray-800">
            <Link
              href="/sign-in"
              onClick={onSignIn}
              className="block w-full rounded-md border border-slate-300 py-2.5 text-center font-medium !text-slate-900 transition-colors dark:border-gray-700 dark:!text-gray-100"
            >
              Sign In
            </Link>
            <Link
              href="/book-demo"
              onClick={onBookDemo}
              className="block w-full rounded-md border border-slate-900 py-2.5 text-center font-medium !text-slate-900 transition-colors dark:border-gray-300 dark:!text-gray-100"
            >
              Book a Demo
            </Link>
            <Link
              href="/create-account"
              onClick={onCreateAccount}
              className="block w-full rounded-md bg-blue-600 py-2.5 text-center font-medium !text-white transition-colors hover:bg-blue-500"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}