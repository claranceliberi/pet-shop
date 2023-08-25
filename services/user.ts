import { AxiosError } from "axios"
import axios from "./axios"
import { AccountCreationData, LoginResponse, UniPaginatedApiResponse, UserData } from "./types"
import { LocalStorageManager as lm } from "@/utils/localStorage"

export async function createUser(user: AccountCreationData) {
    const formData = new URLSearchParams(user as unknown as Record<string, string>).toString()
    return (
        await axios.post<UniPaginatedApiResponse<UserData & LoginResponse>>("/user/create", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
    ).data
}

export async function login(email: string, password: string) {
    const formData = new URLSearchParams({ email, password }).toString()

    return (
        await axios.post<UniPaginatedApiResponse<LoginResponse>>("/user/login", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
    ).data
}

export async function getUser() {
    const token = () => lm.get("token")

    return (
        await axios.get<UniPaginatedApiResponse<UserData>>("/user", {
            headers: {
                Authorization: token() ? `Bearer ${token()}` : null,
            },
        })
    ).data
}
