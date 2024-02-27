import React from 'react'
import { useState } from 'react'

function Hello() {
    const [textMessage, settextMessage]=useState('')

    function hide(){
        settextMessage('')


    }
    function show(){
        settextMessage("Hello World!")
    }

  return (
    <div className='d-flex justify-content-center m-5'>
        <div className='text-center border border-5 '>

        <h1>{textMessage}</h1>
        <img width="500px" src="https://i.pinimg.com/originals/88/37/f7/8837f706bfad179e1c6d78ed14679a27.gif" alt="" />
        <div>
            <button onClick={show} className='btn btn-success mx-2'>Show</button>
            <button onClick={hide} className='btn btn-danger'>Hide</button>

        </div>
        </div>
        
    </div>
  )
}

export default Hello