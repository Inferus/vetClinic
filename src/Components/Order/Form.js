import './Form.css'


import React from 'react'

export const Form = () => {
  return (
    <form className='orderForm'>
<label>Ваше имя</label>
<input type='text'></input>
<label>Номер телефона</label>
<input type='number'></input>
<label>Ваше сообщение</label>
<textarea type='text'></textarea>
<button>Записаться</button>
    </form>
  )
}
