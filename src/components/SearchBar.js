import React, { useContext, useEffect, useState } from "react";
import background from '../assets/background.jpg';

import { MovieContext } from "../context/MovieContext";
import conf from "./../config/config";

const SearchBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [movies, fetchMovies] = useContext(MovieContext);
	const [query, setQuery] = useState('');


    useEffect(() => {
        const data = sessionStorage.getItem("initialData");
        if (query === "" && data) {
            fetchMovies('');
        }
    }, [fetchMovies, query]);

    return (
        <div className="searchbar">
            <img src={background} alt="Search bar background" />
            <div className="content">
                <h1>Your favourite movies. Explained.</h1><br />
                <h3>Figure out what happened. Then find out why.</h3>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        fetchMovies(`${conf.SEARCH_ENDPOINT}?api_key=${conf.API_KEY}&query=${query}`);
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