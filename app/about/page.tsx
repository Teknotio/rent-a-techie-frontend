'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20 lg:py-24 text-center">
          <div className="wf-mono text-xs md:text-sm mb-4 md:mb-6">
            {t('about.pageTitle')}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
            {t('about.hero.title')}
          </h1>

          <p className="wf-body text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 md:mb-12">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full mt-12 md:mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-24">
          <div className="wf-mono text-xs md:text-sm mb-4 md:mb-6 text-center">
            {t('about.mission.title')}
          </div>

          <div className="wf-box p-8 md:p-12 lg:p-16 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
              {t('about.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full bg-paper-2 mt-12 md:mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-24">
          <div className="wf-mono text-xs md:text-sm mb-6 md:mb-10 text-center">
            {t('about.howWeWork.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="wf-box p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('about.howWeWork.noAgencies.title')}
              </h3>
              <p className="wf-body text-sm md:text-base">
                {t('about.howWeWork.noAgencies.description')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('about.howWeWork.noEquity.title')}
              </h3>
              <p className="wf-body text-sm md:text-base">
                {t('about.howWeWork.noEquity.description')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('about.howWeWork.noContracts.title')}
              </h3>
              <p className="wf-body text-sm md:text-base">
                {t('about.howWeWork.noContracts.description')}
              </p>
            </div>

            <div className="wf-box p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('about.howWeWork.noFluff.title')}
              </h3>
              <p className="wf-body text-sm md:text-base">
                {t('about.howWeWork.noFluff.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-12 md:mt-20 lg:mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 md:py-24">
          <div className="bg-accent p-6 md:p-8 lg:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-paper text-center md:text-left" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
              {t('about.cta.title')}
            </h2>
            <Link href="/contact" className="wf-btn bg-paper text-accent border-2 border-ink hover:bg-paper-2 text-base md:text-lg lg:text-xl px-6 md:px-8 py-3 md:py-4 whitespace-nowrap">
              {t('about.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
