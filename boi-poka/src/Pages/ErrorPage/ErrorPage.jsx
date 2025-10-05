import React from 'react';
import { Link } from 'react-router';
;

const ErrorPage = () => {
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-red-600">404 - Page Not Found</h1>
                    <p className="py-6">
                        Oops! The page you are looking for doesn’t exist or has been moved.
                        Please check the URL or return to the homepage.
                    </p>

                    <button className="btn btn-primary"> <Link to="/">Go Home</Link></button>

                </div>
            </div>
        </div>


    );
};

export default ErrorPage;