import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import "./userpage.style.css";

import { auth, db } from "../../firebase.utils/firebase.utils";
import { query, collection, getDocs, where } from "firebase/firestore";

const UserPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    if (!user) navigate("/");

    return (
        <main className="userPage panel centered">
            <h2 className="greeting">
                you are signed in as{" "}
                <span className="user-name">{user?.displayName}</span>
            </h2>
        </main>
    );
};

export default UserPage;
