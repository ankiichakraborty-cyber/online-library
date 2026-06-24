function AddBook() {
  return (
    <div>
      <h1>Add New Book</h1>

      <form>
        <input
          type="text"
          placeholder="Book Title"
        />
        <br /><br />

        <input
          type="text"
          placeholder="Author"
        />
        <br /><br />

        <select>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Sci-Fi</option>
        </select>
        <br /><br />

        <textarea
          placeholder="Description"
        ></textarea>
        <br /><br />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;