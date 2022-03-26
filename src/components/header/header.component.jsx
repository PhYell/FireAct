import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "./header.style.css";

import { auth, db, logout } from "../../firebase.utils/firebase.utils";
import { ReactComponent as LogOut } from "../../assets/logout.svg";
import { ReactComponent as Home } from "../../assets/home.svg";

const Header = ({ currentUser }) => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    // const fetchUserName = async () => {
    //     try {
    //         const q = query(
    //             collection(db, "users"),
    //             where("uid", "==", user?.uid)
    //         );
    //         const doc = await getDocs(q);
    //         const data = doc.docs[0].data();
    //         setName(data.name);
    //     } catch (err) {
    //         console.error(err);
    //         alert("An error occured while fetching user data");
    //     }
    // };

    // useEffect(() => {
    //     if (loading) return;
    //     if (!user) return navigate("/");
    //     fetchUserName();
    // }, [user, loading]);

    return (
        <header>
            <Link to="/">
                <h1 className="header-title">
                    Fire<span>Act</span>
                </h1>
            </Link>
            <div className="options">
                <Link className="option" to="/">
                    Link
                </Link>
                <Link className="option" to="/">
                    Link
                </Link>
                {user ? (
                    <Link className="option" to="/userpage">
                        <Home className="nav-image" />
                    </Link>
                ) : null}
                {user ? (
                    <div className="option" onClick={logout}>
                        <LogOut className="nav-image" />
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
