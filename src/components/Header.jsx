import React from 'react'

export default function Header({ currentPage, setPage }){

    const [mobileOpen, setMobileOpen] = React.useState(false);

    let red = {color:'red', textShadow:'0 0 3px green'}
    let green = {color:'green', textShadow:'0 0 3px blue'}
    let blue = {color:'blue', textShadow:'0 0 3px red'}

    const menu = [
      { key: 'home', label: 'Home' },
      { key: 'how', label: 'How it works' },
      { key: 'support', label: 'Support me' },
      { key: 'about', label: 'About the project' }
    ];

    const handleNavClick = (key) => {
      setPage(key);
      setMobileOpen(false);
    };

    return (
        <header>
            <h1><span style={red}>R</span>
                <span style={green}>G</span>
                <span style={blue}>B</span>stereoGram.com
            </h1>
            <button
              className="hamburger"
              aria-label="Toggle menu"
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