import React from 'react'

export default function SupportMe({ t }){
  return (
    <div className="page-content">
      <h2>{t.supportTitle}</h2>
      <p>{t.supportParagraph1}</p>
      <p>{t.supportParagraph2}</p>
    </div>
  )
}
