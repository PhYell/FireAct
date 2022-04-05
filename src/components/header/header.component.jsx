import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import "./header.style.css";

import { auth, db, logout } from "../../firebase.utils/firebase.utils";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

import SearchBar from "../search-bar/search-bar.component";

const Header = ({ currentUser }) => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    return (
        <header>
            <Link to="/">
                <div className="header-title">
                    <h1>
                        Fire<span>Act</span>
                    </h1>
                    <p className="site-description">book tracker</p>
                </div>
            </Link>
            {/* <SearchBar className="option" /> */}
            <div className="options">
                <Link className="option" to="/search">
                    <Search className="nav-image" />
                </Link>
                {user ? (
                    <Link className="option" to="/userpage">
                        <Home className="nav-image" />
                    </Link>
                ) : null}
                {user ? (
                    <div className="option" onClick={logout}>
                        LOG OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        LOG IN
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
