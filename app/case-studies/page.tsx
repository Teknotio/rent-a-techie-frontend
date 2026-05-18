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
      image: '/trovara.png'
    },
    {
      id: 2,
      title: 'Tuneyverse',
      label: 'LIVE',
      url: 'TUNEYVERSE.COM',
      site: 'MUSIC PLATFORM',
      description: 'Solo non-technical founder. Senior engineer architected the platform end-to-end, set up scalable infra, and handed off a clean codebase.',
      tags: ['AUTH', 'PAYMENTS', 'INFRA', 'MENTOR ARC'],
      link: 'https://tuneyverse.com',
      image: '/tuneyverse.png'
    },
    {
      id: 3,
      title: 'Splexx Labs',
      label: 'LIVE',
      url: 'SPLEXXLABS.COM',
      site: 'STUDIO PRODUCT',
      description: 'A founder with a domain thesis but no engineering. We built and launched the flagship product; founder now leads a small in-house team.',
      tags: ['AUTH', 'PAYMENTS', 'INFRA', 'MENTOR ARC'],
      link: 'https://splexxlabs.com',
      image: '/splexxlabs.png'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-paper-2">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-24 lg:py-32 text-center">
          <div className="wf-mono text-xs md:text-sm mb-4 md:mb-6">
            {t('caseStudies.pageTitle')}
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
            {t('caseStudies.hero.title')}
          </h1>

          <p className="wf-body text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
            {t('caseStudies.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full mt-8 md:mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {index % 2 === 0 ? (
                  <>
                    {/* Image on left for odd cases */}
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg border-2 border-ink">
                      <Image
                        src={study.image}
                        alt={`${study.title} - ${study.site}`}
                        fill
                        className={`object-cover ${study.id === 1 ? 'object-center' : 'object-left'}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content on right */}
                    <div className="flex flex-col justify-center">
                      <div className="wf-mono text-xs md:text-sm mb-2 md:mb-3">
                        CASE : {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                          {study.title}
                        </h2>
                        <span className="wf-pill wf-pill-accent text-xs md:text-sm">{study.label}</span>
                      </div>

                      <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4 text-ink-3">
                        {study.url} · {study.site}
                      </div>

                      <p className="wf-body text-sm md:text-base mb-4 md:mb-6">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        {study.tags.map((tag, i) => (
                          <span key={i} className="wf-pill text-xs md:text-sm">{tag}</span>
                        ))}
                      </div>

                      <Link href={study.link} className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent text-paper rounded-lg wf-mono text-xs md:text-sm font-bold hover:opacity-90 transition-opacity">
                        VISIT {study.url} →
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content on left for even cases */}
                    <div className="flex flex-col justify-center md:order-1">
                      <div className="wf-mono text-xs md:text-sm mb-2 md:mb-3">
                        CASE : {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                          {study.title}
                        </h2>
                        <span className="wf-pill wf-pill-accent text-xs md:text-sm">{study.label}</span>
                      </div>

                      <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4 text-ink-3">
                        {study.url} · {study.site}
                      </div>

                      <p className="wf-body text-sm md:text-base mb-4 md:mb-6">
                        {study.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        {study.tags.map((tag, i) => (
                          <span key={i} className="wf-pill text-xs md:text-sm">{tag}</span>
                        ))}
                      </div>

                      <Link href={study.link} className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent text-paper rounded-lg wf-mono text-xs md:text-sm font-bold hover:opacity-90 transition-opacity">
                        VISIT {study.url} →
                      </Link>
                    </div>

                    {/* Image on right */}
                    <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg border-2 border-ink md:order-2">
                      <Image
                        src={study.image}
                        alt={`${study.title} - ${study.site}`}
                        fill
                        className={`object-cover ${study.id === 1 ? 'object-center' : 'object-left'}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="wf-box p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
              {t('caseStudies.cta.title')}
            </h2>
            <Link href="/contact" className="wf-btn text-base md:text-lg lg:text-xl px-6 md:px-8 py-3 md:py-4 whitespace-nowrap">
              {t('caseStudies.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
