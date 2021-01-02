import React from "react";
import errorIcon from '../assets/error-icon.png';

const ErrorMessage = () => {
    return (
        <div className="error__message">
            <img src={errorIcon} width="42" height="42" alt="error message" />
            <h2>Oops!</h2>
            <h4>Something went wrong</h4>
            <span>Sorry, Please try again</span>
        </div>
    );
}

export default ErrorMessage;