import axios from "axios";
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DashNavebar from "./DashNavebar";
import Footer from '../../Component/Footer';


export default function UpdateList(){

    const[title, setTitle]=useState("");
    const[discription, setDiscription]=useState("");
    const[img, setImg]=useState("");
    const[price, setPrice]=useState("");
    let{id}=useParams();
    let Navigate=useNavigate();

    let getdata=async()=>{
            try{
            let result=await axios.get(`http://localhost:8080/list/list/${id}`);
               setTitle(result.data.data.title);
               setDiscription(result.data.data.discription);
               setImg(result.data.data.img.url);
               setPrice(result.data.data.price);
            }catch(err){
                console.log("error ", err);
            }
    }
    useEffect(()=>{
        getdata(id);
    },[id]);

    let handleSubmit= async(e)=>{
       try{
        e.preventDefault();
        const formdata=new FormData();
        formdata.append("title", title);
        formdata.append("discription", discription);
        if(img){
            formdata.append('img', img);
        }
       
        formdata.append("price",price);
        let result=await axios.put(`http://localhost:8080/list/edit/${id}`,formdata,{headers:{"Content-Type": "multipart/form-data"}});
        toast.success(result.data.message,{autoClose:1500})
        Navigate("/showList");
       }catch(err){
        toast.error(err.response.data.message);
       }
    }

   
    return (
   
         <>
      <DashNavebar/>
  
        <div className=" flex flex justify-center ">
            <div className="bg-white mt-24 border-2 shadow-xl hover:shadow-4xl hover:shadow-red-500/50  rounded-md py-10 w-[50%] xs:w-[90%] ">
                
                <form className="mx-10" onSubmit={handleSubmit}>
                    <div className="mt-3">
                    <label className="text-xl  font-semibold " htmlFor="title">Title</label><br />
                    <input className=" py-1 px-3 rounded-md border-2 border-black w-full" type="text"  id="title"  required value={title} onChange={(e)=> setTitle(e.target.value)} /> 
                    </div>
                    <div className="mt-3">
                    <label className="text-xl  font-semibold " htmlFor="discription">Features</label><br />
                    <textarea className=" py-1 px-3 rounded-md border-2 border-black w-full" type="text"  id="discription" required value={discription} onChange={(e)=> setDiscription(e.target.value)} />
                    </div>
                    <div>
                        <img src={img} alt="" className="w-[] h-[200px] w-full rounded"/>
                    </div>
                    <div className="mt-3">
                    <label className="text-xl font-semibold " htmlFor="img">Upload Image</label><br />
                    <input className=" py-1 px-3 rounded-md border-2 border-black w-full" name="img" type="file"  id="img"   onChange={(e)=> setImg(e.target.files[0])} />
                    </div>
                    <div className="mt-3">
                    <label className="text-xl font-semibold " htmlFor="price">Price</label><br />
                    <input className=" py-1 px-3 rounded-md border-2 border-black w-full" type="text"  id="price" required value={price} onChange={(e)=> setPrice(e.target.value)} />
                    </div>
                   <div className="mt-3 flex justify-center">
                   <button className="mt-6 border-4 hover:border-black h-[45px] w-[90px] text-white text-xl rounded-md bg-orange-500 bg-blue-500 rounded-md shadow-2xl hover:shadow-lg hover:shadow-blue-500/50">Update</button>
                   </div>
                </form>
            </div>
        </div>
        <Footer/>
        
        </>
    
    )
}