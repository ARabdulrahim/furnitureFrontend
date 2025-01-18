import { useEffect, useState } from "react";
import { GiSofa } from "react-icons/gi";
import { LuMenuSquare } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineImageSearch } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Navebar({searchfn}){
    
    const[toggle, setToggle]=useState(false);
    let navigate=useNavigate();
    
    const element=document.documentElement;
    const token=localStorage.getItem("Token");

    let handleLogout=()=>{
            localStorage.clear();
            navigate("/login");
            setTimeout(()=>{
                window.location.reload();
            },10);
    }
    
    let handleChange=(e)=>{
        searchfn(e)
    }


    return(
        <>
    
        <div className="py-2  bg-blue-800 z-10 text-white fixed top-0 left-0 right-0">
            <div className="mx-20 xs:mx-5 flex justify-between items-center ">
           <Link to="/"> <div className="text-2xl font-bold  flex items-center gap-3">Furniture<GiSofa/></div></Link>
            {
                toggle ? <RxCross1 className="text-4xl lg:hidden " onClick={()=> setToggle(!toggle)}/>
                :
                <LuMenuSquare className="text-4xl lg:hidden " onClick={()=> setToggle(!toggle)}/>
            }
           
            
            <ul className="hidden lg:flex gap-10  text-xl mt-2">
            
                <li><MdOutlineImageSearch  className="inline mb-2 text-4xl"/><input className="px-2 border-2 rounded-md text-black mr-15" type="text" placeholder="Search furniture"  onChange={(e)=>handleChange(e.target.value)} /></li>
                {localStorage.getItem("role")=== "admin" ? <li><Link to="/admin">Dashboard </Link></li>:null}
                {token ? null :<li><Link to="/signup">Sign Up</Link></li>}
                <li>{token ? <button onClick={handleLogout}>Logout</button> :<Link to="/login">Login</Link>}</li>
                {token ? <li><Link to='/cart'><FaShoppingCart className="text-3xl "/></Link></li>: null}
                {localStorage.getItem("role")=="customer" ? <li><Link to="/user"><FaUserCircle className="text-3xl"/></Link></li>: null}
                
            </ul>
            <ul className={` fixed w-full  bg-blue-800 left-0 top-[52px] text-xl py-4 px-4 ${toggle ? "left-0": "left-[-100%]"} duration-500 lg:hidden`}>
                <li className="p-3"><MdOutlineImageSearch className="inline mb-2 text-4xl"/><input className="px-2 border-2 rounded-md text-black" type="text" placeholder="Search furniture" onChange={(e)=>handleChange(e.target.value)} /></li>
                {localStorage.getItem("role")=== "admin" ? <li className="p-3"><Link to="/admin">Dashboard </Link></li>:null}
                {token ? null : <li className="p-3"><Link to="/signup">Sign Up</Link></li>}
                <li className="p-3">{token ? <button onClick={handleLogout}>Logout</button> :<Link to="/login">Login</Link>}</li>
                {token ? <li className="p-3"><Link to='/cart'><FaShoppingCart className="text-3xl "/></Link></li>: null}
                {localStorage.getItem("role")=="customer" ? <li className="p-3"><Link to="/user"><FaUserCircle className="text-3xl"/></Link></li>: null}
            </ul>
            </div>
        </div>

        
        </>
    )
}