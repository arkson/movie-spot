import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

import conf from "./../config/config";

const RatingFilter = () => {
    const [active, setActive] = useState(false);
    const [className, setclassName] = useState(null);
    const [movies, fetchMovies] = useContext(MovieContext);

    const ratingRange = {
        1: '&vote_average.gte=0&vote_average.lte=2',
        2: '&vote_average.gte=2&vote_average.lte=4',
        3: '&vote_average.gte=4&vote_average.lte=6',
        4: '&vote_average.gte=6&vote_average.lte=8',
        5: '&vote_average.gte=8&vote_average.lte=10',
    };

    const toggleRating = (star, name) => {
        setActive(!active);
        setclassName((active ? name : null));
        const url = active ?
            `${conf.DISCOVER_ENDPOINT}?api_key=${conf.API_KEY}&sort_by=popularity.desc${ratingRange[star]}` : '';

        fetchMovies(url);

    };

    return (
        <div className="rating">
            <div>
                <span className={className}
                    onClick={() => toggleRating(5, 'five_star')}>☆</span>
                <span className={className}
                    onClick={() => toggleRating(4, 'four_star')}>☆</span>
                <span className={className}
                    onClick={() => toggleRating(3, 'three_star')}>☆</span>
                <span className={className}
                    onClick={() => toggleRating(2, 'two_star')}>☆</span>
                <span className={className}
                    onClick={() => toggleRating(1, 'one_star')}>☆</span>
            </div>
            <h3>Filter by Rating</h3>
            <h2>{movies.isEmpty ? 'Popular Movies' : 'Results'}</h2>
        </div>
    );
};

export default RatingFilter;