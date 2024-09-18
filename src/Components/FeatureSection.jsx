import React from 'react'
import { Feather } from 'lucide-react'
import { features } from '../constants'

const FeatureSection = () => {
    return (
        <div className='relative mt-20 border-b border-netral-800 min-h-[800px]'>
            <div className='text-center'>
                <span className='bg-neutral-900 text-orange-500 rounded-full h-10 text-sm font-medium px-2 py-1 uppercase tracking-[2px]'>
                    Feature
                </span>
                <h2 className='text-3xl sm:text-6xl lg:text-5xl mt-8 lg:mt-20 tracking-wide'>
                    Easily build <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> your code </span>
                </h2>
            </div>
            <div className='flex  flex-wrap gap-2rem  mt-10 pl-10 pr-10 lg:mt-20'>
                {
                    features.map((feature, index) => (
                        <div key={index} className='w-full  sm:w-1/2 lg:w-1/3'>
                            <div className='flex'>
                                <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center item-center rounded-full' >{feature.icon}</div>
                                <div>
                                    <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                                    <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default FeatureSection
