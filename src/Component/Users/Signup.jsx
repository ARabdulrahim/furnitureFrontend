import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navebar from "../Navebar";
import Footer from "../Footer";
import img from "/src/assets/Chair.avif"


export default function Signup(){
    const[username, setUsername]=useState();
    const[email, setEmail]=useState();
    const[password, setPassword]=useState();
    const[roleOption, setRoleOption]=useState("customer");
    
    let Navigate=useNavigate();
    const roleData={selectopt : roleOption};
    let handleSubmit=async(e)=>{
       try{
        e.preventDefault();
        let result=await axios.post("https://furniturebackend-8z3r.onrender.com/user/signup",{username, email, password, role : roleData.selectopt },{headers:{"Content-Type":"application/json"}});
        toast.success(result.data.message,{autoClose:1500});
        localStorage.setItem("Users", JSON.stringify(result.data.data));
        Navigate("/login");
        setUsername("");
        setEmail("");
        setPassword("");
        setRoleOption("");
       
       }catch(error){
        toast.error(error.response.data.message.message,{autoClose:1500});
        toast.error(error.response.data.message,{autoClose:1500});
       }
        
    }
    return (
        <>
        <Navebar/>
        <div className="mt-40 flex justify-evenly xs:flex ">
            
            <div className="border-2 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:shadow-red-500/50 grid grid-cols-2 xs:grid-cols-1  lg:w-[60%] w-[80%] xs:w-[90%]">
            <div className=" mt-5 lg:mt-20">
                
                <form className="mx-5 " onSubmit={handleSubmit}>

                   <div className="flex">
                    <FaUserCircle className="text-3xl"/>
                    <select onChange={(e)=>setRoleOption(e.target.value)} className="py-1 px-3 border-2 border-black rounded-md w-[100%]">
                    <option value="" disabled>Choose User</option>
                    <option value="customer">customer</option>
                    <option value="admin">admin</option>
                    </select>
                   </div>
                   <div className="mt-5 flex justify-evenly">
                    <FaUser className="text-3xl"/> 
                    <input className=" py-1 px-3  border-2 rounded-md border-black w-full" placeholder="Enter user name" type="text"  id="username" required onChange={(e)=> setUsername(e.target.value)} /> 
                    </div>
                    <div className="mt-5 flex">
                    <MdEmail className="text-3xl"/><input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="email" placeholder="Enter email"  id="email" required onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="mt-5 flex">
                        <RiLockPasswordFill className="text-3xl"/> <input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="password" placeholder="Enter password" id="img" required onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <p className="mt-4 text-x ">Already have an account?  &nbsp; <Link to="/login" className="hover:text-blue-500 font-bold underline decoration-solid "> Log_in</Link></p>
                   <div className="flex justify-center">
                   <button className="mt-6 border-4 h-[45px] w-[90px] text-white hover:border-black rounded-md bg-orange-500  rounded-md shadow-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50">Sign up</button>
                   </div>
                </form>
            </div>

            <div className=" ">
                <img src={img} alt="" />
            </div>
            
            </div>
        </div><br /><br />
        <Footer/>
        </>
    )
}