import axios from "./axios"
import { ApiResponse, Promotion } from "./types"

export async function getPromotions() {
    return (await axios.get<ApiResponse<Promotion>>("/main/promotions")).data
}
