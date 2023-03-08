

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {UserProvider} from './Usercontext';
import { useState } from 'react';
import Addform from './components/Addform';
import Tableviwe from './components/Tableviwe';
import Editform from './components/Editform';
import Deletform from './components/Deletform';

function App() {
  const[user,setUser]=useState([])
  return (
    <div className="container">
      <BrowserRouter>
      <UserProvider value={{user,setUser}}>
      <Routes>
      <Route path="/" element={<Tableviwe/>} />
      <Route path="/add" element={<Addform/>} />
      <Route path="/edit/:id" element={<Editform/>} />
      <Route path="/delet/:id" element={<Deletform/>} />
      </Routes>
      </UserProvider>
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
