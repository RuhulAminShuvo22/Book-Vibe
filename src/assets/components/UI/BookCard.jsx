import React from 'react';
import { FaRegStar } from "react-icons/fa";

const BookCard = (({book}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
  <figure className="p-6">
    <img
      src={book.image}
      alt={book.bookName}
        className="rounded-xl h-[250px]" />
  </figure>
  <div className="card-body">
    <div className="flex items-center gap-2">
{
        book.tags.map((tag, ind) => (
            <div key={ind} className="badge badge-success">{tag}</div>
        ) )
    }
    </div>

        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="font-semibold text-lg">{book.author}</p>
      
      
    
    
    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
      <div className="font-semibold text-xl">{book.category}</div>
      <div className="flex gap-2 items-center text-xl">{book.rating}<FaRegStar /></div>
    </div>
  </div>
 </div>
);
})

export default BookCard;