import React, { createContext } from "react";
import useDataApi from "../hooks/useDataApi";

import conf from "./../config/config";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [{ data, isLoading, isError, isEmpty }, fetchMovies ] = useDataApi(
        `${conf.DISCOVER_ENDPOINT}?api_key=${conf.API_KEY}&sort_by=popularity.desc&page=1`,
        {
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0
        },
    );

    return (
        <MovieContext.Provider
            value={[{data, isLoading, isError, isEmpty}, fetchMovies]}
        >
            {props.children}
        </MovieContext.Provider>
    );
}
