import React from 'react'

export default function InputImages({ inputsState, setInputsState}){

    console.log(inputsState)

    const canvasRef = React.useRef(null)
    
    // React.useEffect(()=>{
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //     // context.fillStyle = '#123123'
        
    //     const image = new Image()
    //     let URL = window.URL
    //     if(inputsState.secondImageUrl){
    //         image.src = URL.createObjectURL(inputsState.secondImageUrl)
    //         context.drawImage(image, 0, 0, canvas.width, canvas.height)
    //     }

    // },[inputsState])


    // input.addEventListener('change',(e)=>{
    //     const image = new Image()
    //     let URL = window.URL;
    //     let url = URL.createObjectURL(e.target.files[0]);
    //     image.src = url;
    
    //     image.addEventListener('load', ()=>{
    //         ctx.drawImage(image, 0, 0, 100,100)
    //         // ctx.drawImage(image, 0, 0)
    //     })
    // })

    function handleInput(e){
        e.preventDefault()

        // console.log(typeof e.target.files[0])
        //image.src = url;

        // let url = URL.createObjectURL(e.target.files[0]);
        // console.log(url)

        // if(e.target.value){
        //     setInputsState(prev=> ({...prev, [e.target.id]: e.target.value}))
        // }else if(e.target.files[0]){
        //     // let URL = window.URL;
        //     let url = URL.createObjectURL(e.target.files[0]);
        //     setInputsState(prev=>({
        //         ...prev, [e.target.id]: url
        //     }))
        // }
        const URL = window.URL
        const url = URL.createObjectURL(e.target.files[0])
        setInputsState(prev=>({
            ...prev,
            [e.target.id]: url
        }))

    }

    return (
        <form id='form-container' onChange={handleInput}>
            <div className='input-wrapper'>
                <div className='canvas-wrapper'>
                    {/* <canvas /> */}
                    <img src={inputsState.firstImageUrl}/>
                    <br/>
                    <label htmlFor="firstImageUrl" className="custom-file-upload">
                        Upload file
                    </label>
                    <input id="firstImageUrl" type="file" />
                    <canvas ref={canvasRef} id='canvas' >fota</canvas>
                    <div className='number-inputs-wrapper'>
                        <label htmlFor='firstRed'>Red: </label>
                        <input onChange={handleInput} id='firstRed' name='firstRed' type='number' min='0' max='100' value={inputsState.firstRed}></input>
                        <label htmlFor='firstGreen'>Green: </label>
                        <input onChange={handleInput} id='firstGreen' name='firstGreen' type='number' min='0' max='100' value={inputsState.firstGreen}></input>
                        <label htmlFor='firstBlue'>Blue: </label>
                        <input onChange={handleInput} id='firstBlue' name='firstBlue' type='number' min='0' max='100' value={inputsState.firstBlue}></input>
                    </div>
                </div>

                <div className='canvas-wrapper'>
                    {/* <canvas /> */}
                    <img src={inputsState.secondImageUrl}/>
                    <br/>
                    <label htmlFor="secondImageUrl" className="custom-file-upload">
                        Upload file
                    </label>
                    <input id="secondImageUrl" type="file" />
                    <div className='number-inputs-wrapper'>
                        <label htmlFor='second-red'>Red: </label>
                        <input id='second-red' name='second-red' type='number' min='0' max='100'></input>
                        <label htmlFor='second-green'>Green: </label>
                        <input id='second-green' name='second-green' type='number' min='0' max='100'></input>
                        <label htmlFor='second-blue'>Blue: </label>
                        <input id='second-blue' name='second-blue' type='number' min='0' max='100'></input>
                    </div>
                </div>
            </div>

            <div className='input-wrapper'>
                <div className="number-inputs-wrapper">

                    <label htmlFor='input-width'>width: </label>
                    <input id='input-width' type='number' min='1' max='10000'></input>
                    <label htmlFor='height-width'>height: </label>
                    <input id='height-width' type='number' min='1' max='10000'></input>
                    
                    
                </div>
                <input id='submit' type='submit'value='calculate'/>
            </div>

        </form>
    )
}