import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import { FaRegStar } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md"
const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('')
    const bookData = useLoaderData();
    console.log(bookData);
    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))

        const myReadList = bookData.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList);
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortedByPages = [...readList.sort((a, b) => a.totalPages - b.totalPages)]
            setReadList(sortedByPages)
        }
        if (type === 'ratting') {
            const sortByRatting = [...readList.sort((a, b) => a.rating - b.rating)]
            setReadList(sortByRatting)
        }
    }
    return (
        <div>
            <div className='flex justify-center items-center my-20'>
                <details className="dropdown">
                    <summary className="btn m-1">Sort By : {sort ? sort : ''}</summary>
                    <ul className="menu dropdown-content  bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('pages')}>Page Number</a></li>
                        <li><a onClick={() => handleSort('ratting')}>Ratting</a></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>

                    <div>
                        {
                            readList.map((readBook, ind) => <div key={ind}>
                                <div className='w-full mx-auto'>
                                    <div className="flex items-center bg-base-100 w-full shadow-sm rounded-xl mb-5">
                                        <figure className="px-10 py-10">
                                            <div className="bg-blue-100 p-20 rounded-md"
                                            >
                                                <img
                                                    src={readBook.image}
                                                    alt={`Book Image${readBook.bookName}`}
                                                    className="rounded-xl w-full h-[250px] hover:rotate-x-10 -rotate-y-10 duration-1000" />
                                            </div>
                                        </figure>
                                        <div className="p-10 flex flex-col gap-y-5">
                                            <h2 className="card-title font-bold text-2xl">{readBook.bookName}</h2>
                                            <p className="font-medium text-base">By : {readBook.author}</p>
                                            <div className='flex'>
                                                <div>
                                                    <span className='font-black '>Tags :</span>
                                                    {
                                                        readBook.tags.map(tag => <><button className="btn border-none bg-green-100 text-green-500 rounded-full mx-1">
                                                            # {tag}</button> </>)
                                                    }
                                                </div>
                                                <span className='flex items-center gap-x-2'><CiLocationOn /> Year Of Publishing {readBook.yearOfPublishing}</span>
                                            </div>
                                            <div className='flex justify-start gap-x-10'>
                                                <p className="font-medium text-base flex items-center gap-x-2"><LuUsers /> Publisher : {readBook.publisher}</p>
                                                <p className="font-medium text-base flex items-center gap-x-2"><MdOutlineContactPage />Page : {readBook.totalPages}</p>
                                            </div>

                                            <div className="border border-t  border-b-gray-200 w-full mx-auto"></div>

                                            <div className="flex justify-start gap-x-2">
                                                <p className="font-medium text-base btn rounded-full bg-blue-100 text-blue-500">Category : {readBook.category}</p>
                                                <p className="font-medium text-base flex items-center gap-x-2 btn rounded-full bg-amber-100 text-amber-500">Rating : {readBook.rating} <FaRegStar /></p>
                                                <p className="font-medium text-base flex items-center gap-x-2 btn  rounded-full bg-green-500 text-white">View Details </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>

                        {
                            readList.map((readBook, ind) => <div key={ind}>
                                <div className='w-full mx-auto'>
                                    <div className="flex items-center bg-base-100 w-full shadow-sm rounded-xl mb-5">
                                        <figure className="px-10 py-10">
                                            <div className="bg-blue-100 p-20 rounded-md"
                                            >
                                                <img
                                                    src={readBook.image}
                                                    alt={`Book Image${readBook.bookName}`}
                                                    className="rounded-xl w-full h-[250px] hover:rotate-x-10 -rotate-y-10 duration-1000" />
                                            </div>
                                        </figure>
                                        <div className="p-10 flex flex-col gap-y-5">
                                            <h2 className="card-title font-bold text-2xl">{readBook.bookName}</h2>
                                            <p className="font-medium text-base">By : {readBook.author}</p>
                                            <div className='flex'>
                                                <div>
                                                    <span className='font-black '>Tags :</span>
                                                    {
                                                        readBook.tags.map(tag => <><button className="btn border-none bg-green-100 text-green-500 rounded-full mx-1">
                                                            # {tag}</button> </>)
                                                    }
                                                </div>
                                                <span className='flex items-center gap-x-2'><CiLocationOn /> Year Of Publishing {readBook.yearOfPublishing}</span>
                                            </div>
                                            <div className='flex justify-start gap-x-10'>
                                                <p className="font-medium text-base flex items-center gap-x-2"><LuUsers /> Publisher : {readBook.publisher}</p>
                                                <p className="font-medium text-base flex items-center gap-x-2"><MdOutlineContactPage />Page : {readBook.totalPages}</p>
                                            </div>

                                            <div className="border border-t  border-b-gray-200 w-full mx-auto"></div>

                                            <div className="flex justify-start gap-x-2">
                                                <p className="font-medium text-base btn rounded-full bg-blue-100 text-blue-500">Category : {readBook.category}</p>
                                                <p className="font-medium text-base flex items-center gap-x-2 btn rounded-full bg-amber-100 text-amber-500">Rating : {readBook.rating} <FaRegStar /></p>
                                                <p className="font-medium text-base flex items-center gap-x-2 btn  rounded-full bg-green-500 text-white">View Details </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }

                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ReadList;