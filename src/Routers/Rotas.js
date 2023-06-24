
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home/Home';
import Catalogo from '../pages/catalogo/Catalogopage';
import React from 'react';

function Rotas() {
  return(
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/Catalogo' element={<Catalogo/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}


export default Rotas;