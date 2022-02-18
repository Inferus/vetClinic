import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import bone from './image/bone.svg'
export const Main = () => {

const [fadeIn, setfadeIn] = useState('noclass')
function scrollIt (e){
    console.log(e)
    if (e.scrollX === '50px') {setfadeIn('fadeIn')}
    
}
    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            console.log(e)
            if (e.scrollX === '50px') {setfadeIn('fadeIn')}})
        return window.removeEventListener('scroll', scrollIt)
    },[])
  return (
    <div className='main'>
        <div className='bigText'> 
Your dog

        </div>
        <div className='description'> 
        Добро пожаловать в новую клинику Your Dog в Санкт-Петербурге

        </div>
       
        <img className='bone' alt='bone' src={bone}></img>
       <Link to="/order"> <button className='btn' >Записаться на приём
</button></Link>
<img className='imagemain' alt='dog' src='https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg'></img>
    
    <div className={`littleHeading ${fadeIn}`}>
    Центр вакцинации и профилактической ветеринарной медицины Your Dog

    </div>
    <div className='roller'>



    </div>
    
    <div className={`litleDescription ${fadeIn}`}>
    Мы относимся к маленьким друзьям с заботой
и вниманием. Наша основная цель — сохранить здоровье вашего питомца на долгие годы. При первом осмотре
мы составим индивидуальную программу по кормлению, физической активности, уходу, профобработкам, вакцинациям
и диспансеризациям для животного 
на ближайший срок (до перехода питомца в следующую возрастную категорию)
    </div>
    </div>
  )
}
