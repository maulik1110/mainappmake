import React from "react";
import { Link } from "react-router-dom";
import noImg from "../../assets/noImg.png";


const Card = ({ data, title }) => {
  return (
    <div className="w-full flex flex-wrap gap-8 p-4 justify-evenly md:justify-start  bg-zinc-900 ">
      {/* <div>
            <h1>{data.name}</h1>
        </div> */}
      {data.map((item, index) => (
        <Link to={`/${item.media_type || title}/details/${item.id}`} className="w-[30vh] relative shadow-xl " key={index}>
          <img
            className="rounded-md hover:scale-105 shadow-xl duration-300 transition-all h-[38vh] w-full object-cover  object-center"
            src={`https://image.tmdb.org/t/p/original/${
              item.poster_path ||
              item.backdrop_path ||
              item.poster ||
              item.profile_path ||
              noImg
            }}`}
            alt=""
          />

          <h1 className="text-xl text-zinc-300 mt-2 font-semibold text-left">
            {item.name ||
              item.title ||
              item.original_name ||
              item.original_title}
          </h1>
          {item.vote_average && 
          <div className="text-white absolute right-0 bottom-[25%] font-semibold text-lg text-left flex items-center justify-center bg-[#9786cd] w-10 h-10 rounded-full">
            {(item.vote_average * 10).toFixed()} <sup>%</sup>
          </div>}
        </Link>
      ))}
    </div>
  );
};

export default Card;
