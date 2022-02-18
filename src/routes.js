import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { MainPage } from './Pages/MainPage'
import {OrderPage} from './Pages/OrderPage'
export const useRoutes = () => {
  return (
   <Routes>
<Route path='/order' element={<OrderPage/>}>


</Route>
<Route path='/' element={<MainPage/>}>


</Route>
   </Routes>
  )
}
