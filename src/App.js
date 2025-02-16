import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserInfo from './components/UserInfo';
import DemoNavabar from './components/DemoNavabar';
import Product from './components/product';


function App() {
  return (
   <>
      <BrowserRouter>
      <DemoNavabar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/user" element={<UserInfo />}/>
          <Route path="/product" element={<Product />}/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
