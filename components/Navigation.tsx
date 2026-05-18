'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const linkClass = (href: string) =>
    `no-underline transition-colors ${isActive(href) ? 'text-accent' : 'text-ink hover:text-accent'}`;

  return (
    <nav className="border-b border-ink bg-paper relative z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-14 h-16 md:h-18">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2 md:gap-3 text-decoration-none">
            <div className="w-8 h-8 md:w-9 md:h-9 border-2 border-ink rounded-full bg-accent flex items-center justify-center font-caveat text-lg md:text-xl text-white transform -rotate-6">
              RT
            </div>
            <span className="font-caveat text-xl md:text-2xl font-bold text-ink">Rent a Techie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-7 xl:gap-10 wf-arc text-base xl:text-lg">
            <Link href="/how-it-works" className={linkClass('/how-it-works')}>
              {t('nav.howItWorks')}
            </Link>
            <Link href="/case-studies" className={linkClass('/case-studies')}>
              {t('nav.caseStudies')}
            </Link>
            <Link href="/about" className={linkClass('/about')}>
              {t('nav.about')}
            </Link>
            <Link href="/contact" className={linkClass('/contact')}>
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" className="wf-btn wf-btn-sm hidden md:inline-block">
              Book a call →
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-ink"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t-2 border-ink bg-paper">
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/how-it-works"
                className={`wf-arc text-lg py-2 ${linkClass('/how-it-works')}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.howItWorks')}
              </Link>
              <Link
                href="/case-studies"
                className={`wf-arc text-lg py-2 ${linkClass('/case-studies')}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.caseStudies')}
              </Link>
              <Link
                href="/about"
                className={`wf-arc text-lg py-2 ${linkClass('/about')}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/contact"
                className={`wf-arc text-lg py-2 ${linkClass('/contact')}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="wf-btn w-full text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book a call →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
