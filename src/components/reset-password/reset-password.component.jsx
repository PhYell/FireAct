import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./reset-password.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, sendPasswordReset } from "../../firebase.utils/firebase.utils";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent from default submit action

        setEmail("");
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setEmail(value);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/userpage");
    }, [user, loading]);

    return (
        <div className="reset-password">
            <form action="">
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    label="name"
                    handleChange={handleChange}
                    required
                />
                <CustomButton
                    onClick={() => sendPasswordReset(email)}
                    type="submit"
                >
                    Reset Password
                </CustomButton>
            </form>
        </div>
    );
};

export default ResetPassword;
