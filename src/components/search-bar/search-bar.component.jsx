import { useEffect, useState } from "react";

import "./search-bar.style.css";

import { ReactComponent as Search } from "../../assets/search.svg";

import { auth, db } from "../../firebase.utils/firebase.utils";

import SearchResult from "../search-result/search-result.component";
import SearchBox from "../search-box/search-box.component";

let lastChanged = null;

const SearchBar = ({ onSearchChange, onFocusChange, onBlurChange }) => {
    return (
        <div className="search-bar-holder centered panel">
            <SearchBox
                onSearchChange={onSearchChange}
                className="user-search-bar"
                onFocusChange={onFocusChange}
                onBlurChange={onBlurChange}
            />
            <Search className="search-icon" />
        </div>
    );
};

export default SearchBar;
