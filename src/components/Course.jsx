/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from "axios";
function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://bookstore-pi-ruddy.vercel.app/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl  md:text-4xl">
                        We're delighted to have you{" "}
                        <span className="text-pink-500"> Here! :</span>
                    </h1>
                    <p className="mt-12">
                        Reading books opens up a world of imagination and knowledge. Whether it's diving into a thrilling mystery, exploring distant galaxies in science fiction, or unraveling the complexities of historical events, each page offers a new adventure. Books not only entertain but also educate, providing insights into different cultures, philosophies, and life experiences. Engaging with literature can enhance empathy, improve cognitive skills, and offer a respite from the hustle and bustle of everyday life. In the quiet moments spent with a book, readers can find a sense of calm and inspiration, making the act of reading a cherished pastime for many.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                        {book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Course