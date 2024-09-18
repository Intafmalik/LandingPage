import React from 'react'
import  CodeImg  from '../assets/code.jpg'
import { CheckCircle2 } from 'lucide-react'
import { checklistItems } from '../constants'

const workflow = () => {
  return (
    <div className='mt-20'>
    <h1 className='text-3xl sm:text-5xl lg:text-5xl text-center mt-6 tracking-wide'> Accelerating your <span className='bg-gradient-to-r from-orange-700 to-red-900 text-transparent bg-clip-text'>codding workflow </span></h1>
    <div className='flex flex-wrap justify-center mt-10 pl-10 pr-10 gap-0.8rem '>
        <div className='p-2 w-full lg:w-1/2'>
            <img src={CodeImg} alt='codeimg' /> 
        </div>
        <div className='p-2 w-full lg:w-1/2'>
        {
        checklistItems.map((item, index)=>{
            return(
                <div key={index} className='flex mb-12'>
                    <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                        <CheckCircle2/>
                    </div>
                    <div>
                    <h2 className='mt-2 mb-2 text-xl'>{item.title}</h2>
                    <p className='text-md text-neutral-500'>{item.description}</p>
                    </div>
                </div>
            )
        })
        }

        </div>
    </div>
      
    </div>
  )
}

export default workflow
