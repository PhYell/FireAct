import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import "./sign-in.style.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase.utils/firebase.utils";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent from default submit action

        setEmail("");
        setPassword("");
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        name == "email" ? setEmail(value) : setPassword(value);
    };

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/userpage");
    }, [user, loading]);

    return (
        <div className="sign-in-page">
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="email"
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    label="password"
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton
                        onClick={() =>
                            logInWithEmailAndPassword(email, password)
                        }
                        type="submit"
                    >
                        Submit Form
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
