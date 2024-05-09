import React from 'react'

export default function OutputImage({inputsState}){

  const outputCanvasRef = React.useRef(null)
  const canvasRef = React.useRef([])

  React.useEffect(()=>{
    
    const outputCanvas = outputCanvasRef.current
    const outputCtx = outputCanvas.getContext('2d',{ willReadFrequently: true })

    //pomocnicze
    const width = outputCanvas.width
    const height = outputCanvas.height
    const chunkWidth = inputsState[0].chunkWidth
    const chunkHeight = inputsState[0].chunkHeight

    
    const inputCanvasArray = canvasRef.current.map(el=>el)
    const inputCanvasCtxArray = inputCanvasArray.map(el => el.getContext('2d'),{ willReadFrequently: true })
    const inputDataArray = inputCanvasCtxArray.map(el => el.getImageData(0, 0, inputsState[0].width, inputsState[0].height, { willReadFrequently: true }).data) 
    inputCanvasCtxArray.forEach((el, index) => {
      const image = new Image()
      image.src = inputsState[index].imageUrl
      el.drawImage(image, 0, 0, outputCanvas.width, outputCanvas.height)
    })
    // const outputImage = new Image() it's useless?
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height)
    const data = outputImageData.data

    let lineNumber = 0
    for(let i=0, j =0; i<data.length; i+=4, j++){

      if( ( j>width  )  ){
        j=0
        lineNumber++
        /*
        jezeli i < width
        iiiiiiiiiiiiiiii iiiiiiiiiii iiiiiiiiiiii



        */
        console.log(lineNumber)
      }


      if( (lineNumber % 2 )){
        data[i] = inputDataArray[1][i];     // Red
        data[i + 1] = inputDataArray[1][i+1];   // Green
        data[i + 2] = inputDataArray[1][i+2];   // Blue
        data[i + 3] =  inputDataArray[1][i+3]; // Alpha

      }else{
        data[i] = inputDataArray[2][i];     // Red
        data[i + 1] = inputDataArray[2][i+1];   // Green
        data[i + 2] = inputDataArray[2][i+2];   // Blue
        data[i + 3] =  inputDataArray[2][i+3]; // Alpha
      }

    }
    outputCtx.putImageData(outputImageData, 0, 0)

    // for(let i=0, flipFlap = 0; i<data.length; i+=4, flipFlap++ ){
    //   if(flipFlap === 0 ){
    //     data[i] = thirdData[i];     // Red
    //     data[i + 1] = thirdData[i+1];   // Green
    //     data[i + 2] = thirdData[i+2];   // Blue
    //     data[i + 3] =  thirdData[i+3]; // Alpha
    //   }
    //   if(flipFlap === 1) {
    //     data[i] = firstData[i];     // Red
    //     data[i + 1] = firstData[i+1];   // Green
    //     data[i + 2] = firstData[i+2];   // Blue
    //     data[i + 3] =  firstData[i+3]; // Alpha
    //   }
    //   if(flipFlap === 2) {
    //     data[i] = secondData[i];     // Red
    //     data[i + 1] = secondData[i+1];   // Green
    //     data[i + 2] = secondData[i+2];   // Blue
    //     data[i + 3] =  secondData[i+3]; // Alpha
    //   }
    //   if(flipFlap === 2){
    //     flipFlap = -1 
    //   }
    // }
    // outputCtx.putImageData(imageData, 0, 0)
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