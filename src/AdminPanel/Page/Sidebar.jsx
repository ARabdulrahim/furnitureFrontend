import React from 'react'
import { CgInsertAfterO } from "react-icons/cg";
import { BiShow } from "react-icons/bi";
import { LiaFirstOrderAlt } from "react-icons/lia";
import { ImDisplay } from "react-icons/im";
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div>
      <div className='mt-[62px] fixed border-2 text-white bg-blue-500  h-screen xs:w-[80px] w-[250px]'>
                    <div className='mx-2 mt-6  '>
                        <Link to="/" className='flex'>
                        <ImDisplay className='text-4xl'/>
                        <p className='py-1 px-1  text-xl xs:hidden'>Main Page</p>
                        </Link>
                    </div>
                    <div className='mx-2 mt-6  '>
                        <Link to="/new" className='flex'>
                        <CgInsertAfterO className='text-4xl'/>
                        <p className='py-1 text-xl xs:hidden'>Create Product</p>
                        </Link>
                    </div>
                    <div className='mx-2 mt-6'>
                       <Link to="/showList" className='flex'>
                       <BiShow className='text-4xl'/>
                       <p className='py-1 text-xl xs:hidden'>Product list</p>
                       </Link>
                    </div>
                    <div className='mx-2 mt-6'>
                       <Link className='flex'>
                       <LiaFirstOrderAlt className='text-4xl'/>
                       <p className='py-1 text-xl xs:hidden'>Order list</p>
                       </Link>
                    </div>
                </div>
    </div>
  )
}

export default Sidebar
