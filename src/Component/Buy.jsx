import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navebar from './Navebar'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom';
import WithAuth from '../utils/WithAuth';

function Buy() {
  const[data, setData]=useState([]);
  const[image, setImage]=useState({});
  let {id}=useParams();
  let showUniquedata = async(id)=>{
    try{
     let result=await axios.get(`https://furniturebackend-8z3r.onrender.com/list/${id}`);
     setData(result.data.data);
     setImage(result.data.data.img)
    }catch(err){
     console.log("error ", err);
    }
     
 }
 useEffect(()=>{
  showUniquedata(id);
},[]);
console.log(image);
  return (
    <>
    <Navebar/>
      <div className='mt-32'>
      <div className='xb:flex justify-center'>
      <div className='mx-2 md:flex justify-evenly '>
       <div>
       <img src={image.url} alt="" className=' shadow-xl hover:shadow-2xl hover:shadow-red-500/50 rounded-md h-[350px] w-[435px]' />
       <p className='mt-5 text-2xl '>{data.title}</p>
       </div>
       <div>
        <p><b className='text-xl'>Features :</b> {data.discription}</p>
        <p><b className='text-xl'>price :</b> {data.price}</p>
        <div className='bg-white rounded-md shadow-xl hover:shadow-2xl hover:shadow-red-500/50 mt-10 xs:flex justify-center '>
          <form className=' mx-4 my-4 h-[300px] xs:h-[400px]'>
          <div className='sm:flex gap-3'>
          <div className='mt-2'>
            <label htmlFor="name">Name</label><br></br>
           <input type='text' id='name' className='px-2 border-2 border-black rounded-md' />
           </div>
           <div className='mt-2'>
            <label htmlFor="state">Phone</label><br/>
           <input type='number' id='state' className='px-2 border-2 border-black rounded-md'/>
           </div>
          </div>
          <div  className='mt-3 sm:flex gap-3'>
           <div>
            <label htmlFor="city">City</label><br/>
           <input type='text' id='city' className='px-2 border-2 border-black rounded-md' />
           </div>
           <div>
            <label htmlFor="pin">Pin Code</label><br/>
           <input type='number' id='pin' className='px-2 border-2 border-black rounded-md'/>
           </div>
           </div>
           <div className='sm:flex justify-center'>
           <div className='mt-4'>
            <label htmlFor="address">Address</label><br/>
           <textarea id='address'  className='w-[200px] px-2 border-2 border-black rounded-md'/>
           </div>
           </div>
           <div className='mt-5 text-center flex justify-center'>
        <button className=" border-4 rounded-md bg-orange-500 hover:border-black  h-[40px] w-[100px] px-2 py-1 text-white text-x font-semibold">Order</button>
        </div>
          </form>
        </div>
        
       </div>
       </div>
      </div>
      </div>
      <div className='mt-18'>
      <Footer/>
      </div>
    </>

  )
}

export default WithAuth(Buy);
