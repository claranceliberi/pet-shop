export interface ButtonProps {
    appearance?: "primary" | "secondary" | "white"
    outlined?: boolean
    loading?: boolean
    disabled?: boolean
    icon?: string
    iconPosition?: "left" | "right"
    label?: string
    text?: boolean
}
