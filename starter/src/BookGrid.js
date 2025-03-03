import "./App.css";
import Book from "./Book";

const BookGrid = ({ bookList, onChange}) => {
    const books = bookList?.map((b) => (

        <Book
            key={b.id}
            BookKey={b.id}
            BackgroundImage={b.imageLinks ? b.imageLinks.thumbnail : null}
            BookTitle={b.title}
            BookAuthors={b.authors}
            shelf={b.shelf}
            onChange={onChange}
        />
        
    ));

    return (
        <ol className="books-grid">
            {books}
        </ol>
    );
};

export default BookGrid;