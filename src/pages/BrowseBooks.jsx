import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const books = useSelector((state) => state.books);
  const { category } = useParams();

  const [search, setSearch] = useState("");

  let filteredBooks = books;

  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }

  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Browse Books</h1>

      <input
        placeholder="Search by title or author"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}

export default BrowseBooks;