import axios from "./axios"
import { ApiResponse, Params, Product } from "./types"

type ExtraParams = {
    category?: string
    title?: string
    price?: string
    brand?: string
}

type ProductParams = Params & ExtraParams

export async function getProducts(params: ProductParams = {}) {
    return (await axios.get<ApiResponse<Product>>("/products", { params })).data
}
