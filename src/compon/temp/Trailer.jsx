import React from 'react'
import ReactPlayer from 'react-player'
import {Link, useLocation , useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import NotFound from '../NotFound'

const Trailer = () => {

    const {pathname} = useLocation()
    const category = (pathname.includes("movie")) ? "movie" :"tv"
    const ytvideo  = useSelector(store=>store[category].info.videos)
    const navigate  = useNavigate()
    console.log(ytvideo);
  return ytvideo ?  (
    <div className='absolute opacity-90 overflow-hidden bg-black z-[100] w-screen h-screen flex items-center justify-center top-0 left-0'>
        <Link
          className="text-white right-[5%] top-[5%] absolute bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          ←
        </Link>
        <ReactPlayer height={540} width={930}  url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>

    </div>
  ) : <NotFound/>
}

export default Trailer