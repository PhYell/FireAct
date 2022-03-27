import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./search-result.style.css";

import SearchBarBook from "../search-bar-book/search-bar-book.component";

const SearchResult = ({ books }) => {
    const navigate = useNavigate();

    return (
        <div className="search-result-panel">
            <div
                className="link-to-full-search-page"
                onClick={() => navigate("./search", { replace: true })}
            >
                full search page
            </div>
            {books.map((book) => (
                <SearchBarBook
                    key={book.key}
                    id={book.key}
                    title={book.title}
                    publishedDate={book.first_publish_year}
                    author={book.author_name}
                    image={book.cover_edition_key}
                />
            ))}
        </div>
    );
};

export default SearchResult;
