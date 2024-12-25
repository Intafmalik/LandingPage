import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const CreateAccount = ({isOpen, setIsopen,setAccount}) => {
    const handleOpen = ()=>{
        if(isOpen){
            setIsopen(false)
            setAccount(false)
        }
    }
  return (
    <div className='fixed bg-black  bg-opacity-100 w-full h-full z-50'>
    <button className='text-2xl font-semibold absolute right-10 top-4' onClick={handleOpen}>X</button>
    {/* <div className='flex items-center'> */}

        <div className='flex items-center justify-center w-full h-full mt-4 font-medium text-xl  p-2'>
        <div className='w-1/3 h-2/3 border border-orange-600 flex items-center flex-col gap-10 py-6'>
        <h2 className='text-2xl font-bold tracking-wide'>Create Account</h2>
            <input type='text' placeholder='Name' className='text-left p-3  text-base bg-black border border-white font-medium rounded-md outline-none'/>
            <input type='email' placeholder='Email' className='text-left p-3 text-base  bg-black border border-white font-medium rounded-md outline-none'/>
            <input type='password' placeholder='Password'className='text-left p-3 text-base  bg-black border border-white font-medium rounded-md outline-none'/>
            <div className='flex items-center justify-evenly  w-full'>
               <button className='bg-gradient-to-r from-orange-500 to-orange-800 px-5 py-2 rounded-md '>SignIn</button>
               <button className='bg-gray-700 px-5 py-2 rounded-md  '>SignUp</button>
            </div>

        </div>
        </div>
    </div>
  )
}

export default CreateAccount