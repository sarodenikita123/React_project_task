import './App.css';
import Add from './Componants/Pages/Add';
import Show from './Componants/Pages/Show';
import Update from './Componants/Pages/Update';
import Delete from './Componants/Pages/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componants/Layout/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/add' element={<Add/>}></Route>
        <Route  path='/show'element={<Show/>} ></Route>
        <Route path="/update/:userId" element={<Update/>}></Route>
          <Route path="/delete/:userId" element={<Delete/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
