import React from 'react'

export default function AboutProject({ t }){
  return (
    <div className="page-content">
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutParagraph1}</p>
      <p>{t.aboutParagraph2}</p>
    </div>
  )
}
