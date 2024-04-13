// export {removeperson} from "../reducer/PeopleSlice";
// // import axios from "../utils/Axios";
// import axios from "../../../utils/Axios"
// import { loadperson } from "../reducer/PeopleSlice";

// export const asyncloadperson =(id)=> async(dispatch,getState)=>{
//     const detail =await axios.get(`/person/${id}`)
//     // const externalid = await axios.get(`/person/${id}/external_ids`)
//     // const tvcredits = await axios.get(`/person/${id}/tv_credits`)
//     // const combinedcredits = await axios.get(`/person/${id}/combined_credits`)
//     // const moviecredits = await axios.get(`/person/${id}/movie_credits`)

//     let theultimatedetails = {
//         detail: detail.data,
//         // externalid: externalid.data,
//         // tvcredits: tvcredits.data,
//         // moviecredits: moviecredits.data,
//         // combinedcredits: combinedcredits.data,
//     }

//     dispatch(loadperson(theultimatedetails))
// }


export {removeperson} from "../reducer/PeopleSlice";
import axios from "../../../utils/Axios"
import { loadperson } from "../reducer/PeopleSlice";

export const asyncloadperson =(id)=> async(dispatch,getState)=>{
    const detail = await axios.get(`/person/${id}`)
    const externalid = await axios.get(`/person/${id}/external_ids`)
    const combinedcredit = await axios.get(`/person/${id}/combined_credits`)
    let theultimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        combinedcredit : combinedcredit.data
    }

    dispatch(loadperson(theultimatedetails))
}