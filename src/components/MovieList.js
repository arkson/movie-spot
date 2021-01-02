import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";
import { ModalProvider } from "../context/ModalContext";
import ErrorMessage from "./../components/ErrorMessage";

const MovieList = () => {
    const [movies] = useContext(MovieContext);

    return (
        <>
        {!movies.isError ? (
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
        ) : (
            <ErrorMessage />
        )}
        </>
    );
};

export default MovieList;