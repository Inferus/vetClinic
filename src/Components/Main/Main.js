import React from 'react'
import './Main.css'
export const Main = () => {
  return (
    <div className='main'>
        <div className='bigText'> 
Your dog

        </div>
        <div className='description'> 
        Добро пожаловать в новую клинику Your Dog в Санкт-Петербурге

        </div>
        <button className='btn' >Записаться на приём
</button>
<img className='imagemain' alt='dog' src='https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg'></img>
    </div>
  )
}
