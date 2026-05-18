'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col w-full">
      {/* Dark Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-between relative overflow-hidden bg-ink text-paper">
        <div className="w-full flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-14 py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-16 gap-6">
              <h1 className="text-left" style={{ fontSize: 'clamp(2.5rem, 10vw, 10rem)', lineHeight: '0.9', fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                Ship
                <br />
                the <span className="text-accent">damn</span>
                <br />
                product.
              </h1>

              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-paper flex items-center justify-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>RT</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-8 md:mb-12">
              <div className="flex-1 max-w-2xl">
                <p className="text-base md:text-lg lg:text-xl text-paper" style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontWeight: 400 }}>
                  {t('home.hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
                <Link href="/contact" className="wf-btn text-base md:text-xl px-6 md:px-8 py-3 md:py-4 w-full lg:w-auto text-center">
                  {t('home.hero.cta')}
                </Link>
                <p className="wf-mono text-xs text-ink-3">
                  {t('home.hero.ctaAlt')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Text - At Bottom */}
        <div className="w-full border-t border-b border-ink bg-paper py-3">
          <div className="max-w-7xl mx-auto">
            <div className="wf-mono text-xs text-ink flex gap-4 md:gap-6 whitespace-nowrap overflow-x-auto">
              <span>· IDEA ON A NAPKIN</span>
              <span>· CURSOR DEMO</span>
              <span>· STUCK AT V0.5</span>
              <span>· NO CO-FOUNDER</span>
              <span>· INVESTOR WANTS INFRA</span>
              <span className="text-accent">· YOU</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="wf-mono text-xs md:text-sm mb-6 md:mb-8">
            {t('home.gap.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">01</div>
              <div className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.gap.stat1.number')}
              </div>
              <p className="wf-body text-sm">
                {t('home.gap.stat1.text')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">02</div>
              <div className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.gap.stat2.number')}
              </div>
              <p className="wf-body text-sm">
                {t('home.gap.stat2.text')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">03</div>
              <div className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.gap.stat3.number')}
              </div>
              <p className="wf-body text-sm">
                {t('home.gap.stat3.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Four Verbs */}
      <section className="w-full bg-paper-2">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="wf-mono text-xs md:text-sm mb-6 md:mb-8">
            {t('home.howItWorks.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">01</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.match')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent">{t('home.howItWorks.matchTime')}</div>
            </div>

            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">02</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.build')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent">{t('home.howItWorks.buildTime')}</div>
            </div>

            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">03</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.mentor')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent">{t('home.howItWorks.mentorTime')}</div>
            </div>

            <div className="wf-box p-6 md:p-8">
              <div className="wf-mono text-xs md:text-sm mb-2">04</div>
              <h3 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.howItWorks.launch')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent">{t('home.howItWorks.launchTime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Already Shipped */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="wf-mono text-xs md:text-sm mb-6 md:mb-8">
            {t('home.shipped.title')}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Featured - Trovara */}
            <div className="wf-box p-0 overflow-hidden">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src="/trovara.png"
                  alt="Trovara - Real estate property search platform"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <span className="wf-pill wf-pill-accent text-xs md:text-sm">{t('common.featured')}</span>
                  <span className="wf-pill wf-pill-accent text-xs md:text-sm">{t('common.live')}</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('home.shipped.trovara.name')}
                </h3>
                <p className="wf-body text-sm mb-3">
                  {t('home.shipped.trovara.description')}
                </p>
                <Link href="https://trovara.io" className="wf-mono text-xs md:text-sm text-accent break-words">
                  {t('home.shipped.trovara.link')}
                </Link>
              </div>
            </div>

            {/* Tuneyverse and Splexx Labs */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="wf-box p-0 overflow-hidden">
                <div className="relative h-32 md:h-36 overflow-hidden">
                  <div className="absolute inset-0 w-[130%] h-full">
                    <Image
                      src="/tuneyverse.png"
                      alt="Tuneyverse - Creative platform for modern artists"
                      fill
                      className="object-cover object-left"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                    {t('home.shipped.tuneyverse.name')}
                  </h3>
                  <p className="wf-body text-sm mb-2">
                    {t('home.shipped.tuneyverse.subtitle')}
                  </p>
                  <p className="wf-body text-sm italic">
                    {t('home.shipped.tuneyverse.description')}
                  </p>
                </div>
              </div>

              <div className="wf-box p-0 overflow-hidden">
                <div className="relative h-32 md:h-36 overflow-hidden">
                  <div className="absolute inset-0 w-[130%] h-full">
                    <Image
                      src="/splexxlabs.png"
                      alt="Splexx Labs - Crypto & Blockchain Intelligence"
                      fill
                      className="object-cover object-left"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                    {t('home.shipped.splexx.name')}
                  </h3>
                  <p className="wf-body text-sm mb-2">
                    {t('home.shipped.splexx.subtitle')}
                  </p>
                  <p className="wf-body text-sm italic">
                    {t('home.shipped.splexx.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us - Dark Footer */}
      <section className="w-full bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">
            <div>
              <div className="wf-mono text-xs md:text-sm mb-4 md:mb-6">
                {t('home.whyUs.title')}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('home.whyUs.heading')}
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-paper text-sm md:text-base">→</span>
                <p className="text-paper text-sm md:text-base" style={{ fontFamily: 'Caveat, cursive' }}>{t('home.whyUs.benefit1')}</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-paper text-sm md:text-base">→</span>
                <p className="text-paper text-sm md:text-base" style={{ fontFamily: 'Caveat, cursive' }}>{t('home.whyUs.benefit2')}</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-paper text-sm md:text-base">→</span>
                <p className="text-paper text-sm md:text-base" style={{ fontFamily: 'Caveat, cursive' }}>{t('home.whyUs.benefit3')}</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-paper text-sm md:text-base">→</span>
                <p className="text-paper text-sm md:text-base" style={{ fontFamily: 'Caveat, cursive' }}>{t('home.whyUs.benefit4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
