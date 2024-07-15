import NavBar from './components/Layout/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Home from './components/pages/Home.js';
import Add from './components/pages/User/Add.js'
import Show from './components/pages/User/Show.js';

function App() {
  return (
      <>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/user/add" element={<Add/>}></Route>
        <Route path="/user/show" element={<Show/>}></Route>
      </Routes>
      
      </BrowserRouter>
      </>
  );
}

export default App;
