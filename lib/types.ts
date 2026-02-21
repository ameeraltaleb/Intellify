export interface Article {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string[];
    category: string;
    read_time: string;
    views?: number;
    is_published?: boolean;
    created_at?: string;
    date?: string;
    tags?: string[];
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    count: number;
}
