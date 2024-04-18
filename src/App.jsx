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
      blue: 2 
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
  console.clear()
  console.log(inputsState)

  const outputCanvasRef = React.useRef(null)
  const firstCanvasRef = React.useRef(null)
  const secondCanvasRef = React.useRef(null)
  const thirdCanvasRef = React.useRef(null)

  function createOutput(){
    const outputCanvas = outputCanvasRef.current
    const outputCtx = outputCanvas.getContext('2d')
    const firstCanvas = firstCanvasRef.current
    const firstCtx = firstCanvas.getContext('2d')
    const secondCanvas = secondCanvasRef.current
    const secondCtx = secondCanvas.getContext('2d')
    const thirdCanvas = thirdCanvasRef.current
    const thirdCtx = thirdCanvas.getContext('2d')

    const outputImage = new Image()
    // outputImage.src = inputsState[0].imageUrl
    // outputCtx.drawImage(outputImage, 0, 0, outputCanvas.width, outputCanvas.height)

    const firstImage = new Image()
    firstImage.src = inputsState[0].imageUrl
    firstCtx.drawImage(firstImage, 0, 0, outputCanvas.width, outputCanvas.height)
    const firstData = firstCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height).data

    const secondImage = new Image()
    secondImage.src = inputsState[1].imageUrl
    secondCtx.drawImage(secondImage, 0, 0, outputCanvas.width, outputCanvas.height)
    const secondData =secondCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height).data

    const thirdImage = new Image()
    thirdImage.src = inputsState[2].imageUrl
    thirdCtx.drawImage(thirdImage, 0, 0, outputCanvas.width, outputCanvas.height)
    const thirdData = thirdCtx.getImageData(0,0, outputCanvas.width, outputCanvas.height).data

    let imageData = secondCtx.getImageData(0, 0, firstCanvas.width, firstCanvas.height);
    let data = imageData.data;

    for(let i=0, flipFlap = 0; i<data.length; i+=4, flipFlap++ ){
      if(flipFlap === 0 ){
        data[i] = thirdData[i];     // Red
        data[i + 1] = thirdData[i+1];   // Green
        data[i + 2] = thirdData[i+2];   // Blue
        data[i + 3] =  thirdData[i+3]; // Alpha
      }
      if(flipFlap === 1) {
        data[i] = firstData[i];     // Red
        data[i + 1] = firstData[i+1];   // Green
        data[i + 2] = firstData[i+2];   // Blue
        data[i + 3] =  firstData[i+3]; // Alpha
      }
      if(flipFlap === 2) {
        data[i] = secondData[i];     // Red
        data[i + 1] = secondData[i+1];   // Green
        data[i + 2] = secondData[i+2];   // Blue
        data[i + 3] =  secondData[i+3]; // Alpha
      }
      if(flipFlap === 2){
        flipFlap = -1 
      }
    }

    outputCtx.putImageData(imageData, 0, 0)

  }

  const getColorIndicesForCoord = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };

return (
    <div className='container'>
      <Header />
      <InputImages  inputsState={inputsState} 
                    setInputsState={setInputsState} 
                    createOutput={createOutput}/>
      
      {/* {canvas} */}
      <canvas ref={outputCanvasRef} id='outputImage'></canvas>
      <canvas style={{display:'initial'}} ref={firstCanvasRef}></canvas>
      <canvas style={{display:'initial'}} ref={secondCanvasRef}></canvas>
      <canvas style={{display:'initial'}} ref={thirdCanvasRef}></canvas>
      <Footer />
    </div>
  )
}

export default App
