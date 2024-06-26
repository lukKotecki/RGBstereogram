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
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height)
    const data = outputImageData.data
    
    // variables used to dicing
    const width = outputCanvas.width
    const chunkWidth = inputsState[0].chunkWidth
    const chunkHeight = inputsState[0].chunkHeight
    let photoOrder = 0
    let lineNumber = 0
    let firstInLineChunkOrder = 0
    let averageOfRGB = 0
    
    for(let i=0, rowPixelCounter=1; i<data.length; i+=4, rowPixelCounter++){
      // when there is new line of pixels
      if(rowPixelCounter>width){
        rowPixelCounter=1
        lineNumber++
        if((lineNumber % chunkHeight) === 0){
          if(firstInLineChunkOrder === 0){
            firstInLineChunkOrder = 1
          }else if(firstInLineChunkOrder === 1){
            firstInLineChunkOrder = 2
          }else{
            firstInLineChunkOrder = 0
          }
        }
        photoOrder = firstInLineChunkOrder // remember photoOrder when new line occures
      }
      // change photos in line
      if( (rowPixelCounter % chunkWidth) === 0 ){
        if(photoOrder === 0){
          photoOrder = 1
        }else if(photoOrder === 1){
          photoOrder = 2
        }else{
          photoOrder = 0
        }
      }

      averageOfRGB = (inputDataArray[photoOrder][i] + inputDataArray[photoOrder][i+1] + inputDataArray[photoOrder][i+2]) / 3
      data[i] = Math.round( (averageOfRGB * inputsState[photoOrder].red) / 100 );    // Red
      data[i + 1] = Math.round( (averageOfRGB * inputsState[photoOrder].green) / 100 );   // Green
      data[i + 2] = Math.round( (averageOfRGB * inputsState[photoOrder].blue) / 100 );   // Blue
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
                style={{display:'none'}} 
                ref={element => canvasRef.current[index] = element}>
                {/* ref={element => canvasRef.current.push(element)}> */}

              </canvas>

            </div>
          ))}
      </>
  )
}