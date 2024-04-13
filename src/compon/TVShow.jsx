import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./temp/Topnav";
import Dropdown from "./temp/Dropdown";
import Card from "./temp/Card";
import Load from "./Load";
document.title = "Mega App | Tv"


const TVShow = () => {
    const [catrgory, setCatrgory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasmore] = useState(true);
    const navigate = useNavigate();
    document.title = "Mega App | TV"  + catrgory

  const getTv = async () => {
    const { data } = await axios.get(
      `/tv/${catrgory}?page=${page}`
    );
    // const { data } = await axios.get(
    //   `${catrgory}/tv?page=${page}`
    // );

    if (data.results.length > 0) {
      setTv((prevstate) => [...prevstate, ...data.results]);
      setPage(page + 1);
    } else {
      setHasmore(false);
    }
    console.log(data);
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };

  useEffect(() => {
    // getTv();
    refreshHandler();
  }, [catrgory]);
  return tv.length>0 ? (<div className="w-screen h-screen ">
  {/* <div className="w-screen h-screen p-2 overflow-hidden overflow-y-auto "> */}
    <div className="w-full flex items-center px-4 py-2 gap-4 md:flex-nowrap flex-wrap ">
      <Link
        className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        ←
      </Link>
      <h1 className="text-4xl text-zinc-400 font-semibold  ">TV</h1>
      <Topnav />
      <Dropdown
        title={"category"}
        options={["on_the_air", "popular","top_rated","airing today"]}
        func={(e) => setCatrgory(e.target.value)}
      />
      <div className="w-[2%]"></div>
      {/* <Dropdown
        title={"duration"}
        options={["week", "day", "all"]}
        func={(e) => setDuration(e.target.value)}
      /> */}
    </div>
    <InfiniteScroll
    hasMore={hasmore}
      next={getTv}
      dataLength={tv.length}
      loader={<h1>Loading</h1>}
    >
      <Card data={tv} title="tv" />
    </InfiniteScroll>
  </div>) : <Load/> 
};

export default TVShow;
