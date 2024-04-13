// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "../../utils/Axios"

// const Side = () => {

//   return (
//     <div className="md:w-[20%] md:block hidden h-full p-3  border-r-2 border-zinc-400">
//       <h1 className="text-white flex items-center gap-2 text-2xl">
//         <i className="text-[#9786cd] ri-tv-fill "></i>
//         <span className="font-semibold ">Mega App</span>
//       </h1>
//       <nav className="flex text-zinc-300 md:text-xl flex-col gap-3">
//         <h1 className="text-white md:font-semibold md:text-xl my-5 mb-2">
//           New Feed
//         </h1>
//         <Link to={"/trending"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//           <i className="ri-fire-fill"></i>Trending
//         </Link>
//         <Link to={"/popular"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//           <i className="ri-arrow-up-double-line"></i>Popular
//         </Link>
//         <Link to={"/movie"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//           <i className="ri-movie-2-fill"></i>Movies
//         </Link>
//         <Link to={"/tv"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//           <i className="ri-tv-fill"></i> TV Shows
//         </Link>
//         <Link to={"/people"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//           <i className="ri-user-2-fill"></i> People
//         </Link>
//       </nav>
//     <hr  className="borer-none h-[1px] bg-transpatent m-4"/>

//       <nav className="flex text-zinc-300 md:text-xl flex-col gap-3">
//         <h1 className="text-white md:font-semibold md:text-xl my-5 mb-2">
//           Website Information
//         </h1>
//         <Link className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//         <i className="ri-information-fill"></i>About Mega App
//         </Link>
//         <Link className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
//         <i className="ri-phone-fill"></i>Contact Us
//         </Link>
        
//       </nav>
//     </div>
//   );
// };

// export default Side;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios"

const Side = () => {

  return (
    <div className="md:w-[20%] md:block hidden h-full p-3  border-r-2 border-zinc-400">
      <h1 className="text-white flex items-center gap-2 text-2xl">
        <i className="text-[#9786cd] ri-tv-fill "></i>
        <span className="font-semibold ">Mega App</span>
      </h1>
      <nav className="flex text-zinc-300 md:text-xl flex-col gap-3">
        <h1 className="text-white md:font-semibold md:text-xl my-5 mb-2">
          New Feed
        </h1>
        <Link to={"/trending"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
          <i className="ri-fire-fill"></i>Trending
        </Link>
        <Link to={"/popular"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
          <i className="ri-arrow-up-double-line"></i>Popular
        </Link>
        <Link to={"/movie"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
          <i className="ri-movie-2-fill"></i>Movies
        </Link>
        <Link to={"/tv"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
          <i className="ri-tv-fill"></i> TV Shows
        </Link>
        <Link to={"/people"} className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
          <i className="ri-user-2-fill"></i> People
        </Link>
      </nav>
    <hr  className="borer-none h-[1px] bg-transpatent m-4"/>

      <nav className="flex text-zinc-300 md:text-xl flex-col gap-3">
        <h1 className="text-white md:font-semibold md:text-xl my-5 mb-2">
          Website Information
        </h1>
        <Link className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
        <i className="ri-information-fill"></i>About Mega App
        </Link>
        <Link className="hover:bg-[#9786cd] hover:text-white hover:rounded-md duration-200 p-1 mb-[2px] ">
        <i className="ri-phone-fill"></i>Contact Us
        </Link>
        
      </nav>
    </div>
  );
};

export default Side;

