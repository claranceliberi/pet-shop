export interface SidebarProps {
    links: Link[]
}

export type Link = {
    label: string
    icon: string
    onClick?: () => void
}
