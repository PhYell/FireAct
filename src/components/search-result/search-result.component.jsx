import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth, getReadingList } from "../../firebase.utils/firebase.utils";

import "./search-result.style.css";

// import SearchBarBook from "../search-bar-book/search-bar-book.component";
import BookItem from "../book-item/book-item.component";

const SearchResult = ({ books }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    // getReadingList(user);

    return (
        <div className="book-search-panel panel centered">
            {books.map((book) => (
                <BookItem
                    key={book.key}
                    id={book.key}
                    readingList={getReadingList(user)}
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
