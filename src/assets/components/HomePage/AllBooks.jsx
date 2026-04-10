//import { h2 } from "framer-motion/client";
import { Book, Tag } from "lucide-react";
import React, { use } from "react";
import BookCard from "../UI/BookCard";



//import BookCard from "../ui/BookCard";

const booksPromise = fetch("/public/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books ");
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center mb-6">Books</h2>

      <div className="grid grid-cols-3 gap-10">
        {
        books.map((book , ind) => {
            return (
                <BookCard key={ind} book={book}></BookCard>
            )
        })
      }
      </div>

    </div>
  );
};

export default AllBooks;