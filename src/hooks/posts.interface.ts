interface Query {
    get: 'all' | 'slug' | 'category' | 'id';
    query?: string | number;
}


export type {
    Query
}
