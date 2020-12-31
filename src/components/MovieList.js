import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";
import { ModalProvider } from "../context/ModalContext";

const MovieList = () => {
    const [movies] = useContext(MovieContext);

    return (
        <>
        	<main className="movie">
                <ul className="movie__list">
                    {movies.data.results.map(movie => (
                        <ModalProvider>
                            <Movie
                                key={movie}
                                url={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                                movie={movie}
                            />
                        </ModalProvider>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default MovieList;