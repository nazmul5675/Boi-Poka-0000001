import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className=' bg-[#131313]/5 rounded-xl my-10'>
            <div className='flex justify-center items-center p-20'>
                <div>
                    <h1 className='text-6xl mb-10'>Books to freshen up your bookshelf</h1>
                    <button className='btn
            bg-green-500 text-white font-semibold'>View The List</button>
                </div>

                <div>
                    <img className='rounded-md' src={bannerImg} alt="Books img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;