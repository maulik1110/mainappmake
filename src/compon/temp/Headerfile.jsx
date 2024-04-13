import React from "react";
import { Link } from "react-router-dom";

const Headerfile = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster || noImg
        }})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="w-full h-[65vh] rounded flex flex-col justify-end items-start md:p-[5%] p-[10%] text-white "
    >
      <h1 className="text-white md:w-2/3 w-full md:text-5xl text-3xl font-semibold ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="md:w-2/3 w-full py-2 font-medium text-sm">
        {data.overview.slice(0, 100)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>
      {/* <p><i className="ri-megaphone-fill"></i>{data.release_date}</p>
        <p><i className="ri-disc-line"></i>{data.media_type}</p> */}

      <p className="flex justiify-center items-center gap-2 flex-row text-sm">
        <i className="ri-megaphone-fill text-orange-400  flex items-center justify-center"></i>
        {data.release_date || "no information available"}
        <i className="ri-disc-line text-amber-400"></i>
        {data.media_type.toUpperCase()}
      </p>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="px-4  py-2 bg-[#9786cd] rounded mt-2 hover:bg-[#2b2e51bb] duration-300 transition-all font-semibold ">
      Watch Trailer
      </Link>
    </div>
  );
};

export default Headerfile;
