import { books } from "../data/books";

function BrowseBooks() {
  return (
    <div>
      <h1>Browse Books</h1>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.category}</p>
        </div>
      ))}
    </div>
  );
}

export default BrowseBooks;