import React from "react";

const Movie = ({ url, title, data }) => {
    const handleClick = () => {
        console.log('Movie data', data);
    };

    return (
        <>
            <li onClick={()=>handleClick()}>
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