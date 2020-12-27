import React, {
    useContext,
    useState,
    useEffect
 } from "react";
import background from './background.jpg';

import { MovieContext } from "./MovieContext";

const SearchBar = () => {
    const [movies, fetchMovies] = useContext(MovieContext);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (movies.data.results.length > 0)
            localStorage.setItem("initialData", JSON.stringify(movies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const initialData = JSON.parse(localStorage.getItem("initialData"));
        if (query === "")
            console.log('movieList', initialData)
    }, [query]);

    return (
        <div className="searchbar">
            <img src={background} alt="Search bar background" />
            <div className="content">
                <h1>Your favourite movies. Explained.</h1><br />
                <p>Figure out what happened. Then find out why.</p>
                <form
                    onSubmit={event => {
                        event.preventDefault();
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