import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
// Home page displaying welcome message and categories
function Home() {
  const books = useSelector((state) => state.books);

  return (
    <div>

      <h1>Welcome to Online Library</h1>

      <h2>Categories</h2>

      <ul>
        <li>Fiction</li>
        <li>Non-Fiction</li>
        <li>Sci-Fi</li>
      </ul>

      <h2>Popular Books</h2>

      <div className="grid">
        {books.slice(0, 3).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}

export default Home;