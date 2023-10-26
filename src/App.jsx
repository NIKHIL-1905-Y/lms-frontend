import './App.css'

import { Routes,Route } from 'react-router-dom';


import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus';


function App() {
  

  return (
    <>

      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/about' element ={<Aboutus/>}></Route>
      </Routes>
   
  
     
    </>
  )
}

export default App;
