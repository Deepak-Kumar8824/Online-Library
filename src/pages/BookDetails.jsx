import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id === Number(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div>

      <h1>{book.title}</h1>

      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.description}</p>
      <p><b>Rating:</b> ⭐ {book.rating}</p>

      <Link to="/browse">Back to Browse</Link>

    </div>
  );
}

export default BookDetails;