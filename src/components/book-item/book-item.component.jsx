import "./book-item.style.css";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    addToReadingList,
    removeFromReadingList,
} from "../../firebase.utils/firebase.utils";

const BookItem = ({ id, readingList, title, publishedDate, author, image }) => {
    const [user] = useAuthState(auth); // add or remove selected to db
    // console.log(user);
    // console.log(db);
    const [isInReadingArr, setIsInReadingArr] = useState();
    // isInReadingArr.then((res) => console.log(id, " : ", res));

    useEffect(() => {
        readingList.then((res) => setIsInReadingArr(res.includes(id)));
    }, []);

    return (
        <div className="book-item">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(https://covers.openlibrary.org/b/olid/${image}-M.jpg)`,
                }}
            />
            <div className="book-option-list">
                <div
                    className="book-option"
                    onClick={() => {
                        isInReadingArr
                            ? addToReadingList(user, "reading list", id)
                            : removeFromReadingList(user, "reading list", id);
                    }}
                >
                    <span className="book-plus">
                        {isInReadingArr ? "-" : "+"}
                    </span>
                    <span className="book-option-text">
                        {isInReadingArr
                            ? "remove from reading list"
                            : "add to reading list"}
                    </span>
                </div>
                <div className="book-option">
                    <span className="book-plus">+</span>
                    <span className="book-option-text">add to favorites</span>
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
