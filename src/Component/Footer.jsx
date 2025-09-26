import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
export default function Footer(){
    return (
        <>
        <div className=" mt-10 border-t-4 border-white ">
            <div className="pt-5 top-8  mb-10 text-center flex flex-col justify-center items-center">
            <div className="flex">
            <p className="xs:hidden text-xl font-bold">Get connected with us on social networks :</p>
                <CiInstagram className="text-4xl hover:text-red-500"/>
                <CiFacebook className="text-4xl hover:text-red-500"/>
                <CiLinkedin className="text-4xl hover:text-red-500"/>
            </div>
                
                <div className="text-xl font-bold flex justify-center">
                    <p>@ Furniture Private Limited</p>
            </div>
            </div>
           
        </div>
        </>
    )
}