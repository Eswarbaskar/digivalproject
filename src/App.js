
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Addform from './Addform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tableviwe from './Tableviwe';
import UserProvider from './Usercontext';
import { useState } from 'react';

function App() {
  const[user,setUser]=useState([])
  return (
    <div className="container">
      <BrowserRouter>
      <UserProvider value={{user,setUser}}>
      <Routes>
      <Route path="/" element={<Tableviwe     />} />
      <Route path="/add" element={<Addform/>} />
      </Routes>
      </UserProvider>
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
