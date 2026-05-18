'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-24 md:py-32 lg:py-40">
          <div className="wf-mono text-xs md:text-sm mb-4 md:mb-6">
            {t('howItWorks.pageTitle')}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
            {t('howItWorks.hero.title')}
          </h1>

          <p className="wf-body text-lg md:text-xl max-w-2xl">
            {t('howItWorks.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Four Steps Section */}
      <section className="w-full border-t border-b border-ink relative mt-24 md:mt-32 lg:mt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
            {/* Step 1 */}
            <div className="px-0 md:px-6 lg:px-8 md:border-r md:border-dotted md:border-ink-3">
              <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4">01</div>
              <h3 className="text-4xl md:text-5xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.steps.match.title')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent mb-4 md:mb-6">{t('howItWorks.steps.match.time')}</div>
              <p className="wf-body text-sm md:text-base">
                {t('howItWorks.steps.match.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="px-0 md:px-6 lg:px-8 md:border-r md:border-dotted md:border-ink-3">
              <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4">02</div>
              <h3 className="text-4xl md:text-5xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.steps.build.title')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent mb-4 md:mb-6">{t('howItWorks.steps.build.time')}</div>
              <p className="wf-body text-sm md:text-base">
                {t('howItWorks.steps.build.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="px-0 md:px-6 lg:px-8 md:border-r md:border-dotted md:border-ink-3">
              <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4">03</div>
              <h3 className="text-4xl md:text-5xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.steps.mentor.title')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent mb-4 md:mb-6">{t('howItWorks.steps.mentor.time')}</div>
              <p className="wf-body text-sm md:text-base">
                {t('howItWorks.steps.mentor.description')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="px-0 md:px-6 lg:px-8">
              <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4">04</div>
              <h3 className="text-4xl md:text-5xl mb-3 md:mb-4" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.steps.launch.title')}
              </h3>
              <div className="wf-mono text-xs md:text-sm text-accent mb-4 md:mb-6">{t('howItWorks.steps.launch.time')}</div>
              <p className="wf-body text-sm md:text-base">
                {t('howItWorks.steps.launch.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's in every engagement */}
      <section className="w-full mt-24 md:mt-32 lg:mt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-24 md:py-32 lg:py-40">
          <div className="wf-mono text-xs md:text-sm mb-6 md:mb-8">
            {t('howItWorks.engagement.title')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="wf-box p-5 md:p-6">
              <h3 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.engagement.item1.title')}
              </h3>
              <p className="wf-body text-sm italic">
                {t('howItWorks.engagement.item1.description')}
              </p>
            </div>

            <div className="wf-box p-5 md:p-6">
              <h3 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.engagement.item2.title')}
              </h3>
              <p className="wf-body text-sm italic">
                {t('howItWorks.engagement.item2.description')}
              </p>
            </div>

            <div className="wf-box p-5 md:p-6">
              <h3 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.engagement.item3.title')}
              </h3>
              <p className="wf-body text-sm italic">
                {t('howItWorks.engagement.item3.description')}
              </p>
            </div>

            <div className="wf-box p-5 md:p-6">
              <h3 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.engagement.item4.title')}
              </h3>
              <p className="wf-body text-sm italic">
                {t('howItWorks.engagement.item4.description')}
              </p>
            </div>

            <div className="wf-box p-5 md:p-6">
              <h3 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('howItWorks.engagement.item5.title')}
              </h3>
              <p className="wf-body text-sm italic">
                {t('howItWorks.engagement.item5.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-week sprint timeline */}
      <section className="w-full bg-paper-2 mt-24 md:mt-32 lg:mt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-24 md:py-32 lg:py-40">
          <div className="wf-mono text-xs md:text-sm mb-6 md:mb-8">
            {t('howItWorks.sprint.title')}
          </div>

          <div className="wf-box p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6 text-center border-b border-ink-3 pb-4 md:pb-6">
              <div>
                <div className="wf-mono text-xs md:text-sm mb-2">W1</div>
                <h4 className="text-base md:text-lg lg:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('howItWorks.sprint.w1')}
                </h4>
              </div>
              <div>
                <div className="wf-mono text-xs md:text-sm mb-2">W2</div>
                <h4 className="text-base md:text-lg lg:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('howItWorks.sprint.w2')}
                </h4>
              </div>
              <div>
                <div className="wf-mono text-xs md:text-sm mb-2">W3</div>
                <h4 className="text-base md:text-lg lg:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('howItWorks.sprint.w3')}
                </h4>
              </div>
              <div>
                <div className="wf-mono text-xs md:text-sm mb-2">W4</div>
                <h4 className="text-base md:text-lg lg:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('howItWorks.sprint.w4')}
                </h4>
              </div>
              <div>
                <div className="wf-mono text-xs md:text-sm mb-2">W5</div>
                <h4 className="text-base md:text-lg lg:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('howItWorks.sprint.w5')}
                </h4>
              </div>
              <div>
                <div className="wf-mono text-xs md:text-sm mb-2">W6</div>
                <h4 className="text-base md:text-lg lg:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  {t('howItWorks.sprint.w6')}
                </h4>
              </div>
            </div>
            <p className="wf-body text-sm md:text-base text-center italic">
              {t('howItWorks.sprint.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-24 md:mt-32 lg:mt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-24 md:py-32 lg:py-40">
          <div className="bg-accent p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-paper text-center md:text-left" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
              {t('howItWorks.cta.title')}
            </h2>
            <Link href="/contact" className="wf-btn bg-paper text-accent border-2 border-ink hover:bg-paper-2 text-lg md:text-xl px-8 py-4 whitespace-nowrap">
              {t('howItWorks.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
