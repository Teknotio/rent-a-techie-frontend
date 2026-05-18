'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SLOTS = ['09:00', '10:30', '13:00', '15:30', '17:00'];
const CALL_LINK = 'https://meet.google.com/rentatechie-intro';
const OUR_EMAIL = 'hello@rentatechie.com';

function toLocalIso(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getCurrentWeekDays() {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);
  const labels = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  return labels.map((dow, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { dow, date: d.getDate(), iso: toLocalIso(d), full: d };
  });
}

const BOOKINGS_KEY = 'rt_bookings';
const BOOKINGS_EVENT = 'rt_bookings_update';

function loadBookings(): Record<string, string[]> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveBooking(iso: string, slot: string) {
  const existing = loadBookings();
  const list = existing[iso] || [];
  if (!list.includes(slot)) list.push(slot);
  existing[iso] = list;
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(existing));
  window.dispatchEvent(new Event(BOOKINGS_EVENT));
}

function subscribeBookings(cb: () => void) {
  const handler = (e: StorageEvent | Event) => {
    if (e instanceof StorageEvent && e.key !== BOOKINGS_KEY) return;
    cb();
  };
  window.addEventListener('storage', handler);
  window.addEventListener(BOOKINGS_EVENT, handler);
  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(BOOKINGS_EVENT, handler);
  };
}

const getBookingsSnapshot = () =>
  typeof window === 'undefined' ? '{}' : localStorage.getItem(BOOKINGS_KEY) || '{}';
const getServerSnapshot = () => '{}';

