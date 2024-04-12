import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import InputImages from './components/InputImages'
import OutputImage from './components/OutputImage'

function App() {

const outputRef = React.useRef(null)

const [canvas, setCanvas] = React.useState(<div></div>)

  
  const initialObj = {
    firstImageUrl: 'data:image/jpeg;base64,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',
    firstRed: 90,
    firstGreen: 10,
    firstBlue: 10,
    secondImageUrl: 'data:image/jpeg;base64,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',
    seconRed: 10,
    secondGreen: 90,
    secondBlue: 10,
    thirdImageUrl: '',
    thirdRed: 10,
    thirdGreen: 10,
    thirdBlue: 90,
    
  }
const obj = { 
  firstImage: 
  { imageUrl: '',
    firstRed: 90,
    firstGreen: 10,
    firstBlue: 10 }
  ,
  secondImage:{
    imageUrl: '',
    seconRed: 10,
    secondGreen: 90,
    secondBlue: 10,

  },
  thirdImage: {
    imageUrl: '',
    thirdRed: 10,
    thirdGreen: 10,
    thirdBlue: 90,
    
  }
}
const imagesArray = [
  {
    imageId: 'firstImage',
    imageUrl: '',
    red: 90,
    green: 1,
    blue: 2 
  }, 
  {
    imageId: 'secondImage',
    imageUrl: '',
    red: 3,
    green: 77,
    blue: 4 
  }, 
  {
    imageId: 'thirdImage',
    imageUrl: '',
    red: 5,
    green: 10,
    blue: 6 
  }, 
]
const [inputsState, setInputsState] = React.useState(imagesArray)

function createOutput(){
  console.log('odpalam funkcje w rodzicu')




  setCanvas(<div>a co tam</div>)

  
}


return (
    <div className='container'>
      <Header />
      <InputImages  inputsState={inputsState} 
                    setInputsState={setInputsState} 
                    createOutput={createOutput}/>
      
      {canvas}
      {/* <canvas ref={outputRef} id='outputImage'></canvas> */}
      <Footer />
    </div>
  )
}

export default App
