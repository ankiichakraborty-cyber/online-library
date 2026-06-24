import { useParams, Link } from "react-router-dom";
import books from "../data/books";

function BookDetails() {
  const { id } = useParams();

  const book = books.find(
    (book) => book.id === Number(id)
  );

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div>
      <h1>{book.title}</h1>

      <h3>Author: {book.author}</h3>

      <p>{book.description}</p>

      <h4>Rating: ⭐ {book.rating}</h4>

      <Link to="/browse">
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;