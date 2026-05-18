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
  closingNote: (d: string) => string;
};

const CONTENT: Record<'en' | 'de', Content> = {
  en: {
    pageTitle: 'Terms and Conditions',
    intro: 'Allgemeine Geschäftsbedingungen (AGB) — applicable to all B2B engagements between Rent a Techie GmbH (i.G.) and its clients.',
    sections: [
      {
        title: '1. Scope and applicability',
        body: (
          <p style={body}>
            These Terms and Conditions (“T&C”) govern all contracts between Rent a Techie GmbH (i.G.), registered in
            [Stadt], Germany (“Provider”), and the client (“Client”) for the provision of engineering, mentoring and
            related advisory services (“Services”). Deviating terms of the Client apply only if expressly accepted
            by the Provider in writing.
          </p>
        ),
      },
      {
        title: '2. Formation of contract',
        body: (
          <p style={body}>
            A contract is formed in writing once both parties sign a Statement of Work (SoW) or accept the Provider’s
            written quote, whichever comes first. Bookings made through the website (e.g. a 30-minute fit call) are
            non-binding and serve to scope a potential engagement.
          </p>
        ),
      },
      {
        title: '3. Services and cooperation',
        body: (
          <p style={body}>
            The Provider supplies senior engineers to deliver the deliverables described in the SoW.
            The Client agrees to cooperate in good faith, including providing timely access to systems, data and
            stakeholders required to perform the Services.
          </p>
        ),
      },
      {
        title: '4. Fees and payment',
        body: (
          <p style={body}>
            Fees are stated in the SoW. Unless otherwise agreed, invoices are due within 14 days of receipt, net,
            in EUR. Statutory VAT is added where applicable. Late payments accrue default interest under § 288 BGB.
          </p>
        ),
      },
      {
        title: '5. Intellectual property',
        body: (
          <p style={body}>
            Upon full payment, all code, configurations and deliverables created under an SoW are transferred to the
            Client (or licensed exclusively where transfer is not legally possible). The Provider retains the right to
            re-use general know-how, methods and reusable libraries developed independently of the engagement.
          </p>
        ),
      },
      {
        title: '6. Confidentiality',
        body: (
          <p style={body}>
            Each party shall keep confidential all non-public information disclosed by the other party and shall use
            it only for the purposes of performing the contract. The obligation continues for three (3) years after
            termination.
          </p>
        ),
      },
      {
        title: '7. Warranty and liability',
        body: (
          <p style={body}>
            The Provider warrants that the Services will be performed with the care customary in the industry.
            The Provider is liable without limitation for intent and gross negligence and for damages arising from
            injury to life, body or health. For other simple negligence, liability is limited to typical, foreseeable
            damages and capped at the fees paid under the affected SoW in the twelve (12) months preceding the event.
            Liability under the Product Liability Act (Produkthaftungsgesetz) is not affected.
          </p>
        ),
      },
      {
        title: '8. Term and termination',
        body: (
          <p style={body}>
            Each SoW runs for the period stated therein. Either party may terminate for cause (wichtigen Grund) at any
            time. Ordinary termination is possible with thirty (30) days’ written notice unless the SoW states
            otherwise.
          </p>
        ),
      },
      {
        title: '9. Data protection',
        body: (
          <p style={body}>
            The processing of personal data is governed by our{' '}
            <a href="/privacy" style={{ color: 'var(--accent)' }}>Privacy Policy</a>. Where the Provider processes
            personal data on behalf of the Client, the parties shall enter into a Data Processing Agreement under
            Art. 28 GDPR.
          </p>
        ),
      },
      {
        title: '10. Governing law and jurisdiction',
        body: (
          <p style={body}>
            These T&C are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on
            Contracts for the International Sale of Goods (CISG). Place of jurisdiction for all disputes arising from
            or in connection with these T&C is [Stadt], Germany, provided the Client is a merchant (Kaufmann), a legal
            entity under public law or a special fund under public law.
          </p>
        ),
      },
      {
        title: '11. Severability',
        body: (
          <p style={body}>
            Should any provision of these T&C be or become invalid, the validity of the remaining provisions remains
            unaffected. The invalid provision shall be replaced by a valid provision that comes closest to the
            economic intent of the original.
          </p>
        ),
      },
    ],
    closingNote: (d) =>
      `Last update: ${d}. This is a standard B2B AGB template — replace bracketed placeholders with your registered company details and have it reviewed by a qualified lawyer before going live.`,
  },
  de: {
    pageTitle: 'Allgemeine Geschäftsbedingungen',
    intro: 'Allgemeine Geschäftsbedingungen (AGB) — gültig für alle B2B-Geschäftsbeziehungen zwischen der Rent a Techie GmbH (i.G.) und ihren Kund*innen.',
    sections: [
      {
        title: '1. Geltungsbereich',
        body: (
          <p style={body}>
            Diese Allgemeinen Geschäftsbedingungen („AGB“) regeln alle Verträge zwischen der Rent a Techie GmbH (i.G.),
            mit Sitz in [Stadt], Deutschland („Anbieter“), und der Auftraggeberin („Kunde“) über die Erbringung von
            Engineering-, Mentoring- und damit verbundenen Beratungsleistungen („Leistungen“). Abweichende Bedingungen
            des Kunden gelten nur, soweit der Anbieter ihnen ausdrücklich schriftlich zustimmt.
          </p>
        ),
      },
      {
        title: '2. Vertragsschluss',
        body: (
          <p style={body}>
            Ein Vertrag kommt schriftlich zustande, sobald beide Parteien einen Leistungsumfang (Statement of Work, SoW)
            unterzeichnen oder das schriftliche Angebot des Anbieters annehmen, je nachdem, was zuerst eintritt.
            Buchungen über die Website (z. B. ein 30-minütiges Erstgespräch) sind unverbindlich und dienen der
            Vorabklärung einer möglichen Zusammenarbeit.
          </p>
        ),
      },
      {
        title: '3. Leistungen und Mitwirkung',
        body: (
          <p style={body}>
            Der Anbieter stellt erfahrene Senior-Engineers zur Erbringung der im SoW beschriebenen Leistungen zur
            Verfügung. Der Kunde verpflichtet sich, nach Treu und Glauben mitzuwirken und insbesondere rechtzeitig
            Zugang zu Systemen, Daten und Ansprechpersonen zu gewähren, die zur Leistungserbringung erforderlich sind.
          </p>
        ),
      },
      {
        title: '4. Vergütung und Zahlung',
        body: (
          <p style={body}>
            Die Vergütung ergibt sich aus dem SoW. Sofern nichts anderes vereinbart ist, sind Rechnungen innerhalb von
            14 Tagen ab Zugang ohne Abzug in EUR zu begleichen. Die gesetzliche Umsatzsteuer wird zusätzlich berechnet.
            Bei Zahlungsverzug fallen Verzugszinsen gemäß § 288 BGB an.
          </p>
        ),
      },
      {
        title: '5. Geistiges Eigentum',
        body: (
          <p style={body}>
            Mit vollständiger Zahlung gehen sämtliche im Rahmen eines SoW erstellten Codes, Konfigurationen und
            Arbeitsergebnisse auf den Kunden über (bzw. werden, soweit eine Übertragung rechtlich nicht möglich ist,
            exklusiv lizenziert). Der Anbieter behält sich das Recht vor, allgemein erworbenes Know-how, Methoden und
            unabhängig vom Auftrag entwickelte wiederverwendbare Bibliotheken weiter zu nutzen.
          </p>
        ),
      },
      {
        title: '6. Vertraulichkeit',
        body: (
          <p style={body}>
            Jede Partei verpflichtet sich, alle nicht-öffentlichen Informationen der anderen Partei vertraulich zu
            behandeln und ausschließlich zur Vertragsdurchführung zu verwenden. Die Verpflichtung gilt für drei (3)
            Jahre nach Vertragsende fort.
          </p>
        ),
      },
      {
        title: '7. Gewährleistung und Haftung',
        body: (
          <p style={body}>
            Der Anbieter sichert zu, die Leistungen mit der branchenüblichen Sorgfalt zu erbringen. Der Anbieter haftet
            unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit. Bei einfacher Fahrlässigkeit ist die Haftung auf typische, vorhersehbare
            Schäden beschränkt und auf die im betroffenen SoW in den letzten zwölf (12) Monaten gezahlte Vergütung
            begrenzt. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
          </p>
        ),
      },
      {
        title: '8. Laufzeit und Kündigung',
        body: (
          <p style={body}>
            Jedes SoW läuft für den darin genannten Zeitraum. Jede Partei kann den Vertrag jederzeit aus wichtigem
            Grund kündigen. Eine ordentliche Kündigung ist mit einer Frist von dreißig (30) Tagen in Schriftform
            möglich, sofern das SoW nichts anderes regelt.
          </p>
        ),
      },
      {
        title: '9. Datenschutz',
        body: (
          <p style={body}>
            Die Verarbeitung personenbezogener Daten richtet sich nach unserer{' '}
            <a href="/privacy" style={{ color: 'var(--accent)' }}>Datenschutzerklärung</a>. Verarbeitet der Anbieter
            personenbezogene Daten im Auftrag des Kunden, schließen die Parteien einen Auftragsverarbeitungsvertrag
            gemäß Art. 28 DSGVO.
          </p>
        ),
      },
      {
        title: '10. Anwendbares Recht und Gerichtsstand',
        body: (
          <p style={body}>
            Diese AGB unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
            Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist [Stadt], Deutschland,
            sofern der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein
            öffentlich-rechtliches Sondervermögen ist.
          </p>
        ),
      },
      {
        title: '11. Salvatorische Klausel',
        body: (
          <p style={body}>
            Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
            Bestimmungen davon unberührt. Die unwirksame Bestimmung wird durch eine wirksame Regelung ersetzt, die dem
            wirtschaftlichen Zweck der ursprünglichen Regelung am nächsten kommt.
          </p>
        ),
      },
    ],
    closingNote: (d) =>
      `Stand: ${d}. Dies ist eine Standardvorlage für B2B-AGB. Ersetzen Sie die Platzhalter in eckigen Klammern durch Ihre eingetragenen Firmenangaben und lassen Sie das Dokument vor Veröffentlichung von einer*einem qualifizierten Anwält*in prüfen.`,
  },
};

export default function TermsAndConditions() {
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

          <p style={{ ...body, marginTop: '2rem', fontStyle: 'italic', color: 'var(--ink-3)' }}>
            {c.closingNote(dateStr)}
          </p>
        </div>
      </section>
    </div>
  );
}
