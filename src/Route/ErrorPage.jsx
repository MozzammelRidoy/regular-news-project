// import React from 'react';

import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    const navigate = useNavigate(); 
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="text-center space-y-5 mt-10">
            <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Page Not Ready, Comming Soon...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

        <div className="space-x-16">
            <button onClick={handleGoBack} className="btn btn-outline px-10">Go Back</button>
            <Link to={'/'}><button className="btn btn-outline px-10">Home</button></Link>
        </div>
      
        </div>
    );
};

export default ErrorPage;