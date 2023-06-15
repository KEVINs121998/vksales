import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Products from './pages/Products';
import Contactus from './pages/Contactus';
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
  <Route path='/contact-us' element={<Contactus/>}/>
  <Route path='/products' element={<Products/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
