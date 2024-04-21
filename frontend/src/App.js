import logo from './logo.svg';
import './App.css';
import  Navbar from './components/navbar';
import Pro from './components/productlist';
import Log from './components/pages/login';
import Be from './components/pages/catalog'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SearchProvider } from "./components/pages/search"
import {UserProvider} from "./components/pages/Usercontext"
import { CartProvider } from './components/pages/cartContext';
import AddressForm  from './components/ordercard';
import PaymentComplete from './components/payment';
import Register from './components/pages/register';
import Paymentoptions from './components/pages/paymentoptions';
import Footer from './components/pages/footer';
import FAQ from "./components/pages/faq"
import Cart from "./components/cart";
import Profile from './components/pages/profile';
import About from './components/pages/aboutus';
import Contact from './components/pages/contactus';
function App() {
 
 return(
   <Router>
       <SearchProvider>
       <UserProvider>
        <CartProvider>
        <Navbar />
  <Routes>
  <Route path='/' element={<Pro />} />
  <Route path='/about' element={<Register />}/>
  <Route path='/Categories/:category' element={<Be />}/>
  <Route path='/loginform' element={<Profile />}/>
  <Route path='/payment' element={<PaymentComplete/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/services' element={<Contact />}/>
  <Route path='/paymentoptions' element={<Paymentoptions />}/>
  <Route path='/aboutus' element={<About />}/>
  <Route path='/FAQ' element={<FAQ />}/>
  </Routes>
  <Footer />
  </CartProvider>
  </UserProvider>
  </SearchProvider>
 
  </Router>
  
  
 )
}

export default App;
