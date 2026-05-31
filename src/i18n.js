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
    howKicker: 'See the color illusion',
    howParagraph1:
      'This tool combines three input images into a single RGB stereogram by processing the pixel data and shifting color channels according to user-provided values. Upload images, adjust channel multipliers, and download your generated stereogram.',
    howParagraph2:
      'The algorithm cycles through the raster scan of the canvas, dividing it into chunks, and alternates between source images to build a composite where each color (red, green, blue) is derived from a different picture.',
    howVisualTitle: 'What appears under light',
    howVisualText:
      'When the final image is lit with red, green, or blue light, different hidden layers become visible. This effect is based on metamerism and channel separation in the composite.',
    howTipsTitle: 'Best viewing tips',
    howTip1: 'Use source images with clear contrast and distinct shapes.',
    howTip2: 'Adjust channel multipliers gradually to avoid color clipping.',
    howTip3: 'Test the result under different colored light sources.',
    howDetails1:
      '3RGB is a visual project that uses metamerism and color perception to create dynamic light illusions. The tool maps three source images to separate red, green, and blue channels.',
    howDetails2:
      'The algorithm scans the canvas in chunks and alternates source sampling. By changing channel multipliers and chunk size, you can shape the rhythm and intensity of the illusion.',
    supportTitle: 'Support Me',
    supportKicker: 'Help 3RGB grow',
    supportParagraph1:
      'If 3RGB inspires you, your support helps me keep this tool online and improve it with new visual features.',
    supportParagraph2:
      'Every contribution goes directly to hosting costs, performance improvements, and development time. Thank you for helping this project evolve.',
    supportCardTitle: 'Fast way to support',
    supportCardText:
      'The easiest option is a direct PayPal donation. One click is enough to make a real difference.',
    supportButtonLabel: 'Open PayPal',
    supportImpactTitle: 'Your support funds',
    supportImpactPoint1: 'Stable hosting and domain costs.',
    supportImpactPoint2: 'New rendering options and creative presets.',
    supportImpactPoint3: 'Bug fixes, maintenance, and faster updates.',
    aboutTitle: 'About the Project',
    aboutKicker: 'Built for creative experiments',
    aboutParagraph1:
      'RGBstereogram is a small web application built with React and Vite that allows users to merge three images into a colorful stereogram effect.',
    aboutParagraph2:
      'The source code is open-source and available on GitHub. Contributions, bug reports, and feature requests are welcome.',
    aboutRepoTitle: 'Project repository',
    aboutRepoText:
      'Explore the code, follow updates, report issues, or contribute your own ideas and improvements.',
    aboutRepoButton: 'Open GitHub repository',
    aboutHighlightsTitle: 'What this project offers',
    aboutHighlight1: 'Creative RGB stereogram generation in the browser.',
    aboutHighlight2: 'Fast workflow with adjustable channel parameters.',
    aboutHighlight3: 'Open-source code and community-driven development.',
    aboutParagraph3:
      '3RGB is a visual project that uses metamerism and color perception to create dynamic light illusions. The tool combines three input images into one RGB stereogram by mapping them to separate red, green, and blue channels.',
    aboutParagraph4:
      'The algorithm moves through the canvas raster, splits it into chunks, and alternates source image data. Channel multipliers and chunk dimensions control the intensity, rhythm, and character of the final illusion.',
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
    howKicker: 'Zobacz iluzje koloru',
    howParagraph1:
      'Aplikacja RGBstereogram wykorzystuje metameryzm barw, tworzac iluzje, ktora ujawnia sie podczas oswietlenia wygenerowanego obrazu odpowiednim swiatlem: czerwonym, zielonym lub niebieskim.',
    howParagraph2:
      'Przy zmianie rodzaju oswietlenia mozna dostrzec lub ukryc poszczegolne obrazy, ktore sa ze soba poprzeplatane w jednej kompozycji RGB.',
    howVisualTitle: 'Co ujawnia oswietlenie',
    howVisualText:
      'Finalny obraz zawiera trzy warstwy sklejone w jedna kompozycje RGB. Odpowiednie swiatlo wydobywa tylko wybrane informacje, dlatego efekt zmienia sie zaleznie od barwy oswietlenia.',
    howTipsTitle: 'Wskazowki do najlepszego efektu',
    howTip1: 'Wybieraj obrazy z wyraznym kontrastem i czytelnym ksztaltem.',
    howTip2: 'Reguluj mnozniki kanalow stopniowo, aby uniknac przepalen kolorow.',
    howTip3: 'Porownuj wynik pod roznym oswietleniem czerwonym, zielonym i niebieskim.',
    howDetails1:
      '3RGB to projekt wizualny wykorzystujacy metameryzm i percepcje koloru do tworzenia dynamicznych iluzji swietlnych. Narzedzie laczy trzy obrazy wejsciowe w jeden stereogram RGB, mapujac je na osobne kanaly czerwony, zielony i niebieski.',
    howDetails2:
      'Algorytm przechodzi przez raster canvasu, dzieli go na bloki i naprzemiennie pobiera dane z obrazow zrodlowych. Zmiana mnoznikow kanalow oraz parametrow bloku (szerokosc i wysokosc) pozwala kontrolowac intensywnosc, rytm i charakter finalnej iluzji.',
    supportTitle: 'Wesprzyj Mnie',
    supportKicker: 'Pomoz rozwijac 3RGB',
    supportParagraph1:
      'Jesli 3RGB daje Ci inspiracje, wesprzyj projekt, aby mogl dalej rosnac i dostawac nowe funkcje wizualne.',
    supportParagraph2:
      'Kazda wplata trafia bezposrednio na hosting, poprawki wydajnosci i czas potrzebny na dalszy rozwoj. Dziekuje za wsparcie.',
    supportCardTitle: 'Najszybsza forma wsparcia',
    supportCardText:
      'Najprosciej wesprzesz projekt przez PayPal. Jedno klikniecie realnie pomaga utrzymac i rozwijac strone.',
    supportButtonLabel: 'Przejdz do PayPal',
    supportImpactTitle: 'Na co idzie wsparcie',
    supportImpactPoint1: 'Stabilny hosting i koszty domeny.',
    supportImpactPoint2: 'Nowe opcje renderowania i kreatywne presety.',
    supportImpactPoint3: 'Poprawki bledow, utrzymanie i szybsze aktualizacje.',
    aboutTitle: 'O Projekcie',
    aboutKicker: 'Stworzone do kreatywnych eksperymentow',
    aboutParagraph1:
      'RGBstereogram to mala aplikacja webowa zbudowana w React i Vite, ktora pozwala laczyc trzy obrazy w kolorowy efekt stereogramu.',
    aboutParagraph2:
      'Kod zrodlowy jest open-source i dostepny na GitHub. Wklady, zgloszenia bledow i propozycje funkcji sa mile widziane.',
    aboutRepoTitle: 'Repozytorium projektu',
    aboutRepoText:
      'Zobacz kod, sprawdz aktualizacje, zglos problem albo dolacz z wlasnym pomyslem i usprawnieniami.',
    aboutRepoButton: 'Otworz repozytorium GitHub',
    aboutHighlightsTitle: 'Co oferuje projekt',
    aboutHighlight1: 'Kreatywne generowanie stereogramow RGB w przegladarce.',
    aboutHighlight2: 'Szybki workflow z regulacja parametrow kanalow.',
    aboutHighlight3: 'Open-source i rozwoj napedzany przez spolecznosc.',
    aboutParagraph3:
      '3RGB to projekt wizualny wykorzystujacy metameryzm i percepcje koloru do tworzenia dynamicznych iluzji swietlnych. Narzedzie laczy trzy obrazy wejsciowe w jeden stereogram RGB, mapujac je na osobne kanaly czerwony, zielony i niebieski.',
    aboutParagraph4:
      'Algorytm przechodzi przez raster canvasu, dzieli go na bloki i naprzemiennie pobiera dane z obrazow zrodlowych. Zmiana mnoznikow kanalow oraz parametrow bloku (szerokosc i wysokosc) pozwala kontrolowac intensywnosc, rytm i charakter finalnej iluzji.',
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
    howKicker: 'Sieh die Farbillusion',
    howParagraph1:
      'Dieses Tool kombiniert drei Eingabebilder zu einem RGB-Stereogramm, indem Pixeldaten verarbeitet und Farbkanale anhand von Benutzerwerten verschoben werden. Lade Bilder hoch, passe Kanal-Multiplikatoren an und lade dein generiertes Stereogramm herunter.',
    howParagraph2:
      'Der Algorithmus durchlaeuft den Raster-Scan der Zeichenflaeche, teilt sie in Bloecke und wechselt zwischen den Quellbildern, um eine Komposition zu erstellen, bei der jede Farbe (Rot, Gruen, Blau) aus einem anderen Bild stammt.',
    howVisualTitle: 'Was unter Licht sichtbar wird',
    howVisualText:
      'Wenn das finale Bild mit rotem, gruenem oder blauem Licht beleuchtet wird, werden unterschiedliche versteckte Ebenen sichtbar. Der Effekt basiert auf Metamerie und Kanaltrennung.',
    howTipsTitle: 'Tipps fuer den besten Effekt',
    howTip1: 'Nutze Bilder mit klarem Kontrast und deutlichen Formen.',
    howTip2: 'Passe Kanal-Multiplikatoren schrittweise an, um Clipping zu vermeiden.',
    howTip3: 'Teste das Ergebnis unter verschiedenen farbigen Lichtquellen.',
    howDetails1:
      '3RGB ist ein visuelles Projekt, das Metamerie und Farbwahrnehmung nutzt, um dynamische Lichtillusionen zu erzeugen. Das Tool ordnet drei Quellbilder den roten, gruenen und blauen Kanaelen zu.',
    howDetails2:
      'Der Algorithmus scannt die Zeichenflaeche blockweise und wechselt die Quelldaten. Mit Kanal-Multiplikatoren und Blockgroessen steuerst du Intensitaet, Rhythmus und Charakter der Illusion.',
    supportTitle: 'Unterstuetze Mich',
    supportKicker: 'Hilf 3RGB zu wachsen',
    supportParagraph1:
      'Wenn dich 3RGB inspiriert, hilft deine Unterstuetzung dabei, das Tool online zu halten und neue visuelle Funktionen zu entwickeln.',
    supportParagraph2:
      'Jeder Beitrag fliesst direkt in Hosting, Performance-Verbesserungen und Entwicklungszeit. Danke fuer deine Unterstuetzung.',
    supportCardTitle: 'Schnell unterstuetzen',
    supportCardText:
      'Die einfachste Option ist eine direkte PayPal-Spende. Ein Klick macht bereits einen Unterschied.',
    supportButtonLabel: 'PayPal oeffnen',
    supportImpactTitle: 'Deine Unterstuetzung finanziert',
    supportImpactPoint1: 'Stabiles Hosting und Domain-Kosten.',
    supportImpactPoint2: 'Neue Render-Optionen und kreative Presets.',
    supportImpactPoint3: 'Bugfixes, Wartung und schnellere Updates.',
    aboutTitle: 'Ueber Das Projekt',
    aboutKicker: 'Fuer kreative Experimente gebaut',
    aboutParagraph1:
      'RGBstereogram ist eine kleine Webanwendung mit React und Vite, mit der Benutzer drei Bilder zu einem farbigen Stereogramm-Effekt kombinieren koennen.',
    aboutParagraph2:
      'Der Quellcode ist Open Source und auf GitHub verfuegbar. Beitraege, Bug-Reports und Feature-Wuensche sind willkommen.',
    aboutRepoTitle: 'Projekt-Repository',
    aboutRepoText:
      'Entdecke den Code, verfolge Updates, melde Probleme oder bringe eigene Ideen und Verbesserungen ein.',
    aboutRepoButton: 'GitHub-Repository oeffnen',
    aboutHighlightsTitle: 'Was das Projekt bietet',
    aboutHighlight1: 'Kreative RGB-Stereogramm-Generierung im Browser.',
    aboutHighlight2: 'Schneller Workflow mit anpassbaren Kanalwerten.',
    aboutHighlight3: 'Open-Source-Code und gemeinschaftsgetriebene Entwicklung.',
    aboutParagraph3:
      '3RGB ist ein visuelles Projekt, das Metamerie und Farbwahrnehmung nutzt, um dynamische Lichtillusionen zu erzeugen. Das Tool kombiniert drei Eingabebilder zu einem RGB-Stereogramm und mappt sie auf separate Rot-, Gruen- und Blaukanaele.',
    aboutParagraph4:
      'Der Algorithmus bewegt sich im Raster ueber die Zeichenflaeche, teilt sie in Bloecke und wechselt die Quelldaten. Kanal-Multiplikatoren und Blockgroessen steuern Intensitaet, Rhythmus und Charakter der finalen Illusion.',
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
    howKicker: 'Descubre la ilusion de color',
    howParagraph1:
      'Esta herramienta combina tres imagenes de entrada en un solo estereograma RGB procesando los datos de pixeles y desplazando canales de color segun valores definidos por el usuario. Sube imagenes, ajusta multiplicadores de canal y descarga tu estereograma generado.',
    howParagraph2:
      'El algoritmo recorre el raster del lienzo, lo divide en bloques y alterna entre imagenes de origen para crear una composicion donde cada color (rojo, verde, azul) proviene de una imagen diferente.',
    howVisualTitle: 'Que aparece con la luz',
    howVisualText:
      'Cuando la imagen final se ilumina con luz roja, verde o azul, se revelan distintas capas ocultas. El efecto se basa en metamersimo y separacion de canales en la composicion.',
    howTipsTitle: 'Consejos para mejor resultado',
    howTip1: 'Usa imagenes con buen contraste y formas claras.',
    howTip2: 'Ajusta los multiplicadores de canal de forma gradual.',
    howTip3: 'Prueba el resultado con distintas luces de color.',
    howDetails1:
      '3RGB es un proyecto visual que usa metamersimo y percepcion del color para crear ilusiones luminosas dinamicas. La herramienta asigna tres imagenes de origen a canales rojo, verde y azul separados.',
    howDetails2:
      'El algoritmo recorre el lienzo por bloques y alterna el muestreo de origen. Al cambiar multiplicadores y tamano de bloque, puedes controlar ritmo, intensidad y caracter de la ilusion.',
    supportTitle: 'Apoyame',
    supportKicker: 'Ayuda a que 3RGB crezca',
    supportParagraph1:
      'Si 3RGB te inspira, tu apoyo me ayuda a mantener esta herramienta en linea y a crear nuevas funciones visuales.',
    supportParagraph2:
      'Cada aporte se destina directamente a hosting, mejoras de rendimiento y tiempo de desarrollo. Gracias por tu apoyo.',
    supportCardTitle: 'Forma rapida de apoyar',
    supportCardText:
      'La opcion mas simple es una donacion directa por PayPal. Un clic ya marca la diferencia.',
    supportButtonLabel: 'Abrir PayPal',
    supportImpactTitle: 'Tu apoyo financia',
    supportImpactPoint1: 'Hosting estable y costos de dominio.',
    supportImpactPoint2: 'Nuevas opciones de render y presets creativos.',
    supportImpactPoint3: 'Correcciones, mantenimiento y actualizaciones mas rapidas.',
    aboutTitle: 'Sobre El Proyecto',
    aboutKicker: 'Creado para experimentos creativos',
    aboutParagraph1:
      'RGBstereogram es una pequena aplicacion web construida con React y Vite que permite combinar tres imagenes en un efecto de estereograma colorido.',
    aboutParagraph2:
      'El codigo fuente es open-source y esta disponible en GitHub. Se agradecen contribuciones, reportes de errores y solicitudes de nuevas funciones.',
    aboutRepoTitle: 'Repositorio del proyecto',
    aboutRepoText:
      'Explora el codigo, sigue las novedades, reporta errores o contribuye con tus propias ideas y mejoras.',
    aboutRepoButton: 'Abrir repositorio en GitHub',
    aboutHighlightsTitle: 'Que ofrece este proyecto',
    aboutHighlight1: 'Generacion creativa de estereogramas RGB en navegador.',
    aboutHighlight2: 'Flujo rapido con parametros de canales ajustables.',
    aboutHighlight3: 'Codigo open-source y desarrollo guiado por la comunidad.',
    aboutParagraph3:
      '3RGB es un proyecto visual que usa metamersimo y percepcion del color para crear ilusiones luminosas dinamicas. La herramienta combina tres imagenes de entrada en un solo estereograma RGB, mapeando cada una a canales rojo, verde y azul separados.',
    aboutParagraph4:
      'El algoritmo recorre el raster del lienzo, lo divide en bloques y alterna datos de origen. Los multiplicadores de canal y el tamano de bloque controlan la intensidad, el ritmo y el caracter de la ilusion final.',
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
