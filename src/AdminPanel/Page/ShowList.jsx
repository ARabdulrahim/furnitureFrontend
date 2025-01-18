import React, { useEffect, useState } from 'react'
import DashNavebar from './DashNavebar'
import axios from 'axios';
import { json, Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../../Component/Footer';

function ShowList() {
  const[data, setData]=useState([]);
  const {id}=useParams();
  console.log(id);
  let fetchList=async()=>{
    try{
   let result=await axios.get("http://localhost:8080/list");
   setData(result.data.data);
    }catch(err){
      console.log("error :", err);
    }
  }

  //list delete
  let del=async(url)=>{
    try{
        let result=await axios.delete(`http://localhost:8080/list/id`,{headers:{"Content-Type": "application/json"},data: {url}});
        toast.success(result.data.message,{autoClose:1500});
        Navigate("/showlist");

    }catch(err){
        console.log("error ", err);
    }
}


  useEffect(()=>{
    fetchList();
  });
  return (
    <>
      <DashNavebar/>
      
    <div className='mt-32'>
      <div>
   {
    data.filter((el)=>{
      if(el.owner == localStorage.getItem("OwnerId")){
        return el;
      }
    })
    .map((el)=>{
      return(
        <>
       <div>
       <div className='border-4 border-white flex justify-evenly'>
         <div >
          <img src={el.img.url} alt="" className='xm:h-[160px] h-[170px] xm:w-[200px] w-[250px]'/>
         </div>
         <div className='mx-1 mt-3'>
         <p><b>Title :</b> {el.title}</p>
          <p><b>Discription :</b> {el.discription}</p>
          <p><b>Price :</b> {el.price}</p>
          <div className='flex gap-3'>
          <Link to={`/showList/edit/${el._id}`} className="mt-6 py-1 text-center border-4 border-white hover:border-black h-[45px] w-[90px] text-white text-xl rounded-md bg-orange-500 bg-blue-500 rounded-md shadow-2xl hover:shadow-lg hover:shadow-blue-500/50">Edit</Link>
          <button onClick={()=>del(el.img.filename)} className="mt-6 border-4 border-white hover:border-black h-[45px] w-[90px] text-white text-xl rounded-md bg-orange-500 bg-blue-500 rounded-md shadow-2xl hover:shadow-lg hover:shadow-blue-500/50">Delete</button>
         </div>
         </div>
         
        </div>
       </div>
        </>
      )
    })
   }
  
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default ShowList
