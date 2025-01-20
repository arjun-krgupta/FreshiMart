

import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './common/Navbar'
import Home from './components/Home';
import Cart from './pages/Cart'
import Vegi from './pages/Vegi'
import Fruit from './pages/Fruit'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
// import NotFound from './pages/NotFound'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import Shop from './pages/Shop'
import ForgetPassword from './pages/ForgetPassword'



function App(props) {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/cart'  element={<Cart/>} />
    <Route path='/vegi'  element={<Vegi/>} />
    <Route path='/fruit'  element={<Fruit/>} />
    <Route path='/signup'  element={<SignUp/>} />
    <Route path='/login'  element={<Login/>} />
    {/* <Route path='*'  element={<NotFound/>} /> */}
    <Route path='/service'  element={<Service/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/shop'  element={<Shop/>} />
    <Route path='/forget'  element={<ForgetPassword/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;