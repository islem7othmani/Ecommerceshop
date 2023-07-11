import HomePage from './Pages/HomePage';
import './App.css';
import ShopPage from './Pages/ShopPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './Pages/ContactUS';

function App() {
  return (
   <>
   <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Shop" element={<ShopPage/>} />
      <Route path="/Contact" element={<ContactUs/>} />
      
      </Routes>
    </Router>
   
    
   </>
  );
}

export default App;
