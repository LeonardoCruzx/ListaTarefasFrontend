export interface Paginator<T>{
    links: {
        previous: String;
        next: String;
    };
    total_results: Number;
    total_pages: Number;
    current_page: Number;
    page_size: Number;
    results: T[]

}
