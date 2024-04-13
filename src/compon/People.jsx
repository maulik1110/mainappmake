import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./temp/Topnav";
import Dropdown from "./temp/Dropdown";
import Card from "./temp/Card";
import Load from "./Load";
document.title = "Mega App | People"

const People = () => {
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasmore] = useState(true);
    const navigate = useNavigate();
    document.title = "Mega App | Person"  

  const getPerson = async () => {
    const { data } = await axios.get(
      `/person/popular?page=${page}`
    );
    console.log(data);
    if (data.results.length > 0) {
      setPerson((prevstate) => [...prevstate, ...data.results]);
      setPage(page + 1);
    } else {
      setHasmore(false);
    }
    console.log(data);
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    // getPerson();
    refreshHandler();
  }, []);
  return person.length>0 ? (<div className="w-screen h-screen ">
  {/* <div className="w-screen h-screen p-2 overflow-hidden overflow-y-auto "> */}
    <div className="w-full flex items-center px-4 py-2 gap-4 flex-wrap md:flex-nowrap">
      <Link
        className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        ←
      </Link>
      <h1 className="text-4xl text-zinc-400 font-semibold  ">People</h1>
      <Topnav />
      
    </div>
    <InfiniteScroll
    hasMore={hasmore}
      next={getPerson}
      dataLength={person.length}
      loader={<h1>Loading</h1>}
    >
      <Card data={person} title="people" />
    </InfiniteScroll>
  </div>) : <Load/> 
}

export default People