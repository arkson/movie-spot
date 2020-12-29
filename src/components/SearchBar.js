import React, { useContext, useEffect } from "react";
import background from '../assets/background.jpg';

import { MovieContext } from "../context/MovieContext";

const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;
const SEARCH_ENDPOINT = process.env.REACT_APP_SEARCH_ENDPOINT;

const SearchBar = ({query, setQuery, setIsEmpty}) => {
    const [movies, fetchMovies] = useContext(MovieContext);


    useEffect(() => {
        if (movies.data.results.length > 0)
            localStorage.setItem("initialData", JSON.stringify(movies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="searchbar">
            <img src={background} alt="Search bar background" />
            <div className="content">
                <h1>Your favourite movies. Explained.</h1><br />
                <h3>Figure out what happened. Then find out why.</h3>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        setIsEmpty(false);
                        fetchMovies(`${SEARCH_ENDPOINT}?api_key=${API_KEY}&query=${query}`);
                    }}
                >
                    <input
                        type="text"
                        value={query}
                        placeholder="Search for a movie..."
                        onChange={event => setQuery(event.target.value)}
                    />
                    <button
                        className={(query ? 'primary-btn' : 'disabled-btn')}
                        disabled={!query}
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;