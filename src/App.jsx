import Home from "./Component/Home.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Show from "./Component/Show.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Createlist from './AdminPanel/Page/Createlist.jsx'
import Signup from "./Component/Users/Signup.jsx";
import Login from "./Component/Users/Login.jsx";
import AddtoCart from "./Component/AddtoCart.jsx";
import Buy from "./Component/Buy.jsx";
import Dashboard from "./AdminPanel/Dashboard.jsx";
import ShowList from "./AdminPanel/Page/ShowList.jsx";
import UpdateList from "./AdminPanel/Page/UpdateList.jsx";
import UserHome from "./Component/Users/UserHome.jsx";
import UserProfile from "./Component/Users/UserProfile.jsx";


  

function App() {
  const token=localStorage.getItem("Token");

  return (
    
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/show/:id" element={<Show/>}/>
      <Route path="/new" element={<Createlist/>}/>
      <Route path="showList/edit/:id" element={<UpdateList/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user" element={<UserHome/>}/>
      <Route path="/user/profile" element={<UserProfile/>} />
      <Route path="/cart" element={<AddtoCart/>}/>
      <Route path="/buy/:id" element={<Buy/>}/>
      <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/showlist" element={<ShowList/>}/>
     </Routes>
     <ToastContainer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
