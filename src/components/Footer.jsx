import React from 'react'

export default function Footer({ t }){


    return (
        <footer>
            <p>© {new Date().getFullYear()} RGBstereogram.com {t.footerCopyright}</p>

        </footer>
    )
}