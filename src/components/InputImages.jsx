import React from 'react'

export default function InputImages({ inputsState, setInputsState}){

    console.log(inputsState)

    function handleInput(e){
        e.preventDefault()
        console.log("To jest otrzymane: "+e.target.type)

        if(e.target.type === 'number'){
            setInputsState(prev=> ({...prev, [e.target.id]: e.target.value }))
        }else if(e.target.type === 'file'){
            const url = window.URL.createObjectURL(e.target.files[0])
            setInputsState(prev=>({ ...prev, [e.target.id]: url}))
            handleImageUpload(e)
        }
        
    }
    
    function handleImageUpload(e){
        console.log(e.target.files.length)
        switch(e.target.id){
            case 'firstImageUrl':
                console.log('kliknięto w pierwszym, ilość: '+e.target.files.length)
        }

    }

    return (
        <form id='form-container'>
            <div className='input-wrapper'>
                <img src={inputsState.firstImageUrl}/>
                <br/>
                <label htmlFor="firstImageUrl" className="custom-file-upload">
                    Upload file
                </label>
                <input onChange={handleInput} id="firstImageUrl" type="file" multiple />
                <div className='number-inputs-wrapper'>
                    <label htmlFor='firstRed'>Red: </label>
                    <input onChange={handleInput} id='firstRed' name='firstRed' type='number' min='0' max='100' value={inputsState.firstRed}></input>
                    <label htmlFor='firstGreen'>Green: </label>
                    <input onChange={handleInput} id='firstGreen' name='firstGreen' type='number' min='0' max='100' value={inputsState.firstGreen}></input>
                    <label htmlFor='firstBlue'>Blue: </label>
                    <input onChange={handleInput} id='firstBlue' name='firstBlue' type='number' min='0' max='100' value={inputsState.firstBlue}></input>
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