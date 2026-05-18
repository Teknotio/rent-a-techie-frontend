'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const monoLabel: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    color: 'var(--ink-2)',
  };

  const founders = [
    {
      initials: 'VO',
      name: 'Victoria Omordia',
      role: 'CEO & CO-FOUNDER · BUSINESS + SALES',
      bio: 'International business background. B2B sales operator. Owns commercial, fundraising, and founder community.',
    },
    {
      initials: 'YAO',
      name: 'Yaqoob A. Omotolani',
      role: 'CTO & CO-FOUNDER · ENGINEERING',
      bio: 'Full-stack AI & data consultant. Mentor at SpicedAcademy & Udacity. Sets the technical bar across the platform.',
    },
  ];

  const principles = [
    { key: 'noAgencies' },
    { key: 'noEquity' },
    { key: 'noContracts' },
    { key: 'noFluff' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            ABOUT
          </div>

          <h1 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.05', marginBottom: '1.5rem' }}>
            {t('about.hero.title')}
          </h1>

          <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.125rem, 1.4vw, 1.5rem)', lineHeight: '1.35', color: 'var(--ink-2)', maxWidth: '52rem' }}>
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '3rem' }}>
          <div className="wf-box" style={{ backgroundColor: 'var(--paper-2)', padding: '2rem 2.25rem' }}>
            <div style={{ ...monoLabel, marginBottom: '1rem' }}>
              {t('about.mission.title')}
            </div>
            <p style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.5rem, 2.4vw, 2.5rem)', lineHeight: '1.15', color: 'var(--ink)' }}>
              {t('about.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* The Founders Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '3rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            THE FOUNDERS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {founders.map((f) => (
              <div key={f.initials} className="wf-box" style={{ padding: '1.75rem 2rem' }}>
                <div className="flex items-start" style={{ gap: '1.25rem', marginBottom: '1rem' }}>
                  <div className="flex-shrink-0 flex items-center justify-center rounded-full border-2 border-ink" style={{ width: '4rem', height: '4rem', backgroundColor: 'var(--accent-soft)', fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink)' }}>
                    {f.initials}
                  </div>
                  <div className="flex flex-col" style={{ gap: '0.25rem' }}>
                    <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.5rem, 1.8vw, 1.875rem)', lineHeight: '1.1' }}>
                      {f.name}
                    </h3>
                    <div style={{ ...monoLabel, fontSize: 'clamp(0.75rem, 0.85vw, 0.9rem)', color: 'var(--ink-3)' }}>
                      {f.role}
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.0625rem, 1.2vw, 1.25rem)', lineHeight: '1.35', color: 'var(--ink-2)' }}>
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '3rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            {t('about.howWeWork.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {principles.map((p) => (
              <div key={p.key} className="wf-box" style={{ padding: '1.5rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.25rem, 1.6vw, 1.625rem)', lineHeight: '1.1', marginBottom: '0.75rem' }}>
                  {t(`about.howWeWork.${p.key}.title`)}
                </h3>
                <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.1vw, 1.125rem)', lineHeight: '1.3', color: 'var(--ink-2)' }}>
                  {t(`about.howWeWork.${p.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '4rem' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: 'var(--accent)', borderRadius: '8px', padding: '1.75rem 2.25rem', border: '2px solid var(--ink)' }}>
            <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', color: '#fff', lineHeight: '1.15' }}>
              {t('about.cta.title')}
            </h2>
            <Link href="/contact" className="wf-btn" style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)', border: '2px solid var(--ink)', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', padding: '0.65rem 1.5rem', whiteSpace: 'nowrap' }}>
              {t('about.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
