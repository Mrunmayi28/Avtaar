
import './App.css';
import Modal from 'react-modal';
import { Route , Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Calendar from './Calendar/Calendar';
import Login from './Login/Login';
import Register from './Register/Register';

Modal.setAppElement('#root');


const App= () =>{
  return (
<div>
    <Navbar/>
      <Routes >
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
       <Route exact path='/home' element={<Calendar/>}/>

      </Routes>
</div>
  );
}

export default App;
