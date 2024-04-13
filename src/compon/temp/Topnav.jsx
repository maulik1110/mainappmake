import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import noImg from "../../assets/noImg.png";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(null);

  const getSearches = async () => {
    const { data } = await axios.get(`/search/multi?query=${query}`);
    // console.log(data.results);
    setSearches(data.results);
  };

  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-screen h-[10vh] relative flex justify-start pl-[5%] items-center gap-2 ">
      <i className="ri-search-fill text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[80%] rounded px-2 py-1 text-xl outline-none border-none bg-transparent text-zinc-100"
        type="text"
        placeholder="Search Anything..."
        name=""
        id=""
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="cursor-pointer ri-close-line text-3xl text-zinc-400"
        ></i>
      )}

      <div className="w-[80%] z-50 max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto rounded">
        

        {searches && searches.map((item,index)=>{
            return (
              <Link to={`/${item.media_type}/details/${item.id}`} key={index} className="text-zinc-500 gap-4 font-semibold hover:text-black hover:bg-zinc-300 duration-300 flex justify-start items-center border-b-2 border-zinc-100 p-5  w-full">
                <img className="w-[10vh] h-[10vh]  object-cover  rounded " src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster || noImg}` : noImg} alt="" />
                <span>{ item.name || item.title || item.original_title || item.original_name}</span>
              </Link>
            )
        })}
      </div>
    </div>
  );
};

export default Topnav;
