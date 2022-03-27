import "./search-box.style.css";

function SearchBox(props) {
    return (
        <input
            className="user-search-bar"
            type="search"
            onChange={props.onSearchChange}
            onFocus={props.onFocusChange}
            onBlur={props.onBlurChange}
        />
    );
}

export default SearchBox;
