import './App.css';
import NavBar from './NavBar/NavBar';
import About from './NavBar/About';
import Achievements from './NavBar/Achiements'
import ContactUs from './NavBar/ContactUs';
import Footer from './NavBar/Footer';
import './NavBar/NavBar.css'
import Projects from './NavBar/Projects';

import { Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './NavBar/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/About" element={<About/>}/>
            {/* <Route path="/Achievements" element={<Achievements/>}/> */}
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/Projects" element={<Projects/>}/>     
          </Routes>
          <Footer />   

      </BrowserRouter> 
      
    </div>
  );
} 

export default App;
