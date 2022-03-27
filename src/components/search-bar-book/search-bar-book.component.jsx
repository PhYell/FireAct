import "./search-bar-book.style.css";

const SearchBarBook = ({ id, title, publishedDate, image, author }) => {
    return (
        <div className="search-bar-book">
            <h2 className="search-bar-title">{title ? title : null}</h2>
            <div className="search-bar-box-text">
                <p className="search-bar-date">
                    {publishedDate ? publishedDate : null}
                </p>
                <p className="search-bar-date">{author ? author : null}</p>
            </div>

            {/* <img
                className="search-bar-image"
                src={`https://covers.openlibrary.org/b/olid/${image}-M.jpg`}
                alt="book cover"
            /> */}
        </div>
    );
};

export default SearchBarBook;
