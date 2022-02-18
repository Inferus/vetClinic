import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  return (
    <nav className='navbar'>
   <Link className='link' to='/'>     <li className='navitem1'>
    
    Your dog
    
    </li></Link>
    <li className='navitem2'>
    
    О клинике
    
    </li>
    <li className='navitem3'>
    
    Цены
    
    </li>
    <li className='navitem4'>
    Команда
    
    
    </li>
    <li className='navitem5'>
    
    Контакты
    
    </li>
    <li className='navitem6'>
    
    Записаться на приём
    
    </li>
    
    
    </nav>
  )
  }