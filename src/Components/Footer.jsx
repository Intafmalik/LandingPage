import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
<footer className='mt-20 border-t py-10 border-neutral-700'>
<div className='grid grid-cols-2  lg:grid-cols-3 gap-4 pl-20 pr-12'>
<div>
    <h3 className='text-md font-semibold mb-4'> <span className='bg-gradient-to-r from-orange-700 to-red-900 text-transparent bg-clip-text text-xl '> Resources </span></h3>
    <ul className='space-y-2'>
    {
        resourcesLinks.map((resourcesLink, index)=>{
            return (
                <li key={index}>
                <a className='text-neutral-300 hover:text-white' href={resourcesLink.href}>{resourcesLink.text}</a>

                </li>
            )
        })
    }

    </ul>
</div>
<div>
    <h3 className='text-md font-semibold mb-4'>  <span className='bg-gradient-to-r from-orange-700 to-red-900 text-transparent bg-clip-text text-xl '>Platform</span></h3>
    <ul className='space-y-2'>
    {
        platformLinks.map((platformLink, index)=>{
            return (
                <li key={index}>
                <a className='text-neutral-300 hover:text-white' href={platformLink.href}>{platformLink.text}</a>

                </li>
            )
        })
    }

    </ul>
</div>
<div>
    <h3 className='text-md font-semibold mb-4'>  <span className='bg-gradient-to-r from-orange-700 to-red-900 text-transparent bg-clip-text text-xl '>Community </span></h3>
    <ul className='space-y-2'>
    {
        communityLinks.map((communityLink, index)=>{
            return (
                <li key={index}>
                <a className='text-neutral-300 hover:text-white' href={communityLink.href}>{communityLink.text}</a>

                </li>
            )
        })
    }

    </ul>
</div>

</div>

</footer>
  )
}

export default Footer
