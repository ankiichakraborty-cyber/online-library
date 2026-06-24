import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Online Library</h1>

      <h2>Book Categories</h2>

      <ul>
        <li>
          <Link to="/books/Fiction">Fiction</Link>
        </li>

        <li>
          <Link to="/books/Non-Fiction">Non-Fiction</Link>
        </li>

        <li>
          <Link to="/books/Sci-Fi">Sci-Fi</Link>
        </li>
      </ul>

      <h2>Popular Books</h2>

      <div>
        <h3>Harry Potter</h3>
        <Link to="/book/1">View Details</Link>
      </div>

      <div>
        <h3>Atomic Habits</h3>
        <Link to="/book/2">View Details</Link>
      </div>

      <div>
        <h3>Dune</h3>
        <Link to="/book/3">View Details</Link>
      </div>
    </div>
  );
}

export default Home;