import axios from "axios"

const API_KEY="bfde4db3037a8f581e2636c590f4615f"

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {accept: 'application/json'},
    params: {
        api_key: API_KEY
    }


})


export default instance;