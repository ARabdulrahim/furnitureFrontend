import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import Navebar from './Navebar';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddtoCart() {
  const[data, setData]=useState([]);
  const[item, setItem]=useState([]);

  let fetchData=async()=>{
    let result=await axios.get("https://furniturebackend-8z3r.onrender.com/addtocart",{headers:{Authorization: `bearer ${JSON.parse(localStorage.getItem("Token"))}`}});
    setData(result.data.data);
    setItem(result.data.data.items);
  }

  let deldata=async(id)=>{
    try{
      let result=await axios.delete(`https://furniturebackend-8z3r.onrender.com/addtocart/${id}`, {headers:{Authorization: `bearer ${JSON.parse(localStorage.getItem("Token"))}`}});
      toast.success(result.data.message,{autoClose:1500});
    }catch(err){
      console.log("error : ", err);
    }
  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <>
    <Navebar/>
     <div className='mt-40'>
      <div>
        {
          item.map((el)=>{
            return (
              <>
             <div className='mb-5 flex justify-evenly'>
              <div >
               <Link to={`/show/${el.prodId}`}> <img src={el.img} alt="" className='h-[90px] w-[150px] rounded' /></Link>
              </div>
              <div>
                <p>Name : {el.title}</p>
                <p>Features : {el.discription}</p>
              </div>
              <div>
              <p>Quantity : {el.qty}</p>
              <p>Price : {el.price}</p>
              </div>
              <div>
              <p className='text-x pb-3' colSpan={3}> <Link to={`/buy/${el.prodId}`} className='text-xl hover:text-blue-500'>Buynow</Link></p>
              <button className='xs:text-x px-12 hover:text-red-500' onClick={()=>deldata(el._id)}><MdDelete className='text-4xl'/></button>
              </div>
             </div>
              </>
            )
          })
        }
      </div>
     </div>
     <div className="mt-[25%]">
     <Footer />
     </div>
    
    </>
  )
}

export default AddtoCart
