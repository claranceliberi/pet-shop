import axios from "./axios"
import { ApiResponse, Category, Params } from "./types"

export async function getCategories(params: Params = {}) {
    return (await axios.get<ApiResponse<Category>>("/categories", { params })).data
}
