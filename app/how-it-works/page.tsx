'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const monoLabel: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    color: 'var(--ink-2)',
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            HOW IT WORKS
          </div>

          <h1 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1.05', marginBottom: '1.5rem' }}>
            {t('howItWorks.hero.title')}
          </h1>

          <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.125rem, 1.4vw, 1.5rem)', lineHeight: '1.35', color: 'var(--ink-2)', maxWidth: '48rem' }}>
            {t('howItWorks.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Four Steps Section — strip contained to content width */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="border-t border-b border-ink">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 relative">
            {[
              { num: '01', titleKey: 'match', timeKey: 'match', last: false },
              { num: '02', titleKey: 'build', timeKey: 'build', last: false },
              { num: '03', titleKey: 'mentor', timeKey: 'mentor', last: false },
              { num: '04', titleKey: 'launch', timeKey: 'launch', last: true },
            ].map(({ num, titleKey, timeKey, last }) => (
              <div key={num} className={!last ? 'md:border-r md:border-dotted md:border-ink-3' : ''} style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.08em', fontSize: 'clamp(1rem, 1.1vw, 1.25rem)', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  {num}
                </div>
                <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1', marginBottom: '1rem' }}>
                  {t(`howItWorks.steps.${titleKey}.title`)}
                </h3>
                <div style={{ ...monoLabel, fontSize: 'clamp(0.875rem, 1vw, 1.125rem)', color: 'var(--ink-2)', marginBottom: '1.25rem' }}>
                  {t(`howItWorks.steps.${timeKey}.time`)}
                </div>
                <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 1.5vw, 1.625rem)', lineHeight: '1.35', color: 'var(--ink-2)' }}>
                  {t(`howItWorks.steps.${titleKey}.description`)}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* What's in every engagement */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            {t('howItWorks.engagement.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="wf-box" style={{ padding: '1.5rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.25rem, 1.4vw, 1.5rem)', lineHeight: '1.1', marginBottom: '0.5rem' }}>
                  {t(`howItWorks.engagement.item${i}.title`)}
                </h3>
                <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1vw, 1.05rem)', lineHeight: '1.3', color: 'var(--ink-2)' }}>
                  {t(`howItWorks.engagement.item${i}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-week sprint timeline */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '4rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            {t('howItWorks.sprint.title')}
          </div>

          <div className="wf-box" style={{ padding: '2rem 2rem' }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px dashed var(--ink-3)', marginBottom: '1.25rem' }}>
              {['w1', 'w2', 'w3', 'w4', 'w5', 'w6'].map((wk, idx) => (
                <div key={wk}>
                  <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.06em', fontSize: '0.8rem', color: 'var(--ink-2)', marginBottom: '0.25rem' }}>
                    W{idx + 1}
                  </div>
                  <h4 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.125rem, 1.3vw, 1.375rem)', lineHeight: '1.1' }}>
                    {t(`howItWorks.sprint.${wk}`)}
                  </h4>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.1vw, 1.125rem)', color: 'var(--ink-2)' }}>
              {t('howItWorks.sprint.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '4rem' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: 'var(--accent)', borderRadius: '8px', padding: '2rem 2.5rem', border: '2px solid var(--ink)' }}>
            <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', color: '#fff', lineHeight: '1.1' }}>
              {t('howItWorks.cta.title')}
            </h2>
            <Link href="/contact" className="wf-btn" style={{ backgroundColor: 'var(--paper)', color: 'var(--accent)', border: '2px solid var(--ink)', fontSize: 'clamp(1.125rem, 1.4vw, 1.5rem)', padding: '0.75rem 2rem', whiteSpace: 'nowrap' }}>
              {t('howItWorks.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
