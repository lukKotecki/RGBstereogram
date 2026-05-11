import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import HowItWorks from './components/HowItWorks'
import SupportMe from './components/SupportMe'
import AboutProject from './components/AboutProject'
import { detectInitialLanguage, detectLanguageFromIp, translations } from './i18n'
import whiteNoiseImage from './assets/images/white_noise.png'
import grayImage from './assets/images/gray.png'
import blackImage from './assets/images/black.png'
import uploadImage from './assets/images/upload-image.jpg'
import boyImage from './assets/images/boy-image.jpg'
import dogImage from './assets/images/dog-image.jpeg'

const PAGE_STORAGE_KEY = 'sitePage'
const INPUTS_STORAGE_KEY = 'siteInputsState'
const VALID_PAGES = ['home', 'how', 'support', 'about']

function toSafeNumber(value, fallback) {
  const parsedValue = Number(value)
  return Number.isFinite(parsedValue) ? parsedValue : fallback
}

function restoreInputsState(initialState) {
  try {
    const rawState = window.localStorage.getItem(INPUTS_STORAGE_KEY)
    if (!rawState) {
      return initialState
    }

    const parsedState = JSON.parse(rawState)
    if (!Array.isArray(parsedState) || parsedState.length !== initialState.length) {
      return initialState
    }

    return initialState.map((initialItem, index) => {
      const savedItem = parsedState[index] || {}
      const isSavedImageUrlValid =
        typeof savedItem.imageUrl === 'string' && !savedItem.imageUrl.startsWith('blob:')

      return {
        ...initialItem,
        imageUrl: isSavedImageUrlValid ? savedItem.imageUrl : initialItem.imageUrl,
        red: toSafeNumber(savedItem.red, initialItem.red),
        green: toSafeNumber(savedItem.green, initialItem.green),
        blue: toSafeNumber(savedItem.blue, initialItem.blue),
        alpha: toSafeNumber(savedItem.alpha, initialItem.alpha),
        width: toSafeNumber(savedItem.width, initialItem.width),
        height: toSafeNumber(savedItem.height, initialItem.height),
        chunkWidth: toSafeNumber(savedItem.chunkWidth, initialItem.chunkWidth),
        chunkHeight: toSafeNumber(savedItem.chunkHeight, initialItem.chunkHeight)
      }
    })
  } catch (error) {
    return initialState
  }
}

function restorePage() {
  try {
    const savedPage = window.localStorage.getItem(PAGE_STORAGE_KEY)
    if (savedPage && VALID_PAGES.includes(savedPage)) {
      return savedPage
    }
  } catch (error) {
    return 'home'
  }

  return 'home'
}

function App() {

  const initialState = [
    {
      imageId: 'firstImage',
      imageUrl: uploadImage,
      red: 220,
      green: 20,
      blue: 20,
      alpha: 1,
      width: 1500,
      height: 1500,
      chunkWidth: 15,
      chunkHeight: 15,
    }, 
    {
      imageId: 'secondImage',
      imageUrl: boyImage,
      red: 20,
      green: 220,
      blue: 20,
      alpha: 1
    }, 
    {
      imageId: 'thirdImage',
      imageUrl: dogImage,
      red: 20,
      green: 20,
      blue: 220,
      alpha: 1
    }, 
  ]
  const [inputsState, setInputsState] = React.useState(() => restoreInputsState(initialState))
  const [page, setPage] = React.useState(() => restorePage())
  const [language, setLanguage] = React.useState(() => detectInitialLanguage())
  const t = translations[language] || translations.en

  React.useEffect(() => {
    window.localStorage.setItem('siteLanguage', language)
  }, [language])

  React.useEffect(() => {
    window.localStorage.setItem(INPUTS_STORAGE_KEY, JSON.stringify(inputsState))
  }, [inputsState])

  React.useEffect(() => {
    window.localStorage.setItem(PAGE_STORAGE_KEY, page)
  }, [page])

  React.useEffect(() => {
    const hasStoredLanguage = window.localStorage.getItem('siteLanguage')
    if (hasStoredLanguage) {
      return
    }

    const controller = new AbortController()

    detectLanguageFromIp(controller.signal).then((ipLanguage) => {
      if (ipLanguage === 'pl') {
        setLanguage('pl')
      }
    })

    return () => controller.abort()
  }, [])

  console.clear()
  console.log(inputsState)

  const getColorIndicesForCoord = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };



return (
    <div className='container'>
      <Header
        currentPage={page}
        setPage={setPage}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {page === 'home' && (
        <HomePage inputsState={inputsState} setInputsState={setInputsState} t={t} />
      )}

      {page === 'how' && <HowItWorks t={t} />}
      {page === 'support' && <SupportMe t={t} />}
      {page === 'about' && <AboutProject t={t} />}

      <Footer t={t} />
    </div>
  )
}

export default App
