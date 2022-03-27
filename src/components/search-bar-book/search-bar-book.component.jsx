import { useNavigate } from "react-router-dom";

import "./search-bar-book.style.css";

const SearchBarBook = ({ id, title, publishedDate, image, author }) => {
    const navigate = useNavigate();

    return (
        <div
            className="search-bar-book"
            onClick={() => navigate(`./bookpage${id}`, { replace: true })}
        >
            <h2 className="search-bar-title">{title ? title : ""}</h2>
            <div className="search-bar-box-text">
                <p className="search-bar-date">
                    {publishedDate ? publishedDate : ""}
                </p>
                <p className="search-bar-date">{author ? author : ""}</p>
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
