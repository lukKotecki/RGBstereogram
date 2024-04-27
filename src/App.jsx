import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import InputImages from './components/InputImages'
import OutputImage from './components/OutputImage'
import whiteNoiseImage from './assets/images/white_noise.png'
import boyImage from './assets/images/boy-image.jpg'
import dogImage from './assets/images/dog-image.jpeg'

function App() {

  const initialState = [
    {
      imageId: 'firstImage',
      imageUrl: whiteNoiseImage,
      red: 90,
      green: 1,
      blue: 2,
      width: 400,
      height: 150,
      chunkSize: 10,
    }, 
    {
      imageId: 'secondImage',
      imageUrl: boyImage,
      red: 3,
      green: 77,
      blue: 4 
    }, 
    {
      imageId: 'thirdImage',
      imageUrl: dogImage,
      red: 5,
      green: 10,
      blue: 6 
    }, 
  ]
  const [inputsState, setInputsState] = React.useState(initialState)
  
  const [outputImage, setOutputImage] = React.useState(null)
  
  React.useEffect(()=>{
    setOutputImage(<OutputImage inputsState={inputsState}/>)
  },[inputsState])

  console.clear()
  console.log(inputsState)

  const getColorIndicesForCoord = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };



return (
    <div className='container'>
      <Header />
      <InputImages  inputsState={inputsState} 
                    setInputsState={setInputsState} 
      />
      
      {outputImage}


      <Footer />
    </div>
  )
}

export default App
