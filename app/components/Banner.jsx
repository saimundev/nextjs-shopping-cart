import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div >
        <Image width={1500} height={500} alt='banner' src="/banner.webp" className='w-full h-screen object-cover'/>
    </div>
  )
}

export default Banner