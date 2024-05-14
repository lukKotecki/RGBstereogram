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
    let lineNumber = 0
    let previousRowChunkOrder = 0
    let previousColumnChunkOrder = 0

    for(let i=0, rowPixelCounter=0; i<data.length; i+=4, rowPixelCounter++){

      // czujnik nowa linia
      if(rowPixelCounter>=width){
        rowPixelCounter=0
        lineNumber++

      }

      if( (rowPixelCounter % chunkWidth) === 0){
        if(previousRowChunkOrder === 0){
          previousRowChunkOrder = 1
          photoOrder = 1
        }else if(previousRowChunkOrder === 1){
          previousRowChunkOrder = 2
          photoOrder = 2
        }else{
          previousRowChunkOrder = 0
          photoOrder = 0
        }
      }



      data[i] = inputDataArray[photoOrder][i];     // Red
      data[i + 1] = inputDataArray[photoOrder][i+1];   // Green
      data[i + 2] = inputDataArray[photoOrder][i+2];   // Blue
      data[i + 3] =  inputDataArray[photoOrder][i+3]; // Alpha
    }
    outputCtx.putImageData(outputImageData, 0, 0)
  })

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