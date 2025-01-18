import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

function DashNavebar() {
  // const[toggle, setToggle]=useState(false);

  // const handleToggle=()=>{
  //   setToggle(!toggle);
  // }
  return (
    <div className='fixed right-0 top-0 left-0'>
       <div className='py-4 bg-blue-500 text-white flex justify-between '>
                <div className='mx-5 flex gap-5'>
                <Link to="/admin" className='text-xl font-semibold'>Dashboard</Link>
                <FaUserCircle className='text-3xl'/>
                </div>
               {/* <div> 
                {toggle ? <RxCrossCircled className='text-4xl mr-2 md:hidden' onClick={handleToggle}/>:
                <CgMenuRound className='text-4xl mr-2 md:hidden' onClick={handleToggle}/>}
               </div> */}
            </div>
    </div>
  )
}

export default DashNavebar
