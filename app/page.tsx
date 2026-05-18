'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col w-full">
      {/* Dark Hero Section */}
      <section className="w-full min-h-[800px] md:min-h-[1080px] flex flex-col relative overflow-hidden bg-ink text-paper">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-14 pt-10 md:pt-14 pb-8 md:pb-12 flex-1 flex flex-col">

          {/* Middle group: HERO label + headline, vertically centered. RT circle stays in this row too */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Top Row: small RT circle pinned to the right */}
            <div className="flex items-center justify-end mb-6 md:mb-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-paper flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl text-paper" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>RT</span>
              </div>
            </div>

            {/* Big Headline */}
            <h1 className="text-left" style={{ fontSize: 'clamp(3rem, 12vw, 11rem)', lineHeight: '1.15', fontFamily: 'Caveat, cursive', fontWeight: 700, paddingBottom: '0.15em' }}>
              Ship
              <br />
              the <span className="text-accent">damn</span>
              <br />
              product.
            </h1>

            {/* Subtitle directly under the headline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-paper max-w-3xl" style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontWeight: 400, marginTop: '5rem' }}>
              {t('home.hero.subtitle')}
            </p>
          </div>

          {/* Bottom group: CTA + italic note pinned at the very bottom */}
          <div>
            <div className="flex justify-end">
              <div className="flex flex-col items-start lg:items-end gap-2 w-full lg:w-auto">
                <Link href="/contact" className="wf-btn text-base md:text-lg px-5 md:px-6 py-2.5 md:py-3 w-full lg:w-auto text-center">
                  {t('home.hero.cta')}
                </Link>
              </div>
            </div>

            {/* Italic accent note - rotated -45deg (slants up to the right) */}
            <p className="text-accent text-lg md:text-xl lg:text-2xl mt-4 md:mt-5 inline-block origin-bottom-left" style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontWeight: 400, transform: 'rotate(-2deg)' }}>
              ↳ type does the heavy lifting — no hero image
            </p>
          </div>
        </div>

      </section>

      {/* Horizontal scrolling text strip — between hero and gap section */}
      <div className="w-full" style={{ marginTop: '20px' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="border-t border-b border-ink bg-paper" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <div className="text-ink flex justify-between gap-4 md:gap-6 whitespace-nowrap overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
              <span>IDEA ON A NAPKIN</span>
              <span>· CURSOR DEMO</span>
              <span>· STUCK AT V0.5</span>
              <span>· NO CO-FOUNDER</span>
              <span>· INVESTOR WANTS INFRA</span>
              <span className="text-accent">· YOU</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Gap Section */}
      <section className="w-full" style={{ backgroundColor: '#fbf8f1' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <div className="text-ink-2" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', marginBottom: '1.5rem' }}>
            {t('home.gap.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            <div className="wf-box p-6 md:p-8 min-h-[180px] md:min-h-[200px] flex flex-col">
              <div className="text-ink-2" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(0.875rem, 1vw, 1rem)', marginBottom: '1.5rem' }}>01</div>
              <div style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1', marginBottom: '1.5rem' }}>
                {t('home.gap.stat1.number')}
              </div>
              <p className="text-ink-2" style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 1.6vw, 1.75rem)', lineHeight: '1.3' }}>
                {t('home.gap.stat1.text')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8 min-h-[180px] md:min-h-[200px] flex flex-col">
              <div className="text-ink-2" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(0.875rem, 1vw, 1rem)', marginBottom: '1.5rem' }}>02</div>
              <div style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1', marginBottom: '1.5rem' }}>
                {t('home.gap.stat2.number')}
              </div>
              <p className="text-ink-2" style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 1.6vw, 1.75rem)', lineHeight: '1.3' }}>
                {t('home.gap.stat2.text')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8 min-h-[180px] md:min-h-[200px] flex flex-col">
              <div className="text-ink-2" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(0.875rem, 1vw, 1rem)', marginBottom: '1.5rem' }}>03</div>
              <div style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1', marginBottom: '1.5rem' }}>
                {t('home.gap.stat3.number')}
              </div>
              <p className="text-ink-2" style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.25rem, 1.6vw, 1.75rem)', lineHeight: '1.3' }}>
                {t('home.gap.stat3.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Four Verbs */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
          <div className="text-ink-2" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', marginBottom: '1.5rem' }}>
            {t('home.howItWorks.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">01</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.match')}
              </h3>
              <div className="wf-mono text-xs md:text-sm" style={{ color: '#e66a3a' }}>{t('home.howItWorks.matchTime')}</div>
            </div>

            <div className="wf-box p-6 md:p-8" style={{ backgroundColor: 'var(--paper-2)' }}>
              <div className="wf-mono text-xs md:text-sm mb-2">02</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.build')}
              </h3>
              <div className="wf-mono text-xs md:text-sm" style={{ color: '#e66a3a' }}>{t('home.howItWorks.buildTime')}</div>
            </div>

            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">03</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.mentor')}
              </h3>
              <div className="wf-mono text-xs md:text-sm" style={{ color: '#e66a3a' }}>{t('home.howItWorks.mentorTime')}</div>
            </div>

            <div className="wf-box p-6 md:p-8" style={{ backgroundColor: 'var(--paper-2)' }}>
              <div className="wf-mono text-xs md:text-sm mb-2">04</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.launch')}
              </h3>
              <div className="wf-mono text-xs md:text-sm" style={{ color: '#e66a3a' }}>{t('home.howItWorks.launchTime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Already Shipped */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="text-ink-2" style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(1rem, 1.1vw, 1.2rem)', marginBottom: '1.5rem' }}>
            {t('home.shipped.title')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Featured - Trovara (image top, content bottom) */}
            <a href="https://trovara.io" target="_blank" rel="noopener noreferrer" className="wf-box overflow-hidden flex flex-col transition-transform hover:-translate-y-1" style={{ padding: 0, textDecoration: 'none', color: 'inherit' }}>
              <div className="relative w-full overflow-hidden" style={{ height: 'clamp(300px, 35vw, 500px)' }}>
                <Image
                  src="https://s0.wp.com/mshots/v1/https%3A%2F%2Ftrovara.io?w=1200&h=700"
                  alt="Trovara - Real estate property search platform"
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--ink-2)', marginBottom: '0.75rem' }}>
                  {t('common.featured')} · {t('common.live')}
                </div>
                <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', marginBottom: '0.5rem' }}>
                  {t('home.shipped.trovara.name')}
                </h3>
                <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', lineHeight: '1.3', color: 'var(--ink-2)' }}>
                  {t('home.shipped.trovara.link')}
                </p>
              </div>
            </a>

            {/* Tuneyverse and Splexx Labs (horizontal: image left, content right) */}
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              <a href="https://www.tuneyverse.com" target="_blank" rel="noopener noreferrer" className="wf-box overflow-hidden flex flex-row flex-1 transition-transform hover:-translate-y-1" style={{ padding: 0, textDecoration: 'none', color: 'inherit' }}>
                <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 'clamp(180px, 70%, 320px)' }}>
                  <Image
                    src="/tuneyverse.png"
                    alt="Tuneyverse - Creative platform for modern artists"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 30vw, 25vw"
                  />
                </div>
                <div className="flex-1" style={{ padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)', marginBottom: '0.25rem' }}>
                    {t('home.shipped.tuneyverse.name')}
                  </h3>
                  <p style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.7rem', color: 'var(--ink-2)', marginBottom: '0.5rem' }}>
                    {t('home.shipped.tuneyverse.subtitle')}
                  </p>
                  <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1.1vw, 1.125rem)', lineHeight: '1.3', color: 'var(--ink-2)' }}>
                    {t('home.shipped.tuneyverse.description')}
                  </p>
                </div>
              </a>

              <a href="https://www.splexxlabs.com" target="_blank" rel="noopener noreferrer" className="wf-box overflow-hidden flex flex-row flex-1 transition-transform hover:-translate-y-1" style={{ padding: 0, textDecoration: 'none', color: 'inherit' }}>
                <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 'clamp(180px, 70%, 320px)' }}>
                  <Image
                    src="https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.splexxlabs.com?w=800&h=600"
                    alt="Splexx Labs - Crypto & Blockchain Intelligence"
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 30vw, 25vw"
                  />
                </div>
                <div className="flex-1" style={{ padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)', marginBottom: '0.25rem' }}>
                    {t('home.shipped.splexx.name')}
                  </h3>
                  <p style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.7rem', color: 'var(--ink-2)', marginBottom: '0.5rem' }}>
                    {t('home.shipped.splexx.subtitle')}
                  </p>
                  <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1.1vw, 1.125rem)', lineHeight: '1.3', color: 'var(--ink-2)' }}>
                    {t('home.shipped.splexx.description')}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Dark Footer (contained to content width) */}
      <section className="w-full" style={{ marginTop: '6rem' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="bg-ink text-paper rounded-md" style={{ paddingTop: '4rem', paddingBottom: '4rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', color: 'var(--paper)', marginBottom: '1.5rem' }}>
                {t('home.whyUs.title')}
              </div>
              <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1', color: 'var(--paper)' }}>
                {t('home.whyUs.heading')}
              </h2>
            </div>

            <div className="space-y-4 md:space-y-5" style={{ borderLeft: '1px solid var(--paper)', paddingLeft: '3rem' }}>
              <div className="flex items-start gap-3 md:gap-4">
                <span style={{ color: 'var(--paper)', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)' }}>→</span>
                <p style={{ color: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)', lineHeight: '1.3' }}>{t('home.whyUs.benefit1')}</p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span style={{ color: 'var(--paper)', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)' }}>→</span>
                <p style={{ color: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)', lineHeight: '1.3' }}>{t('home.whyUs.benefit2')}</p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span style={{ color: 'var(--paper)', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)' }}>→</span>
                <p style={{ color: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)', lineHeight: '1.3' }}>{t('home.whyUs.benefit3')}</p>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <span style={{ color: 'var(--paper)', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)' }}>→</span>
                <p style={{ color: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)', lineHeight: '1.3' }}>{t('home.whyUs.benefit4')}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
