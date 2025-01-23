

import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './common/Navbar'
import Home from './components/Home';
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
// import NotFound from './pages/NotFound'
import Service from './components/Service'
import Contact from './components/Contact'
import ForgetPassword from './pages/ForgetPassword'



function App(props) {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/cart'  element={<Cart/>} />
    <Route path='/signup'  element={<SignUp/>} />
    <Route path='/login'  element={<Login/>} />
    {/* <Route path='*'  element={<NotFound/>} /> */}
    <Route path='/service'  element={<Service/>} />
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/forget'  element={<ForgetPassword/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;