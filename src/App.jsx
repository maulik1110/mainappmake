import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './compon/Home'
import Trending from './compon/Trending'
import Popular from './compon/Popular'
import Movies from './compon/Movies'
import TVShow from './compon/TVShow'
import People from './compon/People'
import Moviedetails from "./compon/Moviedetails"
import TVDetails from "./compon/TVDetails"
import Persondetails from "./compon/Persondetails"
import Trailer from './compon/temp/Trailer'

const App = () => {
  return (
    <div className='w-screen h-screen bg-zinc-900 flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/movie/details/:id' element={<Moviedetails/>}>
          <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>
        </Route>
        <Route path='/tv' element={<TVShow/>}/>
        {/* <Route path='/tvshow' element={<TVShow/>}/> */}
        <Route path='/tv/details/:id' element={<TVDetails/>}/>
        {/* <Route path='/tvshow/details/:id' element={<TVDetails/>}/> */}
        <Route path='/people' element={<People/>}/>
        <Route path='/people/details/:id' element={<Persondetails/>}/>
      </Routes>
    </div>
  )
}

export default App