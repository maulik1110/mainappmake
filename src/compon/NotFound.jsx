import React from 'react'
import notfound from "../assets/404.gif"
const NotFound = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black object-cover' >
        <img className='w-[40%] object-cover' src={notfound}  alt="" />
    </div>
  )
}

export default NotFound