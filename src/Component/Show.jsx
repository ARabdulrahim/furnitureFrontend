import { useEffect, useState } from "react";
import axios from "axios";
import  {useNavigate, useParams}  from "react-router-dom";
import { toast } from "react-toastify";
import {  Link } from "react-router-dom";
import Navebar from "./Navebar";
import Footer from "./Footer";
import { IoStarSharp } from "react-icons/io5";



export default function Show(){
    const[data, setData] = useState([]);
    const[image, setImage]=useState({});
    const[rating, setRating]=useState(5);
    const[comment, setComment]=useState();
    const[reviewdata, setReviewdata]=useState([]);
    const {id}=useParams();
    const Navigate=useNavigate();

    const token=localStorage.getItem("Token");

    let showUniquedata = async(id)=>{
       try{
        let result=await axios.get(`https://furniturebackend-8z3r.onrender.com/list/${id}`);
        setData(result.data.data);
        setImage(result.data.data.img);
        setReviewdata(result.data.data.reviews);
       }catch(err){
        console.log("error ", err);
       }
        
    }

    let reivewCreate=async(e)=>{
       try{
        let result=await axios.post(`http://localhost:8080/list/${id}/review`,{rating, comment},{headers:{"Content-Type":"application/json", authorization:`bearer ${JSON.parse(localStorage.getItem("Token"))}`}});
        toast.success(result.data.message,{autoClose:1500});
        setComment("");
        setRating("");
       }catch(error){
        toast.error(error.message);
       }
    }

    

    //review delete
    let revDel=async(revid)=>{
        try{
            let result=await axios.delete(`http://localhost:8080/list/${id}/reviews/${revid}`);
            toast.success(result.data.message,{autoClose:1500});
            showUniquedata(id);
           
        }catch(err){
            console.log("error ", err);
        }
    }

   //Addtocart
   let AddToCart=async()=>{
    try{
        let result=await axios.post("http://localhost:8080/addtocart/new",{title: data.title, img: data.img, discription: data.discription,qty:data.qty, price: data.price, prodId:data._id},
            {headers:{"Content-Type":"application/json", authorization:`bearer ${JSON.parse(localStorage.getItem("Token"))}`}});
            toast.success(result.data.message,{autoClose:1500});
            Navigate("/cart")
        
    }catch(err){
        console.log(err);
    }

   }
    
    useEffect(()=>{
        showUniquedata(id);
    },[id]);
console.log(data)
    return (
        <>
        <Navebar/>
        <div className="mx-3 mt-40">
            <div className="flex justify-center iems-center ">
                    <div>
                        <div className="flex justify-between">
                        <Link to={`/buy/${data._id}`} className="mx-4 border-4 border-white rounded-md bg-orange-500 hover:border-black  h-[40px] w-[100px] px-2 py-1 text-white text-x font-semibold">BuyNow</Link>
                        {token ? <Link  className="border-4 rounded-md bg-orange-500 border-white hover:border-black  h-[40px] w-[100px] px-2 py-1 text-white text-x font-semibold" onClick={AddToCart}>AddToCart</Link>: null}
                        </div>
                        <img className="mt-5 h-[300px] xs:w-[100%] w-[600px] rounded-md  hover:shadow-lg hover:shadow-red-500/50"  src={image.url} alt="" />
                        <p className="mt-3 text-2xl font-semibold">{data.title}</p>
                        <div className="py-5 mt-3 text-xl flex justify-between ">
                        <h1><b>Price</b> : &#8377; {data.price}</h1>
                        </div>
                       <div className="">
                       <h1 className="text-xl w-[50%]"><b>Features</b> : {data.discription}</h1>
                       </div>
                        
                    </div>
                   
            </div>
        </div>
       <hr className="mt-10 border-2 border-white"/>
       {token ? <div className=" mt-10 flex flex justify-center ">
            <div className="border-2  bg-white shadow-2xl hover:border-2 hover:shadow-lg hover:shadow-red-500/50 rounded-md py-10 lg:w-[30%] sm:w-[50%] xs:w-[90%] ">
                <div className="flex justify-center text-2xl font-bold">Reviews</div>
                <form className="mx-10 " onSubmit={reivewCreate} >
                    <div className="mt-2 mb-2 flex">
                    {
                        ([...Array(5)].map((star, index)=>{
                            const ratingvalue=index+1;
                            return (
                               <label>
                                 <IoStarSharp size={40} color={ratingvalue <= rating ? "#ffc107" : "#808080"} onClick={()=>setRating(ratingvalue)}/>
                               </label>
                            )
                        }))
                    }
                    </div>
                    <label className=" text-xl text-black font-semibold " htmlFor="comment">Comments</label><br />
                    <textarea className=" py-1 px-3 border-2 rounded-md border-black w-full"  placeholder="add your some comment" id="comment" required  onChange={(e)=>setComment(e.target.value)} /><br />
                   <div className="flex justify-center">
                   <button className="mt-6 border-4 hover:border-black h-[45px] w-[90px] text-white text-xl rounded-md bg-orange-500  rounded-md shadow-2xl hover:shadow-lg hover:shadow-red-500/50">Submit</button>
                   </div>
                </form>
            </div>
        </div>:""}
        <hr className="mt-10 border-2 border-white w-[100%]"/>
        {reviewdata.length <1 ? <div className="mt-10 flex justify-center text-2xl font-semibold">No Reveiws Yet</div>: null}
        <div className="  flex justify-center items-center xr:flex justify-center ">
      <div className="mx-10  grid lg:grid-cols-2 md:grid-cols-1 ">
        {
            reviewdata.map((el)=>{
                return(
                    <>
             <div className="mx-10 bg-white flex flex-col  justify-between  px-3 mt-[40px] py-2 rounded-md border-2 border-blue-500 shadow-2xl hover:shadow-lg hover:shadow-red-500/50 h-[190px] w-[400px] xs:mx-2 xs:h-[200px] xs:w-[300px] ">
                    <div>
                    <p className="text-2xl font-semibold">@{el.author.username}</p> 
                    <div className="mt-2 flex">
                    {[...Array(5)].map((arr,index)=>{return index< el.rating ? <IoStarSharp color="#ffc107" size={30}></IoStarSharp> : <IoStarSharp color="#808080" size={30}></IoStarSharp> })}
                    </div>
                    <p className="py-2"> {el.comment}</p>
                    </div>
                   {localStorage.getItem("OwnerId") == el.author._id ? <div className=" flex  justify-center ">
                        <button onClick={()=>revDel(el._id)} className="border-4 w-[90px] border-black bg-red-500 text-white rounded-md ">Delete</button>
                    </div>:""}
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