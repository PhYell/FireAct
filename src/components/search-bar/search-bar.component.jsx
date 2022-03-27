import { useEffect, useState } from "react";

import "./search-bar.style.css";

import { ReactComponent as Search } from "../../assets/search.svg";

import { auth, db } from "../../firebase.utils/firebase.utils";

import SearchResult from "../search-result/search-result.component";
import SearchBox from "../search-box/search-box.component";

const SearchBar = () => {
    const [hasFocus, setFocus] = useState(false);
    const [searchValue, setSearchValue] = useState();
    const [books, setBooks] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const baseAPI = "http://openlibrary.org/search.json?limit=5&q=";

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const onFocusChange = (event) => {
        setFocus(true);
    };
    const onBlurChange = () => {
        setFocus(false);
    };

    useEffect(() => {
        if (searchValue !== null && searchValue !== "")
            fetch(baseAPI + searchValue)
                .then((res) => res.json())
                .then((data) => setBooks(data))
                .catch((err) => {
                    setError(err.message);
                    setBooks(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        else {
            fetch(baseAPI + searchValue)
                .then((res) => res.json())
                .then((data) => setBooks(data))
                .catch((err) => {
                    setError(err.message);
                    setBooks(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [searchValue]);

    return (
        <div className="search-bar-holder">
            <SearchBox
                onSearchChange={onSearchChange}
                className="user-search-bar"
                onFocusChange={onFocusChange}
                onBlurChange={onBlurChange}
            />
            <Search className="search-icon" />
            {hasFocus ? !loading && <SearchResult books={books?.docs} /> : null}
        </div>
    );
};

export default SearchBar;