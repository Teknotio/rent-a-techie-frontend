'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2 p-2 rounded-full border border-ink">
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 rounded-full text-xs md:text-sm wf-mono transition-all ${
          locale === 'en'
            ? 'bg-accent text-paper'
            : 'text-ink-2 hover:bg-paper-2'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale('de')}
        className={`px-3 py-1 rounded-full text-xs md:text-sm wf-mono transition-all ${
          locale === 'de'
            ? 'bg-accent text-paper'
            : 'text-ink-2 hover:bg-paper-2'
        }`}
        aria-label="Switch to German"
      >
        DE
      </button>
    </div>
  );
}
