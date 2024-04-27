import React from 'react'

export default function InputImages({ inputsState, setInputsState}){

    function handleInput(e){
        e.preventDefault()
        if(e.target.type === 'number'){
            if(e.target.id === 'width' || e.target.id === 'height' || e.target.id === 'chunkSize' ){
                setInputsState(prev=> prev.map((el, index) => {
                    if(index === 0){
                        return {...el, [e.target.id]: e.target.value}
                    }else
                        return {...el}
                }))
            }else{
                setInputsState(prev => prev.map((el, index)=> index == e.target.id.slice(0,1) ? 
                {...el, [e.target.id.slice(1)]: e.target.value}: el ))
            }
        }
        if(e.target.type === 'file'){
            handleImageUpload(e)
        }
    }
    
    function handleImageUpload(e){
        console.log(e.target.files.length)
        switch(e.target.files.length){
            case 1:
                setInputsState(prev => prev.map((el, index)=>{
                    const url = window.URL.createObjectURL(e.target.files[0])
                    return el.imageId == e.target.id ? 
                    {...el, imageUrl: url } : el
                }))
                return;
            case 2:
                /// TODO handle 2 images input
                setInputsState(prev => prev.map((el, index)=>{
                    const url = window.URL.createObjectURL(e.target.files[0])
                    return el.imageId == e.target.id ? 
                    {...el, imageUrl: url } : el
                }))
                return;
            default:
                setInputsState(prev => prev.map((el, index)=>{
                    return {...el, imageUrl: window.URL.createObjectURL(e.target.files[index]) }
                }))
                return
        }

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('kliku')
        setInputsState(prev=> [...prev])
    }

    return (
        <form id='form-container'  onSubmit={handleSubmit} >

            {inputsState.map((el, index)=>
                <div key={el.imageId} className='input-wrapper'>
                    <img src={el.imageUrl}/>
                    <br/>
                    <label htmlFor={el.imageId} className="custom-file-upload">
                        Upload file
                    </label>
                    <input onChange={handleInput} id={el.imageId} type="file" multiple />
                    <div className='number-inputs-wrapper'>
                        <label htmlFor={index+'red'}>Red:</label>
                        <input  onChange={handleInput} 
                                id={index+'red'} 
                                name={el.imageId+'Red'} 
                                type='number' 
                                min='0' max='100' 
                                value={el.red}
                                data={{red: 'red'}}>
                        </input>
                        <label htmlFor={index+'green'}>Green:</label>
                        <input  onChange={handleInput} 
                                id={index+'green'} 
                                name={el.imageId+'Green'} 
                                type='number' 
                                min='0' max='100' 
                                value={el.green}>
                        </input>
                        <label htmlFor={index+'blue'}>Blue:</label>
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
                    <label htmlFor='width'>width: </label>
                    <input 
                        onChange={handleInput} 
                        className='input-dimensions' 
                        id='width' value={inputsState[0].width} 
                        type='number' 
                        min='1' max='10000'>
                    </input>
                    <label htmlFor='height'>height: </label>
                    <input
                        onChange={handleInput} 
                        className='input-dimensions' 
                        id='height' 
                        value={inputsState[0].height} 
                        type='number' min='1' max='10000'>
                    </input>
                    <br/>
                    <label htmlFor='chunkSize'>chunk size: </label>
                    <input 
                        onChange={handleInput} 
                        className='input-dimensions' 
                        id='chunkSize' 
                        value={inputsState[0].chunkSize} 
                        type='number' min='1' max='10000'>
                    </input>
                </div>
                <input id='submit' type='submit'value='recalculate'/>
            </div>

        </form>

    )
}