type UUID = string
type IURL = string

interface Metadata {
    brand: UUID
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

export interface Blog {
    uuid: UUID
    title: string
    slug: string
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

export interface Category {
    uuid: UUID
    title: string
    slug: string
    created_at: string
    updated_at: string
}
export interface Brand {
    uuid: UUID
    title: string
    slug: string
    created_at: string
    updated_at: string
}

export interface Product {
    category_uuid: UUID
    title: string
    uuid: UUID
    price: number
    description: string
    metadata: Metadata
    created_at: string
    updated_at: string
    deleted_at: string | null
    category: Category
    brand: Brand
}

export interface Params {
    page?: number
    limit?: number
    sortBy?: string
    desc?: boolean
}
