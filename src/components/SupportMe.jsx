import React from 'react'

export default function SupportMe({ t }){
  return (
    <section className="page-content support-page">
      <div className="support-hero">
        <p className="support-kicker">{t.supportKicker}</p>
        <h2>{t.supportTitle}</h2>
        <p>{t.supportParagraph1}</p>
        <p>{t.supportParagraph2}</p>
      </div>

      <div className="support-grid">
        <div className="support-card">
          <h3>{t.supportCardTitle}</h3>
          <p>{t.supportCardText}</p>
          <a
            className="support-link"
            href="https://paypal.me/lukkotecki"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.supportButtonLabel}
          </a>
          <p className="support-direct-link">paypal.me/lukkotecki</p>
        </div>

        <div className="support-card support-list-card">
          <h3>{t.supportImpactTitle}</h3>
          <ul>
            <li>{t.supportImpactPoint1}</li>
            <li>{t.supportImpactPoint2}</li>
            <li>{t.supportImpactPoint3}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
