import "./book-item.style.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.utils/firebase.utils";

const BookItem = ({ id, title, publishedDate, author, image }) => {
    const [user] = useAuthState(auth); // add or remove selected to db
    // console.log(user);
    // console.log(db);
    const addToDb = () => {
        console.log(`adding book with id ${id} to db(no)`);
    };

    return (
        <div className="book-item">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(https://covers.openlibrary.org/b/olid/${image}-M.jpg)`,
                }}
            />
            <div className="book-option-list">
                <div className="book-option" onClick={addToDb}>
                    <span className="book-plus">+</span>
                    <span className="book-option-text">
                        add to reading list
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
