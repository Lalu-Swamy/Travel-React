import './styles.css'
import { Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Service from './Routes/Service'
import Contact from './Routes/Contact'
import Signup from './Routes/Signup'

export default function App(){
  return(
    <div>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<Home/>}></Route>  
      </Routes>
    </div>
  )
}