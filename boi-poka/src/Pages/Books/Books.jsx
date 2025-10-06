// import React, { Suspense, useEffect, useState } from 'react';
// import Book from '../Book/Book';

import Book from "../Book/Book";

const Books = ({ books }) => {

    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch('/booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])
    // const booksPromise = fetch('/booksData.json').then(res => res.json())
    // console.log(books);

    return (
        <div>
            <div>
                <h1 className="flex justify-center items-center text-5xl font-semibold">Hello Book Lover's </h1>
                {/* {
                    allBooks.length === 0 ? (
                        <div className='flex justify-center items-center'>
                            <span className="loading loading-ring loading-xl"></span>
                        </div>
                    ) : (
                        allBooks.map((book, ind) => <div key={ind}>
                            {book.bookName}

                        </div>)
                    )
                } */}

                {/* <Suspense fallback={<div className='flex justify-center items-center'>
                    <span className="loading loading-ring loading-xl"></span>
                </div>}>
                    <Book booksPromise={booksPromise}></Book>

                </Suspense> */}
                <div className="grid grid-cols-3">
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>

            </div >
        </div >
    );
};

export default Books;