import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import "./userpage.style.css";

import { auth, getReadingList } from "../../firebase.utils/firebase.utils";

import BookItem from "../../components/book-item/book-item.component";

const UserPage = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [readingArr, setReadingArr] = useState([]);

    useEffect(() => {
        if (user) {
            getReadingList(user)
                .then((res) => setReadingArr(res))
                .finally(console.log(readingArr));
        } else {
            console.log("no user");
        }
    }, [user]);

    const navigate = useNavigate();

    if (!user) navigate("/");

    return (
        <main className="userPage">
            <h2 className="greeting panel centered">
                you are signed in as{" "}
                <span className="user-name">{user?.displayName}</span>
            </h2>
            <div className="book-search-panel panel centered">
                {readingArr.map((arrItem) => (
                    <p key={arrItem}>{arrItem}</p>
                ))}
            </div>
        </main>
    );
};

export default UserPage;
