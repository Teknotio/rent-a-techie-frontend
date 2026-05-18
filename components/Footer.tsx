'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink" style={{ marginTop: '5rem' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 wf-arc text-sm md:text-base text-ink-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-ink rounded-full bg-accent flex items-center justify-center font-caveat text-lg text-white transform -rotate-6">
              RT
            </div>
            <span>© {currentYear} Rent a Techie</span>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link href="/privacy" className="text-ink-2 no-underline hover:text-accent transition-colors">
              {t('footer.legal.privacy')}
            </Link>
            <Link href="/terms" className="text-ink-2 no-underline hover:text-accent transition-colors">
              Terms and Conditions
            </Link>
            <a
              href="mailto:hello@rentatechie.com"
              className="text-ink-2 no-underline hover:text-accent transition-colors"
            >
              hello@rentatechie.com
            </a>
          </div>

          <div className="flex gap-3 md:gap-4">
            <a href="#" className="text-ink-2 hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="text-ink-2 hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="text-ink-2 hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
