import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navebar from "./Navebar";
import Footer from "./Footer";


export default function Home({search}){
    const[showdata, setShowdata]=useState([]);
    const[searchdata, setSearchdata]=useState("");
    let fetcheddata=async()=>{
        try{
         let result=await axios.get("https://furniturebackend-8z3r.onrender.com/list",{headers: {authorization :`bearer ${JSON.parse(localStorage.getItem("Token"))}`}});
            setShowdata(result.data.data);
        }catch(err){
            console.log("error ", err);
        }
    }

    let searchTerm=(data)=>{
        setSearchdata(data);
    }
    useEffect(()=>{
        fetcheddata();
    },[]);
   
    return(
        <>
        <Navebar  searchfn={searchTerm}/>
       <div className=" md:mx-10  mt-[100px]">
       <div className="flex items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xm:flex flex-col items-center justify-center ">
       
            {   
                showdata.filter((el)=>{
                    if(searchdata == ""){
                        return el;
                    }else if(el.title.toLowerCase().includes(searchdata.toLowerCase())){
                        return el;
                    }
                })
                .map((el)=>{
                    return(
                        <>
                    <div className=" bg-white md:mx-10 mx-3 my-7  w-[80%] h-[370px]  rounded-lg shadow-2xl  hover:shadow-lg hover:shadow-red-500/50  ">
                        <div className="">
              <Link to={`/show/${el._id}`}>  <img className="h-[300px] w-[100%] rounded-t-lg" src={el.img.url} alt="" /></Link>
            </div>
           <div className="mx-10 py-4 flex justify-between">
           <h1 className="text-xl font-bold">{el.title}</h1>
           <p>&#8377;{el.price}</p>
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