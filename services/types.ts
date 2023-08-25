type UUID = string
type IURL = string

interface Metadata {
    image: UUID
    valid_to: string
    valid_from: string
}

export interface Promotion {
    uuid: UUID
    title: string
    content: string
    metadata: Metadata
    created_at: string
    updated_at: string
}

interface Link {
    url: IURL | null
    label: string
    active: boolean
}

export interface ApiResponse<T> {
    current_page: number
    data: T[]
    first_page_url: IURL
    from: number
    last_page: number
    last_page_url: IURL
    links: Link[]
    next_page_url: IURL | null
    path: IURL
    per_page: number
    prev_page_url: IURL | null
    to: number
    total: number
}
