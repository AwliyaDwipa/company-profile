import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login page/login';
import Register from './registerpage/register';
import Homepage from './homepage/homepage';
import Aboutpage from './aboutpage/aboutpage';
import Kontak from './kontak/kontak';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/aboutpage' element={<Aboutpage/>}/>
        <Route path='/kontak' element={<Kontak/>}/>
      </Routes>
  );
}

export default App;
