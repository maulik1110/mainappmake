// import React, { useEffect, useState } from "react";
// import Side from "./temp/Side";
// import Topnav from "./temp/Topnav";
// import axios from "../utils/Axios";
// import Headerfile from "./temp/Headerfile";
// import { HashRouter } from "react-router-dom";
// import HorizontalCard from "../compon/temp/HorizontalCard";
// import Dropdown from "./temp/Dropdown";
// import Load from "./Load";

// const Home = () => {
//   document.title = "Mega App | HomePage";

//   const [wallpaper, setWallpaper] = useState(null);
//   const [trending, setTrending] = useState(null);
//   const [catergoryFilter, setCatergoryFilter] = useState("all");

//   const getHeaderWallpaper = async () => {
//     const { data } = await axios.get(`/trending/all/day`);
//     let randomdata =
//       data.results[(Math.random() * data.results.length).toFixed()];
//     setWallpaper(randomdata);
//   };
//   const getTrending = async () => {
//     // const { data } = await axios.get(`/trending/${catergoryFilter}/day`);
//     const { data } = await axios.get(`/trending/${catergoryFilter}/day`);
//     setTrending(data.results);
//   };

//   useEffect(() => {
//     getHeaderWallpaper();
//     getTrending();
//   }, [catergoryFilter]);

//   // console.log(trending);

//   return wallpaper && trending ? (
//     <div className="md:flex md:overflow-hidden overflow-y-auto">
//       <Side />
//       <div className="w-[80%] h-[full] overflow-auto overflow-x-hidden">
//         <Topnav />
//         <Headerfile data={wallpaper} />
//         <div className="my-4 flex justify-between p-2">
//           <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>

//           <Dropdown title={"Filter"} options={["tv", "movie", "all"]} func={(e)=>setCatergoryFilter(e.target.value)} />
//         </div>
//         <HorizontalCard data={trending} fun={setCatergoryFilter} />
//       </div>
//     </div>
//   ) : (
//     <Load/>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import Side from "./temp/Side";
import Topnav from "./temp/Topnav";
import axios from "../utils/Axios";
import Headerfile from "./temp/Headerfile";
import { HashRouter } from "react-router-dom";
import HorizontalCard from "../compon/temp/HorizontalCard";
import Dropdown from "./temp/Dropdown";
import Load from "./Load";
import Responsivenav from "./temp/Responsivenav";

const Home = () => {
  document.title = "Mega App | HomePage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [catergoryFilter, setCatergoryFilter] = useState("all");

  const getHeaderWallpaper = async () => {
    const { data } = await axios.get(`/trending/all/day`);
    let randomdata =
      data.results[(Math.random() * data.results.length).toFixed()];
    setWallpaper(randomdata);
  };
  const getTrending = async () => {
    // const { data } = await axios.get(`/trending/${catergoryFilter}/day`);
    const { data } = await axios.get(`/trending/${catergoryFilter}/day`);
    setTrending(data.results);
  };

  useEffect(() => {
    getHeaderWallpaper();
    getTrending();
  }, [catergoryFilter]);

  // console.log(trending);

  return wallpaper && trending ? (
    <div className="md:flex md:overflow-hidden overflow-y-auto">
      <Side />
      <div className="md:w-[80%] w-full h-[full] overflow-auto overflow-x-hidden">
        <Responsivenav/>
        <Topnav />
        <Headerfile data={wallpaper} />
        <div className="my-4 flex justify-between p-2">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>

          <Dropdown title={"Filter"} options={["tv", "movie", "all"]} func={(e)=>setCatergoryFilter(e.target.value)} />
        </div>
        <HorizontalCard data={trending} fun={setCatergoryFilter} />
      </div>
    </div>
  ) : (
    <Load/>
  );
};

export default Home;
