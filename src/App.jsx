

import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './common/Navbar'
import Home from './components/Home';
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Service from './components/Service'
import Contact from './components/Contact'
import ForgetPassword from './pages/ForgetPassword'
import Fruit from './pages/Fruit';
import Vegi from './pages/Vegi';
import Masala from './pages/Masala';
import Grains from './pages/Grains';
import Ghee_Oil from './pages/Ghee_Oil';
import Dry_Fruits from './pages/Dry_Fruits';
import Nuts_Seed from './pages/Nuts_Seed';
import Whole_Masala from './pages/Whole_Masala';
import Sugar_Salt from './pages/Sugar_Salt';



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
    <Route path='/allFruit'  element={<Fruit/>} />
    <Route path='/allVegi'  element={<Vegi/>} />
    <Route path='/allMasala'  element={<Masala/>} />
    <Route path='/allGrains'  element={<Grains/>} />
    <Route path='/allGhee_oil'  element={<Ghee_Oil/>} />
    <Route path='/allDry_Fruits'  element={<Dry_Fruits/>} />
    <Route path='/allNuts_seed'  element={<Nuts_Seed/>} />
    <Route path='/allWhole_masala'  element={<Whole_Masala/>} />
    <Route path='/allSugar_salt'  element={<Sugar_Salt/>} />
    <Route path='*'  element={<NotFound/>} />
    <Route path='/service'  element={<Service/>} />
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/forget'  element={<ForgetPassword/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;