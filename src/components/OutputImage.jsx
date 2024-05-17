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
    let previousRowChunkOrder = 0
    let previousColumnChunkOrder = 0

    for(let i=0, rowPixelNumber=1; i<data.length; i+=4, rowPixelNumber++){

      // czujnik nowa linia
      if(rowPixelNumber>width){
        rowPixelNumber=1
        lineNumber++

      }
      //console.log('i: '+i+' rPC: '+rowPixelNumber+' LN: '+lineNumber)

      
      if( (lineNumber % chunkHeight) === 0 ){
        if(previousColumnChunkOrder === 0){
          previousRowChunkOrder = 0
          previousColumnChunkOrder = 1
        }else if(previousColumnChunkOrder === 1){
          previousRowChunkOrder = 1
          previousColumnChunkOrder = 2
        }else{
          previousRowChunkOrder = 2
          previousColumnChunkOrder = 0
        }
      }

      // if( (rowPixelNumber % chunkWidth) === 0){
      //   // console.log('jest zero: '+rowPixelNumber+' % '+chunkWidth)
      //   if(previousRowChunkOrder === 0){
      //     previousRowChunkOrder = 1
      //     photoOrder = 1
      //   }else if(previousRowChunkOrder === 1){
      //     previousRowChunkOrder = 2
      //     photoOrder = 2
      //   }else{
      //     previousRowChunkOrder = 0
      //     photoOrder = 0
      //   }
      // }



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