import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import HowItWorks from './components/HowItWorks'
import SupportMe from './components/SupportMe'
import AboutProject from './components/AboutProject'
import whiteNoiseImage from './assets/images/white_noise.png'
import grayImage from './assets/images/gray.png'
import blackImage from './assets/images/black.png'
import uploadImage from './assets/images/upload-image.jpg'
import boyImage from './assets/images/boy-image.jpg'
import dogImage from './assets/images/dog-image.jpeg'

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
  const [inputsState, setInputsState] = React.useState(initialState)
  const [page, setPage] = React.useState('home')

  console.clear()
  console.log(inputsState)

  const getColorIndicesForCoord = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };



return (
    <div className='container'>
      <Header currentPage={page} setPage={setPage} />

      {page === 'home' && (
        <HomePage inputsState={inputsState} setInputsState={setInputsState} />
      )}

      {page === 'how' && <HowItWorks />}
      {page === 'support' && <SupportMe />}
      {page === 'about' && <AboutProject />}

      <Footer />
    </div>
  )
}

export default App
