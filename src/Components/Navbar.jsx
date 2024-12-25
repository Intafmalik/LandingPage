import React from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import SignInForm from './SignInForm'
import CreateAccount from './CreateAccount'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false)
    const [sign, setSign] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [account, setAccount] = useState(false)

    const toggleNavbar =()=>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    const handleSignIn = ()=>{
        if(sign){
            setSign(false);
        }else{
            setSign(true)
            setIsOpen(true)
        }
    }
    const handleCreateAccount  = ()=>{
        if(account){
            setAccount(false)
        }else{
            setAccount(true)
            setIsOpen(true)
        }

    }

  return (
    <>
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80' >
    <div className=' container px-4 mx-auto relative text-sm' >
        <div className='flex justify-between items-center'>
        <div className='flex items-center flex-shrink-0'>
         <img className='h-10 w-10 mr-2' src={logo} alt='logo' />
         <span className='text-xl tracking-tight'> virtualr</span>
        </div>
        <ul className='hidden lg:flex ml-14px space-x-12'>
        {
         navItems.map((item, index)=>(
            <li key={index} className='cu-p active:text-orange-500'>
                <a href={item.href}> {item.label}</a>
            </li>
         ))
        }
      
        </ul>
        <div className='hidden lg:flex justify-center space-x-12 items-center '>
      <button className="py-2 px-3 border rounded-md" onClick={handleSignIn}>Sign In</button>
      {/* <a href='#' className="py-2 px-3 border rounded-md">Sign In</a> */}
      <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md" onClick={handleCreateAccount}> Create an account</button>
      {/* <a href='#' className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"> Create an account</a> */}
        </div>
        <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>{mobileDrawerOpen? <X/> : <Menu/>}</button>
        </div>

        </div>
    </div>
    {mobileDrawerOpen && (< div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center item-center lg:hidden'>
    
    <ul>
        {
            navItems.map((item, index)=>
                (
                    <li key={index} className='py-4 cu-p'>
                        <a href={item.href}>{item.label}</a>
                    </li>
                )
            )
        }
    </ul>
    <div className='flex space-x-6' >
    <button
     className='py-2 px-3 border rounded-md' onClick={handleSignIn} >Sign In</button>
    <button className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800' >Create an account</button>
   {/* <a href='#' className='py-2 px-3 border rounded-md'>Sign In</a> */}
   {/* <a href='#' className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a> */}
    </div>
    </div>)}
    </nav>
    {
        sign && <SignInForm isOpen={isOpen} setIsopen={setIsOpen} sign={sign} setSign={setSign} />
    }
    {
        account && <CreateAccount isOpen={isOpen} setIsopen={setIsOpen} setAccount={setAccount} />
    }

    </>

  )
}

export default Navbar

