import React, { useState, useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector";
import SeedGenerator from "./components/SeedGenerator";
import LikesSlider from "./components/LikesSlider";
import ReviewsInput from "./components/ReviewsInput";
import BookDetails from "./components/BookDetails";
import InfiniteScroll from "react-infinite-scroller";
import { getLocalizedFaker } from "./utils/localeFallback";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("en_US");
  const [seed, setSeed] = useState(12345);
  const [likes, setLikes] = useState(5);
  const [reviews, setReviews] = useState(5);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    generateBooks(true);
    setPage(0);
  }, [language, seed, likes, reviews]);

  const generateBooks = (reset = false) => {
    const faker = getLocalizedFaker(language);
    faker.seed(seed + page);

    // If resetting, start with an empty book list and set page to 0
    let startIndex = reset ? 1 : books.length + 1;

    const newBooks = Array.from({ length: 20 }, (_, index) => ({
      index: startIndex + index,
      isbn: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      author: faker.name.findName(),
      publisher: faker.company.companyName(),
      likes: faker.datatype.float({ min: 0, max: 10 }).toFixed(1),
      reviews: faker.datatype.float({ min: 0, max: 10 }).toFixed(1),
      coverImage: `https://via.placeholder.com/150?text=${faker.commerce
        .productName()
        .replace(/\s/g, "+")}`,
      reviewsList:
        Array.from(
          { length: Math.round(faker.datatype.float({ min: 0, max: 10 })) },
          () => ({
            author: faker.name.findName(),
            text: faker.lorem.sentence(),
          })
        ) || [],
    }));

    setBooks((prevBooks) => (reset ? newBooks : [...prevBooks, ...newBooks]));
    setHasMore(newBooks.length > 0);
    setPage((prevPage) => prevPage + 1);
  };

  const loadMoreBooks = () => {
    generateBooks();
  };

  return (
    <div className="container">
      <h1>Bookstore App</h1>
      <div className="selector">
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      <div className="selector">
        <SeedGenerator seed={seed} setSeed={setSeed} />
      </div>
      <div className="slider">
        <LikesSlider likes={likes} setLikes={setLikes} />
      </div>
      <div className="input">
        <ReviewsInput reviews={reviews} setReviews={setReviews} />
      </div>
      {selectedBook && (
        <div className="book-details">
          <BookDetails book={selectedBook} />
        </div>
      )}
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreBooks}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.isbn} onClick={() => setSelectedBook(book)}>
                <td>{book.index}</td>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default App;
