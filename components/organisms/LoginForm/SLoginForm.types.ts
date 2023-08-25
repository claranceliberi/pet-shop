export interface LoginFormProps {
    error?: string
}

export interface LoginPayload {
    email: string
    password: string
    rememberMe: boolean
}
