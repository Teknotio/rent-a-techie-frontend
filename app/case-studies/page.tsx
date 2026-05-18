'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CaseStudies() {
  const { t } = useLanguage();

  const caseStudies = [
    {
      id: 1,
      title: 'Trovara',
      label: 'LIVE',
      url: 'TROVARA.IO',
      site: 'B2B SEARCH & MATCH',
      description: 'Pre-seed founder shipped a production matchmaking product in 6 weeks. Built auth, payments, vector search, the works.',
      tags: ['AUTH', 'PAYMENTS', 'INFRA', 'MENTOR ARC'],
      link: 'https://trovara.io',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftrovara.io?w=1200&h=700',
    },
    {
      id: 2,
      title: 'Tuneyverse',
      label: 'LIVE',
      url: 'TUNEYVERSE.COM',
      site: 'MUSIC PLATFORM',
      description: 'Solo non-technical founder. Senior engineer architected the platform end-to-end, set up scalable infra, and handed off a clean codebase.',
      tags: ['AUTH', 'PAYMENTS', 'INFRA', 'MENTOR ARC'],
      link: 'https://www.tuneyverse.com',
      image: '/tuneyverse.png',
    },
    {
      id: 3,
      title: 'Splexx Labs',
      label: 'LIVE',
      url: 'SPLEXXLABS.COM',
      site: 'STUDIO PRODUCT',
      description: 'A founder with a domain thesis but no engineering. We built and launched the flagship product; founder now leads a small in-house team.',
      tags: ['AUTH', 'PAYMENTS', 'INFRA', 'MENTOR ARC'],
      link: 'https://www.splexxlabs.com',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.splexxlabs.com?w=1200&h=700',
    },
  ];

  const monoLabel: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    color: 'var(--ink-2)',
  };

  const tagPill: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)',
    padding: '0.35rem 0.85rem',
    border: '1.5px solid var(--ink)',
    borderRadius: '999px',
    backgroundColor: 'var(--paper)',
    color: 'var(--ink)',
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>
            PAGE · CASE STUDIES
          </div>

          <h1 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1.05', marginBottom: '1.5rem' }}>
            {t('caseStudies.hero.title')}
          </h1>

          <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.125rem, 1.4vw, 1.5rem)', lineHeight: '1.35', color: 'var(--ink-2)', maxWidth: '48rem' }}>
            {t('caseStudies.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
          <div className="flex flex-col" style={{ gap: '3.5rem' }}>
            {caseStudies.map((study, index) => {
              const imageLeft = index % 2 === 0;
              return (
                <div key={study.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">
                  {/* Image */}
                  <div className={`relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-md border-2 border-ink ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                    <Image
                      src={study.image}
                      alt={`${study.title} - ${study.site}`}
                      fill
                      unoptimized={study.image.startsWith('http')}
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                    <div style={{ ...monoLabel, marginBottom: '0.5rem' }}>
                      CASE · {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="flex flex-wrap items-center" style={{ gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', lineHeight: '1' }}>
                        {study.title}
                      </h2>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.75rem', padding: '0.25rem 0.75rem', border: '1.5px solid var(--ink)', borderRadius: '999px', backgroundColor: 'var(--accent)', color: '#fff' }}>
                        {study.label}
                      </span>
                    </div>

                    <div style={{ ...monoLabel, fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', color: 'var(--ink-3)', marginBottom: '0.85rem' }}>
                      {study.url} · {study.site}
                    </div>

                    <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.125rem, 1.3vw, 1.375rem)', lineHeight: '1.35', color: 'var(--ink-2)', marginBottom: '1.25rem' }}>
                      {study.description}
                    </p>

                    <div className="flex flex-wrap" style={{ gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {study.tags.map((tag) => (
                        <span key={tag} style={tagPill}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={study.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 'clamp(0.8rem, 0.95vw, 1rem)', color: 'var(--accent)', textDecoration: 'none' }}>
                      VISIT {study.url} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingBottom: '3rem' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: 'var(--paper)', borderRadius: '8px', padding: '1.5rem 2rem', border: '2px solid var(--ink)' }}>
            <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', lineHeight: '1.15', color: 'var(--ink)' }}>
              {t('caseStudies.cta.title')}
            </h2>
            <Link href="/contact" className="wf-btn" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', padding: '0.65rem 1.5rem', whiteSpace: 'nowrap' }}>
              {t('caseStudies.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
