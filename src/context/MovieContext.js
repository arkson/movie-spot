import React, { createContext } from "react";
import useDataApi from "../hooks/useDataApi";

const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;
const DISCOVER_ENDPOINT = process.env.REACT_APP_DISCOVER_ENDPOINT;

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [{ data, isLoading, isError }, fetchMovies ] = useDataApi(
        `${DISCOVER_ENDPOINT}?api_key=${API_KEY}&sort_by=popularity.desc&page=1`,
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
