'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col w-full">
      {/* Main Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 md:items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col">
              <div className="wf-mono text-xs md:text-sm mb-4 md:mb-6">
                {t('contact.pageTitle')}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                {t('contact.hero.title')}
              </h1>

              <p className="wf-body text-base md:text-lg lg:text-xl mb-8 md:mb-12">
                {t('contact.hero.subtitle')}
              </p>

              {/* Contact Options */}
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="wf-box p-4 md:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="wf-mono text-xs md:text-sm">BOOK A CALL</div>
                    <span className="text-accent">→</span>
                  </div>
                  <div className="wf-body text-sm md:text-base mb-1">
                    <strong>rentatechie.com/intro</strong>
                  </div>
                  <div className="wf-body text-xs md:text-sm text-ink-3 italic">
                    30-min founder fit call
                  </div>
                </div>

                <div className="wf-box p-4 md:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="wf-mono text-xs md:text-sm">EMAIL US</div>
                    <span className="text-accent">→</span>
                  </div>
                  <div className="wf-body text-sm md:text-base mb-1">
                    <strong>hello@rentatechie.com</strong>
                  </div>
                  <div className="wf-body text-xs md:text-sm text-ink-3 italic">
                    Pitch deck, founders, partners
                  </div>
                </div>

                <div className="wf-box p-4 md:p-5 lg:p-6">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="wf-mono text-xs md:text-sm">VISIT</div>
                    <span className="text-accent">→</span>
                  </div>
                  <div className="wf-body text-sm md:text-base mb-1">
                    <strong>rentatechie.com</strong>
                  </div>
                  <div className="wf-body text-xs md:text-sm text-ink-3 italic">
                    Browse case studies
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Scheduling Widget */}
            <div className="flex flex-col">
              <div className="wf-box p-5 md:p-6 lg:p-8 relative flex-1 flex flex-col">
                <div className="wf-mono text-xs md:text-sm mb-4 text-accent absolute top-3 md:top-4 right-4 md:right-6 italic transform rotate-2 hidden md:block">
                  ~ we don't actually care if you embed
                </div>

                <div className="wf-mono text-xs md:text-sm mb-3 md:mb-4">
                  SCHEDULING WIDGET · EMBED
                </div>

                <h3 className="text-2xl md:text-3xl mb-4 md:mb-6" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>
                  Pick a time
                </h3>

                {/* Mock calendar widget */}
                <div className="border-t border-ink-3 pt-4 md:pt-6 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-5 gap-1 md:gap-2 mb-6 md:mb-8">
                    <div className="wf-box p-2 md:p-3 text-center">
                      <div className="wf-mono text-xs mb-1">MON</div>
                      <div className="text-lg md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>12</div>
                    </div>
                    <div className="wf-box p-2 md:p-3 text-center">
                      <div className="wf-mono text-xs mb-1">TUE</div>
                      <div className="text-lg md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>13</div>
                    </div>
                    <div className="wf-box p-2 md:p-3 text-center">
                      <div className="wf-mono text-xs mb-1">WED</div>
                      <div className="text-lg md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>14</div>
                    </div>
                    <div className="wf-box p-2 md:p-3 text-center">
                      <div className="wf-mono text-xs mb-1">THU</div>
                      <div className="text-lg md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>15</div>
                    </div>
                    <div className="wf-box p-2 md:p-3 text-center">
                      <div className="wf-mono text-xs mb-1">FRI</div>
                      <div className="text-lg md:text-xl" style={{ fontFamily: 'Caveat, cursive', fontWeight: 700 }}>16</div>
                    </div>
                  </div>

                  <div className="border-t border-dotted border-ink-3 pt-4 md:pt-6 mb-6 md:mb-8">
                    <div className="wf-mono text-xs mb-3 md:mb-4">AVAILABLE SLOTS · WED 14</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="wf-pill text-xs md:text-sm">09:00</span>
                      <span className="wf-pill text-xs md:text-sm">10:30</span>
                      <span className="wf-pill wf-pill-accent text-xs md:text-sm">13:00</span>
                      <span className="wf-pill text-xs md:text-sm">15:30</span>
                      <span className="wf-pill text-xs md:text-sm">17:00</span>
                    </div>
                  </div>

                  <div className="border-t border-dotted border-ink-3 pt-4 md:pt-6 mb-6 md:mb-8">
                    <div className="wf-mono text-xs mb-3">YOUR NAME</div>
                    <input
                      type="text"
                      placeholder="e.g. Maya Chen"
                      className="w-full px-3 md:px-4 py-3 md:py-4 border-2 border-ink rounded-lg wf-body text-sm md:text-base bg-paper focus:outline-none focus:ring-2 focus:ring-accent mb-6 md:mb-8"
                    />

                    <div className="wf-mono text-xs mb-3">IDEA IN ONE LINE</div>
                    <input
                      type="text"
                      placeholder="e.g. AI co-pilot for tax accountants in DACH"
                      className="w-full px-3 md:px-4 py-3 md:py-4 border-2 border-ink rounded-lg wf-body text-sm md:text-base bg-paper focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <button className="w-full bg-accent text-paper px-4 md:px-6 py-3 md:py-4 rounded-lg wf-body text-sm md:text-base font-bold hover:opacity-90 mt-auto">
                    Confirm Wed · 13:00 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
