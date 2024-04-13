import React from 'react'
import { Link } from 'react-router-dom'

const Responsivenav = () => {
  return (
    <div className='w-screen md:hidden block '>
        <h1 className='text-center text-[#9786cd] font-bold text-4xl'>MEGA APP</h1>
        <div className='flex flex-wrap text-zinc-300 gap-4 p-4 items-center justify-center border-b-2 '>
            <Link to={"/trending"} className='bg-[#9786cd] rounded-lg px-8 py-2  hover:text-white hover:rounded-md duration-200 p-1 mb-[2px]'><i className="ri-fire-fill"></i>Trending</Link>
            <Link to={"/popular"} className='bg-[#9786cd] rounded-lg px-8 py-2  hover:text-white hover:rounded-md duration-200 p-1 mb-[2px]'><i className="ri-fire-fill"></i>Popular</Link>
            <Link to={"/movie"} className='bg-[#9786cd] rounded-lg px-8 py-2  hover:text-white hover:rounded-md duration-200 p-1 mb-[2px]'><i className="ri-fire-fill"></i>Movies</Link>
            <Link to={"/tv"} className='bg-[#9786cd] rounded-lg px-8 py-2  hover:text-white hover:rounded-md duration-200 p-1 mb-[2px]'><i className="ri-fire-fill"></i>TV Show</Link>
            <Link to={"/people"} className='bg-[#9786cd] rounded-lg px-8 py-2  hover:text-white hover:rounded-md duration-200 p-1 mb-[2px]'><i className="ri-fire-fill"></i>People</Link>
        </div>
    </div>
  )
}

export default Responsivenav