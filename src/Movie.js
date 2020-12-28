import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";

const Movie = ({ url, title, data }) => {
    let { handleModal } = useContext(ModalContext);

    return (
        <>
            <li onClick={() => handleModal(<ContentComponent data={data} />)}>
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

const ContentComponent = ({data}) => {
    let { handleModal } = useContext(ModalContext);
    return (
      <>
        <p>{data.original_title}</p>
        <button
          className="h-8 px-3 text-white bg-red-500 text-xs rounded"
          onClick={handleModal}
        >
          Close modal
        </button>
      </>
    );
  }