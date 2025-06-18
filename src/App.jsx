

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
import { SearchProvider} from "./context/SearchContext";
import Product from './components/Product';
import ProductDetail from './pages/ProductDetail';
import PlaceOrder from './pages/PlaceOrder';



function App(props) {
  return (
    <>
    <SearchProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/cart'  element={<Cart/>} />
    <Route path='/signup'  element={<SignUp/>} />
    <Route path='/login'  elemen={<Login/>} />
    <Route path='/allData' element={<Product/>} />
    <Route path='/allData/:id' element={<ProductDetail/>} />
    <Route path='/allFruit'  element={<Fruit/>} />
    <Route path='/allVegetables'  element={<Vegi/>} />
    <Route path='/allPowder-Masala'  element={<Masala/>} />
    <Route path='/allGrains'  element={<Grains/>} />
    <Route path='/allGhee-Oil'  element={<Ghee_Oil/>} />
    <Route path='/allDry-Fruit'  element={<Dry_Fruits/>} />
    <Route path='/allNuts-Seed'  element={<Nuts_Seed/>} />
    <Route path='/allWhole-Masala'  element={<Whole_Masala/>} />
    <Route path='/allSugar-Salt'  element={<Sugar_Salt/>} />
    <Route path='*'  element={<NotFound/>} />
     <Route path='/placeOrder'  element={<PlaceOrder/>} />
    <Route path='/service'  element={<Service/>} />
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/forget'  element={<ForgetPassword/>} />
    </Routes>
    </BrowserRouter>
    </SearchProvider>
    
    </>
  );
}

export default App;