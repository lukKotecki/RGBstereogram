import React from 'react'
import InputImages from './InputImages'
import OutputImage from './OutputImage'

export default function HomePage({ inputsState, setInputsState }) {
  const [outputImage, setOutputImage] = React.useState(null)

  React.useEffect(() => {
    setOutputImage(<OutputImage inputsState={inputsState} />)
  }, [inputsState])

  return (
    <>
      <InputImages inputsState={inputsState} setInputsState={setInputsState} />
      {outputImage}
    </>
  )
}
