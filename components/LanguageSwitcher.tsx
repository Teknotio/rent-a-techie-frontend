'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2 p-10 rounded-full border-2 border-ink bg-paper">
      <button
        onClick={() => setLocale('en')}
        className={`px-7 py-4.5 rounded-full text-lg md:text-xl wf-mono font-bold transition-all ${
          locale === 'en'
            ? 'bg-accent text-white'
            : 'text-ink hover:bg-paper-2'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale('de')}
        className={`px-5 py-2.5 rounded-full text-lg md:text-xl wf-mono font-bold transition-all ${
          locale === 'de'
            ? 'bg-accent text-white'
            : 'text-ink hover:bg-paper-2'
        }`}
        aria-label="Switch to German"
      >
        DE
      </button>
    </div>
  );
}
