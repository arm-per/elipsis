interface postResponse {
    author: number;
    categories: number[];
    date: string;
    excerpt: Excerpt,
    title: Title;
    content: Content;
    featured_media: number;
    format: string;
    guid: Guid;
    id: number;
    link: string;
    meta: Array<string> | Array<undefined>;
    ping_status: string;
    slug: string;
    status: string;
    template: string;
    type: 'post' | string;
    featured_media_src_url: string;
}

interface Excerpt {
    protected: boolean;
    rendered: string;
}

interface Title {
    rendered: string;
}

interface Content {
    protected: boolean;
    rendered: string;
}

interface Guid {
    rendered: string;
}


export type { postResponse };