function buildIcs({ iso, slot, name, email, idea }: { iso: string; slot: string; name: string; email: string; idea: string }) {
  const [h, m] = slot.split(':').map(Number);
  const start = new Date(iso + 'T00:00:00');
  start.setHours(h, m, 0, 0);
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 30);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const uid = `${Date.now()}-${name.replace(/\s/g, '')}@rentatechie.com`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rent a Techie//Booking//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    'SUMMARY:Rent a Techie · 30-min founder fit call',
    `DESCRIPTION:Idea: ${idea}\\nCall link: ${CALL_LINK}`,
    `LOCATION:${CALL_LINK}`,
    `ORGANIZER;CN=Rent a Techie:mailto:${OUR_EMAIL}`,
    `ATTENDEE;CN=${name};RSVP=TRUE:mailto:${email}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function slotDateTime(iso: string, slot: string) {
  const [h, m] = slot.split(':').map(Number);
  const d = new Date(iso + 'T00:00:00');
  d.setHours(h, m, 0, 0);
  return d;
}

export default function Contact() {
  const { t } = useLanguage();
  const week = useMemo(() => getCurrentWeekDays(), []);
  const [now, setNow] = useState<Date>(() => new Date());

  // Tick the clock every minute so days/slots auto-expire while the page is open
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const isSlotPast = (iso: string, slot: string) => slotDateTime(iso, slot) <= now;
  const isDayFullyPast = (iso: string) => SLOTS.every((s) => isSlotPast(iso, s));

  const bookingsJson = useSyncExternalStore(subscribeBookings, getBookingsSnapshot, getServerSnapshot);
  const bookings = useMemo<Record<string, string[]>>(() => {
    try { return JSON.parse(bookingsJson); } catch { return {}; }
  }, [bookingsJson]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [confirmed, setConfirmed] = useState<{ iso: string; slot: string } | null>(null);

  // Pick first available (not past + not fully booked) day on load
  const firstAvailableIdx = useMemo(() => {
    const idx = week.findIndex((d) => !isDayFullyPast(d.iso));
    return idx === -1 ? 0 : idx;
  }, [week]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selectedDayIdx, setSelectedDayIdx] = useState(firstAvailableIdx);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const selectedDay = week[selectedDayIdx];
  const bookedForDay = bookings[selectedDay.iso] || [];
  const dayFullyBooked = SLOTS.every((s) => bookedForDay.includes(s) || isSlotPast(selectedDay.iso, s));

  const monoLabel: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    color: 'var(--ink-2)',
  };
  const monoSmall: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 'clamp(0.75rem, 0.85vw, 0.9rem)',
    color: 'var(--ink-2)',
  };

  const contactRows = [
    { label: 'BOOK A CALL', value: 'rentatechie.com/intro', sub: '30-min founder fit call', href: '/contact' },
    { label: 'EMAIL US', value: 'hello@rentatechie.com', sub: 'Pitch decks, founders, partners', href: 'mailto:hello@rentatechie.com' },
    { label: 'VISIT', value: 'rentatechie.com', sub: 'Browse case studies', href: '/case-studies' },
  ];

  const [submitting, setSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (!selectedSlot) { alert('Please pick a time slot.'); return; }
    if (!name.trim()) { alert('Please enter your name.'); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email.'); return; }
    if (!idea.trim()) { alert('Please describe your idea in one line.'); return; }
    if (bookedForDay.includes(selectedSlot)) { alert('That slot was just taken. Please pick another.'); return; }
    if (isSlotPast(selectedDay.iso, selectedSlot)) { alert('That slot has already passed. Please pick a future one.'); return; }

    setSubmitting(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ iso: selectedDay.iso, slot: selectedSlot, name, email, idea }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data?.error || 'Could not save your booking. Please try again.');
        setSubmitting(false);
        return;
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
      setSubmitting(false);
      return;
    }

    saveBooking(selectedDay.iso, selectedSlot);

    const ics = buildIcs({ iso: selectedDay.iso, slot: selectedSlot, name, email, idea });
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rent-a-techie-call.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const dateLabel = selectedDay.full.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    const mailto = `mailto:${OUR_EMAIL}?cc=${encodeURIComponent(email)}&subject=${encodeURIComponent('Rent a Techie · 30-min founder fit call')}&body=${encodeURIComponent(
      `Hi ${name},\n\nYour call is booked for ${dateLabel} at ${selectedSlot}.\n\nCall link: ${CALL_LINK}\n\nIdea: ${idea}\n\nWe'll see you then.\n— Rent a Techie`
    )}`;
    window.location.href = mailto;

    setConfirmed({ iso: selectedDay.iso, slot: selectedSlot });
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT */}
            <div className="flex flex-col">
              <div style={{ ...monoLabel, marginBottom: '1.5rem' }}>CONTACT</div>

              <h1 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05', marginBottom: '1.25rem' }}>
                {t('contact.hero.title')}
              </h1>

              <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(1.125rem, 1.3vw, 1.375rem)', lineHeight: '1.35', color: 'var(--ink-2)', maxWidth: '40rem', marginBottom: '2rem' }}>
                {t('contact.hero.subtitle')}
              </p>

              <div className="flex flex-col" style={{ gap: '0.75rem' }}>
                {contactRows.map((row) => (
                  <a key={row.label} href={row.href} className="wf-box flex items-center justify-between" style={{ padding: '1.25rem 1.5rem', textDecoration: 'none', color: 'inherit', gap: '1.5rem' }}>
                    <div style={{ ...monoSmall, flexShrink: 0, minWidth: '6rem' }}>{row.label}</div>
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.125rem, 1.4vw, 1.375rem)', lineHeight: '1.15', marginBottom: '0.15rem' }}>{row.value}</div>
                      <div style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', fontSize: 'clamp(0.95rem, 1vw, 1.0625rem)', color: 'var(--ink-2)' }}>{row.sub}</div>
                    </div>
                    <span style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — scheduling widget */}
            <div className="wf-box relative" style={{ padding: '1.75rem 1.75rem' }}>
              <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.5rem, 1.9vw, 2rem)', lineHeight: '1.1', marginBottom: '1rem' }}>Pick a time</h3>

              {/* Day pills */}
              <div className="grid grid-cols-5" style={{ gap: '0.5rem', marginBottom: '1.25rem' }}>
                {week.map((d, i) => {
                  const dayBookings = bookings[d.iso] || [];
                  const past = isDayFullyPast(d.iso);
                  const fullyBooked = SLOTS.every((s) => dayBookings.includes(s) || isSlotPast(d.iso, s));
                  const disabled = past || fullyBooked;
                  const active = i === selectedDayIdx;
                  return (
                    <button
                      key={d.iso}
                      type="button"
                      disabled={disabled}
                      onClick={() => { setSelectedDayIdx(i); setSelectedSlot(null); }}
                      className="text-center"
                      style={{
                        border: '1.5px solid var(--ink)',
                        borderRadius: '8px',
                        padding: '0.6rem 0.25rem',
                        backgroundColor: active ? 'var(--accent)' : disabled ? 'var(--paper-2)' : 'var(--paper)',
                        color: active ? '#fff' : disabled ? 'var(--ink-3)' : 'var(--ink)',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        opacity: disabled ? 0.5 : 1,
                        textDecoration: past ? 'line-through' : 'none',
                      }}
                    >
                      <div style={{ ...monoSmall, fontSize: '0.7rem', color: 'inherit', marginBottom: '0.15rem' }}>{d.dow}</div>
                      <div style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 'clamp(1.125rem, 1.3vw, 1.375rem)', lineHeight: '1' }}>{d.date}</div>
                    </button>
                  );
                })}
              </div>

              <div style={{ borderTop: '1px dashed var(--ink-3)', paddingTop: '1rem', marginBottom: '1rem' }}>
                <div style={{ ...monoSmall, marginBottom: '0.6rem' }}>
                  AVAILABLE SLOTS · {selectedDay.dow} {selectedDay.date}
                </div>
                {dayFullyBooked ? (
                  <p style={{ fontFamily: 'Caveat, cursive', fontStyle: 'italic', color: 'var(--ink-2)' }}>
                    Fully booked — please pick another day.
                  </p>
                ) : (
                  <div className="flex flex-wrap" style={{ gap: '0.4rem' }}>
                    {SLOTS.map((s) => {
                      const booked = bookedForDay.includes(s);
                      const past = isSlotPast(selectedDay.iso, s);
                      const disabled = booked || past;
                      const active = s === selectedSlot && !disabled;
                      return (
                        <button
                          key={s}
                          type="button"
                          disabled={disabled}
                          onClick={() => setSelectedSlot(s)}
                          style={{
                            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                            fontSize: '0.85rem',
                            padding: '0.35rem 0.75rem',
                            border: '1.5px solid var(--ink)',
                            borderRadius: '999px',
                            backgroundColor: active ? 'var(--accent)' : disabled ? 'var(--paper-2)' : 'var(--paper)',
                            color: active ? '#fff' : disabled ? 'var(--ink-3)' : 'var(--ink)',
                            cursor: disabled ? 'not-allowed' : 'pointer',
                            textDecoration: disabled ? 'line-through' : 'none',
                            opacity: disabled ? 0.6 : 1,
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div style={{ borderTop: '1px dashed var(--ink-3)', paddingTop: '1rem' }}>
                <div style={{ ...monoSmall, marginBottom: '0.5rem' }}>YOUR NAME</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Chen"
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--ink)', borderRadius: '8px', backgroundColor: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '1rem', outline: 'none' }}
                />

                <div style={{ ...monoSmall, marginBottom: '0.5rem' }}>EMAIL</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. maya@yourstartup.com"
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--ink)', borderRadius: '8px', backgroundColor: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '1rem', outline: 'none' }}
                />

                <div style={{ ...monoSmall, marginBottom: '0.5rem' }}>IDEA IN ONE LINE</div>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. AI co-pilot for tax accountants in DACH"
                  rows={3}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid var(--ink)', borderRadius: '8px', backgroundColor: 'var(--paper)', fontFamily: 'Caveat, cursive', fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '1.25rem', outline: 'none', resize: 'vertical' }}
                />

                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={!selectedSlot || dayFullyBooked || submitting}
                  className="w-full"
                  style={{
                    backgroundColor: !selectedSlot || dayFullyBooked || submitting ? 'var(--ink-3)' : 'var(--accent)',
                    color: '#fff',
                    border: '2px solid var(--ink)',
                    borderRadius: '999px',
                    padding: '0.85rem 1.5rem',
                    fontFamily: 'Caveat, cursive',
                    fontWeight: 700,
                    fontSize: 'clamp(1.125rem, 1.4vw, 1.5rem)',
                    cursor: !selectedSlot || dayFullyBooked || submitting ? 'not-allowed' : 'pointer',
                    boxShadow: '3px 3px 0 var(--ink)',
                  }}
                >
                  {submitting ? 'Booking...' : `Confirm ${selectedDay.dow} ${selectedDay.date} · ${selectedSlot || '—:—'} →`}
                </button>

                {confirmed && (
                  <p style={{ marginTop: '1rem', fontFamily: 'Caveat, cursive', fontStyle: 'italic', color: 'var(--accent)' }}>
                    Booked! Calendar invite downloaded. Check your email to confirm.
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
