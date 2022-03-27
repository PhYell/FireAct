import { Link } from "react-router-dom";
import { useState } from "react";

import "./search-result.style.css";

import SearchBarBook from "../search-bar-book/search-bar-book.component";

const SearchResult = ({ books }) => {
    return (
        <div className="search-result-panel">
            <Link className="link-to-full-search-page" to="/">
                full search page
            </Link>
            {books.map((book) => (
                <SearchBarBook
                    key={book.key}
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
