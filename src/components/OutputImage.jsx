import React from 'react'

export default function OutputImage({inputsState}){
  const outputCanvasRef = React.useRef(null)
  const canvasRef = React.useRef([])

  React.useEffect(()=>{    
    const outputCanvas = outputCanvasRef.current
    const outputCtx = outputCanvas.getContext('2d',{ willReadFrequently: true })
    const inputCanvasArray = canvasRef.current.map(el=>el)
    const inputCanvasCtxArray = inputCanvasArray.map(el => el.getContext('2d',{ willReadFrequently: true }) )
    const inputDataArray = inputCanvasCtxArray.map(el => el.getImageData(0, 0, inputsState[0].width, inputsState[0].height).data) 
    inputCanvasCtxArray.forEach((el, index) => {
      const image = new Image()
      image.src = inputsState[index].imageUrl
      el.drawImage(image, 0, 0, outputCanvas.width, outputCanvas.height)
    })
    // const outputImage = new Image() it's useless?
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height)
    const data = outputImageData.data
    
    //pomocnicze
    const width = outputCanvas.width
    const height = outputCanvas.height
    const chunkWidth = inputsState[0].chunkWidth
    const chunkHeight = inputsState[0].chunkHeight
    let photoOrder = 0
    let lineNumber = 1
    let rowChunkOrder = 0
    let columnChunkOrder = 0
    let isItUniqueHeightLoop = false
    let averageOfRGB = 0

    for(let i=0, rowPixelCounter=1; i<data.length; i+=4, rowPixelCounter++){
      //console.log('i: '+i+' rPC: '+rowPixelNumber+' LN: '+lineNumber)

      // when there is new line of pixels
      if(rowPixelCounter>width){
        rowPixelCounter=1
        lineNumber++
        columnChunkOrder = rowChunkOrder // remember columnChunkOrder when new line occures
      }

      // when height is equal chunkHeight change it's order
      if( ((lineNumber % chunkHeight) === 0) && isItUniqueHeightLoop ){
        // console.log(lineNumber)
        isItUniqueHeightLoop = false
        if(rowChunkOrder === 0){
          rowChunkOrder = 1
        }else if(rowChunkOrder === 1){
          rowChunkOrder = 2
        }else{
          rowChunkOrder = 0
        }
      }
      if( lineNumber % chunkHeight){
        isItUniqueHeightLoop = true
      }

      // when in line rowPixelCounter equals chunkWidth 
      if( ((rowPixelCounter % chunkWidth) === 0) ){
        // console.log('jest zero: '+rowPixelNumber+' % '+chunkWidth)
        if(columnChunkOrder === 0){
          columnChunkOrder = 1
          photoOrder = 1
        }else if(columnChunkOrder === 1){
          columnChunkOrder = 2
          photoOrder = 2
        }else{
          columnChunkOrder = 0
          photoOrder = 0
        }
      }

      averageOfRGB = (inputDataArray[photoOrder][i] + inputDataArray[photoOrder][i+1] + inputDataArray[photoOrder][i+2]) / 3

      data[i] = averageOfRGB *inputsState[photoOrder].red;    // Red
      data[i + 1] = averageOfRGB;   // Green
      data[i + 2] = averageOfRGB;   // Blue
      data[i + 3] =  inputDataArray[photoOrder][i+3]; // Alpha
    }
    outputCtx.putImageData(outputImageData, 0, 0)
  })

  function changeImagesColor(){


  }

  return (
      <>
          <canvas width={inputsState[0].width} height={inputsState[0].height} ref={outputCanvasRef} id='outputImage'></canvas>
          
          {inputsState.map((item, index) => (
            <div key={index}>
              <canvas 
                width={inputsState[0].width} 
                height={inputsState[0].height} 
                style={{display:'initial'}} 
                ref={element => canvasRef.current[index] = element}>
                {/* ref={element => canvasRef.current.push(element)}> */}

              </canvas>

            </div>
          ))}
      </>
  )
}