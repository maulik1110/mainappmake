import React, { useEffect } from "react";
import { useParams, useNavigate, Link,useLocation,Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "./store/action/movieaction";
import Load from "./Load";
import HorizontalCard from "./temp/HorizontalCard";



const Moviedetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const { info } = useSelector((store) => store.movie);
  console.log(info);
  console.log(pathname);
  // const fullURL = window.location;

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => dispatch(removemovie());
  }, [id]);
  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="w-screen relative h-screen px-10 py-8 overflow-y-auto "
    >
      {/* nav */}
      <nav className="w-full gap-5 h-[10vh] flex items-center">
        <Link
          className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          ←
        </Link>

        <a target="_blank" href={info.detail.homepage}>
          <i
            style={{ fontSize: "28px" }}
            className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center ri-global-line"
          ></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
          style={{ fontSize: "28px" }}
        >
          <i className="text-white bg-[#9786cd] hover:bg-zinc-400 hover:scale-110 duration-400 transition-all p-5 rounded-full h-10 w-10 flex items-center justify-center ri-information-2-fill"></i>
        </a>
      </nav>

      {/* poster */}

      <div className="w-full flex gap-10 mt-5 flex-col md:flex-row">
        {/* img me md:h-[49vh] h-[100vh] */}
        <img
          className="rounded-md hover:scale-105 shadow-xl duration-300 transition-all  h-[49vh]  object-cover  object-top"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }}`}
          alt=""
        />

        <div className="content text-white">
          <h1 className=" md:text-5xl text-3xl font-bold">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}{" "}
            <small className="text-xl font-normal text-zinc-200">
              {info.detail.release_date.split("-")[0]}
            </small>
          </h1>

          <div className="flex items-center gap-5 mt-4 md:flex-row flex-col ">
            <span className="text-white  font-semibold text-lg text-left flex items-center justify-center bg-[#9786cd] w-[10vh] h-[10vh] rounded-full">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            {/* <h1 className="text-xl font-semibold">User Score </h1> */}
            <p className="text-md">{info.detail.release_date}</p>

            <h1 className="flex gap-4 font-normal text-md">
              {info.detail.genres.map((item, index) => item.name).join(", ")}
            </h1>

            <h1 className="font-normal text-md">{info.detail.runtime}min</h1>
          </div>

          <h1 className="mt-4 font-regular text-lg leading-tight ">
            {info.detail.tagline}
          </h1>
          <div className="md:w-2/3 w-full">
            <h1 className="mt-4 text-xl">Overview</h1>
            <p className="mt-2 mb-4">{info.detail.overview}</p>
          </div>

          {/* <Link to={`/${pathname}/trailer`}  className=" bg-[#9786cd] rounded-md px-8 py-2">Trailer</Link> */}
          <Link to={`https://www.youtube.com/watch?v=${info.videos}`}  className=" bg-[#9786cd] rounded-md px-8 py-2">Trailer</Link>
        </div>
      </div>


      {/* platform */}

      <div className="w-[80%]">
        <div className="mt-4 ">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div key={info.id} className="flex gap-4 items-center text-white mt-4">
              <h1>Available on Platform:</h1>
              {info.watchproviders.flatrate.map((item, index) => {
                return (
                  <img key={index}
                    title={item.provider_name}
                    className="w-[8vh] h-[8vh] rounded-md object-cover object-center"
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}}`}
                  />
                );
              })}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-4 items-center text-white mt-4">
              <h1>Available for rent:</h1>
              {info.watchproviders.rent.map((item, index) => {
                return (
                  <img key={index}
                    title={item.provider_name}
                    className="w-[8vh] h-[8vh] rounded-md object-cover object-center"
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}}`}
                  />
                );
              })}
            </div>
          )}
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-4 items-center text-white mt-4">
              <h1>Available to buy:</h1>
              {info.watchproviders.buy.map((item, index) => {
                return (
                  <img key={index}
                    title={item.provider_name}
                    className="w-[8vh] h-[8vh] rounded-md object-cover object-center"
                    src={`https://image.tmdb.org/t/p/original/${item.logo_path}}`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <hr  className="my-8 opacity-70"/>

      {/* recommendation */}
      
      <h1 className="text-3xl text-white font-semibold p-3 mt-4">Recommendation</h1>
      <div >
        <HorizontalCard data={info.recommendations.length>0 ? info.recommendations : info.similar}/>
      </div>

      <Outlet/>
    </div>
  ) : (
    <Load />
  );
};

export default Moviedetails;
