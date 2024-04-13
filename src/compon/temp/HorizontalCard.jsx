import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimg from "../../assets/noImg.png";

const HorizontalCard = ({ data }) => {
  // console.log(data);
  return data.length > 0 ? (
    <div className="w-full h-[50vh] p-2  overflow-y-hidden mb-10">
      {/* <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>

        <Dropdown title={"Filter"} options={["TV" , "movie","all"]}/>
      </div> */}
      <div className="w-full h-[50vh] md:h-[50vh]  flex gap-4 overflow-x-auto ">
        {data.map((item, index) => {
          return (
            <Link to={`/${item.media_type}/details/${item.id}`}
              key={index}
              className="md:min-w-[25%] min-w-[50%] overflow-y-hidden mb-5  h-full bg-[#9786cd] rounded-lg"
            >
              <img
                className="w-full md:h-[55%] h-[45%] object-cover object-top rounded-md "
                src={item.poster_path || item.backdrop_path ? `https://image.tmdb.org/t/p/original${
                  item.poster_path || item.backdrop_path 
                }`: noimg}
                alt=""
              />
              <div className="text-white p-2 ">
                <h1 className="text-white md:text-lg text-md md:font-semibold font-medium h-[55%] ">
                  {(
                    item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title 
                  )?.slice(0, 30) || "No Title"}
                </h1>
                <p className="w-full mt-2 font-regular text-sm">
                  {item.overview?.slice(0, 50) || "No Overview"}...
                  <span className="text-zinc-100">more</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  ) : <h1 className="flex w-screen h-screen justify-center items-center text-5xl text-black font-bold">No data to show</h1>;
};

export default HorizontalCard;
