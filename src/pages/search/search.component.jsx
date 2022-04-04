import { useEffect, useState } from "react";

import SearchBar from "../../components/search-bar/search-bar.component";
import SearchResult from "../../components/search-result/search-result.component";

const Search = () => {
    const [hasFocus, setFocus] = useState(false);
    const [searchValue, setSearchValue] = useState();
    const [debouncedSearchValue, setDebouncedSearchValue] =
        useState(searchValue);
    const [books, setBooks] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const baseAPI = "http://openlibrary.org/search.json?limit=5&q=";

    const onSearchChange = (event) => {
        setDebouncedSearchValue(event.target.value);
    };

    const onFocusChange = () => {
        setFocus(true);
    };
    const onBlurChange = () => {
        setTimeout(() => {
            setFocus(false);
        }, 300);
    };

    useEffect(() => {
        const timer = setTimeout(
            () => setSearchValue(debouncedSearchValue),
            1000
        );
        return () => clearTimeout(timer);
    }, [debouncedSearchValue]);

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
            setSearchValue(null);
        }
    }, [searchValue]);

    return (
        <>
            <SearchBar
                onSearchChange={onSearchChange}
                onFocusChange={onFocusChange}
                onBlurChange={onBlurChange}
            />
            {searchValue && !loading && <SearchResult books={books?.docs} />}
        </>
    );
};

export default Search;
