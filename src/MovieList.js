import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = ({query, empty, setIsEmpty}) => {
    const [movies] = useContext(MovieContext);
    const initialValues = JSON.parse(localStorage.getItem("initialData"));

    useEffect(() => {
        if (query === "") {
            setIsEmpty(true);
        }
    }, [query,setIsEmpty]);

    return (
        <>
        	<main className="movie">
                <h1>Popular Movies</h1>
                <ul className="movie__list">
                    {empty
                        ? (
                            initialValues.data.results.map((movie, i) => (
                                <Movie
                                    url={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                                    title={movie.original_title}
                                    idx={i}
                                />
                            ))
                        ) : (
                            movies.data.results.map((movie, i) => (
                                <Movie
                                    url={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                                    title={movie.original_title}
                                    idx={i}
                                />
                            ))
                        )

                    }
                </ul>
            </main>
        </>
    );
};

export default MovieList;