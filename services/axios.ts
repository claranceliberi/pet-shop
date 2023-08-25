import axios from "axios"

const instance = axios.create({
    baseURL: "http://pet-shop.buckhill.com.hr/api/v1",
})

export default instance
