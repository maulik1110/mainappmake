import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./temp/Topnav";
import Dropdown from "./temp/Dropdown";
import Card from "./temp/Card";
import Load from "./Load";
document.title = "Mega App | Popular"


const Popular = () => {
    const [catrgory, setCatrgory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasmore] = useState(true);
    const navigate = useNavigate();
    document.title = "Mega App | Popular"  + catrgory

  const getPopular = async () => {
    const { data } = await axios.get(
      `${catrgory}/popular?page=${page}`
    );

    if (data.results.length > 0) {
      setPopular((prevstate) => [...prevstate, ...data.results]);
      setPage(page + 1);
    } else {
      setHasmore(false);
    }
    console.log(data);
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    // getPopular();
    refreshHandler();
  }, [catrgory]);
  return popular.length>0 ? (<div className="w-screen h-screen ">
  {/* <div className="w-screen h-screen p-2 overflow-hidden overflow-y-auto "> */}
    <div className="w-full flex items-center px-4 py-2 gap-4 md:flex-nowrap flex-wrap ">
      <Link
        className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        ←
      </Link>
      <h1 className="text-4xl text-zinc-400 font-semibold  ">Popular</h1>
      <Topnav />
      <Dropdown
        title={"category"}
        options={["movie", "tv"]}
        func={(e) => setCatrgory(e.target.value)}
      />
      <div className="w-[2%]"></div>
    </div>
    <InfiniteScroll
    hasMore={hasmore}
      next={getPopular}
      dataLength={popular.length}
      loader={<h1>Loading</h1>}
    >
      <Card data={popular} title={catrgory} />
    </InfiniteScroll>
  </div>) : <Load/> 
};

export default Popular;
