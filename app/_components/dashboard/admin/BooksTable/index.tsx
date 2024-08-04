import { booksList } from "@/app/_data/booksList";
import React from "react";

function BooksTable() {
  return (
    <div id='table' className='mt-2 pb-2 h-[25rem] overflow-y-auto relative'>
      <div
        id='table-header'
        className='grid sticky top-0 bg-white grid-cols-7 w-full font-light font-gray-500 py-2 border-b border-b-gray-50'
      >
        <p className=''>No.</p>
        <p className='col-span-2'>Book no.</p>
        <p className='col-span-2'>Owner</p>
        <p>Status</p>
        <p>Price</p>
      </div>
      <div id='table-body' className=''>
        {booksList.map((book, index) => (
          <div
            key={book.Id}
            id='table-body-row'
            className='grid grid-cols-7 w-full py-2 border-y-[0.25px] border-y-gray-50'
          >
            <p className=''>{index + 1}</p>
            <p className='col-span-2'>{book.BookNo}</p>
            <p className='col-span-2'>{book.Owner}</p>
            <p>{book.Status ? "Free" : "Rented"}</p>
            <p>{book.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksTable;
