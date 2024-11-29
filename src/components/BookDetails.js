import React from "react";

const BookDetails = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
    <p>
      <strong>Author:</strong> {book.author}
    </p>
    <p>
      <strong>Publisher:</strong> {book.publisher}
    </p>
    <p>
      <strong>ISBN:</strong> {book.isbn}
    </p>
    <p>
      <strong>Likes:</strong> {book.likes}
    </p>
    <p>
      <strong>Reviews:</strong> {book.reviews}
    </p>
    <img src={book.coverImage} alt={`${book.title} cover`} />
    <div>
      <h3>Reviews:</h3>
      {(book.reviewsList || []).map((review, index) => (
        <p key={index}>
          <strong>{review.author}:</strong> {review.text}
        </p>
      ))}
    </div>
  </div>
);

export default BookDetails;
