import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const SignInForm = ({isOpen, setIsopen,setSign}) => {
    const handleOpen = ()=>{
        if(isOpen){
            setIsopen(false)
            setSign(false)

        }
    }
  return (
    <div className='fixed bg-black w-full h-full z-50'>
    <button className='text-2xl font-semibold absolute right-10 top-4' onClick={handleOpen}>X</button>
    {/* <div className='flex items-center'> */}

        <div className='flex items-center justify-center mt-20 font-medium text-xl p-2'><h2>Login</h2></div>
        <div className='flex items-center justify-center w-full mt-3 '>
        <div className='flex flex-col items-center  gap-5 bg-slate-100 w-1/4 p-2 h-max rounded-xl  p-2'>
            <input type='email' placeholder='Email' className='text-left p-2 font-medium rounded-md outline-none'/>
            <input type='password' placeholder='Password'className='text-left p-2 font-medium rounded-md outline-none'/>
            <span className='text-sm text-center text-blue-600'>Forgot Password?</span>
            <button className='w-full bg-blue-700 p-2 text-md font-medium rounded-md'>Login</button>
            <h4 className='text-sm text-black'>Don't have an account? <span className='text-blue-600'>Signup</span> </h4>
            <div className='flex items-center justify-evenly gap-2 text-black '>
                <div className='text-gray-600'>-----------</div>
                <span>Or</span>
                <div className='text-gray-600'>-----------</div>
            </div>
            <div className='flex items-center justify-around bg-blue-900 p-2 w-full rounded-md text-md  '>
                <FaFacebook className='text-xl '/>
                <span>Login with Facebook</span>
            </div>
            <div className='flex items-center justify-around border border-gray-400 rounded-md text-md text-gray-700 p-2 w-full'>
                <FaGoogle className='text-xl'/>
                <span>Login with Google</span>
            </div>

        </div>
        </div>
    </div>
  )
}

export default SignInForm