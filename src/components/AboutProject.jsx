import React from 'react'

export default function AboutProject({ t }){
  return (
    <section className="page-content about-page">
      <div className="about-hero">
        <p className="about-kicker">{t.aboutKicker}</p>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutParagraph1}</p>
        <p>{t.aboutParagraph2}</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>{t.aboutRepoTitle}</h3>
          <p>{t.aboutRepoText}</p>
          <a
            className="about-link"
            href="https://github.com/lukKotecki/RGBstereogram"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.aboutRepoButton}
          </a>
          <p className="about-direct-link">github.com/lukKotecki/RGBstereogram</p>
        </div>

        <div className="about-card about-list-card">
          <h3>{t.aboutHighlightsTitle}</h3>
          <ul>
            <li>{t.aboutHighlight1}</li>
            <li>{t.aboutHighlight2}</li>
            <li>{t.aboutHighlight3}</li>
          </ul>
        </div>
      </div>

      {(t.aboutParagraph3 || t.aboutParagraph4) && (
        <div className="about-details">
          {t.aboutParagraph3 && <p>{t.aboutParagraph3}</p>}
          {t.aboutParagraph4 && <p>{t.aboutParagraph4}</p>}
        </div>
      )}
    </section>
  )
}
