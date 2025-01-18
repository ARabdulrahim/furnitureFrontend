import React, { useState } from 'react'
import Navebar from '../Navebar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
    const[image, setImage]=useState(null);
    const Navigate=useNavigate();
    const HandleSubmit=async(e)=>{
        const formData = new FormData();
                formData.append('img', image);
                let result=await axios.post("https://furniturebackend-8z3r.onrender.com/user/profile",formData,{headers:{'Content-Type': 'multipart/form-data', authorization :`bearer ${JSON.parse(localStorage.getItem("Token"))}`}});
                Navigate("/user");
    }
  return (
    <>
    <Navebar/>
    <div className='mt-20 flex justify-center'>
       <form onSubmit={HandleSubmit} className='border-4 px-3 rounded-md flex flex-col items-center '>
       <div className='mt-5'>
       <input type="file" name="img" onChange={(e)=>{setImage(e.target.files[0])}}/>
       </div>
       <button className="mt-6 mb-5 border-4 h-[40px] w-[90px] text-white hover:border-black rounded-md bg-orange-500  rounded-md shadow-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50">Update</button>
       </form>
    </div>
    <div className='mt-[350px]'>
    <Footer />
    </div>
    </>
  )
}

export default UserProfile
