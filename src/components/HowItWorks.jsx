import React from 'react'

export default function HowItWorks({ t }){
  return (
    <div className="page-content">
      <h2>{t.howTitle}</h2>
      <p>{t.howParagraph1}</p>
      <p>{t.howParagraph2}</p>
    </div>
  )
}
