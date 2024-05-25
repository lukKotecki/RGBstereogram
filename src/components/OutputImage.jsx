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
    
    //pomocnicze
    const width = outputCanvas.width
    const height = outputCanvas.height
    const chunkWidth = inputsState[0].chunkWidth
    const chunkHeight = inputsState[0].chunkHeight
    let photoOrder = 0
    let lineNumber = 1
    let firstInLineChunkOrder = 0
    let columnChunkOrder = 0
    let uniqueLineNumber = true
    let averageOfRGB = 0
    

    for(let i=0, rowPixelCounter=1; i<data.length; i+=4, rowPixelCounter++){
      //console.log('i: '+i+' rPC: '+rowPixelNumber+' LN: '+lineNumber)






      // when there is new line of pixels
      if(rowPixelCounter>width){
        rowPixelCounter=1
        lineNumber++
        columnChunkOrder = firstInLineChunkOrder // remember columnChunkOrder when new line occures

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
      if(chunkHeight == 1){
        if(firstInLineChunkOrder === 0){
          firstInLineChunkOrder = 1
        }else if(firstInLineChunkOrder === 1){
          firstInLineChunkOrder = 2
        }else{
          firstInLineChunkOrder = 0
        }
      }

      // when height is equal chunkHeight change it's order
      if( ((lineNumber % chunkHeight) === 0) && uniqueLineNumber ){
        console.log( chunkHeight )
        uniqueLineNumber = false
        if(firstInLineChunkOrder === 0){
          firstInLineChunkOrder = 1
        }else if(firstInLineChunkOrder === 1){
          firstInLineChunkOrder = 2
        }else{
          firstInLineChunkOrder = 0
        }
      }
      if( lineNumber % chunkHeight){
        uniqueLineNumber = true
      }

      // when in line rowPixelCounter equals chunkWidth 
      if( ( (rowPixelCounter % chunkWidth) === 0 ) ){
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