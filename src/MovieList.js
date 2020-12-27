import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
    const [movies] = useContext(MovieContext);

    return (
        <>
        	<main className="movie">
                <h1>Popular Movies</h1>
                <ul className="movie__list">
                    {movies.data.results.map((movie, i) => (
                        <Movie
                            url={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                            title={movie.original_title}
                            idx={i}
                        />
                    ))}
                </ul>
            </main>
        </>
    );
};

export default MovieList;