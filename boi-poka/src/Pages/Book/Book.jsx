import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ book }) => {
    const { author, bookId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;
    return (
        <div className="mx-auto my-5 ">
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <div className="bg-blue-100 p-20 rounded-md"
                        >
                            <img
                                src={image}
                                alt={`Book Image${bookName}`}
                                className="rounded-xl w-full h-[250px] hover:rotate-x-10 -rotate-y-10 duration-1000" />
                        </div>
                    </figure>
                    <div className="p-10 flex flex-col gap-y-5">
                        <div>
                            {
                                tags.map(tag => <><button className="btn border-none bg-green-100 text-green-500 rounded-full mx-1">
                                    {tag}</button></>)
                            }
                        </div>
                        <h2 className="card-title font-bold text-2xl">{bookName}</h2>
                        <p className="font-medium text-base">By : {author}</p>
                        <div className="border border-t border-dashed border-b-gray-200 w-full mx-auto"></div>

                        <div className="flex justify-between">
                            <p className="font-medium text-base">{category}</p>
                            <p className="font-medium text-base flex items-center gap-x-2">{rating} <FaRegStar /></p>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;