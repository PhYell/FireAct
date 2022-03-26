import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import "./userpage.style.css";

import { auth, db } from "../../firebase.utils/firebase.utils";
import { query, collection, getDocs, where } from "firebase/firestore";

const UserPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
};

export default UserPage;
