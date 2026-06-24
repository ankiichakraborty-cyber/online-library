import { useParams } from "react-router-dom";
import { books } from "../data/books";

function BookDetails() {
  const { id } = useParams();

  const book = books.find(
    (book) => book.id === parseInt(id)
  );

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>Category: {book.category}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
    </div>
  );
}

export default BookDetails;