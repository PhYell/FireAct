import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import UserPage from "./pages/userpage/userpage.component";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        console.log("current user : ", currentUser);
    }, [currentUser]);

    return (
        <div className="App">
            <Header currentUser={currentUser} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/userpage" element={<UserPage />} />
                <Route path="/signin" element={<SignInAndSignUp />} />
            </Routes>
        </div>
    );
};

export default App;
