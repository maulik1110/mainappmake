export {removemovie} from "../reducer/MovieSlice";
// import axios from "../utils/Axios";
import axios from "../../../utils/Axios"
import { loadmovie } from "../reducer/MovieSlice";

export const asyncloadmovie =(id)=> async(dispatch,getState)=>{
    const detail =await axios.get(`/movie/${id}`)
    const externalid = await axios.get(`/movie/${id}/external_ids`)
    const recommendations = await axios.get(`/movie/${id}/recommendations`)
    const similar = await axios.get(`/movie/${id}/similar`)
    const videos = await axios.get(`/movie/${id}/videos`)
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`)

    let theultimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(e=>e.type==="Trailer"),
        watchproviders: watchproviders.data.results.IN,
    }

    dispatch(loadmovie(theultimatedetails))
}