import 'server-only';
export declare function fetchNews(params: {
    category_id?: string;
    slug?: string;
    lang?: string;
    limit?: number;
    page?: number;
    simpleMode?: string;
    title?: string;
}): Promise<any>;
export declare function fetchCategories(): Promise<any>;
