import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Online Library</h1>

      <h2>Book Categories</h2>

      <div className="categories">
        <Link to="/books/Fiction" className="category-card">
          📖 Fiction
        </Link>

        <Link to="/books/Non-Fiction" className="category-card">
          📘 Non-Fiction
        </Link>

        <Link to="/books/Sci-Fi" className="category-card">
          🚀 Sci-Fi
        </Link>
      </div>

      <h2>Popular Books</h2>

      <div className="books-container">
        <div className="book-card">
          <h3>Harry Potter</h3>
          <p>Author: J.K. Rowling</p>
          <Link to="/book/1">View Details</Link>
        </div>

        <div className="book-card">
          <h3>Atomic Habits</h3>
          <p>Author: James Clear</p>
          <Link to="/book/2">View Details</Link>
        </div>

        <div className="book-card">
          <h3>Dune</h3>
          <p>Author: Frank Herbert</p>
          <Link to="/book/3">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;