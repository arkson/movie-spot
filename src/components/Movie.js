import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Movie = ({ url, movie }) => {
    let { handleModal } = useContext(ModalContext);

    return (
        <>
            <li onClick={() => handleModal(<ContentComponent data={movie} />)}>
                <figure>
                    <img
                        src={url}
                        alt={movie.title}
                    />
                </figure>
            </li>
        </>
    );
};

export default Movie;

const ContentComponent = ({data}) => {
    let { handleModal } = useContext(ModalContext);
    return (
        <>
        <div id={data.id} className="modal-window">
            <div className='row'>
                <div className='column'>
                    <img src={'https://image.tmdb.org/t/p/w500'+data.backdrop_path} alt={data.title} />
                </div>
                <div className='column'>
                    <h2>{data.original_title}</h2>
                    <p>{data.overview}</p>
                    <span><b>Original Title:</b> {data.original_title}</span>
                    <span><b>Release Date:</b> {data.release_date}</span>
                    <span><b>Vote Avg:</b> {data.vote_average}</span>
                    <span><b>Vote Count:</b> {data.vote_count}</span>
                    <button
                        className="primary-btn"
                        onClick={handleModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>

        </>
    );
  }