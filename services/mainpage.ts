import axios from "./axios"
import { ApiResponse, Blog, Params, Promotion } from "./types"

export async function getPromotions(params: Params = {}) {
    return (await axios.get<ApiResponse<Promotion>>("/main/promotions", { params })).data
}

export async function getBlogs(params: Params = {}) {
    return (await axios.get<ApiResponse<Blog>>("/main/blog", { params })).data
}
