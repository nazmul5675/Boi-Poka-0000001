import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams()
    const bookId = parseInt(id)
    const bookData = useLoaderData()
    const singleBook = bookData.find(book => book.bookId === bookId)
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBook;

    const handleMarkAsRead = (id) => {
        addToStoredDB(id)
    }
    return (
        <div className='flex justify-between my-10'>
            <div className="flex items-center">
                <figure className='w-1/2 bg-blue-100 p-10 py-30 rounded-md'>
                    <img
                        src={image}
                        alt="Album"
                        className='w-1/2 mx-auto' />
                </figure>

                <div className="p-10 flex flex-col gap-y-5 w-1/2">
                    <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium text-base">By : {author}</p>
                    <div className="border border-t  border-b-gray-200 w-full mx-auto"></div>
                    <p className="font-medium text-base">{category}</p>
                    <div className="border border-t  border-b-gray-200 w-full mx-auto"></div>
                    <p className='text-base'> <span className='font-bold'>Review :</span> {review}</p>
                    <div className="border border-t  border-b-gray-200 w-full mx-auto"></div>
                    <div>
                        <h1 ><span className='font-bold'> Tags : </span>
                            {
                                tags.map(tag => <><button className="btn border-none bg-green-100 text-green-500 rounded-full mx-1">
                                    # {tag}</button></>)
                            }
                        </h1>
                    </div>


                    <div className="flex justify-between">
                        <p className="font-medium text-base">Number Of Pages:</p>
                        <p className="font-bold text-base flex items-center gap-x-2">{totalPages}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium text-base">Publisher::</p>
                        <p className="font-bold text-base flex items-center gap-x-2">{publisher}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium text-base">Year of Publishing:</p>
                        <p className="font-bold text-base flex items-center gap-x-2">{yearOfPublishing}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium text-base">Rating:</p>
                        <p className="font-bold text-base flex items-center gap-x-2">{rating}</p>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => handleMarkAsRead(id)} className='btn border-none font-bold '>Read</button>
                        <button className='btn border-none font-bold text-white bg-green-500'>Wishlist</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;