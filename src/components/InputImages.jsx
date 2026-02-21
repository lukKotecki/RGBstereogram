import React from 'react'

export default function InputImages({ inputsState, setInputsState}){

    function handleInput(e){

        e.preventDefault()
        if(e.target.type === 'number'){
            if(e.target.id === 'width' || e.target.id === 'height' || e.target.id === 'chunkWidth' || e.target.id === 'chunkHeight'){
                setInputsState(prev=> prev.map((el, index) => {
                    if(index === 0){
                        return {...el, [e.target.id]: e.target.value}
                    }else
                        return {...el}
                }))
            }
            else {
                setInputsState(prev => prev.map((el, index)=> index == e.target.id.slice(0,1) ? 
                {...el, [e.target.id.slice(1)]: e.target.value}: el ))
            }
        }
        if(e.target.type === 'file'){
            handleImageUpload(e)
        }
    }
    
    function handleImageUpload(e){


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
        
        const canvas = document.getElementById('outputImage')
        if (!canvas) {
            console.warn('Canvas element not found')
            return
        }

        canvas.toBlob((blob) => {
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `stereogram-${new Date().getTime()}.png`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        }, 'image/png')
    }

    return (
        <form id='form-container'  onSubmit={handleSubmit} >

            {inputsState.map((el, index)=>
                <div key={el.imageId} className='input-wrapper-images'>
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
                                min='0' max='255' 
                                value={el.red}
                                data={{red: 'red'}}>
                        </input>
                        <label htmlFor={index+'green'}>Green:</label>
                        <input  onChange={handleInput} 
                                id={index+'green'} 
                                name={el.imageId+'Green'} 
                                type='number' 
                                min='0' max='255' 
                                value={el.green}>
                        </input>
                        <label htmlFor={index+'blue'}>Blue:</label>
                        <input  onChange={handleInput} 
                                id={index+'blue'} 
                                name={el.imageId+'Blue'} 
                                type='number' 
                                min='0' max='255' 
                                value={el.blue}>
                        </input>
                </div>
            </div>)}

            <div className='input-wrapper-dimensions'>
                <div className="number-inputs-wrapper">
                    <div>
                        <label htmlFor='width'>width: </label>
                        <input 
                            onChange={handleInput} 
                            className='input-dimensions' 
                            id='width' value={inputsState[0].width} 
                            type='number' 
                            min='1' max='10000'>
                        </input>
                    </div>
                    <div>

                        <label htmlFor='height'>height: </label>
                        <input
                            onChange={handleInput} 
                            className='input-dimensions' 
                            id='height' 
                            value={inputsState[0].height} 
                            type='number' min='1' max='10000'>
                        </input>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor='chunkWidth'>chunk width: </label>
                        <input 
                            onChange={handleInput} 
                            className='input-dimensions' 
                            id='chunkWidth' 
                            value={inputsState[0].chunkWidth} 
                            type='number' min='1' max='10000'>
                        </input>
                    </div>
                    <div>
                        <label htmlFor='chunkHeight'>chunk height: </label>
                        <input 
                            onChange={handleInput} 
                            className='input-dimensions' 
                            id='chunkHeight' 
                            value={inputsState[0].chunkHeight} 
                            type='number' min='1' max='10000'>
                        </input>
                    </div>
                </div>
                <input id='submit' type='submit' value="Download&#13;&#10;Image"/>
            </div>

        </form>

    )
}