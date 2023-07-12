import HomePage from './Pages/HomePage';
import './App.css';
import ShopPage from './Pages/ShopPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './Pages/ContactUS';
import AboutUsPage from './Components/About';
import OneProduct from './Components/OneProduct';
import SignUp from './Pages/SignUP';
import LogIn from './Pages/LogIn';


function App() {
  return (
   <>
  
   <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Shop" element={<ShopPage/>} />
      <Route path="/Contact" element={<ContactUs/>} />
      <Route path="/About" element={<AboutUsPage/>} />
      <Route path="/Signup" element={<SignUp/>} />
      <Route path="/LogIn" element={<LogIn/>} />
      <Route path="/product1" element={<OneProduct/>} />
      </Routes>
    </Router>
   
    
   </>
  );
}

export default App;
