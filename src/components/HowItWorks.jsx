import React from 'react'

export default function HowItWorks({ t }){
  return (
    <section className="page-content how-page">
      <div className="how-hero">
        <p className="how-kicker">{t.howKicker}</p>
        <h2>{t.howTitle}</h2>
        <p>{t.howParagraph1}</p>
        <p>{t.howParagraph2}</p>
      </div>

      <div className="how-grid">
        <div className="how-card">
          <h3>{t.howVisualTitle}</h3>
          <p>{t.howVisualText}</p>
        </div>

        <div className="how-card how-list-card">
          <h3>{t.howTipsTitle}</h3>
          <ul>
            <li>{t.howTip1}</li>
            <li>{t.howTip2}</li>
            <li>{t.howTip3}</li>
          </ul>
        </div>
      </div>

      {(t.howDetails1 || t.howDetails2) && (
        <div className="how-details">
          {t.howDetails1 && <p>{t.howDetails1}</p>}
          {t.howDetails2 && <p>{t.howDetails2}</p>}
        </div>
      )}
    </section>
  )
}
