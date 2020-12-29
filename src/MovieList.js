import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import { ModalProvider } from "./ModalContext";

const MovieList = ({query, empty, setIsEmpty}) => {
    const [movies] = useContext(MovieContext);
    const initialValues = JSON.parse(localStorage.getItem("initialData"));

    useEffect(() => {
        if (query === "") {
            setIsEmpty(true);
        }
    }, [query,setIsEmpty]);

    const list = empty ? initialValues : movies;

    return (
        <>
        	<main className="movie">
                <ul className="movie__list">
                    {list.data.results.map(movie => (
                        <ModalProvider>
                            <Movie
                                url={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                                title={movie.original_title}
                                data={movie}
                            />
                        </ModalProvider>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default MovieList;