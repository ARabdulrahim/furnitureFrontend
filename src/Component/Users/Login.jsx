import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react"
import Navebar from "../Navebar";
import Footer from "../Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Login(){
    const[email, setEmail]=useState();
    const[password, setPassword]=useState();
    let Navigate=useNavigate();


    let handleSubmit=async(e)=>{
       try{
        e.preventDefault();
        let result=await axios.post("https://furniturebackend-8z3r.onrender.com/user/login",{email, password},{headers:{"Content-Type":"application/json"}});
        toast.success(result.data.message,{autoClose:1500});
        localStorage.setItem("Token", JSON.stringify(result.data.jwtToken))
        localStorage.setItem("OwnerId", result.data.user._id);
        localStorage.setItem("role", result.data.user.role);
        setTimeout(() => {
            window.location.reload();
          }, 1000);
        
        Navigate("/");
       }catch(error){
        toast.error(error.response.data.message.message,{autoClose:1500});
        toast.error(error.response.data.message,{autoClose:1500});
       }

    }
    return (
        <>
        <Navebar/>
         <div className="mt-40  flex flex justify-center ">
         <div className="border-2 bg-white rounded-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/50 grid grid-cols-2 xs:grid-cols-1  lg:w-[60%] w-[80%] xs:w-[90%]">
            <div className=" mt-5 lg:mt-20">
                
                <form className="mx-5 " onSubmit={handleSubmit}>
                    <div className="mt-5 flex">
                    <MdEmail className="text-3xl"/><input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="email" placeholder="Enter email"  id="email" required onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="mt-5 flex">
                        <RiLockPasswordFill className="text-3xl"/> <input className=" py-1 px-3 border-2 rounded-md border-black w-full" type="password" placeholder="Enter password" id="img" required onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <p className="mt-4 text-x ">Don't have an account?  &nbsp; <Link to="/signup" className="hover:text-blue-500 font-semibold underline decoration-solid "> Signup</Link></p>
                   <div className="flex justify-center">
                   <button className="mt-6 border-4 h-[45px] w-[90px] text-white hover:border-black rounded-md bg-orange-500 rounded-md shadow-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50">LogIn</button>
                   </div>
                </form>
            </div>

            <div className=" ">
                <img src="src\assets\Chair.avif" alt="img" />
            </div>
            
            </div>
        </div>
        <div className="bottom-0">
        <Footer/>
        </div>
        </>
    )
}