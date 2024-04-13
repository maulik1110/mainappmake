import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../compon/temp/Topnav";
import axios from "../utils/Axios";
import Dropdown from "../compon/temp/Dropdown";
import Card from "./temp/Card";
import Load from "./Load";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [catrgory, setCatrgory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [Trending, setTrending] = useState([]);
  const [page, setPage] = useState(1)
  const [hasmore, setHasmore] = useState(true)
  const navigate = useNavigate();
  document.title = "Mega App | Trending"

  const getTrending = async () => {
    const { data } = await axios.get(`/trending/${catrgory}/${duration}?page=${page}`);
    if(data.results.length > 0) {
      setTrending((prevstate)=>[...prevstate,...data.results])
      setPage(page+1)
    }else{
      setHasmore(false)
    }
    console.log(data);
  };
  

  const refreshHandler = () => {
    if(Trending.length===0){
      getTrending()
    }else{
        setPage(1)
        setTrending([])
        getTrending()
    }
  }

  useEffect(() => {
    // getTrending();
    refreshHandler()
  }, [catrgory, duration]);

  // console.log(Trending);
  return Trending.length > 0 ? (
    <div className="md:w-screen md:h-screen w-full overflow-hidden overflow-y-auto flex flex-col">
    {/* <div className="w-screen h-screen p-2 overflow-hidden overflow-y-auto "> */}
      <div className="w-full flex items-center px-4 py-2 gap-4 md:flex-nowrap flex-wrap ">
        <Link
          className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          ←
        </Link>
        <h1 className="text-4xl text-zinc-400 font-semibold text-left ">Trending</h1>
        <Topnav />
        <div className="flex  gap-5">

        <Dropdown
          title={"category"}
          options={["movie", "tv", "all"]}
          func={(e) => setCatrgory(e.target.value)}
          />
        <div className="w-[2%]"></div>
        <Dropdown
          title={"duration"}
          options={["week", "day", "all"]}
          func={(e) => setDuration(e.target.value)}
          />
          </div>
      </div>
      <InfiniteScroll
      hasMore={hasmore}
        next={getTrending}
        dataLength={Trending.length}
        loader={<h1>Loading</h1>}
      >
        <Card data={Trending} title={catrgory} />
      </InfiniteScroll>
    </div>
  ) : (
    <Load />
  );
};

export default Trending;
