import axios from "axios"
import { LocalStorageManager as lm } from "@/utils/localStorage"

const token = () => lm.get("token")

const instance = axios.create({
    baseURL: "http://pet-shop.buckhill.com.hr/api/v1",
    headers: {
        Authorization: token() ? `Bearer ${token()}` : null,
    },
})

export default instance
