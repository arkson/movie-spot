import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;
const DISCOVER_ENDPOINT = process.env.REACT_APP_DISCOVER_ENDPOINT;

const RatingFilter = ({empty, setIsEmpty}) => {
    const [active, setActive] = useState(false);
    const [className, setclassName] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [movies, fetchMovies] = useContext(MovieContext);

    const ratingRange = {
        1: '&vote_average.gte=0&vote_average.lte=2',
        2: '&vote_average.gte=2&vote_average.lte=4',
        3: '&vote_average.gte=4&vote_average.lte=6',
        4: '&vote_average.gte=6&vote_average.lte=8',
        5: '&vote_average.gte=8&vote_average.lte=10',
    };

    const handleClick = (star, name) => {
        setActive(!active);
        setclassName((active ? name : null));
        if(active) {
            setIsEmpty(false);
            fetchMovies(`${DISCOVER_ENDPOINT}?api_key=${API_KEY}&sort_by=popularity.desc${ratingRange[star]}`);
        } else {
            setIsEmpty(true);
        }

    };

    return (
        <div className="rating">
            <div>
                <span className={className}
                    onClick={() => handleClick(5, 'five_star')}>☆</span>
                <span className={className}
                    onClick={() => handleClick(4, 'four_star')}>☆</span>
                <span className={className}
                    onClick={() => handleClick(3, 'three_star')}>☆</span>
                <span className={className}
                    onClick={() => handleClick(2, 'two_star')}>☆</span>
                <span className={className}
                    onClick={() => handleClick(1, 'one_star')}>☆</span>
            </div>
            <h3>Filter by Rating</h3>
            <h2>{empty ? 'Popular Movies' : 'Results'}</h2>
        </div>
    );
};

export default RatingFilter;