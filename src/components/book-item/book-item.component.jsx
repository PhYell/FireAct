import "./book-item.style.css";

const BookItem = ({ id, title, publishedDate, author, image }) => {
    return (
        <div className="book-item">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(https://covers.openlibrary.org/b/olid/${image}-M.jpg)`,
                }}
            />
            <div className="book-option-list">
                <div>
                    +<span className="book-option">add to reading list</span>
                </div>
                <div>
                    +<span className="book-option">add to favorites</span>
                </div>
            </div>
            <div className="content">
                <h2 className="book-title">{title}</h2>
                <div className="book-subtitle">
                    <h3 className="book=author">{author}</h3>
                    <p className="book-date">{publishedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default BookItem;
