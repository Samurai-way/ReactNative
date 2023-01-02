export interface SearchTitleContentType  {
    Search: SearchTitleOneFilmType[]
}
export interface SearchTitleOneFilmType {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}