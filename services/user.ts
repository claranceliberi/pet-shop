import { AxiosError } from "axios"
import axios from "./axios"
import { AccountCreationData, LoginResponse, UniPaginatedApiResponse, UserData } from "./types"

export async function createUser(user: AccountCreationData) {
    const formData = new URLSearchParams(user as unknown as Record<string, string>).toString()
    return (
        await axios.post<UniPaginatedApiResponse<UserData & LoginResponse>, AxiosError<UniPaginatedApiResponse>>("/user/create", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
    ).data
}

export async function login(email: string, password: string) {
    const formData = new URLSearchParams({ email, password }).toString()

    return (
        await axios.post<UniPaginatedApiResponse<LoginResponse>, AxiosError<UniPaginatedApiResponse>>("/user/login", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
    ).data
}
