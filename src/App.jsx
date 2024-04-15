import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import InputImages from './components/InputImages'
import OutputImage from './components/OutputImage'
import whiteNoiseImage from './assets/images/white_noise.png'

function App() {

  const initialState = [
    {
      imageId: 'firstImage',
      imageUrl: whiteNoiseImage,
      red: 90,
      green: 1,
      blue: 2 
    }, 
    {
      imageId: 'secondImage',
      imageUrl: whiteNoiseImage,
      red: 3,
      green: 77,
      blue: 4 
    }, 
    {
      imageId: 'thirdImage',
      imageUrl: whiteNoiseImage,
      red: 5,
      green: 10,
      blue: 6 
    }, 
  ]
  const [inputsState, setInputsState] = React.useState(initialState)
  console.clear()
  console.log(inputsState)

  const outputCanvasRef = React.useRef(null)
  const firstCanvasRef = React.useRef(null)
  const secondCanvasRef = React.useRef(null)
  const thirdCanvasRef = React.useRef(null)


  function createOutput(){
    console.log('odpalam funkcje w rodzicu')

    const outputCanvas = outputCanvasRef.current
    const outputCtx = outputCanvas.getContext('2d')
    const firstCanvas = firstCanvasRef.current
    const firstCtx = firstCanvas.getContext('2d')
    const secondCanvas = secondCanvasRef.current
    const secondCtx = secondCanvas.getContext('2d')
    const thirdCanvas = thirdCanvasRef.current
    const thirdCtx = thirdCanvas.getContext('2d')



    const outputImage = new Image()
    outputImage.src = inputsState[0].imageUrl
    outputCtx.drawImage(outputImage, 0, 0, outputCanvas.width, outputCanvas.height)

    const firstImage = new Image()
    firstImage.src = inputsState[0].imageUrl
    firstCtx.drawImage(firstImage, 0, 0, outputCanvas.width, outputCanvas.height)
    const firstData = firstCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height)
    const secondImage = new Image()
    secondImage.src = inputsState[1].imageUrl
    secondCtx.drawImage(outputImage, 0, 0, outputCanvas.width, outputCanvas.height)
    const secondData =secondCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height)
    const thirdImage = new Image()
    thirdImage.src = inputsState[2].imageUrl
    thirdCtx.drawImage(thirdImage, 0, 0, outputCanvas.width, outputCanvas.height)
    const thirdData = thirdCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height)

    const imageData = outputCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
    outputCtx.putImageData(imageData, 0, 0);

    

  }


return (
    <div className='container'>
      <Header />
      <InputImages  inputsState={inputsState} 
                    setInputsState={setInputsState} 
                    createOutput={createOutput}/>
      
      {/* {canvas} */}
      <canvas ref={outputCanvasRef} id='outputImage'></canvas>
      <canvas style={{display:'none'}} ref={firstCanvasRef}></canvas>
      <canvas style={{display:'none'}} ref={secondCanvasRef}></canvas>
      <canvas style={{display:'none'}} ref={thirdCanvasRef}></canvas>
      <Footer />
    </div>
  )
}

export default App
