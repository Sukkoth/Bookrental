import React from "react";
import Row from "../../Table/Row";
import { booksListAdmin } from "@/app/_data/booksList";
import BookStatusToggle from "./BookStatusToggle";

function List() {
  return (
    <div className='overflow-y-scroll mt-10 h-[75dvh]'>
      <Row gridClass='grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] relative sticky top-0 bg-white'>
        <Row.Title>
          <p className='me-4'>No.</p>
        </Row.Title>
        <Row.Title>
          <p>Author</p>
        </Row.Title>
        <Row.Title>
          <p>Owner</p>
        </Row.Title>
        <Row.Title>
          <p>Category</p>
        </Row.Title>
        <Row.Title>
          <p>Book Name</p>
        </Row.Title>
        <Row.Title>
          <p>Status</p>
        </Row.Title>
      </Row>
      <div>
        {booksListAdmin.map((book, index) => (
          <Row
            key={index}
            gridClass='grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] border-t border-t-gray-200'
          >
            <Row.Item>
              <span className='me-4'>{index + 1}</span>
            </Row.Item>
            <Row.Item>{book.author}</Row.Item>
            <Row.Item>{book.owner}</Row.Item>
            <Row.Item>{book.category}</Row.Item>
            <Row.Item>{book.bookName}</Row.Item>
            <Row.Item>
              <BookStatusToggle status={book.status} />
            </Row.Item>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default List;
