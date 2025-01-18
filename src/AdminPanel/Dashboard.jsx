import React, { useEffect, useState } from 'react'
import DashNavebar from './Page/DashNavebar'
import Sidebar from './Page/Sidebar'
import {jwtDecode} from 'jwt-decode'
import { Link } from 'react-router-dom'




function Dashboard() {
  
  const[info, setInfo]=useState([]);
  const token=localStorage.getItem("Token");
  
 useEffect(()=>{
  if(token){
    const decode=jwtDecode(token);
    setInfo(decode);
  }
 },[])

  return (
    <>
       <DashNavebar/>
       <Sidebar/>
       <div className=' flex justify-center'>
        <div className='mt-24  flex justify-center'>
            <div className='bg-black text-white sm:ml-[200px] xm:ml-[75px] sm:h-[300px] sm:w-[300px] xm:w-[210px] border-2  border-black rounded-md shadow-xl hover:shadow-2xl hover:shadow-red-500/50 text-center flex flex-col items-center'>
            <div className='mt-10 flex justify-center'> 
                <img src={info.img} alt="" className='h-[100px] w-[100px] border-2 border-orange-500 rounded-full ' />
            </div>
            <div className='mt-4 flex justify-center'>
             <Link to="/user/profile" className='border-2 rounded-md px-2 hover:bg-orange-500'>Update Image</Link>
             </div>
            <p  className='mx-3 mt-3 text-xl'><b>Username : </b>{info.username}</p>
            <p className='mt-2 py-1 text-xl '><b>Role : </b>{info.role}</p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Dashboard
