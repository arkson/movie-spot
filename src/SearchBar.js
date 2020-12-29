import React, { useContext, useEffect } from "react";
import background from './background.jpg';

import { MovieContext } from "./MovieContext";

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
                        fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=b2f807b6ab82e6b2a44dec94fabebeb9&query=${query}`);
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