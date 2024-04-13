import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Load from "./Load";
import HorizontalCard from "./temp/HorizontalCard";
import { asyncloadperson, removeperson } from "./store/action/personaction";
import Dropdown from "./temp/Dropdown";

const Persondetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { info } = useSelector((store) => store.person);
  console.log(info);
  const [categoty, setCategoty] = useState("movie");

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => dispatch(removeperson());
  }, [id]);

  return info && info.detail ? (
    <h1 className="text-white px-10 py-4 flex w-screen flex-col overflow-y-auto">
      <nav className="w-full gap-5 h-[10vh] flex items-center">
        <Link
          className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          ←
        </Link>
      </nav>

      {/* part 2 */}
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-[40%] w-[100%]  mt-4">
          <img
            className="rounded-md hover:scale-105 shadow-xl duration-300 transition-all md:h-[49vh] h-[55vh] w-full md:w-auto object-cover md:object-center object-top"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path || info.detail.backdrop_path
            }}`}
            alt=""
          />

          <hr className="my-8 opacity-70 w-[80%]" />
          <h1 className="font-semibold text-3xl text-zinc-400">
            Personal Information
          </h1>
          <h1 className="font-semibold text-lg text-zinc-400">Known For:</h1>
          <h1 className=" text-md text-zinc-400">
            {info.detail.known_for_department}
          </h1>
          <h1 className="font-semibold text-lg text-zinc-400">Gender:</h1>
          <h1 className=" text-md text-zinc-400">
            {info.detail.gender === 1 ? "Female" : "Male"}
          </h1>
          <h1 className="font-semibold text-lg text-zinc-400">Birthday:</h1>
          <h1 className=" text-md text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="font-semibold text-lg text-zinc-400">DeathDay:</h1>
          <h1 className=" text-md text-zinc-400">
            {info.detail.deathday || "Alive"}
          </h1>
          <h1 className="font-semibold text-lg text-zinc-400">
            Also known as:
          </h1>
          <h1 className=" text-md text-zinc-400">
            {info.detail.also_known_as}
          </h1>
          <h1 className="font-semibold text-lg text-zinc-400">
            Place of birth:
          </h1>
          <h1 className=" text-md text-zinc-400">
            {info.detail.place_of_birth}
          </h1>
        </div>

        {/* part 3 */}
        <div className="md:w-[60%] w-full">
          <h1 className=" text-md text-4xl font-bold text-zinc-400">
            {info.detail.name}
          </h1>

          <h1 className="font-semibold text-lg text-zinc-400 mt-4">
            overview:
          </h1>
          <p className="text-white font-thin text-sm mt-2">
            {info.detail.biography}
          </p>
          <h1 className="font-semibold text-lg text-zinc-400 mt-4">Summary:</h1>

          <HorizontalCard data={info.combinedcredit.cast} />

          {/* <div className="w-full flex justify-between">
            <h1 className="font-semibold text-lg text-zinc-400 mt-4">Acting</h1>

            <Dropdown
              options={["tv", "movie"]}
              title={categoty}
              func={(e) => setCategoty(e.target.value)}
            />
          </div>

          <div className="w-full list-disc text-white h-[50vh] mt-4 px-4 py-2 overflow-x-hidden overflow-y-auto shadow-md shadow-white">
            {info.combinedcredit.cast.map((item, index) => {
              return (
                <li className="hover:text-zinc-500 duration-200 cursor-pointer">
                  <Link>
                    <span> {item.detail.name ||
              item.detail.title ||
              item.detail.original_name}</span> | <span>role</span>
                  </Link>
                </li>
              );
            })}
          </div> */}
        </div>
      </div>
    </h1>
  ) : (
    <Load />
  );
};

export default Persondetails;
