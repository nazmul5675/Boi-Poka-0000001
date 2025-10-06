import React from 'react';
import Banner from '../Components/Banner/Banner';
import Books from '../Pages/Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const books = useLoaderData()

    return (
        <div >
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;