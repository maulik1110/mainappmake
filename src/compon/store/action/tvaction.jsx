export {removeTv} from "../reducer/TVSlice";
import axios from "../../../utils/Axios"
import { loadTv } from "../reducer/TVSlice";

export const asyncloadtv =(id)=> async(dispatch,getState)=>{
    const detail =await axios.get(`/tv/${id}`)
    const externalid = await axios.get(`/tv/${id}/external_ids`)
    const recommendations = await axios.get(`/tv/${id}/recommendations`)
    const similar = await axios.get(`/tv/${id}/similar`)
    const videos = await axios.get(`/tv/${id}/videos`)
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`)

    let theultimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(e=>e.type==="Trailer"),
        watchproviders: watchproviders.data.results.IN,
    }

    dispatch(loadTv(theultimatedetails))
}