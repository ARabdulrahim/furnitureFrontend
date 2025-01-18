import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "./Sidebar";
import DashNavebar from "./DashNavebar";


export default function Createlist(){
    const[title, setTitle]=useState();
    const[discription, setDiscription]=useState();
    const[img, setImg]=useState();
    const[price, setPrice]=useState();
    const[qty, setQty]=useState();
    let Navigate=useNavigate();

    let handleSubmit= async(e)=>{
       try{
        e.preventDefault();
        const formdata=new FormData();
        formdata.append('title', title);
        formdata.append('discription', discription);
        formdata.append('img', img);
        formdata.append('price',price);
        formdata.append('qty',qty);
        let result=await axios.post("https://furniturebackend-8z3r.onrender.com/list/new",formdata,{headers: {"Content-Type": "multipart/form-data" ,authorization :`bearer ${JSON.parse(localStorage.getItem("Token"))}`}} );
        toast.success(result.data.message,{autoClose:1500})
        // (result.data.data.owner);
        Navigate("/showlist");
       }catch(error){
        toast.error(error.response.data.message ,{autoClose:1500});
       }
    }
    
    return (
        <>
        <DashNavebar/>
       
        <div className="flex flex justify-center ">
            <div className="bg-white mt-32 shadow-xl hover:shadow-4xl hover:shadow-red-500/50 border-2  rounded-md py-10 w-[50%] xs:w-[90%] ">
                
                <form className="mx-10 " onSubmit={handleSubmit}>
                    <div>
                    <label className="text-xl  font-semibold " htmlFor="title">Title</label><br />
                    <input className=" py-1 px-3  border-2 rounded-md border-black w-full" type="text" placeholder="Enter title"  id="title" required onChange={(e)=> setTitle(e.target.value)} /> 
                    </div>
                    <div className="mt-3">
                    <label className="text-xl   font-semibold " htmlFor="discription">Discription</label><br />
                    <textarea className=" py-1 px-3 border-2 rounded-md border-black w-full" type="text" placeholder="Enter discription"  id="discription" required onChange={(e)=> setDiscription(e.target.value)} />
                    </div>
                   <div className="mt-3">
                   <label className="text-xl  font-semibold " htmlFor="img">Image URL</label>
                   <input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="file" name="img" id="img" onChange={(e)=> setImg(e.target.files[0])} /><br />
                   </div>
                   <div className="mt-3">
                   <label className="text-xl  font-semibold " htmlFor="price">Price</label>
                   <input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="text" placeholder="Enter price" id="price" required onChange={(e)=> setPrice(e.target.value)} /><br />
                   </div>
                   <div className="mt-3">
                   <label className="text-xl  font-semibold " htmlFor="price">Quantity</label>
                   <input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="Number" placeholder="Enter quantity" id="qty" required onChange={(e)=> setQty(e.target.value)} /><br />
                   </div>
                   <div className="mt-3 flex justify-center ">
                   <button className="mt-6 border-4  hover:border-black h-[45px] w-[90px] text-white text-xl rounded-md bg-orange-500  rounded-md shadow-2xl hover:shadow-lg hover:shadow-blue-500/50">Create</button>
                   </div>
                </form>

            </div>
        </div><br />
        </>
    )
}