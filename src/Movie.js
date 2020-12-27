import React from "react";

const Movie = ({ url, title, idx }) => {
    return (
        <>
            <li id={idx}>
                <figure>
                    <img
                        src={url}
                        alt={title}
                    />
                </figure>
            </li>
        </>
    );
};

export default Movie;