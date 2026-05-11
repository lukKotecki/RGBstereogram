export const SUPPORTED_LANGUAGES = ['en', 'pl', 'de', 'es']

export const translations = {
  en: {
    navHome: 'Home',
    navHow: 'How it works',
    navSupport: 'Support me',
    navAbout: 'About the project',
    languageLabel: 'Language',
    toggleMenu: 'Toggle menu',
    uploadFile: 'Upload file',
    red: 'Red',
    green: 'Green',
    blue: 'Blue',
    alpha: 'Alpha',
    width: 'Width',
    height: 'Height',
    chunkWidth: 'Chunk width',
    chunkHeight: 'Chunk height',
    downloadImage: 'Download\nImage',
    howTitle: 'How It Works',
    howParagraph1:
      'This tool combines three input images into a single RGB stereogram by processing the pixel data and shifting color channels according to user-provided values. Upload images, adjust channel multipliers, and download your generated stereogram.',
    howParagraph2:
      'The algorithm cycles through the raster scan of the canvas, dividing it into chunks, and alternates between source images to build a composite where each color (red, green, blue) is derived from a different picture.',
    supportTitle: 'Support Me',
    supportParagraph1:
      'If you enjoy this project and would like to help keep it online, you can support me via donations, sharing the site with friends, or contributing code on GitHub.',
    supportParagraph2:
      'All funds go toward hosting costs and future feature development. Thank you for your support!',
    aboutTitle: 'About the Project',
    aboutParagraph1:
      'RGBstereogram is a small web application built with React and Vite that allows users to merge three images into a colorful stereogram effect.',
    aboutParagraph2:
      'The source code is open-source and available on GitHub. Contributions, bug reports, and feature requests are welcome.',
    footerCopyright: 'All rights reserved.'
  },
  pl: {
    navHome: 'Strona glowna',
    navHow: 'Jak to dziala',
    navSupport: 'Wesprzyj mnie',
    navAbout: 'O projekcie',
    languageLabel: 'Jezyk',
    toggleMenu: 'Przelacz menu',
    uploadFile: 'Wgraj plik',
    red: 'Czerwony',
    green: 'Zielony',
    blue: 'Niebieski',
    alpha: 'Alfa',
    width: 'Szerokosc',
    height: 'Wysokosc',
    chunkWidth: 'Szerokosc bloku',
    chunkHeight: 'Wysokosc bloku',
    downloadImage: 'Pobierz\nObraz',
    howTitle: 'Jak To Dziala',
    howParagraph1:
      'To narzedzie laczy trzy obrazy wejsciowe w jeden stereogram RGB, przetwarzajac dane pikseli i przesuwajac kanaly kolorow zgodnie z wartosciami podanymi przez uzytkownika. Wgraj obrazy, ustaw mnozniki kanalow i pobierz wygenerowany stereogram.',
    howParagraph2:
      'Algorytm przechodzi przez raster canvasu, dzieli go na bloki i naprzemiennie korzysta z obrazow zrodlowych, tworzac kompozycje, w ktorej kazdy kolor (czerwony, zielony, niebieski) pochodzi z innego obrazu.',
    supportTitle: 'Wesprzyj Mnie',
    supportParagraph1:
      'Jesli podoba Ci sie ten projekt i chcesz pomoc utrzymac go online, mozesz wesprzec mnie dotacja, udostepnieniem strony znajomym albo wniesieniem kodu na GitHub.',
    supportParagraph2:
      'Wszystkie srodki trafiaja na koszty hostingu i rozwoj kolejnych funkcji. Dziekuje za wsparcie!',
    aboutTitle: 'O Projekcie',
    aboutParagraph1:
      'RGBstereogram to mala aplikacja webowa zbudowana w React i Vite, ktora pozwala laczyc trzy obrazy w kolorowy efekt stereogramu.',
    aboutParagraph2:
      'Kod zrodlowy jest open-source i dostepny na GitHub. Wklady, zgloszenia bledow i propozycje funkcji sa mile widziane.',
    footerCopyright: 'Wszelkie prawa zastrzezone.'
  },
  de: {
    navHome: 'Startseite',
    navHow: 'Wie es funktioniert',
    navSupport: 'Unterstuetze mich',
    navAbout: 'Ueber das Projekt',
    languageLabel: 'Sprache',
    toggleMenu: 'Menue umschalten',
    uploadFile: 'Datei hochladen',
    red: 'Rot',
    green: 'Gruen',
    blue: 'Blau',
    alpha: 'Alpha',
    width: 'Breite',
    height: 'Hoehe',
    chunkWidth: 'Blockbreite',
    chunkHeight: 'Blockhoehe',
    downloadImage: 'Bild\nHerunterladen',
    howTitle: 'Wie Es Funktioniert',
    howParagraph1:
      'Dieses Tool kombiniert drei Eingabebilder zu einem RGB-Stereogramm, indem Pixeldaten verarbeitet und Farbkanale anhand von Benutzerwerten verschoben werden. Lade Bilder hoch, passe Kanal-Multiplikatoren an und lade dein generiertes Stereogramm herunter.',
    howParagraph2:
      'Der Algorithmus durchlaeuft den Raster-Scan der Zeichenflaeche, teilt sie in Bloecke und wechselt zwischen den Quellbildern, um eine Komposition zu erstellen, bei der jede Farbe (Rot, Gruen, Blau) aus einem anderen Bild stammt.',
    supportTitle: 'Unterstuetze Mich',
    supportParagraph1:
      'Wenn dir dieses Projekt gefaellt und du helfen moechtest, es online zu halten, kannst du mich mit Spenden, dem Teilen der Seite oder mit Code-Beitraegen auf GitHub unterstuetzen.',
    supportParagraph2:
      'Alle Mittel fliessen in Hosting-Kosten und die Entwicklung neuer Funktionen. Vielen Dank fuer deine Unterstuetzung!',
    aboutTitle: 'Ueber Das Projekt',
    aboutParagraph1:
      'RGBstereogram ist eine kleine Webanwendung mit React und Vite, mit der Benutzer drei Bilder zu einem farbigen Stereogramm-Effekt kombinieren koennen.',
    aboutParagraph2:
      'Der Quellcode ist Open Source und auf GitHub verfuegbar. Beitraege, Bug-Reports und Feature-Wuensche sind willkommen.',
    footerCopyright: 'Alle Rechte vorbehalten.'
  },
  es: {
    navHome: 'Inicio',
    navHow: 'Como funciona',
    navSupport: 'Apoyame',
    navAbout: 'Sobre el proyecto',
    languageLabel: 'Idioma',
    toggleMenu: 'Cambiar menu',
    uploadFile: 'Subir archivo',
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul',
    alpha: 'Alfa',
    width: 'Ancho',
    height: 'Alto',
    chunkWidth: 'Ancho de bloque',
    chunkHeight: 'Alto de bloque',
    downloadImage: 'Descargar\nImagen',
    howTitle: 'Como Funciona',
    howParagraph1:
      'Esta herramienta combina tres imagenes de entrada en un solo estereograma RGB procesando los datos de pixeles y desplazando canales de color segun valores definidos por el usuario. Sube imagenes, ajusta multiplicadores de canal y descarga tu estereograma generado.',
    howParagraph2:
      'El algoritmo recorre el raster del lienzo, lo divide en bloques y alterna entre imagenes de origen para crear una composicion donde cada color (rojo, verde, azul) proviene de una imagen diferente.',
    supportTitle: 'Apoyame',
    supportParagraph1:
      'Si te gusta este proyecto y quieres ayudar a mantenerlo en linea, puedes apoyarme con donaciones, compartiendo el sitio con amigos o contribuyendo codigo en GitHub.',
    supportParagraph2:
      'Todos los fondos se destinan a costos de hosting y al desarrollo de futuras funciones. Gracias por tu apoyo!',
    aboutTitle: 'Sobre El Proyecto',
    aboutParagraph1:
      'RGBstereogram es una pequena aplicacion web construida con React y Vite que permite combinar tres imagenes en un efecto de estereograma colorido.',
    aboutParagraph2:
      'El codigo fuente es open-source y esta disponible en GitHub. Se agradecen contribuciones, reportes de errores y solicitudes de nuevas funciones.',
    footerCopyright: 'Todos los derechos reservados.'
  }
}

export const languageNames = {
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
  es: 'Espanol'
}

export function detectInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem('siteLanguage')
    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage
    }

    const browserLanguage = (navigator.language || '').toLowerCase()
    if (browserLanguage.startsWith('pl')) {
      return 'pl'
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (timezone === 'Europe/Warsaw') {
      return 'pl'
    }
  } catch (error) {
    return 'en'
  }

  return 'en'
}

export async function detectLanguageFromIp(signal) {
  const endpoints = [
    {
      url: 'https://ipapi.co/json/',
      parseCountry: (data) => data?.country_code
    },
    {
      url: 'https://ipwho.is/',
      parseCountry: (data) => data?.country_code
    }
  ]

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint.url, { signal })
      if (!response.ok) {
        continue
      }

      const data = await response.json()
      const countryCode = (endpoint.parseCountry(data) || '').toLowerCase()
      if (countryCode === 'pl') {
        return 'pl'
      }
    } catch (error) {
      if (error?.name === 'AbortError') {
        return null
      }
    }
  }

  return null
}
