import React, { useEffect, useState } from 'react'
import Navebar from '../Navebar'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom';

function UserHome() {
    const[info, setInfo]=useState([]);
    let fetchInfor=()=>{
        setInfo(jwtDecode(localStorage.getItem("Token")));
    }
    useEffect(()=>{
        fetchInfor();
    },[])
  return (
   <>
   <Navebar/>
   <div className='mt-40 flex justify-center'>
    <div className='border-2 border-black bg-black text-white rounded-xl h-[270px] sm:h-[320px] w-[250px] sm:w-[330px] shadow-2xl '>
        <div className='mt-10 flex justify-center'> 
                <img src={info.img} alt="" className='h-[100px] w-[100px] border-2 border-orange-500 rounded-full ' />
        </div>
        <div className='mt-4 flex justify-center'>
        <Link to="/user/profile" className='border-2 rounded-md px-2 hover:bg-orange-500 '>Update Image</Link>
        </div>
       <p className='mt-3 mx-3 text-center sm:text-2xl'><b >Username :</b> {info.username}</p>
       <p className='mt-3 mb-2 mx-3 text-center sm:text-2xl'><b>Role :</b> {info.role}</p>
    </div>
   </div>
   </>
  )
}

export default UserHome
