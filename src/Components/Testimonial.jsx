import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
    return (
        <div className='mt-20 tracking-wide'>
            <h2 className='text-2xl sm:text-5xl lg:text-5xl text-center my-10 lg:my-20'> What people are <span className='bg-gradient-to-r from-orange-700 to-red-900 text-transparent bg-clip-text'> saying  </span></h2>

            <div className='flex flex-wrap justify-center pl-10 pr-10 '>
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                                <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin '>
                                    <p>{testimonial.text}</p>
                                    <div className='flex mt-8 items-start'>
                                        <img className='h-12 w-12 rounded-full mr-6 border border-neutral-300' src={testimonial.image} alt={testimonial.user} />
                                        <div>
                                            <h6>{testimonial.user}</h6>
                                            <span className='text-sm font-normal italic text-neutral-600'>{testimonial.company}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Testimonial
