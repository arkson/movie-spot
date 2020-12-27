import React, { createContext } from "react";
import useDataApi from "./hooks/useDataApi";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [{ data, isLoading, isError }, fetchMovies ] = useDataApi(
        'https://api.themoviedb.org/3/discover/movie?api_key=b2f807b6ab82e6b2a44dec94fabebeb9&sort_by=popularity.desc&page=1',
        {
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0
        },
    );

    return (
        <MovieContext.Provider value={[{data, isLoading, isError}, fetchMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
