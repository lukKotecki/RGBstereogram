import React from 'react'

export default function InputImages({ inputsState, setInputsState}){

    console.log(inputsState)

    function handleInput(e){
        e.preventDefault()
        console.log("To jest otrzymane: "+e.target.id)
        
        if(e.target.type === 'number'){
            setInputsState(prev => prev.map((el, index)=> index == e.target.id.slice(0,1) ? 
                            {...el, [e.target.id.slice(1)]: e.target.value}: el ))
        }
        if(e.target.type === 'file'){
            setInputsState(prev => prev.map((el, index)=>{
                const url = window.URL.createObjectURL(e.target.files[0])
                console.log(url)
                return el.imageId == e.target.id ? 
                    {...el, imageUrl: url } : el
            }))
        }


        // // dzialające bez mapowania inutów
        // if(e.target.type === 'number'){
        //     setInputsState(prev=> ({...prev, [e.target.id]: e.target.value }))
        // }else if(e.target.type === 'file'){
        //     const url = window.URL.createObjectURL(e.target.files[0])
        //     setInputsState(prev=>({ ...prev, [e.target.id]: url}))
        //     handleImageUpload(e)
        // }
        
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
            {/* <div className='input-wrapper'>
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
            </div> */}


            {inputsState.map((el, index)=>
                <div key={el.imageId} className='input-wrapper'>
                    <img src={el.imageUrl}/>
                    <br/>
                    <label htmlFor={el.imageId} className="custom-file-upload">
                        Upload file
                    </label>
                    <input onChange={handleInput} id={el.imageId} type="file" multiple />
                    <div className='number-inputs-wrapper'>
                        <label htmlFor={el.imageId+'Red'}>Red: </label>
                        <input  onChange={handleInput} 
                                id={index+'red'} 
                                name={el.imageId+'Red'} 
                                type='number' 
                                min='0' max='100' 
                                value={el.red}
                                data={{red: 'red'}}>
                        </input>
                        <label htmlFor={el.imageId+'Green'}>Green: </label>
                        <input  onChange={handleInput} 
                                id={index+'green'} 
                                name={el.imageId+'Green'} 
                                type='number' 
                                min='0' max='100' 
                                value={el.green}>
                        </input>
                        <label htmlFor={el.imageId+'Blue'}>Blue: </label>
                        <input  onChange={handleInput} 
                                id={index+'blue'} 
                                name={el.imageId+'Blue'} 
                                type='number' 
                                min='0' max='100' 
                                value={el.blue}>
                        </input>
                </div>
            </div>)}



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