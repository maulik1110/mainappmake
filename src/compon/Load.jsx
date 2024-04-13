import React from 'react'
import loading from "../assets/loading.gif"
const Load = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black object-cover' >
        <img className='w-[40%] object-cover' src={loading}  alt="" />
    </div>
  )
}

export default Load