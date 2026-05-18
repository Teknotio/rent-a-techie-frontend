'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const heading: React.CSSProperties = {
  fontFamily: 'Caveat, cursive',
  fontWeight: 700,
  color: 'var(--ink)',
};

const body: React.CSSProperties = {
  fontFamily: 'Caveat, cursive',
  fontSize: 'clamp(1.0625rem, 1.15vw, 1.25rem)',
  lineHeight: '1.45',
  color: 'var(--ink-2)',
};

type Section = { title: string; body: React.ReactNode };
type Content = {
  pageTitle: string;
  intro: string;
  sections: Section[];
  rightsHeading: string;
  rights: string[];
  rightsFooter: React.ReactNode;
  closingNote: string;
  lastUpdate: (d: string) => string;
};

const CONTENT: Record<'en' | 'de', Content> = {
  en: {
    pageTitle: 'Privacy Policy',
    intro: 'Datenschutzerklärung — in line with the EU General Data Protection Regulation (GDPR / DSGVO), the German Federal Data Protection Act (BDSG) and the Telecommunications-Telemedia Data Protection Act (TTDSG).',
    sections: [
      {
        title: '1. Controller (Verantwortlicher)',
        body: (
          <>
            <p style={body}>
              The party responsible for the processing of personal data on this website (the “Controller” within the meaning
              of Art. 4 (7) GDPR) is:
            </p>
            <p style={{ ...body, marginTop: '0.75rem' }}>
              Rent a Techie GmbH (i.G.)<br />
              [Strasse und Hausnummer]<br />
              [PLZ Stadt], Deutschland<br />
              Email: <a href="mailto:hello@rentatechie.com" style={{ color: 'var(--accent)' }}>hello@rentatechie.com</a>
            </p>
          </>
        ),
      },
      {
        title: '2. Data we collect and process',
        body: (
          <>
            <p style={body}>
              <strong>a) When you visit this website.</strong> Our hosting provider automatically processes information
              your browser transmits (so-called server log files): IP address (anonymised where possible), date and time
              of the request, content of the request, HTTP status code, transferred data volume, referrer URL, browser
              and operating system. Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in stable, secure operation).
              The data is deleted after 14 days unless retention is legally required.
            </p>
            <p style={{ ...body, marginTop: '0.75rem' }}>
              <strong>b) When you book a call.</strong> When you submit the booking form (name, email, idea description,
              date and time slot) we process this data to schedule the call and to contact you. Legal basis: Art. 6 (1) (b)
              GDPR (pre-contractual measures at your request). The data is stored for as long as necessary to provide the
              requested service plus statutory retention periods.
            </p>
            <p style={{ ...body, marginTop: '0.75rem' }}>
              <strong>c) When you write to us.</strong> If you contact us by email, we process the data you provide to
              respond. Legal basis: Art. 6 (1) (b) and (f) GDPR.
            </p>
          </>
        ),
      },
      {
        title: '3. Cookies and local storage',
        body: (
          <p style={body}>
            This website uses only technically necessary cookies and browser local storage to remember language
            preference and to track tentative bookings on your device. No tracking, advertising or analytics cookies
            are set without your explicit consent. Legal basis for necessary storage: § 25 (2) Nr. 2 TTDSG.
          </p>
        ),
      },
      {
        title: '4. Recipients and processors',
        body: (
          <p style={body}>
            Where we use third-party services to provide this website (hosting, email delivery, calendar scheduling),
            those providers act as processors on our behalf (Art. 28 GDPR) under a Data Processing Agreement.
            Categories of recipients currently include our hosting provider and any service used to deliver
            confirmation emails. A full list is available on request.
          </p>
        ),
      },
      {
        title: '5. Transfers outside the EU/EEA',
        body: (
          <p style={body}>
            Where personal data is transferred to a country outside the EU/EEA we ensure an appropriate level of
            protection through one of the safeguards listed in Art. 46 GDPR, in particular the EU Standard
            Contractual Clauses.
          </p>
        ),
      },
    ],
    rightsHeading: '6. Your rights',
    rights: [
      'Information about the data we process (Art. 15)',
      'Rectification of inaccurate data (Art. 16)',
      'Erasure (Art. 17)',
      'Restriction of processing (Art. 18)',
      'Data portability (Art. 20)',
      'Objection to processing based on legitimate interest (Art. 21)',
      'Withdraw consent at any time with effect for the future (Art. 7 (3))',
      'Lodge a complaint with a supervisory authority (Art. 77) — the competent authority is the Datenschutzbeauftragte des Bundeslandes in which our company is based.',
    ],
    rightsFooter: (
      <>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:hello@rentatechie.com" style={{ color: 'var(--accent)' }}>hello@rentatechie.com</a>.
      </>
    ),
    closingNote:
      'Note: this document is a standard template aligned with German GDPR/DSGVO practice. Replace bracketed placeholders with your registered company details and have it reviewed by a qualified data-protection lawyer before going live.',
    lastUpdate: (d) => `Last update: ${d}.`,
  },
  de: {
    pageTitle: 'Datenschutzerklärung',
    intro: 'Diese Datenschutzerklärung steht im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) und dem Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG).',
    sections: [
      {
        title: '1. Verantwortlicher',
        body: (
          <>
            <p style={body}>
              Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website („Verantwortlicher“ im
              Sinne von Art. 4 Abs. 7 DSGVO) ist:
            </p>
            <p style={{ ...body, marginTop: '0.75rem' }}>
              Rent a Techie GmbH (i.G.)<br />
              [Strasse und Hausnummer]<br />
              [PLZ Stadt], Deutschland<br />
              E-Mail: <a href="mailto:hello@rentatechie.com" style={{ color: 'var(--accent)' }}>hello@rentatechie.com</a>
            </p>
          </>
        ),
      },
      {
        title: '2. Welche Daten wir erheben und verarbeiten',
        body: (
          <>
            <p style={body}>
              <strong>a) Beim Besuch der Website.</strong> Unser Hosting-Anbieter verarbeitet automatisch die von Ihrem
              Browser übermittelten Informationen (sogenannte Server-Logfiles): IP-Adresse (wo möglich anonymisiert),
              Datum und Uhrzeit der Anfrage, Inhalt der Anfrage, HTTP-Statuscode, übertragene Datenmenge,
              Referrer-URL, Browser und Betriebssystem. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einem stabilen und sicheren Betrieb). Die Daten werden nach 14 Tagen gelöscht, sofern keine
              gesetzliche Aufbewahrungspflicht besteht.
            </p>
            <p style={{ ...body, marginTop: '0.75rem' }}>
              <strong>b) Bei der Buchung eines Gesprächs.</strong> Wenn Sie das Buchungsformular absenden (Name, E-Mail,
              Kurzbeschreibung Ihrer Idee, Datum und Uhrzeit), verarbeiten wir diese Daten zur Terminierung des
              Gesprächs und zur Kontaktaufnahme mit Ihnen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen auf Ihre Anfrage). Die Daten werden so lange gespeichert, wie es zur Erbringung der gewünschten
              Leistung erforderlich ist, zuzüglich gesetzlicher Aufbewahrungsfristen.
            </p>
            <p style={{ ...body, marginTop: '0.75rem' }}>
              <strong>c) Bei Kontaktaufnahme per E-Mail.</strong> Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir
              die von Ihnen übermittelten Daten zur Beantwortung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
              und lit. f DSGVO.
            </p>
          </>
        ),
      },
      {
        title: '3. Cookies und lokaler Speicher',
        body: (
          <p style={body}>
            Diese Website verwendet ausschließlich technisch notwendige Cookies und den Browser-Local-Storage, um Ihre
            Spracheinstellung zu speichern und vorläufige Buchungen auf Ihrem Gerät zu vermerken. Es werden keine
            Tracking-, Werbe- oder Analyse-Cookies ohne Ihre ausdrückliche Einwilligung gesetzt. Rechtsgrundlage für
            die notwendige Speicherung: § 25 Abs. 2 Nr. 2 TTDSG.
          </p>
        ),
      },
      {
        title: '4. Empfänger und Auftragsverarbeiter',
        body: (
          <p style={body}>
            Soweit wir zur Bereitstellung dieser Website Dienste Dritter einsetzen (Hosting, E-Mail-Versand,
            Terminplanung), handeln diese Anbieter als Auftragsverarbeiter in unserem Auftrag (Art. 28 DSGVO) auf
            Grundlage eines Auftragsverarbeitungsvertrags. Empfängerkategorien umfassen aktuell unseren Hosting-Anbieter
            sowie ggf. einen Dienst zur Zustellung von Bestätigungs-E-Mails. Eine vollständige Liste stellen wir Ihnen
            auf Anfrage zur Verfügung.
          </p>
        ),
      },
      {
        title: '5. Übermittlung in Drittländer',
        body: (
          <p style={body}>
            Werden personenbezogene Daten in ein Land außerhalb der EU/des EWR übermittelt, stellen wir ein angemessenes
            Datenschutzniveau durch eine der in Art. 46 DSGVO genannten Garantien sicher, insbesondere durch die
            EU-Standardvertragsklauseln.
          </p>
        ),
      },
    ],
    rightsHeading: '6. Ihre Rechte',
    rights: [
      'Auskunft über die von uns verarbeiteten Daten (Art. 15)',
      'Berichtigung unrichtiger Daten (Art. 16)',
      'Löschung (Art. 17)',
      'Einschränkung der Verarbeitung (Art. 18)',
      'Datenübertragbarkeit (Art. 20)',
      'Widerspruch gegen eine auf berechtigtem Interesse gestützte Verarbeitung (Art. 21)',
      'Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3)',
      'Beschwerde bei einer Aufsichtsbehörde (Art. 77) — zuständig ist die*der Datenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.',
    ],
    rightsFooter: (
      <>
        Um eines dieser Rechte auszuüben, wenden Sie sich bitte an{' '}
        <a href="mailto:hello@rentatechie.com" style={{ color: 'var(--accent)' }}>hello@rentatechie.com</a>.
      </>
    ),
    closingNote:
      'Hinweis: Dieses Dokument ist eine Standardvorlage, die sich an der deutschen DSGVO-Praxis orientiert. Ersetzen Sie die Platzhalter in eckigen Klammern durch Ihre eingetragenen Firmenangaben und lassen Sie das Dokument vor Veröffentlichung von einer*einem qualifizierten Datenschutzanwält*in prüfen.',
    lastUpdate: (d) => `Stand: ${d}.`,
  },
};

