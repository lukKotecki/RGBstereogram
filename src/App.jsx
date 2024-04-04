import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import InputImages from './components/InputImages'

function App() {


const [inputsState, setInputsState] = React.useState({
  firstImageUrl: '',
  firstRed: 90,
  firstGreen: 10,
  firstBlue: 10,
  secondImageUrl: '',
  seconRed: 10,
  secondGreen: 90,
  secondBlue: 10,
  thirdImageUrl: '',
  thirdRed: 10,
  thirdGreen: 10,
  thirdBlue: 90,
  
})
  

  return (
    <div className='container'>
      <Header />
      <InputImages inputsState={inputsState} setInputsState={setInputsState}/>
      

      <Footer />
    </div>
  )
}

export default App
