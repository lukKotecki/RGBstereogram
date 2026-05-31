import React from 'react'
import { languageNames } from '../i18n'

export default function Header({ currentPage, setPage, language, setLanguage, t }){

    const [mobileOpen, setMobileOpen] = React.useState(false);

    let red = {color:'red', textShadow:'0 0 3px green'}
    let green = {color:'green', textShadow:'0 0 3px blue'}
    let blue = {color:'blue', textShadow:'0 0 3px red'}

    const menu = [
      { key: 'home', label: t.navHome },
      { key: 'how', label: t.navHow },
      { key: 'support', label: t.navSupport },
      { key: 'about', label: t.navAbout }
    ];

    const handleNavClick = (key) => {
      setPage(key);
      setMobileOpen(false);
    };

    return (
        <header>
            <div className='language-switcher'>
              <label htmlFor='language-selector'>{t.languageLabel}</label>
              <select
                id='language-selector'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {Object.entries(languageNames).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <h1><span style={red}>R</span>
                <span style={green}>G</span>
                <span style={blue}>B</span>stereogram
            </h1>
            <button
              className="hamburger"
              aria-label={t.toggleMenu}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              &#9776;
            </button>
            <nav className={mobileOpen ? 'menu-container open' : 'menu-container'}>
              <ul className="header-menu">
                {menu.map(item => (
                  <li key={item.key} className={currentPage === item.key ? 'active' : ''}>
                    <button type="button" onClick={() => handleNavClick(item.key)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
        </header>
    )
}