export default function PrivacyPolicy() {
  const { locale } = useLanguage();
  const c = CONTENT[locale];
  const dateStr = new Date().toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="flex flex-col w-full">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-14" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
          <h1 style={{ ...heading, fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.05', marginBottom: '0.75rem' }}>
            {c.pageTitle}
          </h1>
          <p style={{ ...body, fontStyle: 'italic', marginBottom: '2.5rem' }}>{c.intro}</p>

          {c.sections.map((s) => (
            <div key={s.title}>
              <h2 style={{ ...heading, fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', marginTop: '2rem', marginBottom: '0.75rem' }}>
                {s.title}
              </h2>
              {s.body}
            </div>
          ))}

          <h2 style={{ ...heading, fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            {c.rightsHeading}
          </h2>
          <ul style={{ ...body, marginTop: '0.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            {c.rights.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p style={{ ...body, marginTop: '0.75rem' }}>{c.rightsFooter}</p>

          <h2 style={{ ...heading, fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            {locale === 'de' ? '7. Datensicherheit' : '7. Data security'}
          </h2>
          <p style={body}>
            {locale === 'de'
              ? 'Diese Website wird über HTTPS (TLS) ausgeliefert, um Daten während der Übertragung zu schützen. Wir treffen organisatorische und technische Maßnahmen, die dem Risiko angemessen sind (Art. 32 DSGVO).'
              : 'This site is delivered over HTTPS (TLS) to protect data in transit. We apply organisational and technical measures appropriate to the risk (Art. 32 GDPR).'}
          </p>

          <h2 style={{ ...heading, fontSize: 'clamp(1.5rem, 2.4vw, 2.25rem)', marginTop: '2rem', marginBottom: '0.75rem' }}>
            {locale === 'de' ? '8. Änderungen' : '8. Updates'}
          </h2>
          <p style={body}>
            {locale === 'de'
              ? 'Wir aktualisieren diese Erklärung, wenn sich unsere Verarbeitung ändert oder neue rechtliche Anforderungen entstehen. '
              : 'We may update this policy when our processing changes or to comply with new legal requirements. '}
            {c.lastUpdate(dateStr)}
          </p>

          <p style={{ ...body, marginTop: '2rem', fontStyle: 'italic', color: 'var(--ink-3)' }}>
            {c.closingNote}
          </p>
        </div>
      </section>
    </div>
  );
}
